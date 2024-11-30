import { useState } from 'react'

import './App.css'
import {Routes, Route } from 'react-router-dom'
import About from "./pages/About"

import Contact from "./pages/Contact"
import Home from "./pages/Home"
import PlaceOrder from "./pages/PlaceOrder"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Orders from "./pages/Orders"
import Navbar from "./components/Navbar"
import Collections from './pages/Collections'
import Footeer from './components/Footeer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <div className="px-2 sm:px -[3vw] md:px-[5vw] lg:px-[7vw] ">
      <ToastContainer/>
    <Navbar/>
    <SearchBar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/collection' element={<Collections/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/placeorder' element={<PlaceOrder/>}/>
    <Route path='/product/:productId' element={<Product/>}/>
      </Routes>
      <Footeer/>
    </div>
  )
}

export default App
