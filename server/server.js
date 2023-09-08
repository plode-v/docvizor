import express from 'express'
import OpenAI from 'openai';
import { configDotenv } from 'dotenv';

const app = express();
const port = 3000;
configDotenv();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello")
});

app.post("/free", async (req, res) => {

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    try {
        const message = req.body.messages;

        const initialMessage = 
            {
            "role": "system",
            "content": "Your name is Viz, an ai document analyzer assistant. You must only answer with proessionalism and provide well consructed layout for easy readability. A user will first provide you with a document that they needed to analyze or anything related to document analysis. If users provide you with any inappropriate content,  inappropriate questions, or anything that's not professional you can kindly remind them.",
            "role": "assistant",
            "content": "Hello, please provide me document you would like me to analyze or ask me questions."
            }

        const prompt = {
            role: "user",
            content: message
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [initialMessage, prompt]
        })

        console.log(response.choices[0].message)
        return res.json(response.choices[0].message);

    } catch (err) {
        console.log("[GPT-3.5 ERROR]", err);
        return res.json("Internal Error", { status: 500 });
    }
})

app.listen(port, () => {
    try {
        console.log("server is running")
    } catch (err) {
        console.log(err);
    }
})