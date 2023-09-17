import { NextApiRequest, NextApiResponse } from "next";
import * as pdfjsLib from 'pdfjs-dist'
import { freeVersionChatCompletion } from "../openai/route";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const pdfBuffer = req.body;

    const pdf = await pdfjsLib.getDocument({ data: pdfBuffer }).promise;
    const numPages = pdf.numPages;

    let fullText = ''

    for (let i = 1; i <= numPages; i++){
        const page = await pdf.getPage(1);
        const textContent = await page.getTextContent();
        const strings = textContent.items.map(item => item).join(' ');
        fullText += strings + ' ';
    }

    const analysisResult = await freeVersionChatCompletion(fullText);

    res.status(200).json({ analysis: analysisResult });
}