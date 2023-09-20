// //api/create-chat function
import { NextResponse } from "next/server"

export const POST = async (req: Request, res: Response) => {
    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name)
        return NextResponse.json({ file_key, file_name, message: "Hello" })

    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Internal Erorr" }, { status: 500 });
    }
}