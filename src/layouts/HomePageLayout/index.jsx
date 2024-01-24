import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MiniHeader from './MiniHeader'

const HomePageLayout = () => {
  return (
    <div className='overflow-x-hidden w-full'>
        <div className=' xs:hidden lg:flex'>
            <Header />
        </div>
        <div className=" xs:flex lg:hidden h-[55px] py-5 px-5">
          <MiniHeader />
        </div>
        <div>
            <Outlet />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default HomePageLayout