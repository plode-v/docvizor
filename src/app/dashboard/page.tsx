'use client'
import React from 'react'
import axios from 'axios';
import ChatSidebar from '@/components/ChatSidebar';
import ChatBox from '@/components/ChatBox';
import { Toaster } from 'react-hot-toast';
import ChatNavbar from '@/components/ChatNavbar';
import FileUpload from '@/components/FileUpload';

const page = () => {

  return (
    <div className='max-w-screen max-h-screen'>
      <ChatNavbar />
      <div className='h-[calc(100vh-90px)] w-full bg-slate-100 flex items-center justify-center'>
        <FileUpload />
      </div>
    </div>
  )
}

export default page