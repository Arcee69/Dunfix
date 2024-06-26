import React from 'react'
import { MdPhone } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


import FooterBg from "../../assets/img/footer.png"
import Logo from  "../../assets/img/logo.svg"                 //"../../assets/svg/logo_footer.svg"
import Facebook from "../../assets/svg/facebook.svg"
import Instagram from "../../assets/svg/instagram.svg"
import Twitter from "../../assets/svg/twitter.svg"
import Thread from "../../assets/svg/threads.svg"
import Linkedin from "../../assets/svg/linkedin.svg"
import Seia from "../../assets/svg/seia.svg"
import Business from "../../assets/svg/bbb.svg"


const Footer = () => {

  const navigate = useNavigate()

  return (
    <div
      style={{ backgroundImage: `url(${FooterBg})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}
      className='w-full pt-[47px] lg:pt-[80px]' 
    >
      <div className=' w-full py-[31px] mx-[16px] lg:mx-[170px] flex flex-col lg:flex-row gap-[31px] lg:gap-[283px]'>
          <div className='flex flex-col gap-[26px] w-[168px]'>
              <img src={Logo} alt='logo' />
              <div className='flex gap-[12px]'>
                <img src={Facebook} alt='facebook' className='w-6 h-6'/>
                <img src={Instagram} alt='instagram' className='w-6 h-6'/>
                <img src={Twitter} alt='twitter' className='w-6 h-6'/>
                <img src={Thread} alt='thread' className='w-6 h-6'/>
                <img src={Linkedin} alt='linkedin' className='w-6 h-6'/>
              </div>
          </div>
          <div className='flex flex-col gap-6 w-[147.17px]'>
            <p className='text-base cursor-pointer text-[#013300]' onClick={() => {navigate("/about"); window.scroll(0, 0)}}>About</p>
            <p className='text-base cursor-pointer text-[#013300]' onClick={() => {navigate("/services"); window.scroll(0, 0)}}>Services</p>
            <p className='text-base cursor-pointer text-[#013300]' onClick={() => {navigate("/contact"); window.scroll(0, 0)}}>Contact Us</p>
            {/* <p className='text-base text-[#013300]'>Privacy Policy</p>
            <p className='text-base text-[#013300]'>Terms & Conditions</p> */}
          </div>
          <div className='w-[309px] flex flex-col gap-6'>
            {/* <p className='text-base text-[#013300]'>Become a partner</p>
            <p className='text-base text-[#013300]'>Referals</p> */}
            <p className='text-base text-[#013300]'>info@dunfixlimited.com</p>
            <div className='flex items-center gap-1'>
              <MdPhone />
              <div className='flex flex-col'>
              <p className='text-base text-[#013300]'>+447762293319</p>
              <p className='text-base text-[#013300]'>+2348063351368</p>
              </div>
            </div>
            <p className='text-sm text-[#013300]'>15462800 - Incorporated on 2 February 2024</p>
          </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:items-center justify-center pt-[31px] lg:pt-[64px] pb-[40px] px-[26px] '>
        {/* <div className='hidden lg:flex '>
          <img src={Seia} alt='Seia' />
          <img src={Business} alt='Business' />
        </div> */}
         <img src={Logo} alt='logo' className='w-[179px] h-[50px] cursor-pointer' />
        {/* <p className='text-sm text-[#109E92]'>© 2023 Dunfix Energy</p> */}
        {/* <p className='text-base text-[#109E92]'>CSLB license number # 1104018</p> */}
      </div>
    </div>
  )
}

export default Footer