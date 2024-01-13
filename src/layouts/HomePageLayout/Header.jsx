import React from 'react'
import { Link } from 'react-router-dom'
import { RxLightningBolt } from "react-icons/rx";


import Logo from "../../assets/svg/logo.svg"

const Header = () => {
  return (
    <div className='w-full z-50 flex items-center justify-between bg-[#EDF4F3] px-[65px] py-[22px] '>
        <img src={Logo} alt='logo' className='w-[179px] h-[50px]' />
        <div className='flex items-center gap-[33px]'>
           <Link to="/" className='text-[#050505] text-base'>Home</Link>
           <Link to="/about" className='text-[#050505] text-base'>About us</Link>
           <Link to="/services" className='text-[#050505] text-base'>Services</Link>
           <Link to="/contact" className='text-[#050505] text-base'>Contact Us</Link>
        </div>
        <div className='flex items-center gap-4'>
            <button className='border w-[145px] border-[#050505] h-[48px] rounded-lg p-2'>(323) 943-1606</button>
            <button className='flex items-center bg-[#109E92] p-2 w-[145px] h-[48px] rounded-lg justify-center text-[#fff]'>
                <RxLightningBolt className="" /> Get estimate
            </button>
        </div>
    </div>
  )
}

export default Header