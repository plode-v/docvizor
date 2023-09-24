import ChatBox from "@/components/ChatBox";
import ChatSidebar from "@/components/ChatSidebar";
import prisma from "@/lib/prisma";
// import PDFViewer
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import React from "react"

type Props = {
    params: {
        chatId: string
    }
}

const ChatPage = async ({ params: { chatId } }: Props) => {
    const { userId } = auth();
    if (!userId) {
        return redirect("/sign-in")
    }

    const _chats = await prisma.chat.findMany({
        where: {
            userId
        }
    });

    if (!_chats || _chats.length === 0) {
        return redirect('/dashboard')
    }

    const chatIdAsNumber = parseInt(chatId);
    if (!_chats.some(chat => chat.id === chatIdAsNumber)) {
        return redirect("/dashboard")
    }

    const currentChat = _chats.find(chat => chat.id === chatIdAsNumber);

    return (
        <div className="flex max-h-screen overflow-scroll">

        </div>
    )
}