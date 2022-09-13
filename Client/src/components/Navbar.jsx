import React from 'react'

export default function Navbar() {
  
  return (
    <div className='box flex flex-row justify-between items-center my-4'>
        <h1 className='uppercase text-4xl text-siteBlue font-bold cursor-pointer'>scrapify</h1>
        <div className="nav-links flex flex-row items-center gap-5 text-md text-textBlack font-medium">
          <p className='cursor-pointer'>Home</p>
          <p className='cursor-pointer'>Deal</p>
          <p className='cursor-pointer'>Contact Us</p>
        </div>
    </div>
  )
}
