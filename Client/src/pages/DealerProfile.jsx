import React from "react";
import logo from "../assets/logo.jpg";
import map from "../assets/map.png";
import { Link, useParams } from "react-router-dom";
import { geojson } from "./Deals";
import { useEffect } from "react";
import { useState } from "react";

const DealerProfile = () => {
  const params = useParams();
  const { id } = params;
  const [dealerData, setDealerData] = useState(null);

  useEffect(() => {
    const data = geojson.features.find((geo) => geo.id === id);
    setDealerData(data);
  }, []);
  return (
    <div>
      {dealerData ? (
        <div className="profile flex flex-col ">
          <div className="profile flex flex-row items-center justify-center gap-8	 mt-4">
            <img
              src={logo}
              alt=""
              className="w-[250px] h-[250px] rounded-full border-l-0 border-t-0 border-4 border-siteBlue mb-2"
            />
          
            <div className="flex flex-col items-center mt-4">
            <h1 className="text-5xl font-bold text-siteBlue text-center ">
              {dealerData.properties.title}
            </h1>
              <span className="text-2xl text-green-500 mr-2 mb-2 mt-2 ">
                Bio:
              </span>
              <h1 className="text-2xl ml-2 ">{dealerData.properties.description}</h1>
              <span className="text-2xl text-green-500 mr-2 mt-2  mb-2">
                Address:
              </span>
              <h1 className="text-2xl ml-2 ">{dealerData.extraInfo.address}</h1>
              <span className="text-2xl text-green-500 mr-2  mb-2">
                Phone-No:
              </span>
              <h1 className="text-2xl ml-2 ">+{dealerData.extraInfo.phone}</h1>
            </div>
           
            
          </div>
          <div className="flex  box  rounded-lg my-3">
              <img src={map} alt="Map Image" />
              
            </div>
            <Link to="deals/dealerprofile/createDeal">
              <div className="btn mt-5  w-1/6 duration-300 mb-5 mx-auto flex justify-center text-center">Make a Deal</div>
            </Link> 
        </div>
         
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DealerProfile;
