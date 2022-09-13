import React, { useState } from 'react'
import {HiOutlineMenuAlt2} from 'react-icons/hi'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className='box flex flex-row justify-between items-center my-4 relative'>
        <h1 className='uppercase text-2xl sm:text-3xl md:text-4xl text-siteBlue font-bold cursor-pointer'>scrapify</h1>
        <div className='text-textBlack text-2xl sm:hidden block' onClick={() => setOpen(!open)}>
          <HiOutlineMenuAlt2/>
        </div>
        <div className={`nav-links ${open ? 'flex duration-500 flex-col absolute top-10 right-10 bg-white z-50 p-3 border-sitegreen border-2': 'hidden'} sm:translate-x-0 sm:static sm:border-none sm:flex sm:flex-row items-center gap-5 text-[10px] xs:text-sm md:text-lg text-textBlack font-medium`}>
          <p className='cursor-pointer'>Home</p>
          <p className='cursor-pointer'>Deal</p>
          <p className='cursor-pointer'>Contact Us</p>
        </div>
    </div>
  )
}
