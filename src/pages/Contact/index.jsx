import React from 'react'
import ContactBg from "../../assets/img/contact.png"

const Contact = () => {
  return (
    <>
        <div
            style={{ backgroundImage: `url(${ContactBg})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}  
            className='w-full h-[266px] flex flex-col justify-end'
        >
            <div className='w-[377px] h-[133px] mx-auto rounded-tr-2xl rounded-tl-2xl bg-[#fff] flex flex-col items-center justify-center'>
                <p className='font-bold text-[#292F36] text-[37px]'>Contact Us</p>
                <p className='text-base text-[#4D5053]'>Home/Contact</p>
            </div>
        </div>
    </>
  )
}

export default Contact