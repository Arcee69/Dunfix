import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RxLightningBolt } from "react-icons/rx";

import Logo from  "../../assets/img/logo.svg"  
// import Logo from "../../assets/svg/logo.svg"

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className='w-full flex items-center justify-between bg-[#EDF4F3] px-[65px] py-[22px] '>
        <img src={Logo} alt='logo' className='w-[179px] h-[50px] cursor-pointer' onClick={() => navigate("/")} />
        <div className='flex items-center gap-[45px]'>
           <Link to="/" className='text-[#050505] cursor-pointer text-base'>Home</Link>
           <Link to="/about" className='text-[#050505] cursor-pointer  text-base'>About us</Link>
           <Link to="/services" className='text-[#050505] cursor-pointer  text-base'>Services</Link>
           <Link to="/contact" className='text-[#050505] cursor-pointer  text-base'>Contact Us</Link>
        </div>
        <div className='flex items-center gap-4 w-[320px]'>
            <button className='border w-[145px] border-[#050505] h-[48px] rounded-lg p-2'>+44 7762 293319</button>
            <button className='flex items-center bg-[#109E92] p-2 w-[145px] h-[48px] rounded-lg justify-center text-[#fff]'>
                <RxLightningBolt className="" /> Get in touch
            </button>
        </div>
    </div>
  )
}

export default Header