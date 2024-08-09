"use client";

import React, { FC } from "react";
import Image from "next/image";
import Logo from "@/public/fxkara-logo.svg";
import { GiCheckMark } from "react-icons/gi";
import signupCheck from "@/public/svg/signupCheck.svg";
import { useSelector } from "react-redux";

interface SignUpOptionsProps {
  options: string[];
  descriptions: string[];
}

interface AuthState {
  registrationStage: number;
  account_type: "individual" | "business";
}

const DesktopSignUpOptions: FC<SignUpOptionsProps> = ({
  options,
  descriptions,
}) => {
  const globalState = useSelector((state: { auth: AuthState }) => state.auth);
  const { registrationStage: level, account_type: accountType } = globalState;

  return (
    <div className="relative left-0  items-center top-0 h-full min-h-screen flex-col p-6 text-white  hidden md:flex  w-[411px]">
      <div className="mt-[1rem] w-[335px]">
        <Image src={Logo} alt="Logo" className=" w-[10rem] lg:w-48" />
      </div>
      <div className="pt-[15%] w-[335px]">
        {options.map((option: string, index: number) => (
          <div
            key={index}
            className="w-max flex justify-start items-start gap-x-[10px] gap-y-[32px]"
          >
            <div className="flex breathing-element flex-col items-center justify-center mt-2 gap-1">
              <div
                className={`w-[32px] p-[4px] h-[32px] gap-[10px] flex justify-center items-center rounded-full text-center ${
                  level >= index + 1 ? "bg-primaryBtn" : "bg-[#ccb4ff]"
                } text-white font-montserrat`}
              >
                {level >= index + 1 ? (
                  <GiCheckMark className="text-white-100 w-[16px] h-[14.01px]" />
                ) : (
                  <Image src={signupCheck} alt="" />
                )}
              </div>
              {index !== options.length - 1 && (
                <div
                  className={`w-[2px] h-[37px] bg-[#EAECF0] ${
                    accountType === "individual" && index === 4
                      ? "hidden"
                      : "block"
                  }`}
                ></div>
              )}
            </div>
            <div className=" font-lato mb-2">
              <h2 className=" text-[14px] lg:text-[18px] leading-[28px] tracking-[-2%] font-semibold min-w-max">
                {option}
              </h2>
              <p className="text-gray-300 text-[12px] lgLtext-sm pb-2 w-full">
                {descriptions[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopSignUpOptions;
