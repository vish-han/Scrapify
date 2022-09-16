import React from "react";
import Footer from "../components/Footer";
import '../styles/animations.css'

const Info = () => {
  return (
    <>
    <div className="text-center justify-center text-xl sm:text-3xl lg:text-4xl font-bold">A Eco-Friendly Guide To<span className="text-siteBlue mx-2">Waste Management</span></div>
      <div className="box flex flex-row md:flex-row gap-3 md:gap-5 justify-between items-center mb-5">
        <div className="md:flex flex items-start flex-col justify-center mt-5">
          <h1 className="hero-head text-xl sm:text-3xl lg:text-5xl font-bold my-1 sm:my-3 lg:my-5 text-textBlack relative">
            <span>W</span>hy<span> R</span>ecycle?
          </h1>
          <p className="text-[10px] sm:text-sm md:text-base lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nobis quas voluptatibus voluptatem consectetur dolorum eligendi,
            quod ex, aliquam temporibus at, vel nemo non asperiores ipsa
            quaerat! Pariatur ullam quas, architecto sapiente ratione quaerat
            fugit dolor velit doloremque consectetur ipsa deserunt veniam
            officiis placeat unde?
          </p>
        </div>
      </div>
      <div className="box flex flex-row md:flex-row gap-3 md:gap-5 justify-between items-center  mb-5">
        <div className="md:flex flex items-start flex-col justify-center mt-5">
          <h1 className="hero-head text-xl sm:text-3xl lg:text-5xl font-bold my-1 sm:my-3 lg:my-5 text-textBlack relative">
            <span>W</span>hat<span> N</span>ot <span>D</span>oing{" "}
            <span>R</span>ecyling <span>D</span>oes?
          </h1>
          <p className="text-[10px] sm:text-sm md:text-base lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nobis quas voluptatibus voluptatem consectetur dolorum eligendi,
            quod ex, aliquam temporibus at, vel nemo non asperiores ipsa
            quaerat! Pariatur ullam quas, architecto sapiente ratione quaerat
            fugit dolor velit doloremque consectetur ipsa deserunt veniam
            officiis placeat unde?
          </p>
        </div>
      </div>
      <div className="box flex flex-row md:flex-row gap-3 md:gap-5 justify-between items-center  mb-5">
        <div className="md:flex flex items-start flex-col justify-center mt-5">
          <h1 className="hero-head text-xl sm:text-3xl lg:text-5xl font-bold my-1 sm:my-3 lg:my-5 text-textBlack relative">
            <span>W</span>hy<span> R</span>ecycle?
          </h1>
          <p className="text-[10px] sm:text-sm md:text-base lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            nobis quas voluptatibus voluptatem consectetur dolorum eligendi,
            quod ex, aliquam temporibus at, vel nemo non asperiores ipsa
            quaerat! Pariatur ullam quas, architecto sapiente ratione quaerat
            fugit dolor velit doloremque consectetur ipsa deserunt veniam
            officiis placeat unde?
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Info;
