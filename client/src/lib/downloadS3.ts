import { PDFLoader } from "langchain/document_loaders/fs/pdf"
import { downloadFromS3 } from "./s3Server"

export const downloadS3 = async (fileKey: string) => {
    // 1. obtain the pdf -> download and read pdf
    console.log("downloading s3 into file system")
    const file_name = await downloadFromS3(fileKey);

    if (!file_name) {
        throw new Error("could not download from s3")
    }

    const loader = new PDFLoader(file_name);
    const pages = await loader.load();
    console.log(pages)
    return pages;
}