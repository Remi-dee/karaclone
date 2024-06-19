"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import Logo from "@/public/fxkara-logo.svg";
import { GiCheckMark } from "react-icons/gi";
import { useSelector } from "react-redux";
import { FaGlasses } from "react-icons/fa";
import signupCheck from "@/public/svg/signupCheck.svg";
// type Props = {
//   accountType: string;
//   active: number;
//   setActive: (active: number) => void;
// };
const SignUpOptions: FC<any> = () => {
  const globalState = useSelector((state: any) => state.auth);
  const level = globalState?.registrationStage;
  const accountType = globalState?.account_type;
  // console.log(accountType);

  const individualOptions = [
    "Choose Account Type",
    "Input Basic Details",
    "Create Password",
    "Verify Email Address",
    "Activate Two Factor Authentication",
  ];
  const individualOthers = [
    "Select the type of account you want",
    "Fill in your basic details to get started",
    "Create your password",
    "Verify  your registered email address",
    "Protect your account wIth 2FA ",
  ];

  const businessOptions = [
    "Choose Account Type",
    "Input Basic Details",
    "Input Business Details",
    "Create Password",
    "Verify Email Address",
    "Activate Two Factor Authentication",
  ];
  const businessOthers = [
    "Select the type of account you want",
    "Fill in your basic details to get started",
    "Fill in your business details",
    "Create your password",
    "Verify  your registered email address",
    "Protect your account wIth 2FA ",
  ];
  const optionsToRender =
    accountType === "individual" ? individualOptions : businessOptions;

  const othersToRender =
    accountType === "individual" ? individualOthers : businessOthers;
  return (
    <div className=" relative left-0 _justify-center items-center flex top-0 h-screen  flex-col   p-6  text-white max-sm:hidden  w-[431px]  ">
      <div className=" mt-[1rem] w-[335px]">
        <Image src={Logo} alt="" className="w-48" />
      </div>
      <div className=" pt-[15%] w-[335px]">
        {optionsToRender.map((option: any, index: number) => (
          <div
            key={index}
            className="  w-max flex justify-start items-start gap-x-[10px] gap-y-[32px] "
          >
            <div className="flex breathing-element flex-col items-center justify-center mt-2 gap-1">
              <div
                className={` w-[32px] p-[4px] h-[32px] gap-[10px] flex justify-center items-center rounded-full text-center ${
                  level >= index + 2 ? "bg-[#00A600] " : " bg-[#00A600]"
                }bg-primaryBtn text-white font-montserrat ${
                  level >= index + 1 ? "bg-primaryBtn" : "bg-[#ccb4ff]"
                }  `}
              >
                {level >= index + 1 ? (
                  <GiCheckMark className="text-white-100 w-[16px] h-[14.01px]" />
                ) : (
                  <Image src={signupCheck} alt="" />
                )}
              </div>
              {index !== 5 ? (
                <div
                  className={`w-[2px] h-[37px] bg-[#EAECF0]  ${
                    accountType === "individual" && index === 4
                      ? "hidden"
                      : "block"
                  } `}
                ></div>
              ) : (
                <span />
              )}
            </div>
            <div className="font-montserrat mb-2">
              <h2 className=" text-[18px] leading-[28px] tracking-[-2%] font-semibold min-w-max">
                {option}
              </h2>
              <p className="text-gray-300 text-sm pb-2 w-full">
                {othersToRender[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SignUpOptions;
