'use client'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'

const HeroBanner = () => {

  const arr: string[] = [
    'DocVizor',
    "instant analysis",
    "zero hassle",
    'seamless scanning',
    'interactive insights'
  ]
    
  return (
    <div className='bg-blue-50 h-screen w-full relative'>

      {/* navbar */}
      <div className=' top-5 right-5 absolute'>
        <div className='flex gap-5'>
          <Link href="#about-us">
            <button className='h-[50px] w-[120px] bg-blue-200 border-[1px] border-blue-200 rounded-full text-black font-[500] text-[16px] hover:bg-blue-300 hover:border-blue-400 hover:border-[1px] duration-150'>Explore</button>
          </Link>
          <Link href="/sign-in">
            <button className='h-[50px] w-[140px] bg-blue-600 rounded-full text-[#FAFAFA] font-[600] text-[18px] hover:bg-blue-600/90 duration-150'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner