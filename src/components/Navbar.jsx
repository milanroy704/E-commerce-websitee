import React, {useContext, useState} from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext';
const Navbar = () => {
  const[visible,setVisible] = useState(false);
  const [dropVisibility,setDropVisibility]=useState(false)
function updateVisibility(){
  setDropVisibility((prev)=>!prev)
}

   const {setShowSearch, getCartCount} = useContext(Shopcontext);
  return (
    <div className='flex items-center justify-between py-3 font-medium'>
    <Link to={'/'}><img src={assets.logo1}   alt="" /></Link> 
    <ul className='hidden  sm:flex gap-5 text-sm text-blue-500 font-bold'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p>HOME</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden/>
        </NavLink>
        <NavLink to='/collection' className=' flex flex-col items-center gap-1'>
        <p>COLLECTIONS</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden/>
        </NavLink>
        <NavLink to='/about' className=' flex flex-col items-center gap-1'>
        <p>ABOUT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden/>
        </NavLink>
        <NavLink to='/contact' className=' flex flex-col items-center gap-1'>
        <p>CONTACT</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'hidden/>
        </NavLink>
    </ul>
    <div className='flex items-center gap-6'>
      <img onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer'  src={assets.search_icon} alt="" />

      <div className='group-realtive'>
       <Link to={'/login'}> <img className='w-5 cursor-pointer'  src={assets.profile_icon} alt=""/></Link>
         <div className={dropVisibility ?'group-hover:block  absolute dropdown-menu right-0 pt-4':"group-hover:block hidden absolute dropdown-menu right-0 pt-4"}>
          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p>
          </div>
         </div>
      </div>
      <Link to='/cart' className='relative'>
      <img className='w-5 min-w-5 cursor-pointer' src={assets.cart_icon} alt=""/>
      <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[-8px]'>{getCartCount()}</p>
      </Link>
      <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=""/>
    </div>
    {/* Sidebar menu for small screen  */}
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img  className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p className='text-sm'>Menu</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border '  to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border ' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border '  to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border ' to='/contact'>CONTACT</NavLink>
        </div>
    </div>
    </div>
  )
}

export default Navbar