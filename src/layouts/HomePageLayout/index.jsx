import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const HomePageLayout = () => {
  return (
    <div className='overflow-x-hidden w-full'>
        <div className='z-50 flex'>
            <Header />
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