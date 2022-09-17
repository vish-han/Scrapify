import React from "react";
import logo from "../assets/logo.jpg";
import map from "../assets/map.png";
import {Link} from "react-router-dom"
const DealerProfile = () => {
  return (
    <div>
      <div className="profile flex flex-col ">
        <div className="profile flex flex-col items-center justify-center">
          <img
            src={logo}
            alt=""
            className="w-[250px] h-[250px] rounded-full border-l-0 border-t-0 border-4 border-siteBlue mb-2"
          />
          <h1 className="text-5xl font-bold text-siteBlue text-center ">
            Vishal Chauhan
          </h1>
          <div className="flex flex-col items-center mt-4">
            <span className="text-2xl text-green-500 mr-2 mb-2 mt-2 ">
              Bio:
            </span>
            <h1 className="text-2xl ml-2 ">
              A Student from Delhi, Doing his bit to save the environment🌍
            </h1>
            <span className="text-2xl text-green-500 mr-2 mt-2  mb-2">
              Address:
            </span>
            <h1 className="text-2xl ml-2 ">
              S-576, School Block , Shakarpur , Delhi-92
            </h1>
            <span className="text-2xl text-green-500 mr-2  mb-2">
              Phone-No:
            </span>
            <h1 className="text-2xl ml-2 ">9871047259</h1>
          </div>
          <div className="flex  box  rounded-lg my-3">
        <img src={map} alt="Map Image" />
      </div>
      <Link to="timeline">
        <div className="btn mt-5 duration-300 mb-5">Make a Deal</div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default DealerProfile;
