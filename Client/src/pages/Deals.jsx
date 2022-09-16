import React from "react";
import map from "../assets/map.png";
import Dealer from "../components/Dealer";
const Deals = () => {
  return (
    <div className="box flex flex-col justify-start h-full">
      <div className="flex  ml-[-4.4px] rounded-lg my-3">
        <img src={map} alt="Map Image" />
      </div>

      <h1 className="  text-siteBlue mx-2 font-bold text-center text-xl sm:text-3xl md:text-5xl my-5 sm:my-10">
        Find in Maps
      </h1>
      <Dealer />
      <Dealer />
      <Dealer />
    </div>
  );
};

export default Deals;
