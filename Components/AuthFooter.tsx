import React from "react";

function AuthFooter() {
  return (
    <div className="flex justify-between items-center text-gray-700 px-10 mt-auto h-12">
      <p className="whitespace-nowrap text-xs md:text-base">
        © FXkarasell 2024
      </p>
      <div className="flex items-center">
        {" "}
        <div className="h-1 w-1 m-2  rounded-full bg-[#7C7C7C]"></div>
        <p className="whitespace-nowrap text-xs md:text-base">Help center</p>
      </div>
      <div className="flex items-center">
        {" "}
        <div className="h-1 w-1 m-2   rounded-full bg-[#7C7C7C]"></div>
        <p className="whitespace-nowrap text-xs md:text-base">
          Terms of Service
        </p>
      </div>
    </div>
  );
}

export default AuthFooter;
