import React from 'react'
import { RxLightningBolt } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";

import AboutBg from "../../assets/img/about.png"
import Estimate from "../../assets/img/estimate.png"

const Services = () => {
  return (
    <>
        <div
            style={{ backgroundImage: `url(${AboutBg})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}  
            className='w-full h-[266px] flex flex-col justify-end'
        >
            <div className='w-[200px] h-[95px] lg:w-[377px] lg:h-[133px] mx-auto rounded-tr-2xl rounded-tl-2xl bg-[#fff] flex flex-col items-center justify-center'>
                <p className='font-bold text-[#292F36] text-[24px] lg:text-[37px]'>Services</p>
                <p className='text-sm lg:text-base text-[#4D5053]'>Home/Services</p>
            </div>
        </div>
        <div className='w-full pt-[48px] lg:pt-[129px] lg:px-[141px] pb-[176px]'>
            {/* <div className='w-[1158px] flex flex-col '> */}
                <div className='flex flex-col lg:flex-row justify-between mx-auto'>
                    <div className='w-[313px] mx-auto lg:mx-0 lg:w-[358px] gap-[20px] px-[20px] py-[24px] lg:py-[83px] flex flex-col items-center hover:bg-[#EDF4F3] hover:rounded-[30px]'>
                        <p className='text-[25px] text-[#292F36] font-bold'>Procurement and Supply</p>
                        <ul className='text-[18px] flex flex-col gap-2 mx-2 text-[#4D5053] text-left list-disc'>
                            <li>Specialization in sourcing and providing construction materials</li>
                            <li>Expertise in procuring industrial materials and equipment</li>
                            <li>Supply of technology-related products</li>
                            <li>Distribution of electrical components</li>
                        </ul>
                    </div>
                    <div className='w-[313px] mx-auto lg:mx-0 lg:w-[358px] gap-[20px] px-[20px] py-[24px] lg:py-[83px] flex flex-col items-center hover:bg-[#EDF4F3] hover:rounded-[30px]'>
                        <p className='text-[25px] text-[#292F36] font-bold'>Invoice Financing</p>
                        <ul className='text-[18px] flex flex-col gap-2 text-[#4D5053] text-left mx-2 list-disc'>
                            <li>We facilitate financial support by leveraging invoices </li>
                            <li>We offer a financing mechanism where unpaid invoices are used as collateral</li>
                            <li>We will help in managing cash flow by providing funds tied to outstanding invoices</li>
                        </ul>
                    </div>
                    <div className='w-[313px] mx-auto lg:mx-0 lg:w-[358px] gap-[20px] px-[20px] py-[24px] lg:py-[83px] flex flex-col items-center hover:bg-[#EDF4F3] hover:rounded-[30px]'>
                        <p className='text-[25px] text-[#292F36] font-bold'>Customized Procurement Solutions</p>
                        <ul className='text-[18px] flex flex-col gap-2 mx-2 text-[#4D5053] text-left list-disc'>
                            <li>Tailored procurement strategies to meet specific client needs</li>
                            <li>Strategic sourcing services for optimizing costs and quality</li>
                            <li>Logistic and Warehousing</li>
                            <li>Vendor Management</li>
                        </ul>
                    </div>
                </div>
                {/* <div className='flex gap-[42px] items-center'>
                    <div className='w-[358px] gap-[20px] px-[20px] py-[83px] flex flex-col items-center hover:bg-[#EDF4F3] hover:rounded-[30px]'>
                        <p className='text-[25px] text-[#292F36] font-bold'>2d/3d Art Work</p>
                        <p className='text-[22px] text-[#4D5053] text-center'>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                        <div className='flex gap-1 items-center mt-[32px]'>
                            <p className='font-semibold text-[#4D5053] text-lg'>Read More</p>
                            <GoArrowRight className='w-[15px] h-[13px] text-[#CDA274]' />
                        </div>
                    </div>
                    <div className='w-[358px] gap-[20px] px-[20px] py-[83px] flex flex-col items-center hover:bg-[#EDF4F3] hover:rounded-[30px]'>
                        <p className='text-[25px] text-[#292F36] font-bold'>Interior Work</p>
                        <p className='text-[22px] text-[#4D5053] text-center'>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                        <div className='flex gap-1 items-center mt-[32px]'>
                            <p className='font-semibold text-[#4D5053] text-lg'>Read More</p>
                            <GoArrowRight className='w-[15px] h-[13px] text-[#CDA274]' />
                        </div>
                    </div>
                    <div className='w-[358px] gap-[20px] px-[20px] py-[83px] flex flex-col items-center hover:bg-[#EDF4F3] hover:rounded-[30px]'>
                        <p className='text-[25px] text-[#292F36] font-bold'>Decoration Work</p>
                        <p className='text-[22px] text-[#4D5053] text-center'>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                        <div className='flex gap-1 items-center mt-[32px]'>
                            <p className='font-semibold text-[#4D5053] text-lg'>Read More</p>
                            <GoArrowRight className='w-[15px] h-[13px] text-[#CDA274]' />
                        </div>
                    </div>
                </div> */}

            {/* </div> */}

        </div>

        <div
            style={{ backgroundImage: `url(${Estimate})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}
            className='w-full h-[321px] mt-[20px] lg:mt-[80px] py-[40px] px-[15px] lg:px-[0px] lg:py-[56px]' 
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

export default Services