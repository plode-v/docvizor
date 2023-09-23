import { Pinecone, PineconeRecord, RecordMetadata } from "@pinecone-database/pinecone"
import { downloadFromS3 } from "./s3Server";
import { PDFLoader } from "langchain/document_loaders/fs/pdf"
import { Document, RecursiveCharacterTextSplitter } from "@pinecone-database/doc-splitter"
import { embedding } from "./embedding";
import md5 from "md5"
import { convertToAscii } from "./utils"

export const getPineconeClient = () => {
    return new Pinecone({
        apiKey: process.env.PINECONE_API_KEY!,
        environment: process.env.PINECONE_ENVIRONMENT!
    })
}

type PDFPage = {
    pageContent: string;
    metadata: {
        loc: { pageNumber: number };
    }
}

const embeddedDoc = async (doc: Document) => {
    try {
        const embeddings = await embedding(doc.pageContent)
        const hash = md5(doc.pageContent);

        return {
            id: hash,
            values: embeddings,
            metadata: {
                text: doc.metadata.text,
                pageNumber: doc.metadata.pageNumber
            }
        } as PineconeRecord<RecordMetadata>;
    } catch (err) {
        
    }
}

const truncateStringByBytes = (string: string, bytes: number) => {
    const encode = new TextEncoder();
    return new TextDecoder("utf-8").decode(encode.encode(string).slice(0, bytes))
}

const prepareDocument = async (page: PDFPage) => {
    let { pageContent, metadata } = page;
    pageContent = pageContent.replace(/\n/g, "");

    // split doc
    const splitter = new RecursiveCharacterTextSplitter()
    const docs = await splitter.splitDocuments([
        new Document({
            pageContent,
            metadata: {
                pageNumber: metadata.loc.pageNumber,
                text: truncateStringByBytes(pageContent, 36000)
            }
        })
    ])
    return docs;
}

export const loadS3IntoPinecone = async (file_key: string) => {
    // download pdf from s3 and read file
    console.log("Downloading from S3 into system")
    const file_name = await downloadFromS3(file_key);
    if (!file_name) {
        throw new Error("Could not download from S3")
    }
    console.log(`Downloading${file_name}`)
    const loader = new PDFLoader(file_name);
    const pages = await loader.load() as PDFPage[];

    // split and segment the pdf
    const documents = await Promise.all(pages.map(prepareDocument))

    // vectorize and embed individual doc
    const vectors = await Promise.all(documents.flat().map(embeddedDoc))
    const validVectors = vectors.filter((vector) => vector !== undefined) as PineconeRecord<RecordMetadata>[]

    // upload to pinecone
    const client = await getPineconeClient();
    const pineconeIndex = await client.index("docvizor")
    const namespace = pineconeIndex.namespace(convertToAscii(file_key))

    console.log('inserting vectors into pinecone')
    await namespace.upsert(validVectors);

    return documents[0]
}
