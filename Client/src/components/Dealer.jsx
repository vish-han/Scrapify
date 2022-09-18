import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Dealer = ({ name, bio, address, phone, coord, id }) => {

  return (
    <>
      <div>
        <div className="box flex flex-col justify-center items-center my-4 w-full h-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-10 flex-wrap p-3 w-[60vw] md:w-auto md:p-0 bg-siteBlue rounded-2xl md:rounded-l-full md:rounded-r-full">
            <div>
              <img
                src={logo}
                alt=""
                className="rounded-full object-contain w-16 lg:w-20"
              />
            </div>
            <div className="flex flex-row items-center gap-5 flex-wrap justify-center">
              <div className="flex flex-col justify-center items-center text-white">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  {name}
                </h1>
                <h2 className="text-base sm:text-lg lg:text-xl">
                  Phone : {phone}
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center text-white">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold ">
                  Distance : <span className="text-white">{(Math.random() * 5 + 5).toFixed(2)} km</span>
                </h1>
              </div>
              <div className="flex flex-col items-center lg:flex-row justify-center text-white">
                <h1 className="text-lg lg:text-2xl">Rating:</h1>
                <p>🌟🌟🌟🌟🌟</p>
              </div>
            </div>
            <div className="flex-1 w-full text-white">
              <Link to={`dealerprofile/${id}`}>
                <button className="w-full bg-sitegreen text-textBlack flex justify-center items-center md:rounded-full md:p-3 lg:p-5 md:py-5 lg:py-7">
                  Deal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dealer;
