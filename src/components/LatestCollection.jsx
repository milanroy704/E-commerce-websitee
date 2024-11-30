import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';


const LatestCollection = () => {

  const {products }= useContext(Shopcontext);
 const [latestProducts, setlatestProducts] = useState([]);

 useEffect(()=>{
  setlatestProducts(products.slice(0, 10));
 },[])
  
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTONS'}/>
        
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>In this section you can find latest items from Forever Brand and see the full Product</p>
      </div>
         {/* Rendering Product */}
         <div className='  grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            products.slice(0, 10).map((item,index)=>(
              <ProductItem key={index} item={item} image={item.image} id={item._id} price={item.price} name={item.name}/>
            ))
          }
         </div>

      </div>
  )
}

export default LatestCollection