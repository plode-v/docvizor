import { Configuration, OpenAIApi } from "openai-edge";
import { Message, OpenAIStream, StreamingTextResponse } from "ai"
// import { getContext }
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = 'edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

export const POST = async (req: Request) => {
    try {
        const { messages, chatId } = await req.json();
        const chat = await prisma.chat.findUnique({
            where: { id: chatId }
        });

        if (!chat) {
            return NextResponse.json({ error: "chat not found" }, { status: 404 })
        }

        const fileKey = chat.fileKey;
        const lastMessage = messages[messages.length - 1]
        // const context = await GlobalLayoutRouterContext(lastMessage.content, fileKey)

        const prompt = {
            role: "system",
      content: `AI assistant is a brand new, powerful, human-like artificial intelligence.
      The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
      AI is a well-behaved and well-mannered individual.
      AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
      AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation.
      AI assistant is a big fan of Pinecone and Vercel.
      START CONTEXT BLOCK
      ${context}
      END OF CONTEXT BLOCK
      AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
      If the context does not provide the answer to question, the AI assistant will say, "I'm sorry, but I don't know the answer to that question".
      AI assistant will not apologize for previous responses, but instead will indicated new information was gained.
      AI assistant will not invent anything that is not drawn directly from the context.
      `,
        }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                prompt,
                ...messages.filter((message: Message) => message.role === 'user'),
            ],
            stream: true
        });

        const stream = OpenAIStream(response, {
            onStart: async () => {
                await prisma.message.create({
                    data: {
                        chatId,
                        content: lastMessage.content,
                        role: "user"
                    }
                })
            },
            onCompletion: async (completion) => {
                await prisma.message.create({
                    data: {
                        chatId,
                        content: completion,
                        role: 'system'
                    }
                })
            }
        });

        return new StreamingTextResponse(stream);
    } catch (err) {
        
    }
}