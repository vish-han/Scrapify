import React from "react";
import map from "../assets/map.png";
const Deals = () => {
  return (
    <div className="box flex flex-col  justify-start ml-[-20px] ">
      <div className="flex w-[100vw] ml-[-4.4px] ">
        <img src={map} alt="Map Image"/>
      </div>
      <div className="flex items-center justify-center w-[100vw] mt-3 flex-col">
        {" "}
        <h1 className="  text-siteBlue mx-2 font-bold text-5xl ">
          Find in Maps
        </h1>
        
      </div>
      <Dealer/>
    </div>
  );
};

export default Deals;
