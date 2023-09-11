import OpenAI from "openai";
import { configDotenv } from "dotenv";

configDotenv();
const openai = new OpenAI({
    apiKey: process.evn.OPENAI_API_KEY
});

export const freeVersionChatCompletion = async ( prompt ) => {

    const initialMessage = {
        "role": "system",
        "content": "Your name is Viz, an ai document analyzer assistant. You must only answer with professionalism and provide well constructed layout for easy readability. User will first provide you with a document that they needed to analyze or anything related to professional paperwork. If users provide you with any inappropriate content, inappropriate question, or anything unrelated to paperwork, documents or not professional, you can kindly remind them.",
        "role": "assistant",
        "content": "Hello, I'm Viz, please provide document you would like me to analyze."
    };

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [initialMessage, prompt]
    });

    const message = response.choices[0].message;

    console.log(message)
    return message;

}