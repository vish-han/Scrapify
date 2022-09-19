  import React from "react";

  export default function WhoWeAre() {
    return (
      <div className="py-[10vh] px-[6vw] sm:px-[10vw] lg:px-[10vw] shadow-textBlack shadow-md text-center  flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 mb-10 mt-20">
        <div className="box">
        <h1 className=" sm:text-2xl md:text-6xl  font-bold my-2 text-white">What We Are</h1>
        <p className=" text-lg sm:text-base text-white ">
          Scrapify is a project build to eradicate the problems of inefficient and slow waste management system and inproper disposal of recyclable products. Scrapify enables end-to-end user connectivity, great user friendliness, a sharp check on scrap disposal pipeline.
        </p>
        </div>
      </div>
    );
  }
