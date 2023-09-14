'use client'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import { MdExpandMore } from "react-icons/md";

const HeroBanner = () => {

  const arr: string[] = [
    'DocVizor',
    "instant analysis",
    "zero hassle",
    'seamless scanning',
    'interactive insights'
  ]
    
  return (
    <div className='bg-blue-50 h-screen w-full relative pl-[70px]'>

      {/* navbar */}
      <div className=' top-6 right-6 absolute'>
        <div className='flex gap-3'>
          <Link href="#about-us">
            <button className='h-[40px] px-6 bg-blue-200 border-[1px] border-blue-200 rounded-full text-black font-[500] text-[0.95rem] hover:bg-blue-300 hover:border-blue-400 hover:border-[1px] duration-150'>Explore</button>
          </Link>
          <Link href="/sign-in">
            <button className='h-[40px] px-4 bg-blue-600 rounded-full text-[#FAFAFA] font-[500] text-[0.95rem] hover:bg-blue-600/90 duration-150'>Get Started</button>
          </Link>
        </div>
      </div>

      {/* TODO: Add some animations in the background */}
      <div className='flex flex-col h-full w-full justify-evenly items-center pt-[150px]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-[800] text-[4.5rem] capitalize leading-none'>DocVizor</h1>
          <h1 className='font-[500] text-[2.25rem] capitalize'>let your documents work for you</h1>
          {/* <Link href="/sign-in">
            <button className='mt-8 bg-blue-600 px-7 py-3 rounded-full text-[#f7f7f7] font-[700]'>Get Started</button>
          </Link> */}

        </div>
        <div className='flex'>
          <Link href="#about-us">
            <button className='text-[3rem] bg-purple-300 rounded-full'>
              <MdExpandMore />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner