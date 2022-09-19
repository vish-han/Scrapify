import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/heroBanner.jpg";
import "../styles/animations.css";

export default function Hero() {
  return (
    <div className="box flex flex-col md:flex-row gap-3 md:gap-5 justify-between items-center">
      <div className="md:flex-[0.5] flex items-start flex-col justify-center mt-5">
        <h1 className="hero-head text-xl sm:text-3xl lg:text-5xl font-bold my-1 sm:my-3 lg:my-5 text-textBlack relative">
          <span>E</span>fficient <span>W</span>aste <span>M</span>anagement{" "}
          <span>S</span>olution
        </h1>
        <p className="text-[10px] sm:text-sm md:text-base lg:text-lg">
          We aims to create a fully organized, digitalized and efficient scrap
          management system.We connect households with scrap dealers and maintains a flawless link of transactions between them.
        </p>
        <Link to="deal">
          <div className="btn mt-5">Make A Deal</div>
        </Link>
      </div>
      <div className="md:flex-[0.5] relative ">
        <img src={banner} alt="banner" className="object-contain z-50" />
      </div>
    </div>
  );
}
