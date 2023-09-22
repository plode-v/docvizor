// /api/create-chat

import { getS3Url } from "@/lib/s3";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
// import { downloadFromS3 } from ""

export const POST = async (req: Request, res: Response) => {
    const { userId } = auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name);
        return NextResponse.json({ file_key, file_name });
    } catch (err) {
        console.error(err);
        return NextResponse.json(err);
    }
}