import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-black  '>
        <div className='  md:flex md:grid-cols-4 md:py-10  my-14 gap-10 ml-11 w-auto'>
            <div className='text-white text-4xl  pb-9'>
            
            <h3>About The Store</h3>

            <p className='text-xl text-white font-semibold mt-9 justify-center sm:w-60 indent-12'>
            The Store at Shoponix is an original voice, and one of the leading shopping destinations in New York City, offering a curated selection of well-executed contemporary artist-made objects and jewelry.
            </p>

            </div>
            <div className='text-white text-4xl pb-9'>
            Quick Links
            <ul className='mt-5 text-xl '>
                <li>
                About Us 
                </li>
                <li className='mt-3 w-32'>
                Shop Now!
                </li>
                <li className='mt-3'>
                Cart
                </li>
            </ul>

            </div>
            <div className='text-white text-4xl pb-9'>
            Support Links
            
            <ul className='mt-5 text-xl '>
                <li className=''>
                Sign Up
                </li>
                <li className='mt-3'>
                Login
                </li>
                <li className='mt-3'>
                Home
                </li>
            </ul>
            </div>
            <div className='text-white text-4xl'>
            Contact Info

            <ul className='mt-9 text-xl '>
                <li className='list-disc'>
                Katargam , Surat, Gujrat.
                </li>
                <li className='mt-3 list-disc'>
                +91 6-- 5-- 7-- 3
                </li>
                <li className='mt-3 list-disc'>
                krishnamiroliya5@gmail.com<br/>
                </li>
                <li className='mt-3 list-disc'>             
                divyeshhirpara012@gmail.com
                </li>
            </ul>

            </div>

        </div>
        <div className='flex justify-center mb-7 '>
            Copyright <AiOutlineCopyright className=' text-lg mt-auto mx-2' />2023 <span className='mx-1'><b>SHOPOHOLIC</b></span> Designed by 116 & 215 | <span className='mx-1'> All Rights Reserved</span>
        </div>

    </div>
  )
}

export default Footer
