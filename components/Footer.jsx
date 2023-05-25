import React from 'react'

function Footer() {
  return (
    <div className='bg-black  '>
        <div className='  md:flex grid-cols-4 md:py-10  my-14  gap-36 mx-11'>
            <div className='text-white text-4xl w-full'>
            
            <h3>About The Store</h3>

            <p className='text-xl text-white font-semibold mt-9 justify-center'>
            The Store at Shoponix is an original voice, and one of the leading shopping destinations in New York City, offering a curated selection of well-executed contemporary artist-made objects and jewelry.
            </p>

            </div>
            <div className='text-white text-4xl'>
            Quick Links
            <ul className='mt-9 text-xl '>
                <li>
                About Us 
                </li>
                <li className='mt-3'>
                Shop Now!
                </li>
                <li className='mt-3'>
                Cart
                </li>
            </ul>

            </div>
            <div className='text-white text-4xl'>
            Support Links
            
            <ul className='mt-9 text-xl '>
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
                divyesh012@gmail.com
                </li>
            </ul>

            </div>

        </div>

    </div>
  )
}

export default Footer
