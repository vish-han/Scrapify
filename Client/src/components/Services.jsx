import React from "react";
import image1 from "../assets/lookaround.svg";
import image2 from "../assets/recycle.jpg";
import image3 from "../assets/deal.jpg";
import { BsArrowRight } from "react-icons/bs";

export default function Services() {
  return (
    <div className="box flex flex-col justify-center items-center px-[10vw]">
      {/* one */}
      <div className="flex flex-row justify-around mt-20 items-center gap-5">
        <div className="flex flex-col flex-[0.7] items-start">
          <h1 className="text-3xl font-semibold my-3">Check Your Deals</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            repellendus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid, enim.
          </p>
          <div className="btn mt-3 flex gap-2 hover:gap-10 duration-500">Check Now <BsArrowRight/></div>
        </div>
        <div className="flex-[0.3] flex items-center justify-center">
          <img src={image1} alt="look around" className="object-contain" />
        </div>
      </div>
      {/* two */}
      <div className="flex flex-row justify-around mt-20 items-center gap-5">
        <div className="flex-[0.3] flex items-center justify-center">
          <img src={image3} alt="look around" className="object-contain" />
        </div>
        <div className="flex flex-col flex-[0.7] items-start">
          <h1 className="text-3xl font-semibold my-3">Find NearBy Dealers</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            repellendus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid, enim.
          </p>
          <div className="btn mt-3 flex gap-2 hover:gap-10 duration-500">Make Deal <BsArrowRight/></div>
        </div>
      </div>
      {/* three */}
      <div className="flex flex-row justify-around mt-20 items-center gap-5">
        <div className="flex flex-col flex-[0.7] items-start">
          <h1 className="text-3xl font-semibold my-3">Why Recycle?</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            repellendus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid, enim.
          </p>
          <div className="btn mt-3 flex gap-2 hover:gap-10 duration-500">Learn More <BsArrowRight/></div>
        </div>
        <div className="flex-[0.3] flex items-center justify-center">
          <img src={image2} alt="look around" className="object-contain" />
        </div>
      </div>
    </div>
  );
}
