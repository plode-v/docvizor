// /api/create-chat

import { PrismaClient } from "@prisma/client"
import { loadS3IntoPinecone } from "@/lib/pinecone"
import { getS3Url } from "@/lib/s3"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export const POST = async (req: Request, res: Response) => {
    const { userId } = auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthenticated"}, { status: 401 })
    }

    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name);
        await loadS3IntoPinecone(file_key);

        // insert into Prisma
        const chat = await prisma.chat.create({
            data: {
                fileKey: file_key,
                pdfName: file_name,
                pdfUrl: getS3Url(file_key),
                userId
            },
            select: {
                id: true
            }
        });

        return NextResponse.json({ chat_id: chat.id }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}