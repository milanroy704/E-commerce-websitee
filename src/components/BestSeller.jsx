import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';
import { products } from '../assets/assets';

const BestSeller = () => {
  
  
  // const {products} = useContext(Shopcontext);
  const [bestSeller, setbestSeller] = useState([]);

  useEffect(()=>{
   
    
   
    const bestProduct = products.filter((item) => (item.bestSeller));
    setbestSeller();
  },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'}  text2={'SELLER'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab sint quasi perferendis dolorem obcaecati tempora 
          </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
          products.slice(10,15).map((item,index)=>(
       <ProductItem key={index} item={item} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))
        }
        </div>
    </div>
  )
}

export default BestSeller