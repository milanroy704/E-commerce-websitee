import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
            <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
          <img className='w-full md:max-w-[450px] rounded-md' src={assets.about_img} alt="" />
          <div className="flex flex-col gap-6 md:w-2/4 text-gray-900 justify-center">
          <p>At Milisha, we believe that fashion is more than just clothing—it's a form of self-expression. Our e-commerce platform is dedicated to bringing you the latest trends and timeless styles that empower you to showcase your unique identity. Whether you're looking for everyday essentials or statement pieces, Milisha offers a carefully curated selection of high-quality clothing that caters to diverse tastes and occasions.</p>
          <p>  Our commitment to quality and style ensures that you'll find something perfect for every moment.</p>
          <b className='text-gray-800 text-xl'>Our Mission</b>
          <p>Our mission is to make fashion accessible to everyone, providing you with the tools to create your own signature look. Join us at Milisha, where fashion meets passion!</p>
          </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-3 ">
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5 bg-blue-200 hover:bg-blue-600 duration-200 text-xs  ml-3 rounded-lg">
            <b className='text-xl'>Quality Assurance:</b>
            <p className='text-gray-800 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores alias est sit maxime, cum accusantium cupiditate dolor accusamus error.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5 bg-blue-200 hover:bg-blue-600 duration-200 text-xs rounded-lg ml-3">
            <b  className='text-xl'>Fast Delivery:</b>
            <p className='text-gray-800 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores alias est sit maxime, cum accusantium cupiditate dolor accusamus error.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5 bg-blue-200 hover:bg-blue-600 duration-200 text-xs rounded-lg ml-3">
            <b  className='text-xl'>Cheap & Best :</b>
            <p className='text-gray-800 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores alias est sit maxime, cum accusantium cupiditate dolor accusamus error.</p>
        </div>
         
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About