
// const freeVersionChatCompletion = require("../openai")
import { freeVersionChatCompletion } from "../openai";

describe("freeVersionChatCompletion", () => {
    it("should return a response from OpenAI chat", async () => {
        const prompt = [
            { role: "system", content: "User provides initial message"},
            { role: "user", content: "Please analyze this document" }
        ];

        const response = await freeVersionChatCompletion(prompt);

        expect(response).toBeDefined();
        expect(response).toContain("Viz, an ai document analyzer assistant");
        expect(response).toContain("assistant");
    })
})