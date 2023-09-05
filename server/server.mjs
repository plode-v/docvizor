import OpenAI from "openai";
import { configDotenv } from "dotenv";

configDotenv();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const chatCompletion = async () => {
    const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            { "role": 'system', 'content': 'You are a helpful assistant with GPT-4 model integrated.'},
            { "role": "user", "content": "Tell me who you are and which GPT model are you intergrating. If you are not GPT-4, then why did the model on the backend says otherwise?"}
        ]
    })

    console.log(completion.choices[0].message)
}

chatCompletion();