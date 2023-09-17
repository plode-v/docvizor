import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

export const freeVersionChatCompletion = async (prompt: any): Promise<any> => {
    try {
        const initialMessage = [
            {
                role: "system",
                content: "Your name is Viz. You are a chatbot trained to assist with document analysis. You should maintain a professional demeanor in all interactions."
            },
            {
                role: 'assistant',
                content: "Hello, I'm Viz, please provide document you would like me to analyze."
            }
        ];
    
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [initialMessage, prompt],
            max_tokens: 100,
            temperature: 1
        });
    
        const message = response.choices[0]!.message;
        return message;
    } catch (err) {
        console.error("Error communicating with OpenAI API", err);
        throw new Error("Failed to communicate with OpenAI API");
    }
}