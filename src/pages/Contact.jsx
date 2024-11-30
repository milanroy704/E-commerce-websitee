import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full  md:max-w-[480px] rounded-md' src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6 ">
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p></p>
            <p className='text-gray-500'> Chandra Nagar 06 <br /> Bhiali , Durg <br /> Chhatishgarh</p>
            <p className='text-gray-500'> Tel: +91 6203232288 <br /> Email: <a href="gmailto:milanraj742003@gmail.com">milanraj742003@gmail.com</a></p>
            <p className='font-semibold text-xl text-gray-600'>Carrer at <span className='font-sans'> MILISHA</span></p>
            <p className=' text-gray-600'>Learn More about our Team</p>
            <button className=" bg-blue-200 px-6 py-2 rounded-sm text-sm  hover:bg-blue-800 hover:text-white hover:text-xl transition-all duration-500">
            <a href="https://www.linkedin.com/jobs/view/4002479222">Explore Jobs</a>
            </button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact