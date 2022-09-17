import React, { useContext } from "react";
import "../styles/animations.css";
import { Link } from "react-router-dom";
import { Store } from "../store";
const Profile = () => {
    const {state} = useContext(Store);
    const {userInfo} = state;

  return (
    <div className="profile flex flex-col ">
      <div className="profile flex flex-col items-center justify-center">
        <img
          src={userInfo.poster_path}
          alt=""
          className="w-[250px] h-[250px] rounded-full border-l-0 border-t-0 border-4 border-siteBlue mb-2"
        />
        <h1 className="text-5xl font-bold text-siteBlue text-center ">
        {userInfo.name}
        </h1>
        <div className="flex flex-col items-center mt-4">
          <span className="text-2xl text-green-500 mr-2 mb-2 mt-2 ">Bio:</span>
          <h1 className="text-2xl ml-2 ">
            {userInfo.bio}
          </h1>
          <span className="text-2xl text-green-500 mr-2 mt-2  mb-2">
            Address:
          </span>
          <h1 className="text-2xl ml-2 ">
          {userInfo.address}
          </h1>
          <span className="text-2xl text-green-500 mr-2  mb-2">Phone-No:</span>
          <h1 className="text-2xl ml-2 ">+{userInfo.phone}</h1>
          <div className="flex flex-row">
            <Link to="rewards">
              <div className="btn mt-5 mr-10 duration-300">Your Rewards</div>
            </Link>
            <Link to="transactions">
              <div className="btn mt-5 duration-300">Transaction</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
