import React, { useContext } from "react";
import "../styles/animations.css";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../store";
import { toast } from "react-toastify";
const Profile = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "SIGN_OUT" });
    toast.success("Successfully logged out, see you again");
    navigate("/login");
  };

  return (
    <div className="profile flex flex-col ">
      <div className="profile flex flex-col items-center justify-center">
        <img
          src={userInfo.poster_path}
          alt=""
          className="w-[250px] rounded-full border-l-0 border-t-0 border-4 border-siteBlue mb-2"
        />
        <h1 className="text-5xl font-bold text-siteBlue text-center ">
          {userInfo.name}
        </h1>
        <div className="flex flex-col items-center mt-4">
          <span className="text-2xl text-green-500 mr-2 mb-2 mt-2 ">Bio:</span>
          <h1 className="text-2xl ml-2 ">{userInfo.bio}</h1>
          <span className="text-2xl text-green-500 mr-2 mt-2  mb-2">
            Address:
          </span>
          <h1 className="text-2xl ml-2 ">{userInfo.address}</h1>
          <span className="text-2xl text-green-500 mr-2  mb-2">Phone-No:</span>
          <h1 className="text-2xl ml-2 ">+{userInfo.phone}</h1>
          <div className="flex gap-5 flex-row my-5">
            <div
              className="btn duration-300"
              onClick={() => navigate("/rewards")}
            >
              Your Rewards
            </div>
            <div
              className="btn duration-300"
              onClick={() => navigate("/transactions")}
            >
              Transaction
            </div>
            <div className="btn duration-300" onClick={handleLogout}>
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
