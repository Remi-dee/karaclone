"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import passwordLogo from "@/public/Images/passwordLogo.png";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { GiCheckMark, GiCancel } from "react-icons/gi";
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
  const [passwordValid, setPasswordValid] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const validatePassword = (password: string) => {
    setPasswordValid(password.length >= 8);
    setHasSpecialCharacter(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    if (confirmPassword !== "") {
      setConfirmPasswordValid(password === confirmPassword);
    }
  };

  const validateConfirmPassword = (confirmPassword: string) => {
    setConfirmPasswordValid(confirmPassword === userPassword.password);
  };

  const [showPassword, setShowPassword] = useState("password");

  return (
    <div className="w-[500px] mx-auto mt-10 shadow-lg rounded-md border border-white-100">
      <div className="w-[400px] pt-6 mx-auto">
        <div className="w-[35px] h-[30px] flex justify-center items-center shadow-md border border-gray-200  rounded-md ">
          <Image src={passwordLogo} alt="" className="w-[18px] mt-1 h-[18px]" />
        </div>
        <h3 className="py-2 font-semibold text-2xl">Create Password</h3>
        <p className="text-gray-300 text-sm">
          Fill in your basic details to get started
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-2 gap-1">
            <label htmlFor="" className="font-semibold text-sm">
              Password<span className="text-red-400">*</span>
            </label>
            <div className="relative w-full">
              <input
                type={showPassword}
                className="w-full p-1.5 border rounded-md outline-none"
                placeholder="Type in your password"
                required
                value={userPassword?.password}
                onChange={(e: any) => {
                  setUserPassword({
                    ...userPassword,
                    password: e.target.value,
                  });
                  validatePassword(e.target.value);
                }}
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
            <div
              className={`w-[15px] h-[15px] flex justify-center items-center rounded-full text-center ${
                passwordValid ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              {passwordValid ? (
                <GiCheckMark className="text-white" />
              ) : (
                <GiCancel className="text-white" />
              )}
            </div>
            <p className="text-gray-200 text-xs">
              {passwordValid
                ? "Password is at least 8 characters"
                : "Password must be at least 8 characters"}
            </p>
          </div>
          <div className="flex justify-start items-center gap-2 my-2">
            <div
              className={`w-[15px] h-[15px] flex justify-center items-center rounded-full text-center ${
                hasSpecialCharacter ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              {hasSpecialCharacter ? (
                <GiCheckMark className="text-white" />
              ) : (
                <GiCancel className="text-white" />
              )}
            </div>
            <p className="text-gray-200 text-xs">
              {hasSpecialCharacter
                ? "Password contains a special character"
                : "Password must contain one special character"}
            </p>
          </div>

          <div className="flex flex-col mt-2 gap-1">
            <label htmlFor="" className="font-semibold text-sm">
              Confirm Password<span className="text-red-400">*</span>
            </label>
            <div className="relative w-full">
              <input
                type={showPassword}
                className="w-full p-1.5 border rounded-md outline-none"
                placeholder="Re-enter your password"
                required
                value={confirmPassword}
                onChange={(e: any) => {
                  setConfirmPassword(e.target.value);
                  validateConfirmPassword(e.target.value);
                }}
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
            <div
              className={`w-[15px] h-[15px] flex justify-center items-center rounded-full text-center ${
                confirmPasswordValid ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              {confirmPasswordValid ? (
                <GiCheckMark className="text-white" />
              ) : (
                <GiCancel className="text-white" />
              )}
            </div>
            <p className="text-gray-200 text-xs">
              {confirmPasswordValid
                ? "Passwords match"
                : "Passwords do not match"}
            </p>
          </div>
          <div className="w-full flex items-center justify-end">
            <input
              type="submit"
              value="Continue"
              className={`w-full h-[40px] text-center text-[#fff] rounded mt-8 cursor-pointer ${
                passwordValid && hasSpecialCharacter && confirmPasswordValid
                  ? "bg-[#7F56D9]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={
                !passwordValid || !hasSpecialCharacter || !confirmPasswordValid
              }
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
