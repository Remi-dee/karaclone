import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const Trade = () => {
  return (
    <div className="p-0 m-0 box-border">
      <div className="w-full min-h-[70vh] shadow-lg rounded-md">
        <div className="w-[96%] mx-auto">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl">P2P Trading</span>
            <div className="flex justify-center items-center p-1 gap-2 cursor-pointer bg-primaryBtn rounded-md text-white-100">
              <IoIosAddCircle />
              <p className="text-xs">New Ad</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
