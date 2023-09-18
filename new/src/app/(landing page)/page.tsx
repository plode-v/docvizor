import React from 'react'
import Sidebar from "@/components/Sidebar"
import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'

const page = () => {

  return (
    <div className='min-h-screen max-w-screen bg-slate-900'>
      <Sidebar /> 
      <div className='ml-[5rem]'>
        <Navbar />
        <HeroBanner />
       </div>
    </div>
  )
}

export default page