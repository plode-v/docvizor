// /api/create-chat

import { downloadS3 } from "@/lib/downloadS3";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
    const { userId } = auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthoruzed" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name);
        const pages = await downloadS3(file_key);
        return NextResponse.json({ pages });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "Internal Server Error"}, { status: 500 })
    }
}