import React, { useEffect } from "react";
import image1 from "../assets/lookaround.svg";
import image2 from "../assets/recycle.jpg";
import image3 from "../assets/deal.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Aos from "aos";

export default function Services() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="box flex flex-col justify-center items-center px-[5vw] sm:px-[10vw]">
      {/* one */}
      <div
        className="flex flex-col md:flex-row justify-around mt-20 items-center gap-5"
        data-aos="zoom-in-down"
      >
        <div className="flex flex-col md:flex-[0.7] items-start">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold my-3">
            Check local Rates
          </h1>
          <p className="text-[12px] xs:text-sm sm:text-lg md:text-xl">
            Feel like you are unaware of the price rates you deserve for all the scrap you sell? Check here.
          </p>
          <Link to="dod">
            <div className="btn mt-3 flex gap-2 hover:gap-10 duration-500">
              Check Now
              <BsArrowRight />
            </div>
          </Link>
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
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold my-3">
            Find NearBy Dealers
          </h1>
          <p className="text-[12px] xs:text-sm sm:text-lg md:text-xl">
            There are a lot of scrap delers looking for the scrap. Our app ensures that the scrap is recycled. So if you have some scrap collected, contact someone from the dealers list.
          </p>
          <Link to="deal">
            <div className="btn mt-3 flex gap-2 hover:gap-10 duration-500">
              Make Deal <BsArrowRight />
            </div>
          </Link>
        </div>
      </div>
      {/* three */}
      <div className="flex flex-col md:flex-row justify-around mt-10 items-center gap-5">
        <div className="flex flex-col md:flex-[0.7] items-start">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold my-3">
            Why Recycle?
          </h1>
          <p className="text-[12px] xs:text-sm sm:text-lg md:text-xl">
            Most of us still don't understand the significance of recycling. Come lets dive deep into the issue and take our steps to save the environment.
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
