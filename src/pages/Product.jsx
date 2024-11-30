import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  // console.log(productId);
  
  
  const {products, currency, addToCart}= useContext(Shopcontext);
  const [productData, setProductData] = useState(false);
  const [image, setImage]= useState('');
  const [size, setSize]= useState('');
    

  const fetchProductData = async  () =>{
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        // console.log(item)
        return null;
      }
        
    })
  }
  useEffect(()=>{
    fetchProductData();
  },[productId, products])
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
           
           {/* Product Images */}
           <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
               <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {
                  productData.image.map((item, index) => (
                    <img onClick={()=>setImage(item)} key={index} src={item} alt="product image" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
               ))
                }
               </div>
               <div className='w-full sm:w-[80%]'>
                <img src={image} alt="product image" className='w-full h-auto'/>
               </div>
           </div>

           {/* ------------- Product Info  --------------- */}
           <div className='flex-1'>
            <h2 className='text-2xl font-bold'>{productData.name}</h2>
            <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3' alt="" />
            <img src={assets.star_icon} className='w-3' alt="" />
            <img src={assets.star_icon} className='w-3' alt="" />
            <img src={assets.star_icon} className='w-3' alt="" />
            <img src={assets.star_dull_icon} className='w-3 5' alt="" />
            <p className='pl-2'> (122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'> {currency}  {productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div>
              <p>Select Sizes</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} key={index} className={`border  bg-gray-200 py-2 px-4 rounded ${item === size ? 'border-orange-400' : ''}`}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='rounded-md bg-black text-white my-5 py-3 px-8 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-700 mt-5 flex flex-col gap-1'>
              <p>100% Pure Product.</p>
              <p>Cash on Delivery Avilibale</p>
              <p>Easy Retrun and Exchange Policy within 7 Days.</p>
            
            </div>
           </div>
        </div>
        {/* ------ Description and Reviews section  -------- */}
        <div className='mt-20'>
          <div className='flex gap-1'>
            <b className='border  text-sm px-5 py-3 '>Description</b>
            <p className='border  text-sm px-5 py-3 '>Reviews (122)</p>
          </div>
          <div className='flex flex-col border text-sm gap-6 py-6 px-6 text-gray-700 mt-2'>
            <p >{productData.description}</p>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores tenetur, ipsa enim similique facere ab facilis quidem obcaecati maiores quia corporis autem quam, hic voluptatem laudantium animi esse mollitia?</p>
          </div>
        </div>
        {/* Display Related Products */}
       <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;