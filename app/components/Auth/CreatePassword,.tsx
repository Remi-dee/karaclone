"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import passwordLogo from "../../../public/Images/passwordLogo.png";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

type Props = {
  active: number;
  setActive: (active: any) => void;
  userPassword: any;
  setUserPassword: (userPassword: any) => void;
  businessDetails: any;
  basicDetails: any;
  accountType: string;
};

const CreatePassword: FC<Props> = ({
  active,
  setActive,
  userPassword,
  setUserPassword,
  businessDetails,
  basicDetails,
  accountType,
}) => {
  const [registerUser, { isLoading, isSuccess, error, data }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("User registration successful");
      setActive(active + 1);

      localStorage.setItem("auth_token", data?.activation_token as any);
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isLoading, isSuccess, error]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name: basicDetails.name,
      gender: basicDetails.gender,
      email: basicDetails.email,
      phone: basicDetails.phone,
      account_type: accountType,
      role: "user",
      business_name: businessDetails.business_name,
      business_address: businessDetails.business_address,
      business_email: businessDetails.business_email,
      business_line: businessDetails.business_line,
      password: userPassword.password,
    };

    if (!isLoading) {
      await registerUser(data);
    }
  };
  const [showPassword, setShowPassword] = useState("password");

  return (
    <div className="w-[500px] mx-auto mt-10 shadow-lg  rounded-md border border-white-100">
      <div className="w-[400px] pt-6 mx-auto">
        <div className="w-[35px] h-[30px] flex justify-center items-center shadow-md border border-gray-200  rounded-md ">
          <Image src={passwordLogo} alt="" className="w-[18px] mt-1 h-[18px]" />
        </div>
        <h3 className="py-2 font-semibold text-2xl">Create Password</h3>
        <p className="text-gray-300 text-sm">
          Fill in your basic details to get started
        </p>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col mt-2 gap-1">
            <label htmlFor="" className="font-semibold text-sm">
              Password<span className="text-red-400">*</span>
            </label>
            <div className="relative w-full">
              <input
                type={showPassword}
                className=" w-full p-1.5 border rounded-md outline-none"
                placeholder="type in your password"
                required
                value={userPassword.password}
                onChange={(e: any) =>
                  setUserPassword({
                    ...userPassword,
                    password: e.target.value,
                  })
                }
              />
              {showPassword === "password" ? (
                <div
                  onClick={() => setShowPassword("text")}
                  className="absolute top-2 right-2 cursor-pointer"
                >
                  <BsEyeSlash />
                </div>
              ) : (
                <div
                  onClick={() => setShowPassword("password")}
                  className="absolute top-2 right-2 cursor-pointer"
                >
                  <BsEye />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 my-2">
            <div className="w-[15px] h-[15px] flex justify-center items-center rounded-full text-center bg-gray-200">
              <GiCheckMark className="text-white-100 text-[10px]" />
            </div>
            <p className="text-gray-200 text-xs">
              Password must be at least 8 characters
            </p>
          </div>
          <div className="flex justify-start items-center gap-2 my-2">
            <div className="w-[15px] h-[15px] flex justify-center items-center rounded-full text-center bg-gray-200">
              <GiCheckMark className="text-white-100 text-[10px]" />
            </div>
            <p className="text-gray-200 text-xs">
              must contain one special character
            </p>
          </div>
          <div className=" flex flex-col mt-2 mb-4 gap-1">
            <label htmlFor="" className="font-semibold text-sm">
              Confirm Password<span className="text-red-400">*</span>
            </label>
            <div className="relative w-full">
              <input
                type={showPassword}
                className=" w-full p-1.5 border rounded-md outline-none"
                placeholder="Re-enter your password"
              />
              {showPassword === "password" ? (
                <div
                  onClick={() => setShowPassword("text")}
                  className="absolute top-2 right-2 cursor-pointer"
                >
                  <BsEyeSlash />
                </div>
              ) : (
                <div
                  onClick={() => setShowPassword("password")}
                  className="absolute top-2 right-2 cursor-pointer"
                >
                  <BsEye />
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            <input
              type="submit"
              value="continue"
              className="w-full h-[40px] bg-[#7F56D9] text-center text-[#fff] rounded mt-8 cursor-pointer"
            />
          </div>
        </form>
        <p className="py-4 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link className="text-primaryBtn" href={"/login"}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreatePassword;
