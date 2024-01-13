import React from 'react'
import AboutBg from "../../assets/img/about.png"
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
            <div className='w-[377px] h-[133px] mx-auto rounded-tr-2xl rounded-tl-2xl bg-[#fff] flex flex-col items-center justify-center'>
                <p className='font-bold text-[#292F36] text-[37px]'>About Us</p>
                <p className='text-base text-[#4D5053]'>Home/About Us</p>
            </div>
        </div>
        <div className='flex justify-center p-[93px] w-full'>
            <div className='w-[656px] flex'>
                <img src={Left} alt='left' />
                <div className='flex flex-col items-center justify-center gap-[14px] relative'>
                    <p className='text-[#292F36] text-[63px] italic'>"</p>
                    <p className='text-[20px] text-[#292F36] '>
                        Procurement is not just a transaction; it's a strategic dance between needs and solutions, 
                        where Dunfix orchestrates success without leaving a trace.
                    </p>
                    <p className='text-[#292F36] text-[63px] italic'>"</p>
                </div>
                <img src={Right} alt='right' />
            </div>
        </div>
        <div className='bg-[#EDF4F3] w-full flex flex-col gap-[100px] py-[104px]'>
            <div className='w-[899px] gap-[30px] flex items-center mx-auto'>
                <div className='flex flex-col w-[374px] gap-[17px]'>
                    <p className='font-semibold text-[28px] text-[#292F36]'>Introduction</p>
                    <p className='text-base text-[#4D5053]'>
                        Dunfix Solutions, established in 2010 by industry experts, is a leading force in procurement and 
                        distribution. We specialize in catering to the construction, industrial, and technological 
                        sectors, offering reliable sourcing solutions and top-notch materials.
                    </p>
                </div>
                <img src={Intro} className='w-[502px]' />
            </div>
            <div className='w-[900px] flex mx-auto gap-[67px] items-center '>
                <img src={Company} className='w-[502px]' />
                <div className='flex flex-col'>
                    <p className='text-[#292F36] text-[28px] font-semibold'>Company Background</p>
                    <p className='text-[#4D5053] text-base '>
                        From humble beginnings, Dunfix Solutions has evolved into a trusted partner, 
                        forming strategic global partnerships to streamline sourcing and distribution operations. 
                        Our commitment to quality and customer satisfaction has solidified our position as an industry 
                        leader.
                    </p>
                </div>
            </div>
            <div className='w-[899px] gap-[30px] flex items-center mx-auto'>
                <div className='flex flex-col w-[374px] gap-[17px]'>
                    <p className='font-semibold text-[28px] text-[#292F36]'>Mission and Values</p>
                    <p className='text-base text-[#4D5053]'>
                        Our mission is to deliver excellence, reliability, and customer-centric services. 
                        At Dunfix Solutions, we operate with unwavering integrity, building enduring 
                        relationships with clients based on trust and transparency.
                    </p>
                </div>
                <img src={Mission} className='w-[502px]' />
            </div>
        </div>
    </>
  )
}

export default About