import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';

function Header() {
    const menuItems = [
        { key: "new", name: "New File" },
        { key: "copy", name: "Copy Link" },
        { key: "edit", name: "Edit File" },
        { key: "delete", name: "Delete File" },
      ];
  return (

    <div>
        <div className='bg-black text-white text-2xl grid grid-cols-2 '>
            <div className="font-bold py-5 px-5">HOME</div>
            <ul className='flex gap-7 py-5 px-10 justify-end '>
                
                <li className='hover:font-bold '>
                    Pages
                </li>
                <li className='hover:font-bold' >
                    Products
                </li>
                <li className='hover:font-bold'>
                    Cart
                </li>
                <li className='hover:font-bold'>
                    About
                </li>
                <li className='hover:font-bold'>
                    Sale
                </li>
            </ul>
        </div>
        <hr />
        <div className='bg-black text-2xl grid grid-cols-2'>
            <div>

            </div>
            <div>
                <ul className='flex gap-4 justify-end px-6'>
                    <li>
                        login
                    </li>
                    <li>
                        signup
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header