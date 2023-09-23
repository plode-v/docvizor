import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import React from 'react'


const prisma = new PrismaClient();

type Props = {
    params: {
        chatId: string;
    }
}

const ChatPage = async ({ params : { chatId } }: Props) => {

    const { userId } = auth();
    if (!userId) {
        return redirect("/sign-in")
    }

    // fetch chats from Prisma
    const _chats = await prisma.chat.findMany({
        where: {
            userId
        }
    });

    if (!_chats || !_chats.some((chat) => chat.id === parseInt(chatId))) {
        return redirect('/')
    }

    const currentChat = _chats.find((chat) => chat.id === parseInt(chatId))
    console.log(currentChat)

  return (
    <div>{currentChat?.pdfUrl}</div>
  )
}

export default ChatPage