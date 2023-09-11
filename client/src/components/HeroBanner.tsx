import React from 'react'

const HeroBanner = () => {

    const arr = [
        'DocVizor',
        "instant analysis",
        "zero hassle",
        'seamless scanning',
        'interactive insights'
      ]
    
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1 className='text-[4.5rem] font-[800] capitalize'>{arr[0]}</h1>
        <h1 className='capitalize text-[2.15rem] font-[700] leading-tight'>let your documents work for you</h1>

        <button className='mt-20 bg-violet-500 text-[20px] font-[600] text-white px-5 py-3 rounded-full hover:scale-110 duration-100'>Get Started</button>
    </div>
  )
}

export default HeroBanner