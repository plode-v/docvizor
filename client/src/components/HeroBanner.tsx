'use client'
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
    <div className='bg-blue-50 h-screen w-full grid grid-cols-3'>
      <div className='col-span-2 block pt-[28rem] h-full pl-20'>
        <h1 className='font-[800] md:text-[5rem] text-[2.5rem] leading-none'>DocVizor</h1>
        <h1 className='font-[600] md:text-[2.5rem] capitalize'>let your documents work for you</h1>
      </div>
      <div className='col-span-1 flex border items-center'>
        example
      </div>
    </div>
  )
}

export default HeroBanner