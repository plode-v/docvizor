import { Pinecone } from "@pinecone-database/pinecone"
import { downloadFromS3 } from "./s3Server";

export const getPineconeClient = async () => {
    const pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY!,
        environment: process.env.PINECONE_ENVIRONMENT!
    })
    return pinecone;
}

export const loadS3ToPinecone = async (fileKey: string) => {
    // download pdf and read
    console.log("downloading S3 into file system")
    const file_name = await downloadFromS3(fileKey);
    
}