'use client'
import React, { useState } from 'react'
import HeroBanner from '@/components/HeroBanner'
import AboutUs from '@/components/AboutUs'

const Homepage = () => {
  return (
    // TODO: change background color later
    <div className='m-0 flex flex-col min-h-screen max-w-screen'>
      <HeroBanner />
      <AboutUs />
    </div>
  )
}

export default Homepage