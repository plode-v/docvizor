'use client'
import React from 'react'
import axios from 'axios';
import ChatSidebar from '@/components/ChatSidebar';
import ChatBox from '@/components/ChatBox';
import { Toaster } from 'react-hot-toast';

const page = () => {

  return (
    <div className='max-w-screen max-h-screen flex'>
        {/* chat sidebar */}
        <ChatSidebar />

        {/* chatbox */}
        <ChatBox />
        <Toaster />
    </div>
  )
}

export default page