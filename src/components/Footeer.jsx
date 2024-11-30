import React from 'react'
import { assets } from '../assets/assets'
import { MdCall, MdEmail } from 'react-icons/md';

const Footeer = () => {
  return (
    <div className=''>
      <div  className='text overflow-x-auto whitespace-nowrap '>
      <p className='scrolling-text bg-red-300 text-2xl p-0.5'>***Important Notice : This is Dummy Website for Developing Puspose. I have No any Product to Sale and Please Do not Pay any kind of Amount on this Website if You Pay Only You are Responsible for that. Thank You For Visiting.***  Created By:- <span className='font-bold font-mono'>Mr. Milan Raj </span>  </p>
      </div>
    
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
      
        <div>
          <img src={assets.logo1} className='mb-3 w-40' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Welcome to under Top-10 E-commerce Website this Is Only Made for User Engagement pease connect with us
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 '>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600 '>
            <li className='cursor-pointer hover:text-black hover:underline hover:font-bold duration-500'>Home</li>
            <li className='cursor-pointer hover:text-black hover:underline hover:font-bold duration-500'>About us</li>
            <li className='cursor-pointer hover:text-black hover:underline hover:font-bold duration-500'>Delivery</li>
            <li className='cursor-pointer hover:text-black hover:underline hover:font-bold duration-500'>Privacy Policy</li>
          </ul>
        </div>
        {/*------------- AlterNative code of Following Div ------*/}
        {/* <div>
          <p className='text-xl font-medium mb-5 '>Get In Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 6203232288</li>
            <li>milanraj742003@gmail.com</li>
            <div className='rounded-md flex flex-row'>
            <img  src={assets.linkedin} className='w-8 m-auto cursor-pointer'  alt="" />
            <img src={assets.github} className='w-8 m-auto cursor-pointer' alt="" />
            <img src={assets.instagram} className='w-8 m-auto cursor-pointer' alt="" />
            <img src={assets.twitter} className='w-8 m-auto cursor-pointer' alt="" />
            </div>
          </ul>
         
        </div> */}
        <div className=''>
  <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
  <ul className="flex flex-col gap-1 text-gray-600">
    <ul className='flex flex-row gap-1'>
    <li className='cursor-pointer hover:text-black hover:underline hover:font-black duration-500' ><MdCall size={20} className="text-black-500 " />Contact:  +91 6203232288</li>
    </ul>
  <ul className='flex flex-row gap-1'>
  <li className='cursor-pointer hover:text-black hover:underline hover:font-black duration-500'><MdEmail size={20} className="text-black-500" />milanraj742003@gmail.com</li>
  </ul>
    
    <div className="rounded-md flex flex-row gap-4 ">
      <a
        href="https://www.linkedin.com/in/milan-raj-rcet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={assets.linkedin}
          className="w-8 m-auto cursor-pointer hover:scale-110"
          alt="LinkedIn"
        />
      </a>
      <a
        href="https://github.com/milanroy704"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={assets.github}
          className="w-8 m-auto cursor-pointer hover:scale-110"
          alt="GitHub"
        />
      </a>
      <a
        href="https://www.instagram.com/milan_raj_0001"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={assets.instagram}
          className="w-8 m-auto cursor-pointer hover:scale-110"
          alt="Instagram"
        />
      </a>
      <a
        href="https://twitter.com/milan_raj_0001"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={assets.twitter}
          className="w-8 m-auto cursor-pointer  hover:scale-110"
          alt="Twitter"
        />
      </a>
    </div>
  </ul>
</div>

      </div>
      <div>
    <hr/>
    <p className='py-5 text-sm text-center'>Copyright 2024@milisha.com ALL rigths Reserved </p>
      </div>
    </div>
  )
}

export default Footeer