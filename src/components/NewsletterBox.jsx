import React from 'react'

const NewsletterBox = () => {

   const SubmitHandler = (event)=>{
    event.preventDefault();
   }
  return (
    <div className='text-center'>
   <p className='text-2xl font-small text-gray-800'> Subscribe Now & Get 30% Discount</p>
   <p className='text-gray-400 mt-3'>Hello User's Please Connect with me and take benifit of Discount</p>
   <form onSubmit={SubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
    <input id='newsletter' className=" w-full sm:flex-1 outline-none" type="email" placeholder="Enter Your Email"  required></input>
    <button type="submit" className= "text-white bg-gray-900   hover:bg-blue-600 duration-200 text-xs px-10 py-4 ml-3">SUBSCRIBE</button>
   </form>
   </div>
  )
}

export default NewsletterBox