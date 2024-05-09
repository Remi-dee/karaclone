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

const VerifyEmail: FC<Props> = ({ setVerificationSuccess }) => {
  const activationToken = localStorage.getItem("auth_token");
  const [activation, { isSuccess, error }] = useActivationMutation();
  const [invalidError, setInvalidError] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account activated successfully");
      setVerificationSuccess(true);
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
        setInvalidError(true);
      } else {
        console.log("An error occurred:", error);
      }
    }
  }, [isSuccess, error]);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
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
    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 6) {
      setInvalidError(true);
      return;
    }
    await activation({
      activation_token: activationToken,
      activation_code: verificationNumber,
    });
  };

  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <div className="w-[550px] h-[451px] mx-auto p-[32px_40px_32px_40px]  shadow-lg  rounded-md border border-white-100">
      <div className="w-[470px] mx-auto">
        <div className="w-[56px] h-[56px] flex justify-center items-center shadow-md border border-gray-200  rounded-[12px] ">
          <MdMail className="text-[28px]" />
        </div>
        <div className=" flex flex-col gap-[16px] mt-[24px] ">
          <h4 className="py-2 font-bold text-[#1E1E1E] leading-[38.4px] text-[32px] tracking-[-2%]">
            Verify Your Email Address
          </h4>
          <p className="text-[#7C7C7C] text-[16px] leading-[19.2px]">
            We sent an OTP code to the email address you provided to verify your
            email address
          </p>
        </div>
        <div className=" flex items-center justify-around mt-[32px] gap-[8px]">
          {Object?.keys(verifyNumber).map((key, index) => (
            <input
              type="number"
              key={key}
              ref={inputRefs[index]}
              className={`w-[64px] h-[64px] bg-transparent border-[2px] border-[#3D3D3D] rounded-[8px] flex items-center text-black dark:text-white juverifyNumberstify-center text-[48px] font-[500] leading-[60px] tracking-[-2%] font-Poppins outline-none p-[2px_8px] text-center ${
                invalidError
                  ? "shake border-red-500"
                  : "dark:border-white border-[#0000004a]"
              }   `}
              placeholder="0"
              maxLength={1}
              value={verifyNumber[key as keyof VerifyNumber]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <button
          onClick={verificationHandler}
          className=" p-[10px_16px)] border border-[#7F56D9] h-[40px] w-[470px] mt-[16px] rounded-[8px] text-center  bg-primaryBtn text-white-100 "
        >
          Continue
        </button>
        <div className=" flex mt-[16px] justify-normal">
          <p className="text-gray-200 w-full text-center text-sm ">
            Did&apos;t get the email? Can resend in
            <span className="text-red-400"> 00:27mins</span> 
            <Link
              href=""
              className=" ml-[0.4rem] block font-semibold text-sm text-[#7F56D9]"
            >
           Resend Code
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
