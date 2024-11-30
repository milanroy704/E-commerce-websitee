import { createContext, useState , useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
 export const Shopcontext= createContext();

 const ShopcontextProvider =(props)=>{

    const currency = '₹';
    const delivery_fee= 10;
    const [search, setSearch]= useState('');
    const [showSearch, setShowSearch] = useState(false)
    const[cartItems, setcartItems]= useState({});
    const navigate= useNavigate();

    const addToCart= async (itemId, sizes)=>{

         if (!sizes) {
          toast.error("Please Select Product sizes")
          return;
         }
         let  cartData = structuredClone(cartItems);
         if(cartData[itemId]){
          if(cartData[itemId][sizes]){
            cartData[itemId][sizes] += 1;
          }
          else{
            cartData[itemId][sizes] = 1;
          }
         }
         else{
          cartData[itemId]={};
          cartData[itemId][sizes]=1;
         }
           setcartItems(cartData);
    }
   
    const getCartCount= () =>{
     let totalCount= 0;
     for(const items in cartItems){
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item]){
          totalCount += cartItems[items][item];
          }
        } catch (error) {
          
        }
       
      }
    }
    return totalCount;
    }
   const updateQuantity = async (itemId, size, quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemId][size]= quantity;
    setcartItems(cartData);
   }

   const getCartAmount =  ()=>{
    let totalAmount =0;
    for(const items in cartItems){
      let itemInfo= products.find((product)=> product._id === items);
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item]){
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        }
        catch(error){

        }
      }
    }
    return totalAmount;
   }

  const value={
      products , currency, delivery_fee,updateQuantity,
      search , setSearch , showSearch , setShowSearch, cartItems, addToCart,getCartCount, getCartAmount,navigate
  }
  return(
    <Shopcontext.Provider value={value}>
      {props.children}
    </Shopcontext.Provider>
  )
 }

 export default ShopcontextProvider;