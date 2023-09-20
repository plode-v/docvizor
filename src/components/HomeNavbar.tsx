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
        <div className='pr-10 flex h-[50px] sm:gap-4 gap-3'>
            <Link href='#about-us' className='bg-neutral-500/90 flex items-center justify-center px-3 rounded-full text-[#f7f7f7] border-neutral-500 border-[1px] hover:border-neutral-400 duration-100 hover:duration-100'>
                <button>Explore</button>
            </Link>
            {userId ? (
                <div className='flex'>
                    <Link href="dashboard" className='bg-violet-500/90 text-white rounded-full items-center justify-center flex px-3 hover:bg-violet-500'>
                        <button>Dashboard</button>
                        <UserButton afterSignOutUrl='/' />
                    </Link>
                </div>
            ) : (
                <Link href="sign-in" className='bg-violet-500/90 text-white rounded-full items-center justify-center flex px-3 hover:bg-violet-500 duration-100'>
                    <button>Get Started</button>
                </Link>
            )}
        </div>
    </div>
  )
}

export default HomeNavbar