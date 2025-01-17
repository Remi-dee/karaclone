"use client";
import { useActivationMutation } from "@/redux/features/auth/authApi";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdMail } from "react-icons/md";

type Props = {
  setVerificationSuccess: (success: boolean) => void;
};

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
};

const DeactivateVerification: FC<Props> = ({ setVerificationSuccess }) => {
  const [invalidError, setInvalidError] = useState<boolean>(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const verificationHandler = async () => {
    setVerificationSuccess(true);

    // const verificationNumber = Object.values(verifyNumber).join("");
    // if (verificationNumber.length !== 6) {
    //   setInvalidError(true);
    //   return;
    // }
    // await activation({
    //   activation_token: activationToken,
    //   activation_code: verificationNumber,
    // });
  };

  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <div className=" md:w-[470px] w-full h-[451px] mx-auto  shadow-md rounded-[16px] border border-white-100">
      <div className="  w-full md:w-[470px] text-center mx-auto">
        <div className=" w-full flex items-center justify-center">
          <div className="w-[56px]    ml-[1rem] h-[56px] flex justify-center items-center shadow-md border border-gray-200  rounded-[12px] ">
            <MdMail className="text-[22px]" />
          </div>
        </div>
        <div className=" text-center px-[1rem] flex flex-col gap-[10px] md:gap-[16px] mt-[24px] ">
          <h4 className="py-2 font-bold text-[#1E1E1E] leading-[38.4px] text-[20px] md:text-[32px] tracking-[-2%]">
            Enter your verification code
          </h4>
          <p className="text-[#7C7C7C] text-[14px] md:text-[16px] leading-[19.2px]">
            To deactivate authentication method, kindly enter the code we sent
            to your email
          </p>
        </div>
        <div className=" px-[1rem] flex items-center justify-around mt-[32px] gap-[8px]">
          {Object?.keys(verifyNumber).map((key, index) => (
            <input
              type="number"
              key={key}
              ref={inputRefs[index]}
              className={`md:w-[64px] w-[40px] h-[40px] md:h-[64px] bg-transparent border-[2px] border-[#3D3D3D] rounded-[8px] flex items-center text-black dark:text-white juverifyNumberstify-center text-[20px] md:text-[48px] font-[500] leading-[60px] tracking-[-2%] font-Poppins outline-none p-[2px_8px] text-center ${
                invalidError
                  ? "shake border-red-500"
                  : "dark:border-white border-[#0000004a]"
              }   `}
              placeholder=""
              maxLength={1}
              value={verifyNumber[key as keyof VerifyNumber]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <button
          onClick={verificationHandler}
          className=" p-[10px_16px)] border border-[#7F56D9] h-[40px] w-full md:w-[470px] mt-[32px] rounded-[8px] text-center  bg-primaryBtn text-white-100 "
        >
          Deactivate
        </button>
        <div className=" flex mt-[30px] justify-normal">
          <p className="text-gray-200 w-full text-center text-sm ">
            Did&apos;t get the email? Can resend in
            {/* <span className="text-red-400"> 00:27mins</span>  */}
            <Link
              href=""
              className=" ml-[0.4rem]  font-semibold text-sm text-[#7F56D9]"
            >
              Resend Code
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeactivateVerification;
