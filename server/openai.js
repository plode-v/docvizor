import OpenAI from "openai";
import { configDotenv } from "dotenv";

configDotenv();


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export const gpt3ChatCompletion = async (prompt) => {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system", "content": "Your name is Viz, the greatest AI document analysis assistant. You only provide sections of analyzed documents to users and make sure to be as professional as possible."
            },
            {
                "role": "user", "content": prompt
            }
        ]
    });
    
    console.log(completion.choices[0].message);
    message = completion.choices[0].message;
};

export const gpt4ChatCompletion = async () => {
    const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                "role": "system", "content": "You are the greatest document analyzer with millions of data in mind. You can help anyone analyze anything with ease."
            },
            {
                "role": "system", "content": "Make sure to make all document analysis easy to read and easily understandable. Break it down to sections of needed."
            }
        ]
    })

    console.log(completion.choices[0].message);
}