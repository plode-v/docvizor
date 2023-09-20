import React from 'react'
import FileUpload from './FileUpload'

const ChatBox = () => {
  return (
    <div className='border h-[calc(100vh-90px)] flex items-center justify-center'>
        <FileUpload />
    </div>
  )
}

export default ChatBox