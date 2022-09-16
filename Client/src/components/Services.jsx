import React from "react";
import image1 from "../assets/lookaround.svg";
import image2 from "../assets/recycle.jpg";
import image3 from "../assets/deal.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="box flex flex-col justify-center items-center px-[5vw] sm:px-[10vw]">
      {/* one */}
      <div className="flex flex-col md:flex-row justify-around mt-20 items-center gap-5">
        <div className="flex flex-col md:flex-[0.7] items-start">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold my-3">
            Check Your Deals
          </h1>
          <p className="text-[12px] xs:text-sm sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            repellendus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid, enim.
          </p>
          <div className="btn mt-3 flex gap-2 hover:gap-10 duration-500">
            Check Now
            <BsArrowRight />
          </div>
        </div>
        <div className="md:flex-[0.3] flex items-center justify-center">
          <img
            src={image1}
            alt="look around"
            className="object-contain w-3/4 md:w-full"
          />
        </div>
      </div>
      {/* two */}
      <div className="flex flex-col md:flex-row justify-around mt-10 items-center gap-5">
        <div className="md:flex-[0.3] flex items-center justify-center">
          <img
            src={image3}
            alt="look around"
            className="object-contain w-3/4 md:w-full"
          />
        </div>
        <div className="flex flex-col md:flex-[0.7] items-start">
<<<<<<< HEAD
       
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold my-3">Find NearBy Dealers</h1>
=======
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold my-3">
            Find NearBy Dealers
          </h1>
>>>>>>> 91dad02a793d8a058cacc40095269cca5b1b5c3a
          <p className="text-[12px] xs:text-sm sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            repellendus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid, enim.
          </p>
<<<<<<< HEAD
          <Link to="deals">
          <div className="btn mt-3 flex gap-2 hover:gap-10 duration-500">Make Deal <BsArrowRight/></div>
          </Link>
=======
          <div className="btn mt-3 flex gap-2 hover:gap-10 duration-500">
            Make Deal <BsArrowRight />
          </div>
>>>>>>> 91dad02a793d8a058cacc40095269cca5b1b5c3a
        </div>
      </div>
      {/* three */}
      <div className="flex flex-col md:flex-row justify-around mt-10 items-center gap-5">
        <div className="flex flex-col md:flex-[0.7] items-start">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold my-3">
            Why Recycle?
          </h1>
          <p className="text-[12px] xs:text-sm sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            repellendus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid, enim.
          </p>
          <Link to="info">
            <div className="btn mt-3 flex gap-2 hover:gap-10 duration-500">
              Learn More <BsArrowRight />
            </div>
          </Link>
        </div>
        <div className="md:flex-[0.3] flex items-center justify-center">
          <img
            src={image2}
            alt="look around"
            className="object-contain w-3/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
