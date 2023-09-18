import { db } from "@/lib/database"
import { chats } from "@/lib/database/schema"
import { downloadS3 } from "@/lib/downloadS3"
import { getS3Url } from "@/lib/s3"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

// /api/create-chat
export async function POST(req: Request, res: Response) {
    const { userId } = auth();
    if (!userId) {
        return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name)
        const pages = await downloadS3(file_key);
        return NextResponse.json({ pages });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
