import React, { useCallback, useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { Link } from 'react-router-dom';


const ProductItem = (item,image,name,price , id ) => {

  

  const {currency}= useContext(Shopcontext);
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${item.id}`}>
     <div className='overflow-hidden'>
       <img  className='hover:scale-110 transition ease-in-out ' src={item.image[0]} alt="" />
     </div>
     <p className='pt-3 pb-1 text-sm'>{item.name}</p>
     
     <p className='font-medium text-sm'>{`${currency}    ${item.price}`}</p>
    </Link>
  )
}

export default ProductItem