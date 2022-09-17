import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="box flex flex-row justify-between items-center my-4 relative mb-3">
      <Link to="/">
        <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-siteBlue font-bold cursor-pointer">
          scrapify
        </h1>
      </Link>
      <div
        className="text-textBlack text-2xl sm:hidden block"
        onClick={() => setOpen(!open)}
      >
        <HiOutlineMenuAlt2 />
      </div>
      <div
        className={`nav-links ${
          open
            ? "flex duration-500 flex-col absolute top-10 right-10 bg-white z-50 p-3 border-sitegreen border-2"
            : "hidden"
        } sm:translate-x-0 sm:static sm:border-none sm:flex sm:flex-row items-center gap-5 text-[10px] xs:text-sm md:text-lg text-textBlack font-medium`}
      >
        <Link to="/">
          <p className="cursor-pointer text-xl sm:text-md">Home</p>
        </Link>
        <Link to="/deals">
        <p className="cursor-pointer text-xl sm:text-md">Deal</p>
        </Link>
        <Link to="/login">
          <p className="cursor-pointer text-xl sm:text-md">Log In</p>
        </Link>
        <Link to="/contact">
        <p className="cursor-pointer text-xl sm:text-md">Contact Us</p>
        </Link>
      </div>
    </div>
  );
}
