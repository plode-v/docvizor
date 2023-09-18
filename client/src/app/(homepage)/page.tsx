import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import AboutUs from '@/components/AboutUs'
import Navbar from '@/components/Navbar'

import { redirect } from '@clerk/nextjs/server'
import { auth } from "@clerk/nextjs";

const Homepage = () => {
const { userId } = auth()

  return (
    // TODO: change background color later
    <div className='m-0 flex flex-col min-h-screen max-w-screen'>
      <Navbar />
      <HeroBanner />
      <AboutUs />
    </div>
  )
}

export default Homepage