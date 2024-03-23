"use client";
import React, { useState } from "react";
import { MdMail } from "react-icons/md";
import EmailVerifySuccess from "./EmailVerifySuccess";
const VerifyEmail = () => {
  const [verifyEmail, setVerifyEmail] = useState(true);
  const toggleVerification = () =>{
    setVerifyEmail(false)
  }
  return (
    <>
      {verifyEmail ? (
        <div className="w-[500px] mx-auto  shadow-lg  rounded-md border border-white-100">
          <div className="w-[400px] pt-6 mx-auto">
            <div className="w-[25px] flex justify-center items-center shadow-md border border-gray-200  rounded-md h-[25px]">
              <MdMail className="text-sm" />
            </div>
            <h3 className="py-2 font-semibold text-2xl">
              Verify Your Email Address
            </h3>
            <p className="text-gray-300 text-sm">
              We sent an OTP code to the email address you provided to verify
              your email address
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
            <button  onClick={toggleVerification} className="w-full p-2 mb-4 rounded-md text-center  bg-primaryBtn text-white-100 ">
              Verify
            </button>
            <p className="text-gray-200 text-center text-sm pt-2">
              Did&apos;t get the email? Can resend in{" "}
              <span className="text-red-400">00:27mins</span> Resend Code
            </p>
            <p className="text-center font-semibold text-sm pb-4">
              Resend Code
            </p>
          </div>
        </div>
      ) : (
        <EmailVerifySuccess />
      )}
    </>
  );
};

export default VerifyEmail;
