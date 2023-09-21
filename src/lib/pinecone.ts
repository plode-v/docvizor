import { Pinecone, Vector, utils as pineconeUtils } from "@pinecone-database/pinecone"
import { downloadFromS3 } from "./s3Server";

// help id the embedding within pinecone
import md5 from "md5";

// Load pdf from fs path
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'

// split texts into smaller chunks
import { Document, RecursiveCharacterTextSplitter } from "@pinecone-database/doc-splitter"
import { getEmbedding } from "./embedding";
import { convertToAscii } from "./utils";
import { VectorOperationsApi } from "@pinecone-database/pinecone/dist/pinecone-generated-ts-fetch";

export const getPineconeClient = async () => {
    const pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY!,
        environment: process.env.PINECONE_ENVIRONMENT!
    })
    return pinecone;
}

type PDFFile = {
    pageContent: string,
    metadata: {
        loc: { pageNumber: number}
    }
}

export const loadS3ToPinecone = async (fileKey: string) => {
    // download pdf and read
    console.log("downloading S3 into file system")
    const file_name = await downloadFromS3(fileKey);
    if (!file_name) {
        throw new Error("Could not download from S3");
    }
    const loader = new PDFLoader(file_name);
    const pages = await loader.load() as PDFFile[]
    console.log(pages);

    // split and segment texts into smaller chunks
    // More efficient for the program to read
    // Example: At first there could be Array of 13 pages. Then, after splitting pages, there could be Array(100) pages.
    const documents = await Promise.all(pages.map(page => prepareDocument(page)));

    // Vectorize and embed individual documents
    // document.flat = flatten the document first
    const vectors = await Promise.all(documents.flat().map((doc) => embedDocument(doc)));

    // upload to pinecone
    const client = await getPineconeClient();
    const pineconeIndex = client.Index('docvizor')


    console.log("uploading vectors into pinecone index")
    const nameSpace = convertToAscii(fileKey) // if does not return in ascii, will return error
    pineconeUtils.chunkedUpsert(pineconeIndex as any, vectors, nameSpace, 10) // helps update and push the vectors into pinecone index

    return documents[0]
}

// This function does the text embedding and return vectorized doc
const embedDocument = async (doc: Document) => {
    try {
        const embedding = await getEmbedding(doc.pageContent)
        const hash = md5(doc.pageContent);

        return {
            id: hash,
            values: embedding,
            metadata: {
                text: doc.metadata.text,
                pageNumber: doc.metadata.pageNumber
            }
        } as Vector
    } catch (error) {
        console.log("error embedding document", error)
        throw error;
    }
}


// text might be too long to store into pinecone, this function helps make the texts shorter and easier to store as a vector-based data
export const truncateStringByBytes = (string: string, bytes: number) => {
    const encoder = new TextEncoder()
    return new TextDecoder('utf-8').decode(encoder.encode(string).slice(0, bytes));
}

const prepareDocument = async (page:PDFFile) => {
    let { pageContent, metadata } = page
    pageContent = pageContent.replace(/\n/g, "")
    // split the docs
    const splitter = new RecursiveCharacterTextSplitter();
    const docs = await splitter.splitDocuments([
        new Document({
            pageContent,
            metadata: {
                pageNumber: metadata.loc.pageNumber,
                // Pinecone only accepts no more than 36,000 bytes
                text: truncateStringByBytes(pageContent, 36000)
            }
        })
    ])
    // from one single page, turns into multiple smaller paragraphs
    return docs;
}