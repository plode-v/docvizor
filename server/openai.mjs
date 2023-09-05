import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-4sb5RXe9GUTBfST5HjR5xoty",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const response = await openai.listEngines();