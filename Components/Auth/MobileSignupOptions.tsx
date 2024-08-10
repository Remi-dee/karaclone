"use client";

import React, { FC } from "react";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import signupCheck from "@/public/svg/signupCheck.svg";
import { useDispatch, useSelector } from "react-redux";
import blackBackBtn from "@/public/svg/blackBackBtn.svg";
import {
  individualDescriptions,
  individualOptions,
} from "@/app/helpers/registration";
import { decreaseRegistrationStage } from "@/redux/features/auth/authSlice";
interface AuthState {
  registrationStage: number;
  account_type: "individual" | "business";
}

const MobileSignUpOptions: FC = () => {
  const globalState = useSelector((state: { auth: AuthState }) => state.auth);
  const { registrationStage: level, account_type: accountType } = globalState;
  const dispatch = useDispatch();
  return (
    <div className=" realtive p-6  flex-col md:hidden  ">
      {level !== 1 && (
        <div className="  h-max block">
          <Image
            src={blackBackBtn}
            onClick={() => dispatch(decreaseRegistrationStage())}
            aria-description="Back Button"
            aria-label="Button"
            alt="back button"
            className="w-[24px] h-[24px]"
          />
        </div>
      )}
      <div className="relative w-full left-0 justify-center items-center pt-5 text-white   ">
        <div className=" w-full flex  justify-center ">
          {individualOptions.map((option: string, index: number) => (
            <div
              key={index}
              className=" w-full flex   items-center justify-between  gap-x-[2px] gap-y-[32px]"
            >
              <div className="flex breathing-element w-full flex-row items-center justify-center mt-2 gap-1">
                <div
                  className={`w-[26px] sm:w-[32px] sm:h-[32px] p-[4px] h-[26px] gap-[10px] flex justify-center items-center rounded-full text-center ${
                    level > index
                      ? "bg-primaryBtn"
                      : level === index
                      ? "bg-[#ccb4ff]"
                      : "bg-[#EAECF0]"
                  } text-white font-montserrat`}
                >
                  {level > index ? (
                    <GiCheckMark className="text-white-100 w-[16px] h-[14.01px]" />
                  ) : (
                    <Image src={signupCheck} alt="" />
                  )}
                </div>
              </div>
              {index !== individualDescriptions.length - 1 && (
                <div
                  className={`h-[4px] flex mt-[7px] self-center  w-full bg-[#EAECF0] ${
                    accountType === "individual" && index === 4
                      ? "hidden"
                      : "block"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSignUpOptions;
