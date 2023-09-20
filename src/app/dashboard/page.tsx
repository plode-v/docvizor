import ChatBox from '@/components/ChatBox'
import ChatsSidebar from '@/components/ChatsSidebar'
import InnerNavbar from '@/components/InnerNavbar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-7 w-screen max-w-screen h-screen overflow-hidden'>
        <ChatsSidebar />
        <div className='border col-span-6'>
            <InnerNavbar />
            <ChatBox />
        </div>
    </div>
  )
}

export default Dashboard