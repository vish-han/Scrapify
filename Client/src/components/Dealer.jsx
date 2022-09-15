import React from 'react'
import logo from '../assets/logo.jpg'
const Dealer = () => {
  return (
    <>
    <div>
    <div className="flex flex-col justify-center items-center my-4 w-full h-full">

    <div className="flex flex-row bg-emerald-400 w-[80vw] h-[60px] rounded-full justify-around hover:justify-between content-center">
      <img src={logo} alt="" className="rounded-full w-[50px] h-[50px]"  />
     <div  className="flex flex-col justify-center text-white">
      <h1 className="text-2xl font-bold">Vishal Chauhan</h1>
      <h2 className="text-xl">Phone : 9871838347</h2>
     </div>
     <div  className="flex flex-col justify-center text-white">
     <h1 className="text-2xl font-bold ">Distance : <span className="text-siteBlue">20Km</span></h1>
      <h2 className="text-xl">Phone : 9871838347</h2>
     </div>
     <div  className="flex flex-col justify-center text-white">
     <h1 className="text-2xl ">Rating:🌟🌟🌟🌟🌟</h1>
    
     </div>
     <div  className="flex flex-col justify-center text-white">
     <button className="btn rounded-full p-4">Deal</button>
    
     </div>

      
      
    </div>
    </div>
    </div>
    </>)
}

export default Dealer