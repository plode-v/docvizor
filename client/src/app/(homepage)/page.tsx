import React from 'react'

const Homepage = async () => {
  return (
    <main className='bg-gradient-to-r from-pink-200 to-violet-200 min-h-screen w-screen border-none m-0 flex justify-center items-center flex-col'>

      <section id='hero-banner' className='h-screen w-screen border-black border-2 flex justify-center items-center'>
        <div className='h-3/4 border-black border-2 w-full 2xl:w-3/4 grid grid-cols-3'>
          <div className='col-span-2 border inline-block'>
            <h1 className='font-bold'>
              Revolutionize
            </h1>
            <h1>
              Take the document analysis to the next level
            </h1>
          </div>
          <div className='col-span-1 border-black border-2'>
            blob
          </div>
        </div>

      </section>

    </main>
  )
}

export default Homepage