import React from "react";
import banner from "../assets/heroBanner.jpg";
const Loading = () => {
  return (
    <div className="loading flex flex-row justify-start align-center ">
      <img
        src={banner}
        alt="Loading"
        className="w-[700px] h-[500px] translate-x-32 duration-300 "
      />
    </div>
  );
};

export default Loading;
