'use client'
import React, { useState } from 'react'


const Homepage = () => {

  const arr = ['analysis', 'summarization', 'time']

  return (
    <main className='bg-[#FAFAFA] min-h-screen w-screen border-none m-0 flex justify-center items-center flex-col'>

      <section id='hero-banner' className='h-screen w-screen border-black border-2 flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-col'>

          {/* FIXME: Array of words */}
          <h1 className='font-[700] text-[3rem] capitalize'>DocVizor</h1>
          {/* <h1 className='font-[700] text-[3rem]'>Analysis</h1> */}
          <h1>Time is valuable, let DocVizor help you with your documents.</h1>
        </div>
      </section>

    </main>
  )
}

export default Homepage