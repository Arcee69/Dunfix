import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { Form, Formik } from 'formik';

import ContactBg from "../../assets/img/contact.png"
import Map from "../../assets/img/map.png"
import Twitter from "../../assets/svg/contact_twitter.svg"
import Instagram from "../../assets/svg/contact_instagram.svg"
import Discord from "../../assets/svg/contact_discord.svg"
import Big from "../../assets/svg/big.svg"

const Contact = () => {

  const subjectItems = [
    "General Inquiry", "General Inquiry", "General Inquiry", "General Inquiry"
  ]

  return (
    <>
        <div
            style={{ backgroundImage: `url(${ContactBg})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}  
            className='w-full h-[266px] flex flex-col justify-end'
        >
            <div className='w-[200px] h-[95px] lg:w-[377px] lg:h-[133px] mx-auto rounded-tr-2xl rounded-tl-2xl bg-[#fff] flex flex-col items-center justify-center'>
                <p className='font-bold text-[#292F36] text-[24px] lg:text-[37px]'>Contact Us</p>
                <p className='text-sm lg:text-base text-[#4D5053]'>Home/Contact</p>
            </div>
        </div>
        <div className='w-full lg:w-[1196px] lg:shadow-xl mx-auto lg:h-[667px] gap-[55px] mb-[40px] lg:rounded-[14px] flex flex-col lg:flex-row p-[10px] mt-[51px] lg:mt-[149px]'>
          <div className=' lg:w-[491px] lg:h-[647px] flex flex-col gap-[40px] lg:gap-[100px] bg-[#109E92] rounded-tr-md rounded-tl-md rounded-bl-md pl-[30px] lg:pl-[40px] pt-[40px] pb-[36px]'>
            <div className='flex flex-col gap-[14px]'>
              <p className='text-[#fff] font-inter text-[28px]'>Contact Information</p>
              <p className='text-[#fff] font-inter text-[18px] font-medium'>Say something to start a live chat!</p>
            </div>
            <div className='flex flex-col gap-[55px]'>
              <div className='flex items-center gap-[9px] lg:gap-[25px]'>
                <FaPhoneVolume className='text-[#fff] w-[24px] h-[24px]' />
                <div className='flex flex-col'>
                  <p className='text-[#fff] font-inter text-base'>+447762293319</p>
                  <p className='text-[#fff] font-inter text-base'>+2348063351368</p>

                </div>
              </div>
              <div className='flex items-center gap-[9px] lg:gap-[25px]'>
                <MdEmail className='text-[#fff] w-[24px] h-[24px]' />
                <p className='text-[#fff] font-inter text-base'>Dunfixenterprises@gmail.com</p>
              </div>
              <div className='flex lg:items-center gap-[9px] lg:gap-[25px]'>
                <MdLocationPin className='text-[#fff] w-[24px] h-[24px]' />
                <div className='flex flex-col gap-1.5'>
                  <p className='text-[#fff] font-inter text-base w-[288px]'>20 St. Mary Street, Ogo-Oluwa b/stop, Ishashi, Lagos State</p>
                  <p className='text-[#fff] font-inter text-base w-[288px]'>2 Crossby Court, Sunderland, SR2 8BX</p>
                </div>
              </div>
            </div>
            <div className='flex relative'>
                <div className='flex items-center gap-6'>
                  <img src={Twitter} alt='twitter' />
                  <img src={Instagram} alt='instagram' />
                  <img src={Discord} alt='discord' />
                </div>
              <img src={Big} alt='' className='w-40 h-40 left-[64.5%] -bottom-[30%] absolute hidden lg:flex' />
            </div>
          </div>
          <div className='lg:w-[600px] mt-[50px]'>
            <Formik
              initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: ""
              }}
                  // validationSchema={formValidationSchema}
                  onSubmit={(values, action) => {
                  window.scrollTo(0, 0);
                  console.log(values, "market")
                  alert("Successful")
                  // submitForm(values, action);
              }}
          >
            {({
                handleSubmit,
                handleChange,
                dirty,
                isValid,
                setFieldValue,
                errors,
                touched,
                // setFieldTouched,
                values,
            }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col lg:flex-row ">
                    <div className="flex flex-col gap-[45px]">
                      <div className='flex flex-col lg:flex-row gap-4'>
                          <div className='flex flex-col  '>
                              <label htmlFor='firstName' className='font-inter font-medium text-[#8D8D8D] text-xs' >First Name</label>
                              <input
                                  name="firstName"
                                  placeholder=""
                                  type="text" 
                                  value={values?.firstName}
                                  onChange={handleChange}
                                  className="outline-none lg:w-[278px] bg-[#FFF] border border-x-0 border-t-0  border-[#8D8D8D] h-[48px] border-solid "
                              />
                              {errors.firstName && touched.firstName ? (
                              <div className="text-RED-_100 text-xs">
                                  {errors.firstName}
                              </div>
                              ) : null}
                          </div>
                          <div className='flex flex-col'>
                              <label htmlFor='lastName' className='font-inter font-medium text-[#8D8D8D] text-xs'>Last Name</label>
                              <input
                                  name="lastName"
                                  placeholder=""
                                  type="text" 
                                  value={values?.lastName}
                                  onChange={handleChange}
                                  className="outline-none lg:w-[278px] bg-[#FFF] border border-x-0 border-t-0  border-[#8D8D8D] h-[48px] border-solid "
                              />
                              {errors.lastName && touched.lastName ? (
                              <div className="text-RED-_100 text-xs">
                                  {errors.lastName}
                              </div>
                              ) : null}
                          </div>
                      </div>
                      <div className='flex flex-col lg:flex-row gap-4'>
                          <div className='flex flex-col'>
                              <label htmlFor='email' className='font-inter font-medium text-[#8D8D8D] text-xs' >Email</label>
                              <input
                                  name="email"
                                  placeholder=""
                                  type="text" 
                                  value={values?.email}
                                  onChange={handleChange}
                                  className="outline-none lg:w-[278px] bg-[#FFF] border border-x-0 border-t-0  border-[#8D8D8D]  h-[48px] border-solid "
                              />
                              {errors.email && touched.email ? (
                              <div className="text-RED-_100 text-xs">
                                  {errors.email}
                              </div>
                              ) : null}
                          </div>
                          <div className='flex flex-col'>
                              <label htmlFor='phone' className='font-inter font-medium text-[#8D8D8D] text-xs'>Phone Number</label>
                              <input
                                  name="phone"
                                  placeholder=""
                                  type="number" 
                                  value={values?.phone}
                                  onChange={handleChange}
                                  className="outline-none lg:w-[278px] bg-[#FFF] border border-x-0 border-t-0 border-[#8D8D8D] h-[48px] border-solid "
                              />
                              {errors.phone && touched.phone ? (
                              <div className="text-RED-_100 text-xs">
                                  {errors.phone}
                              </div>
                              ) : null}
                          </div>
                      </div>
                      {/* <div className='flex flex-col gap-4'>
                        <label htmlFor='subject' className='font-inter font-medium text-[#109E92] text-sm'>Select Subject?</label>
                        <div className='flex gap-5'>
                          {
                            subjectItems.map((item, index) => (
                              <div className='flex items-center gap-1' key={index}>
                                <input type='radio' name='subject' className='w-[13px] h-[13px]' value={values?.subject} onChange={handleChange}/>
                                <p className='text-xs font-[inter] text-[#109E92]'>{item}</p>
                              </div>
                            ))
                          }
                        </div>
                      </div> */}
                      <div className='flex flex-col gap-1.5'>
                        <label htmlFor='message' className='font-inter font-medium text-[#8D8D8D] text-xs'>Message</label>
                        <textarea
                            name="message"
                            placeholder="Write your message.."
                            type="text" 
                            value={values?.message}
                            onChange={handleChange}
                            className="outline-none lg:w-[595px] bg-[#FFF] border border-x-0 border-t-0 border-[#8D8D8D] h-[48px] border-solid "
                        ></textarea>
                        {errors.message && touched.message ? (
                        <div className="text-RED-_100 text-xs">
                            {errors.message}
                        </div>
                        ) : null}
                      </div>
                  
                      <div className='flex justify-center lg:justify-end'>
                        <button
                            className="w-[209px] font-inter flex items-center  rounded-[5px] justify-center  h-[49px] bg-[#109E92] text-base  text-center"
                            type="submit"
                        >
                            <p className='text-[#fff] text-base font-medium'>Send Message</p>
                            
                        </button>

                      </div>
                    </div>

                </Form>
              )}
            </Formik>
          </div>
        </div>
        {/* <div className='w-[889px] mx-auto mb-[89px] mt-[48px]'>
          <img src={Map} alt='map'/>
        </div> */}
    </>
  )
}

export default Contact