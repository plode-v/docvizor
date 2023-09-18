import { downloadFromS3 } from "./s3Server"
import {PDFLoader } from "langchain/document_loaders/fs/pdf"

export async function downloadS3(fileKey: string) {
    // 1. download pdf from s3
    console.log("downloading S2 into file system")
    const file_name = await downloadFromS3(fileKey);
    if (!file_name) {
        throw new Error("could not download from S3");
    }
    const loader = new PDFLoader(file_name);
    const pages =  await loader.load();
    console.log(pages);
    return pages;
}