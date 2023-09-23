import React from 'react'
import ChatNavbar from './ChatNavbar'
import FileUpload from './FileUpload'
import { loadS3IntoSystem } from '@/lib/pinecone'

const ChatBox = () => {
  return (
    <div className='flex-[5]'>
        <ChatNavbar />
        <div className='flex justify-center items-center border h-[calc(100vh-90px)]'>
            <FileUpload />
        </div>
    </div>
  )
}

export default ChatBox