// //api/create-chat function
import { database } from "@/lib/database";
import { chats } from "@/lib/database/schema";
import { loadS3ToPinecone } from "@/lib/pinecone";
import { getS3Url } from "@/lib/s3";
import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

export const POST = async (req: Request, res: Response) => {

    const { userId } = auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized", status: 401 })
    }

    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name)
        await loadS3ToPinecone(file_key);
        const chat_id = await database.insert(chats).values({
            userId,
            fielKey: file_key,
            pdfName: file_name!,
            pdfUrl: getS3Url(file_key!)
        } as any).returning({ insertedId: chats.id })

        console.log(chat_id[0].insertedId)
        return NextResponse.json({ chat_id: chat_id[0].insertedId})

    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Internal Erorr" }, { status: 500 });
    }
}