'use client'
import React from 'react'
import FileUpload from './FileUpload'


const MainChat = () => {

  return (
    <div className='sm:col-span-4 col-span-full h-[calc(100vh-90px)]'>
        <div className='h-full w-full bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center'>
            <FileUpload />
        </div>
    </div>
  )
}

export default MainChat