import { OpenAI } from "openai"
import { configDotenv } from "dotenv";

configDotenv();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const chatCompletion = async () => {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system", "content": "You are a document analyzer. You will help analyze any documents out there with the help of chatGPT-3.5-turbo model."
            },
        ]
    });
    
    console.log(completion.choices[0].message);
};

chatCompletion();