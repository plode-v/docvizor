import Link from 'next/link'
import React from 'react'
import { ChevronDown } from 'lucide-react'

const HeroBanner = () => {
  return (
    <div className='bg-slate-800 w-full h-[calc(100vh-90px)] flex flex-col justify-around items-center'>
        <div className='text-[#F7F7F7] text-center'>
            <h1 className='font-[700] sm:text-[4rem] text-[1.5rem]'>DocVizor</h1>
            <p className='capitalize text-[2rem] font-[500]'>let your documents work for you</p>
        </div>
        <div>
            <Link href="#about-us" className='bg-violet-500 h-[60px] w-[60px] rounded-full flex items-center justify-center hover:translate-y-1 duration-100 hover:duration-200'>
                <button>
                    <ChevronDown className='h-[30px] w-[30px] text-[#f7f7f7]' />
                </button>
            </Link>
        </div>
    </div>
  )
}

export default HeroBanner