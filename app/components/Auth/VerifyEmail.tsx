"use client";
import { useActivationMutation } from "@/redux/features/auth/authApi";
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
  ];

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
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <div className="w-[500px] mx-auto  shadow-lg  rounded-md border border-white-100">
      <div className="w-[400px] pt-6 mx-auto">
        <div className="w-[25px] flex justify-center items-center shadow-md border border-gray-200  rounded-md h-[25px]">
          <MdMail className="text-sm" />
        </div>
        <h3 className="py-2 font-semibold text-2xl">
          Verify Your Email Address
        </h3>
        <p className="text-gray-300 text-sm">
          We sent an OTP code to the email address you provided to verify your
          email address
        </p>
        <div className="m-auto flex items-center justify-around my-4 gap-4">
          {Object.keys(verifyNumber).map((key, index) => (
            <input
              type="number"
              key={key}
              ref={inputRefs[index]}
              className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${
                invalidError
                  ? "shake border-red-500"
                  : "dark:border-white border-[#0000004a]"
              }`}
              placeholder=""
              maxLength={1}
              value={verifyNumber[key as keyof VerifyNumber]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <button
          onClick={verificationHandler}
          className="w-full p-2 mb-4 rounded-md text-center  bg-primaryBtn text-white-100 "
        >
          Verify
        </button>
        <p className="text-gray-200 text-center text-sm pt-2">
          Did&apos;t get the email? Can resend in{" "}
          <span className="text-red-400">00:27mins</span> Resend Code
        </p>
        <p className="text-center font-semibold text-sm pb-4">Resend Code</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
