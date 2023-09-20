import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const InnerNavbar = () => {
  return (
    <div className='border h-[80px] flex justify-start items-center gap-3 pl-5'>
        {/* TODO: Add pdf viewer */}
        <Button className='bg-violet-500 text-white rounded-full p-5 hover:bg-violet-500/90'>View PDF</Button>
        <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default InnerNavbar