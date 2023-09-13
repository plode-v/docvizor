import React from 'react'
import { SignIn, SignInButton, SignUpButton } from '@clerk/nextjs'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-[90%] z-20 fixed top-[20px] h-[70px] bg-blue-700/90 rounded-md left-1/2 -translate-x-1/2'>
        <div className='w-full h-full flex justify-between items-center px-5'>
          <div>
            logo
          </div>
          <div className='h-max w-max gap-5 flex'>
            <Link href="/sign-in">
              <button className='px-4 py-2 rounded-md bg-blue-400 text-white font-[600]'>Get Started</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar