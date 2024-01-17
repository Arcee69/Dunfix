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
            <div className='w-[377px] h-[133px] mx-auto rounded-tr-2xl rounded-tl-2xl bg-[#fff] flex flex-col items-center justify-center'>
                <p className='font-bold text-[#292F36] text-[37px]'>Services</p>
                <p className='text-base text-[#4D5053]'>Home/Services</p>
            </div>
        </div>
        <div className='w-full pt-[129px] px-[141px] pb-[176px]'>
            <div className='w-[1158px] flex flex-col  gap-[88px]'>
                <div className='flex gap-[42px] items-center'>
                    <div className='w-[358px] gap-[20px] px-[20px] py-[83px] flex flex-col items-center hover:bg-[#EDF4F3] hover:rounded-[30px]'>
                        <p className='text-[25px] text-[#292F36] font-bold'>Project Plan</p>
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
                        <p className='text-[25px] text-[#292F36] font-bold'>Retail Design</p>
                        <p className='text-[22px] text-[#4D5053] text-center'>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                        <div className='flex gap-1 items-center mt-[32px]'>
                            <p className='font-semibold text-[#4D5053] text-lg'>Read More</p>
                            <GoArrowRight className='w-[15px] h-[13px] text-[#CDA274]' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-[42px] items-center'>
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
                </div>

            </div>

        </div>

        <div
            style={{ backgroundImage: `url(${Estimate})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}
            className='w-full h-[321px]  py-[56px]' 
        >
            <div className='flex flex-col items-center justify-center '>
                <p className='text-[#000] text-[64px] font-semibold '>Get Your Procurement Estimate Today</p>
                <div className='flex justify-between mt-[48px]'>
                    <input 
                        placeholder='Enter your Email'
                        type='email'
                        name='email'
                        className='bg-[#fff] outline-none rounded-l-lg w-[167px] h-[48px] py-[13px] px-[16px] h-[45px]'
                    />
                    <button className='flex items-center bg-[#109E92] py-[13px] px-[16px] w-[145px] h-[45px] rounded-r-lg justify-center text-[#fff]'>
                        <RxLightningBolt /> Get estimate
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services