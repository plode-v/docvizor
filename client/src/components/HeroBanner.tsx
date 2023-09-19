import Link from 'next/link'
import React from 'react'
import { auth } from "@clerk/nextjs";
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
<div className='h-[calc(100vh-90px)] flex items-center justify-around flex-col'>
      <div className='text-[#f7f7f7] text-center'>
        <h1 className='font-[600] sm:text-[4rem] text-[2.5rem]'>DocVizor</h1>
        <p className='font-[500] capitalize sm:text-[2rem] text-[1.25rem]'>let your documents work for you</p>
      </div>
      <div>
        <Link href='#about-us'>
          <button className='bg-purple-500 sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] rounded-full text-[#fafafa] sm:text-[2rem] text-[1.5rem] items-center justify-center flex hover:translate-y-1 duration-300 hover:duration-200'>
            <MdExpandMore />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner