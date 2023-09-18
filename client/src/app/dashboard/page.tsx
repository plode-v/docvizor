'use client'
import React from 'react'
import FileUpload from '@/components/FileUpload'
import SideBar from '@/components/SideBar'
let pdf: string[] = []

const Dashboard = () => {
  return (
    <div className='sm:grid sm:grid-cols-5 h-screen'>

      {/* chat history bar */}
      <SideBar />

      {/* chat section */}
      <div className='sm:col-span-4 col-span-full h-full border-black border-2'>
        <div className='block h-full w-full bg-gradient-to-br from-blue-50 to-blue-200'>
          <div className='h-[50px] w-full border-2 sm:hidden block'>
            top section includes:
              {/* - view uploaded PDF button
              - burger button to view all chat 
                - all chat history
                - settings
                - upgrade to pro */}
          </div>
          {pdf.length > 0 ? (
            <div>

            </div>
          ) : (
            <div className='flex items-center justify-center w-full h-[calc(100%-50px)]'>
              <FileUpload />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard