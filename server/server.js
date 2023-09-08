import express from 'express'
import OpenAI from 'openai';
import { configDotenv } from 'dotenv';
import { freeVersionChatCompletion } from './openai';

const app = express();
const port = 3000;
configDotenv();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/free", async (req, res) => {

    try {
        const message = req.body.messages;
        const response = freeVersionChatCompletion(message);

        console.log(response);
        return res.send(response);

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