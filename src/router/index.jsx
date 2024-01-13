import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePageLayout from '../layouts/HomePageLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Routers = () => {
  return (
    <Routes>
        <Route element={<HomePageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
    </Routes>
  )
}

export default Routers