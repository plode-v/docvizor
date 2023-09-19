import ChatSidebar from '@/components/ChatSidebar'
import InnerNavbar from '@/components/InnerNavbar'
import MainChat from '@/components/MainChat'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const page = () => {
  return (
    <div className='sm:grid sm:grid-cols-5 h-screen'>

      {/* chat history bar */}
      <ChatSidebar />
      <div className='sm:grid sm:col-span-4 col-span-full'>
        <InnerNavbar />
        <MainChat />
        <Toaster />
      </div>

      {/* chat section */}

    </div>
  )
}

export default page