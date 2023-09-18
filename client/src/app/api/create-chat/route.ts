// /api/create-chat

import { downloadS3 } from "@/lib/downloadS3";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export const POST = async (req: Request, res: Response) => {

    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name);
        const pages = await downloadS3(file_key);
        return NextResponse.json({ pages });

    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "internal server error" },
            { status: 500 }
        )
    }
}
