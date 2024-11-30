import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
      <div className='bg-blue-200 hover:bg-blue-400 hover:text-black duration-200 p-6 rounded-lg' >
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className=' text-black-900'>We provide free Exchange offer</p>
      </div>
      <div  className='bg-blue-200  hover:bg-blue-400 hover:text-black duration-200 p-6 rounded-lg'>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>7 Days Retrun Policy</p>
        <p className='text-black-900 '>We provide  7 Days Retrun Policy</p>
      </div>
      <div className='bg-blue-200  hover:bg-blue-400 hover:text-black duration-200 p-6 rounded-lg'>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-black-900 '>We provide 24/7 Support offer</p>
      </div>

    </div>
  )
}

export default OurPolicy