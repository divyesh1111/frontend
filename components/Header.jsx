import React from 'react'


function Header() {
    const menuItems = [
        { key: "new", name: "New File" },
        { key: "copy", name: "Copy Link" },
        { key: "edit", name: "Edit File" },
        { key: "delete", name: "Delete File" },
      ];
  return (

    <div>
        <div className='bg-black text-white text-2xl flex '>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Home pages
                </li>
                <li >
                    Products
                </li>
                <li>
                    Cart
                </li>
                <li>
                    About
                </li>
                <li>
                    Sale?
                </li>
            </ul>
        </div>
        <div className='bg-black'>

        </div>
    </div>
  )
}

export default Header