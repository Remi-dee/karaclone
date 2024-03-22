import React from "react";
import Link from "next/link";

import { IoIosCheckmark } from "react-icons/io";
const TwoFactorSuccess = () => {
  return (
    <div className="w-[500px] mx-auto  shadow-lg rounded-md border border-white-100">
      <div className="w-[400px] pt-6 mx-auto">
        <div className="w-[35px] h-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-md ">
          <div className="w-[20] bg-green-500 rounded-sm text-white-100">
            <IoIosCheckmark className="w-full" />
          </div>
        </div>
        <h3 className="font-semibold text-xl py-2">
          Two Factor Authentication Activated Successfully
        </h3>
        <p className="text-gray-200 text-sm pb-4">
          Two factor authentication has been successfully enabled for your
          account. Your account is now more secure
        </p>
        <Link href={"/dashboard"}>
          <button className="w-full p-2 mb-6 rounded-md text-center  bg-primaryBtn text-white-100 ">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TwoFactorSuccess;
