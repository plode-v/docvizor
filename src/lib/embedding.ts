// similar to openai, but with edge functions capability
import { OpenAIApi, Configuration } from 'openai-edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})


const openai = new OpenAIApi(config)

// get pure text into embedding
export const getEmbedding = async (text: string) => {
    try {
        const response = await openai.createEmbedding({
            model: "text-embeddings-ada-002",
            input: text.replace(/\n/g, " ")
        })
        const result = await response.json();
        return result.data[0].embedding as Number[]

    } catch (err) {
        console.log("Error calling openai embedding api", err);
        throw err;   
    }
}