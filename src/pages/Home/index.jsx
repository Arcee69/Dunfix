import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RxLightningBolt } from "react-icons/rx";
import { MdOfflineBolt } from "react-icons/md";
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import Slider from 'react-slick';

import HomeBg from "../../assets/img/home_bg_one.png"
import Estimate from "../../assets/img/estimate.png"
import ForkLift from "../../assets/img/forklift.png"
import Girl from "../../assets/img/girl.png"
import TechCrunch from "../../assets/svg/techcrunch.svg"
import TechWatch from "../../assets/svg/techwatch.svg"
import Canary from "../../assets/svg/canary.svg"
import Business from "../../assets/svg/business.svg"
import Axios from "../../assets/svg/axios.svg"
import HomeIcon from "../../assets/svg/home.svg"


const Home = () => {
    const [showProcurementDropDown, setShowProcumentDropDown] = useState(false);
    const [showIndustry, setShowIndustry] = useState(false);
    const [showBusiness, setShowBusiness] = useState(false);

    const handleProcument = () => {
        setShowProcumentDropDown(prev => !prev)
    };

    const handleIndustry = () => {
        setShowIndustry(prev => !prev)
    };

    const handleBusiness = () => {
        setShowBusiness(prev => !prev)
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />,
    }

  return (
    <>
        <div
            style={{ backgroundImage: `url(${HomeBg})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}  
            className='w-full h-[600px]' 
        >
            <div 
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.40)",
                    position: "relative",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}
                className='flex flex-col px-[65px] py-[90px]'
            >
                <div className='w-[1053px]  flex flex-col gap-[23px]'>
                    <p className='font-medium font-inter text-[70px] text-[#34364D]'>Your trusted partner in procurement and distribution</p>
                    <p className='font-inter text-[24px] font-medium text-[#4A4A4A]'>
                        Explore our diverse range of high-quality materials and cutting-edge technology <br /> solutions, 
                        tailored to meet the unique needs of the construction, industrial, and technological sectors.
                    </p>
                </div>
                <div className='flex mt-[48px] items-center'>
                    <input 
                        placeholder='Enter zip code'
                        type='number'
                        name='zip'
                        className='bg-[#CDDAD4] outline-none rounded-l-lg w-[167px] h-[48px] py-[13px] px-[16px] h-[45px]'
                    />
                    <button className='flex items-center bg-[#109E92] py-[13px] px-[16px] w-[145px] h-[45px] rounded-r-lg justify-center text-[#fff]'>
                        <RxLightningBolt /> Get estimate
                    </button>
                </div>
            </div>
        </div>
        <div className='w-[1200px] flex mx-auto py-[56px]'>
            <div className='w-[240px] px-[32px]'>
                <img src={TechCrunch} alt='tech-crunch' className='w-[176px]' />
            </div>
            <div className='w-[240px] px-[32px]'>
                <img src={Canary} alt='canary' className='w-[176px]' />
            </div>
            <div className='w-[240px] px-[32px]'>
                <img src={Business} alt='business' className='w-[176px]' />
            </div>
            <div className='w-[240px] px-[32px]'>
                <img src={Axios} alt='axios' className='w-[176px]' />
            </div>
            <div className='w-[240px] px-[32px]'>
                <img src={TechWatch} alt='tech-watch' className='w-[176px]' />
            </div>
        </div>
        <div className='w-full bg-[#F7F1D0] h-[1102px] py-[63px] flex flex-col gap-[40px] pl-[62px] pr-[104px]'>
            <p className='text-[90px] text-[#000] leading-[101px]'>
                Hassle free restock and 
                procurement,
            </p>
            <hr />
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <div className='flex flex-col border-t border-solid border-[#050505] pt-[26px] w-[610px]'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <div><MdOfflineBolt className='w-[40px] h-[40px]' /></div>
                                <div className='text-lg text-[#000]'>Streamlined procurement process</div>
                            </div>
                            <div onClick={() => handleProcument()} className='cursor-pointer'>
                                {
                                    showProcurementDropDown ?
                                    <HiOutlineMinusSm className='w-[12px] h-[12px]' />
                                    :
                                    <HiOutlinePlusSm className='w-[12px] h-[12px]' />
                                }
                            </div>
                        </div>
                        {
                            showProcurementDropDown && 
                            <p className='text-base text-[#000] w-[537px] leading-[24px]'>
                                Experience a seamless procurement journey with Dunfix Solutions. 
                                Our platform is designed to simplify the procurement process, 
                                providing you with a user-friendly interface and efficient tools. 
                                Save time and resources as you navigate through a streamlined process 
                                from product selection to order fulfillment.
                            </p>
                        }
                    </div>
                    <div className='flex flex-col border-t mt-[55px] border-solid border-[#050505] pt-[26px] w-[610px]'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <div><AiOutlineDollar className='w-[40px] h-[40px]' /></div>
                                <div className='text-lg text-[#000]'>Customized solutions for your industry</div>
                            </div>
                            <div className='cursor-pointer'>
                                {
                                    showIndustry ?
                                    <HiOutlineMinusSm className='w-[12px] h-[12px]' />
                                    :
                                    <HiOutlinePlusSm className='w-[12px] h-[12px]' />
                                }
                            </div>
                        </div>
                        {
                            showIndustry && 
                            <p className='text-base text-[#000] w-[537px] leading-[24px]'>
                                Experience a seamless procurement journey with Dunfix Solutions. 
                                Our platform is designed to simplify the procurement process, 
                                providing you with a user-friendly interface and efficient tools. 
                                Save time and resources as you navigate through a streamlined process 
                                from product selection to order fulfillment.
                            </p>
                        }
                    </div>
                    <div className='flex flex-col border-t mt-[55px] border-solid border-[#050505] pt-[26px] w-[610px]'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <img src={HomeIcon} alt='home-icon' className='w-[40px] h-[40px]' />
                                <div className='text-lg text-[#000]'>Unlock Your Business Potential with Invoice Financing</div>
                            </div>
                            <div className='cursor-pointer'>
                                {
                                    showBusiness?
                                    <HiOutlineMinusSm className='w-[12px] h-[12px]' />
                                    :
                                    <HiOutlinePlusSm className='w-[12px] h-[12px]' />
                                }
                            </div>
                        </div>
                        {
                            showBusiness && 
                            <p className='text-base text-[#000] w-[537px] leading-[24px]'>
                                Experience a seamless procurement journey with Dunfix Solutions. 
                                Our platform is designed to simplify the procurement process, 
                                providing you with a user-friendly interface and efficient tools. 
                                Save time and resources as you navigate through a streamlined process 
                                from product selection to order fulfillment.
                            </p>
                        }
                    </div>
                </div>
                <div>
                    <img src={ForkLift} alt='fork-lift' className='w-[518px] h-[537px]'/>
                </div>
            </div>
            <div className='flex justify-center gap-[12px] mt-[28px]'>
                <button
                    className='rounded-[6px] bg-[#000] w-[128px] h-[64px] p-2 text-[#fff] flex items-center justify-center'
                >
                    Get a battery
                </button>
                <button className='rounded-[6px] border border-[#000] w-[176px] h-[64px] p-1 flex items-center justify-center'>
                    Learn about batteries
                </button>
            </div>
        </div>
        <div className='bg-[#fff] pt-[132px] pl-[77px] flex flex-col'>
            <div className='border-b-[#E3DCD3] w-[1216px] pb-[49px] pr-[189px] leading-[101px] border border-t-0 border-x-0 border-solid'>
               <p className='text-[80px]'>See how Dunfix empowers diverse industries</p>
            </div>
            
            <div style={{ width: "100%"}} className='mt-[80px]'>
                {/* <Slider {...settings}> */}
                    <div className='w-[1286px] flex'>
                        <div>
                            <img src={Girl} alt='girl' className='w-[608px] rounded-tl-lg rounded-bl-lg'/>
                        </div>
                        <div className='flex flex-col gap-[38px] bg-[#f6f6f6] rounded-tr-lg rounded-br-lg w-[678px] h-[578px] p-[56px] '>
                            <p className='text-[#1A202C] font-inter text-xl font-medium w-[451px]'>
                                “Dunfix Solutions provided us with a tailored solution that perfectly matched our industry 
                                needs. Their commitment to excellence and attention to detail sets them apart.”
                            </p>
                            <div className='flex flex-col'>
                                <p className='text-base text-[#000]'>Mike J.</p>
                                <p className='text-base text-[#000]'>2-battery, whole home backup</p>
                            </div>
                        </div>
                    </div>
                {/* </Slider> */}
            </div>  
        </div>
        <div
            style={{ backgroundImage: `url(${Estimate})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}
            className='w-full h-[321px] mt-[80px] py-[56px]' 
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

export default Home