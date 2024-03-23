import Link from "next/link";
import React from "react";
import { MdMail } from "react-icons/md";
const TwoFactorCode = () => {
  return (
    <div className="w-[500px] mx-auto  shadow-lg  rounded-md border border-white-100">
      <div className="w-[400px] pt-6 mx-auto">
        <div className="w-[25px] flex justify-center items-center shadow-md border border-gray-200  rounded-md h-[25px]">
          <MdMail className="text-sm" />
        </div>
        <h3 className="py-2 font-semibold text-2xl">
          Complete Two Factor Authentication Process
        </h3>
        <p className="text-gray-300 text-sm">
          Enter the verification code sent to you to complete your two factor
          authentication process
        </p>
        <div className="flex justify-start items-center my-4 gap-4">
          <input
            type=""
            className="w-[40px] h-[40px]  placeholder-black font-Poppins text-2xl text-center font-semibold rounded-md border-2 border-black"
            placeholder="0"
            maxLength={1}
          />
          <input
            type=""
            className="w-[40px] h-[40px] placeholder-black font-Poppins text-2xl text-center font-semibold rounded-md border-2 border-black"
            placeholder="0"
            maxLength={1}
          />
          <input
            type=""
            className="w-[40px] h-[40px] placeholder-black font-Poppins text-2xl text-center font-semibold rounded-md border-2 border-black"
            placeholder="0"
            maxLength={1}
          />
          <input
            type=""
            className="w-[40px] h-[40px] placeholder-black font-Poppins text-2xl text-center font-semibold rounded-md border-2 border-black"
            placeholder="0"
            maxLength={1}
          />
          <input
            type=""
            className="w-[40px] h-[40px] placeholder-black font-Poppins text-2xl text-center font-semibold rounded-md border-2 border-black"
            placeholder="0"
            maxLength={1}
          />
          <input
            type=""
            className="w-[40px] h-[40px] placeholder-black font-Poppins text-2xl text-center font-semibold rounded-md border-2 border-black"
            placeholder="0"
            maxLength={1}
          />
        </div>
        <Link href={"/signUp/activate-2fa/success"}>
        <button className="w-full p-2 mb-6 rounded-md text-center  bg-primaryBtn text-white-100 ">
          Verify
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TwoFactorCode;
