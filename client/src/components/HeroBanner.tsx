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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 1000);

    return () => clearInterval(interval)
  })
    
  return (
    <div className='flex flex-col items-center pb-20 justify-center w-full h-screen bg-blue-50'>
      <div className='md:h-[5rem] h-[2.5rem] relative overflow-hidden w-[800px] leading-none'>
        {arr.map((word, index) => (
          <h1
            key={index}
            className={`md:text-[4.5rem] text-[2.5rem] font-[800] capitalize absolute scroll-text top-0 left-0`}
          >{arr[4]}</h1>
        ))}
      </div>
      <h1 className='md:text-[4.5rem] text-[2.25rem] font-[800] capitalize'></h1>
      <h1 className='capitalize md:text-[2.15rem] text-[1.1rem] text-center font-[700] leading-tight'>let your documents work for you</h1>

      <button className='lg:mt-20 mt-10 bg-violet-500 md:text-[20px] font-[600] text-white px-5 py-3 rounded-full hover:scale-110 duration-100'>Get Started</button>
    </div>
  )
}

export default HeroBanner