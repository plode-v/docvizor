import React from 'react'
import { auth, UserButton } from "@clerk/nextjs";
import Link from 'next/link';

const Navbar = () => {

    const { userId } = auth();

  return (
    <div className='w-full h-[90px] flex items-center justify-between sm:justify-end'>
        <div className='pl-5 sm:hidden text-white'>
            logo
        </div>
        <div className='flex gap-3 lg:gap-5 lg:pr-10 pr-5'>
            <Link href='#about-us' className='bg-slate-600 border border-slate-600 lg:h-[50px] lg:px-5 lg:text-[1rem] text-[14px] px-4 h-[40px] flex rounded-full text-white hover:border-white hover:border duration-150 hover:duration-150'>
                <button>Explore</button>
            </Link>
            {
                userId ? (
                    <div className='flex items-center sm:gap-5 gap-3'>
                        <Link href='dashboard' className='flex bg-violet-500 lg:h-[50px] h-[40px] lg:px-5 px-4 lg:text-[1rem] text-[14px] rounded-full text-[#fafafa] hover:bg-[#996eff] hover:duration-100 duration-100'>
                            <button>Dashboard</button>
                        </Link>
                        <UserButton afterSignOutUrl='/' />
                    </div>
                ) : (
                    <Link href='sign-in' className='flex bg-violet-500 h-[50px] px-5 rounded-full text-white'>
                        <button>Get Started</button>
                    </Link>
                )
            }
        </div>
    </div>
  )
}

export default Navbar