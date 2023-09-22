import React from 'react'
import ChatNavbar from './ChatNavbar'
import FileUpload from './FileUpload'

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