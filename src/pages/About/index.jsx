import React from 'react'
import { RxLightningBolt } from "react-icons/rx";

import AboutBg from "../../assets/img/about.png"
import Estimate from "../../assets/img/estimate.png"
import Left from "../../assets/img/left.png"
import Right from "../../assets/img/right.png"
import Intro from "../../assets/img/introduction.png"
import Mission from "../../assets/img/mission.png"
import Company from "../../assets/img/company.png"

const About = () => {
  return (
    <>
        <div
            style={{ backgroundImage: `url(${AboutBg})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}  
            className='w-full h-[266px] flex flex-col justify-end'
        >
            <div className='w-[200px] h-[95px] lg:w-[377px] lg:h-[133px] mx-auto rounded-tr-2xl rounded-tl-2xl bg-[#fff] flex flex-col items-center justify-center'>
                <p className='font-bold text-[#292F36] text-[24px] lg:text-[37px]'>About Us</p>
                <p className='text-sm lg:text-base text-[#4D5053]'>Home/About Us</p>
            </div>
        </div>
        <div className='flex justify-center p-[38px] lg:p-[93px] w-full'>
            <div className='w-[300px] lg:w-[656px] flex'>
                <img src={Left} alt='left' className='w-[60px] h-[136px] lg:w-[141px] lg:h-[320px]' />
                <div className='flex flex-col items-center justify-center gap-[8px] lg:gap-[24px] relative'>
                    <p className='text-[#292F36] text-sm lg:text-[63px] italic'>"</p>
                    <p className='text-xs lg:text-[20px] lg:leading-8 text-[#292F36] '>
                        Procurement is not just a transaction; it's a strategic dance between needs and solutions, 
                        where Dunfix orchestrates success without leaving a trace.
                    </p>
                    <p className='text-[#292F36] text-sm lg:text-[63px] italic'>"</p>
                </div>
                <img src={Right} alt='right' className='w-[60px] h-[136px] lg:w-[141px] lg:h-[320px]' />
            </div>
        </div>
        <div className='bg-[#EDF4F3] w-full flex flex-col gap-[40px] lg:gap-[100px] py-[57px] lg:py-[104px]'>
            <div className='w-[300px] lg:w-[899px] gap-[30px] flex flex-col lg:flex-row items-center mx-auto'>
                <div className='flex flex-col lg:w-[374px] gap-[17px]'>
                    <p className='font-semibold text-base lg:text-[28px] text-[#292F36]'>Introduction</p>
                    <p className='text-xs lg:text-base text-[#4D5053]'>
                        Dunfix Solutions, established in 2010 by industry experts, is a leading force in procurement and 
                        distribution. We specialize in catering to the construction, industrial, and technological 
                        sectors, offering reliable sourcing solutions and top-notch materials.
                    </p>
                </div>
                <img src={Intro} className='w-[300px] lg:w-[502px]' />
            </div>
            <div className='w-[300px] lg:w-[900px] flex flex flex-col lg:flex-row mx-auto gap-[67px] items-center '>
                <div className='flex flex-col lg:hidden'>
                    <p className='text-[#292F36] text-base font-semibold'>Company Background</p>
                    <p className='text-[#4D5053] text-xs '>
                        From humble beginnings, Dunfix Solutions has evolved into a trusted partner, 
                        forming strategic global partnerships to streamline sourcing and distribution operations. 
                        Our commitment to quality and customer satisfaction has solidified our position as an industry 
                        leader.
                    </p>
                </div>
                <img src={Company} className='w-[300px] lg:w-[502px]' />
                <div className='hidden lg:flex flex-col'>
                    <p className='text-[#292F36] text-[28px] font-semibold'>Company Background</p>
                    <p className='text-[#4D5053] text-base '>
                        From humble beginnings, Dunfix Solutions has evolved into a trusted partner, 
                        forming strategic global partnerships to streamline sourcing and distribution operations. 
                        Our commitment to quality and customer satisfaction has solidified our position as an industry 
                        leader.
                    </p>
                </div>
            </div>
            <div className='w-[300px] lg:w-[899px] gap-[30px] flex  flex-col lg:flex-row  items-center mx-auto'>
                <div className='flex flex-col lg:w-[374px] gap-[17px]'>
                    <p className='font-semibold text-base lg:text-[28px] text-[#292F36]'>Mission and Values</p>
                    <p className='text-xs lg:text-base text-[#4D5053]'>
                        Our mission is to deliver excellence, reliability, and customer-centric services. 
                        At Dunfix Solutions, we operate with unwavering integrity, building enduring 
                        relationships with clients based on trust and transparency.
                    </p>
                </div>
                <img src={Mission} className='w-[300px] lg:w-[502px]' />
            </div>
        </div>
        <div
            style={{ backgroundImage: `url(${Estimate})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}
            className='w-full h-[321px]  py-[40px] px-[15px] lg:px-[0px] lg:py-[56px]' 
        >
            <div className='flex flex-col items-center justify-center '>
                <p className='text-[#000] text-[36px] lg:text-[64px] lg:font-semibold '>Get Your Procurement Estimate Today</p>
                <div className='flex justify-between mt-[48px]'>
                    <input 
                        placeholder='Enter your Email'
                        type='email'
                        name='email'
                        className='bg-[#fff] outline-none rounded-l-lg w-[167px] h-[48px] py-[13px] px-[16px] h-[45px]'
                    />
                    <button className='flex items-center bg-[#109E92] py-[13px] px-[16px] w-[145px] h-[48px] rounded-r-lg justify-center text-[#fff]'>
                        <RxLightningBolt /> Get In Touch
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default About