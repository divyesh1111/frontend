import React from 'react'
import { FaHome } from 'react-icons/fa';

function Header() {
   
  return (

    <div className='bg-black'>
        <div className='bg-black text-white text-2xl flex grid-cols-6 ml-40 '>
            <div className="font-bold py-5 px-5 flex bg-black hover:bg-gray-800">
                
                <FaHome className='mr-3  '  size='2rem'/>
                HOME
            </div>
            <div  className="font-semibold py-5 px-5 flex bg-black hover:bg-gray-800"  >
                Pages
            </div>
            <div  className="font-semibold py-5 px-5 flex bg-black hover:bg-gray-800 " >
            Products
            </div>
            <div   className="font-semibold py-5 px-5 flex bg-black hover:bg-gray-800 ">
            Cart
            </div>
            <div   className="font-semibold py-5 px-5 flex bg-black hover:bg-gray-800 ">
            About
            </div>
            <div  className="font-semibold py-5 px-5 flex bg-black hover:bg-gray-800 ">
            Sale
            </div>
            
           
        </div>
       
        <div className='bg-black  text-2xl text-white gap-5 justify-end mr-96 flex grid-cols-3 '>
            <div  className='bg-black py-5 px-5 hover:bg-gray-800' >
                LOGIN 
            </div>
            <div  className='bg-black py-5 px-5 hover:bg-gray-800'>
                SIGN UP 
            </div>
            <div className='py-5 px-5 '>
            <input  classname='bg-gray-slate-500 '  type="text" class="prompt" placeholder="Search..." name="search" value="" />              
            </div>
        </div>
    </div>
  )
}

export default Header