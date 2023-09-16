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
    <div className='bg-blue-50 h-screen w-full relative lg:pl-[70px]'>

      {/* navbar */}
      <div className='flex items-center justify-between lg:justify-end w-full p-6'>
        {/* TODO: change logo */}
        <div className='lg:hidden'>
          Logo
        </div>
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
      <div className='flex flex-col h-full w-full justify-evenly items-center sm:pt-0 3xl:pt-[150px]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-[800] md:text-[4.5rem] text-[2rem] capitalize leading-none'>DocVizor</h1>
          <h1 className='font-[500] md:text-[2.25rem] text-[1rem] capitalize'>let your documents work for you</h1>
          <Link href="/sign-in">
            <button className='sm:mt-5 mt-3 bg-blue-600 hover:bg-blue-600/90 duration-100 sm:px-7 px-3 sm:py-3 py-2 rounded-full text-[#f7f7f7] font-[700] sm:text-[1rem] text-[0.8rem]'>Get Started</button>
          </Link>

        </div>
        <div className='flex'>
          <Link href="#about-us">
            <button className='sm:text-[3rem] text-[2rem] mt-10 lg:mt-0 bg-purple-300 rounded-full hover:translate-y-1 duration-200'>
              <MdExpandMore />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner