import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs"

export const POST = async (req: Request, res: Response) => {
    const { userId } = auth();

    try {
        const response = NextResponse.json({ message: "success"}, { status: 200 });
        console.log(res.status)
        return res.status
    } catch (err) {
        const response =  NextResponse.json({ message: "internal error"}, { status: 500 })
        console.log(res.status);
        return res.status;
    }

}