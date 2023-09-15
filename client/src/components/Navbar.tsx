import React from 'react'
import { SignIn, SignInButton, SignUpButton } from '@clerk/nextjs'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='hidden lg:flex justify-center pt-3 fixed h-screen w-[70px] bg-gradient-to-r from-blue-950 to-blue-950/90 z-20'>
      <div className='text-white'>
        {/* FIXME: Change logo */}
        Logo
      </div>
          </div>
  )
}

export default Navbar