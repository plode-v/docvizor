import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import AboutUs from '@/components/AboutUs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

import { redirect } from '@clerk/nextjs/server'
import { auth } from "@clerk/nextjs";

const Homepage = () => {
const { userId } = auth()

  return (
    // TODO: change background color later
    <div className='min-h-screen max-w-screen'>
      <Sidebar />
      <div className='sm:ml-[5rem] bg-slate-800'>
        <Navbar />
        <HeroBanner />
      </div>
      <div className='sm:ml-[5rem] ml-0'>
        <AboutUs />
      </div>
    </div>
  )
}

export default Homepage