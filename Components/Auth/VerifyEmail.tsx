"use client";
import { useActivationMutation } from "@/redux/features/auth/authApi";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdMail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { increaseRegistrationStage } from "@/redux/features/auth/authSlice";
import getTokenFromLocalStorage from "@/hooks/FetchUserToken";

type VerifyNumber = Record<string, string>;

const VerifyEmail: FC = () => {
  const activationToken = getTokenFromLocalStorage();
  const [activation, { isSuccess, error }] = useActivationMutation();
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account activated successfully");
      // setVerificationSuccess(true);
    } else if (error && "data" in error) {
      toast.error((error as any).data.message);
      setInvalidError(true);
    }
  }, [isSuccess, error]);

  const inputRefs = useRef<any>([]);

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const verificationHandler = async () => {
    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 4) {
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
    setVerifyNumber((prev) => ({ ...prev, [index]: value }));

    if (value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="md:w-[550px]  w-full h-max md:h-[451px] mx-auto p-[1rem] md:p-[32px_40px_32px_40px] shadow-lg rounded-md border border-white-100">
      <div className="w-full md:w-[470px] mx-0 md:mx-auto">
        <div className="md:w-[56px] md:h-[56px] h-[39px] w-[39px] flex justify-center items-center shadow-md border border-gray-200 rounded-[12px]">
          <MdMail className=" text-[24px]   md:text-[28px]" />
        </div>
        <div className="flex flex-col gap-[9px] w-full md:gap-[16px] mt-[24px]">
          <h4 className="py-2 font-bold w-full text-[#1E1E1E] leading-[38.4px] text-[26px] md:text-[32px] tracking-[-2%]">
            Verify Your Email Address
          </h4>
          <p className="text-[#7C7C7C] text-[16px] leading-[19.2px]">
            We sent an OTP code to the email address you provided to verify your
            email address
          </p>
        </div>
        <div className="flex items-center justify-around mt-[32px] gap-[8px]">
          {Object.keys(verifyNumber).map((key, index) => (
            <input
              type="number"
              key={key}
              ref={(el) => (inputRefs.current[index] = el)}
              className={`md:w-[64px] w-[55px] h-[55px] md:h-[64px] bg-transparent border-[2px] border-[#3D3D3D] rounded-[8px] flex items-center text-black dark:text-white justify-center text-[32px] md:text-[48px] font-[500] leading-[60px] tracking-[-2%] font-Poppins outline-none p-[2px_8px] text-center ${
                invalidError
                  ? "shake border-red-500"
                  : "dark:border-white border-[#0000004a]"
              }`}
              placeholder="0"
              maxLength={1}
              value={verifyNumber[key]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <button
          onClick={verificationHandler}
          className="p-[10px_16px] border border-[#7F56D9] h-[40px] w-full md:w-[470px] mt-[16px] rounded-[8px] text-center bg-primaryBtn text-white-100"
        >
          Continue
        </button>
        <div className="flex mt-[16px] justify-normal">
          <p className="text-gray-200 w-full text-center text-sm">
            Didn&apos;t get the email? Can resend in
            <span className="text-red-400 ml-[3px]">00:27mins</span>
            <Link
              href=""
              className="ml-[0.4rem] block font-semibold text-sm text-[#7F56D9]"
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
