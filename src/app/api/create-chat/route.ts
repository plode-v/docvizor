import { NextResponse } from "next/server";

export const POST = (req: Request, res: Response) => {
    try {
        console.log("hello")
        return NextResponse.json({ message: "hello" }, { status: 200 })
    } catch (err) {
        console.error(err);
        return NextResponse.json({error: "error", err })
    }
}