import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { auth, UserButton } from '@clerk/nextjs'

const HomeNavbar = () => {

  const { userId } = auth();

  return (
    <div className='bg-slate-800 h-[90px] w-full flex items-center justify-end pr-10 gap-5'>
      <Link href="#about-us">
        <Button className='rounded-full bg-slate-600 text-[16px] hover:bg-slate-500'>Explore</Button>
      </Link>
      {userId ? (
        <>
          <Link href='dashboard'>
            <Button className='rounded-full bg-violet-500/80 text-[16px] hover:bg-violet-500'>Dashboard</Button>
          </Link>
          <UserButton afterSignOutUrl='/' />
        </>
      ) : (
        <>
          <Link href="sign-in">
            <Button className='rounded-full bg-violet-500/80 text-[16px] hover:bg-violet-500'>Get Started</Button>
          </Link>
        </>
      )}
    </div>
  )
}

export default HomeNavbar