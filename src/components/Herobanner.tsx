import React from 'react'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Herobanner = () => {
  return (
    <div className='bg-slate-800 h-[calc(100vh-90px)] w-full flex justify-evenly items-center flex-col'>
        <div className='text-[#f7f7f7] text-center flex flex-col justify-center items-center'>
            <h1 className='text-[4rem] font-[700]'>DocVizor</h1>
            <p className='capitalize font-[500] text-[2rem]'>let your documents work for you</p>
        </div>
        <div className='flex'>
            <Link href="#about-us">
                <Button className='rounded-full h-[70px] w-[70px] bg-violet-500/80 hover:bg-violet-500'>
                    <ChevronDown className='h-full w-full' />
                </Button>
            </Link>
        </div>
    </div>
  )

}
export default Herobanner