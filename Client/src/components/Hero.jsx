import React from "react";
import banner from "../assets/heroBanner.jpg";
import '../styles/animations.css'

export default function Hero() {
  return (
    <div className="box flex flex-col md:flex-row gap-3 md:gap-5 justify-between items-center">
      <div className="md:flex-[0.5] flex items-start flex-col justify-center mt-5">
        <h1 className="hero-head text-xl sm:text-3xl lg:text-5xl font-bold my-1 sm:my-3 lg:my-5 text-textBlack relative">
         <span>E</span>fficient <span>W</span>aste <span>M</span>anagement <span>S</span>olution
        </h1>
        <p className="text-[10px] sm:text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis
          nam placeat nihil autem laboriosam ipsam dolore esse maxime, quibusdam
          est ullam, ducimus vero possimus rerum exercitationem saepe deleniti
          harum?
        </p>
        <div className="btn mt-5">Make A Deal</div>
      </div>
      <div className="md:flex-[0.5] relative ">
        <img
          src={banner}
          alt="banner"
          className="object-contain z-50"
        />
      </div>
    </div>
  );
}
