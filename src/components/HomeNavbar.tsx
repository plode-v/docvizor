'use client'
import Link from 'next/link'
import React from 'react'
import { UserButton, useAuth } from '@clerk/nextjs'

const HomeNavbar = () => {

    const { userId } = useAuth();

  return (
    <div className='h-[90px] w-full bg-slate-800 flex justify-between sm:justify-end items-center'>
        <div className='sm:hidden block'>
            logo
        </div>
        <div className='xl:pr-10 sm:pr-5 pr-3 flex sm:gap-4 gap-1 items-center'>
            <Link href='#about-us' className='sm:h-[50px] h-[40px] sm:text-[16px] text-[14px] bg-neutral-500/90 flex items-center justify-center px-3 rounded-full text-[#f7f7f7] border-neutral-500 border-[1px] hover:border-neutral-400 duration-100 hover:duration-100'>
                <button>Explore</button>
            </Link>
            {userId ? (
                <div className='flex gap-1 sm:gap-3 items-center justify-center'>
                    <Link href="dashboard" className='bg-violet-500/90 h-[40px] sm:h-[50px] text-white rounded-full items-center justify-center flex px-3 hover:bg-violet-500 sm:text-[16px] text-[14px]'>
                        <button>Dashboard</button>
                    </Link>
                    <UserButton afterSignOutUrl='/' />
                </div>
            ) : (
                <Link href="sign-in" className='bg-violet-500/90 text-white rounded-full items-center justify-center flex px-3 hover:bg-violet-500 duration-100 h-[50px]'>
                    <button>Get Started</button>
                </Link>
            )}
        </div>
    </div>
  )
}

export default HomeNavbar