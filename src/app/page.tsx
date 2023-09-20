import AboutUs from '@/components/AboutUs'
import HeroBanner from '@/components/HeroBanner'
import HomeNavbar from '@/components/HomeNavbar'
import HomeSidebar from '@/components/HomeSidebar'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen max-w-screen overflow-hidden'>
      <HomeSidebar />
      <div className='sm:pl-[5rem] w-screen'>
        <HomeNavbar />
        <HeroBanner />
      </div>
      <div className='sm:pl-[5rem]'>
        <AboutUs />
      </div>
    </div>
  )
}

export default Home