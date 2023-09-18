import React from 'react'
import { auth, UserButton } from "@clerk/nextjs";
import Link from 'next/link';

const Navbar = () => {

    const { userId } = auth();

  return (
    <div className='w-full h-[90px] flex items-center justify-end gap-5 pr-10'>
        <Link href='#about-us' className='bg-slate-600 h-[50px] px-5 flex rounded-full text-white'>
            <button>Explore</button>
        </Link>
        {
            userId ? (
                <div className='flex items-center gap-5'>
                    <Link href='dashboard' className='flex bg-violet-500 h-[50px] px-5 rounded-full text-white'>
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
  )
}

export default Navbar