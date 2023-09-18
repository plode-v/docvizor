import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='h-[calc(100vh-90px)] flex items-center justify-around flex-col'>
      <div className='text-[#f7f7f7] text-center'>
        <h1 className='font-[600] text-[4rem]'>DocVizor</h1>
        <p className='font-[500] capitalize text-[2rem]'>let your documents work for you</p>
      </div>
      <div>
        <Link href='#about-us'>
          <button className='bg-slate-600 w-[80px] h-[80px] rounded-full text-white'>explore</button>
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner