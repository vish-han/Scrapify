import React from "react";

export default function AuthSwitch({isDealer, setIsDealer}) {
  
  return (
    <div className="flex flex-row gap-2 items-center justify-between relative">
      <div
        className={`absolute ${
          !isDealer ? "translate-x-[100%]" : "translate-x-0"
        } duration-300 left-0 top-0 opacity-80 bg-siteBlue w-[50%] h-[100%]`}
      />
      <div
        className="cursor-pointer p-2 flex items-center justify-center bg-sitegreen flex-1"
        onClick={() => setIsDealer(!isDealer)}
      >
        HouseHold
      </div>
      <div
        className="cursor-pointer p-2 flex items-center justify-center bg-sitegreen flex-1"
        onClick={() => setIsDealer(!isDealer)}
      >
        Dealer
      </div>
    </div>
  );
}
