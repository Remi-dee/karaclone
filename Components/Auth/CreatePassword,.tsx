"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import passwordLogo from "@/public/Images/passwordLogo.png";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { GiCheckMark, GiCancel } from "react-icons/gi";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import mark from "@/public/mark.svg";
import closecirce from "@/public/close-circle.svg";
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
    <div className="w-[500px] bg-[#FFFFFF]  h-[693px]  shadow-lg rounded-md border border-white-100">
      <div className="w-[400px] pt-6 flex flex-col gap-y-[24px]  mx-auto">
        <div>
          <div className="w-[56px] h-[56px] flex justify-center items-center shadow-md border border-gray-200  rounded-md ">
            <Image src={passwordLogo} alt="" className="w-[28pxx]  h-[28px]" />
          </div>
          <div className=" leading-[19.2px] mt-[24px] font-[400]">
            <h3 className="py-2 font-semibold text-2xl">Create Password</h3>
            <p className="text-gray-300 text-sm">Create your password</p>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-y-[32px] "
          >
            <div className="flex flex-col mt-2 ">
              <label
                htmlFor=""
                className="font-semibold text-[16px] tracking-[-2%]"
              >
                Password
              </label>
              <div className=" mt-[8px] relative w-full">
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
              <div className=" flex flex-col  mt-[16px]   gap-y-[8px]">
                <div className="flex justify-start items-center gap-2 ">
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full text-center ${
                      passwordValid ? "bg-green-500" : "bg-[#DCDCDC]"
                    }`}
                  >
                    {!passwordValid ? (
                      <Image src={mark} alt="" />
                    ) : (
                      <GiCancel className="text-[#989898]" />
                    )}
                  </div>
                  <p className="text-[#989898] text-xs">
                    {!passwordValid
                      ? "Minimum of 15 character"
                      : "Minimum of 15 character"}
                  </p>
                </div>

                <div className="flex justify-start items-center gap-2 ">
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full text-center ${
                      hasSpecialCharacter ? "bg-green-500" : "bg-[#DCDCDC]"
                    }`}
                  >
                    {!hasSpecialCharacter ? (
                      <Image src={mark} alt="" />
                    ) : (
                      <GiCancel className="text-[#989898]" />
                    )}
                  </div>
                  <p className="text-[#989898] text-xs">
                    {!hasSpecialCharacter
                      ? "Must contain capital letter"
                      : "Must contain capital letter"}
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2 ">
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full text-center ${
                      hasSpecialCharacter ? "bg-green-500" : "bg-[#DCDCDC]"
                    }`}
                  >
                    {!hasSpecialCharacter ? (
                      <Image src={mark} alt="" />
                    ) : (
                      <GiCancel className="text-[#989898]" />
                    )}
                  </div>
                  <p className="text-[#989898] text-xs">
                    {hasSpecialCharacter
                      ? "Must contain Small letter"
                      : "Must contain Small letter"}
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2 ">
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full text-center ${
                      hasSpecialCharacter ? "bg-green-500" : "bg-[#DCDCDC]"
                    }`}
                  >
                    {!hasSpecialCharacter ? (
                      <Image src={mark} alt="" />
                    ) : (
                      <GiCancel className="text-[#989898]" />
                    )}
                  </div>
                  <p className="text-[#989898] text-xs">
                    {hasSpecialCharacter
                      ? "Must contain number"
                      : "Must contain number"}
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2 ">
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full text-center ${
                      hasSpecialCharacter ? "bg-green-500" : "bg-[#DCDCDC]"
                    }`}
                  >
                    {!hasSpecialCharacter ? (
                      <Image src={mark} alt="" />
                    ) : (
                      <GiCancel className="text-[#989898]" />
                    )}
                  </div>
                  <p className="text-[#989898] text-xs">
                    {!hasSpecialCharacter
                      ? "Must contain special character"
                      : "Must contain special character"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2 gap-1">
              <label
                htmlFor=""
                className="font-semibold text-[16px] tracking-[-2%]"
              >
                Confirm Password
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
              <div className="  flex flex-col  mt-[16px]   gap-y-[8px]">
                <div className="flex justify-start items-center gap-2 ">
                  <div
                    className={
                      "w-[20px] h-[20px] flex justify-center items-center rounded-full text-center"
                    }
                  >
                    {!confirmPasswordValid ? (
                      <Image src={closecirce} alt="" />
                    ) : (
                      <GiCancel className="text-[#989898]" />
                    )}
                  </div>
                  <p className="text-[#989898] text-xs">
                    {confirmPasswordValid
                      ? "The password entered does not match."
                      : "The password entered does not match."}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-end">
              <input
                type="submit"
                value="Continue"
                className={`w-full h-[40px]  text-[16px] font-semibold text-center text-[#98A2B3] rounded-[8px]
                    : " bg-[#DCDCDC] cursor-not-allowed"
                }`}
                disabled={
                  !passwordValid ||
                  !hasSpecialCharacter ||
                  !confirmPasswordValid
                }
              />
            </div>
          </form>
          <div>
            <p className="py-4 text-center text-sm text-gray-300">
              Already have an account?{" "}
              <Link
                className="text-[#7F56D9] leading-[19px] tracking-[-2%] font-[700]  "
                href={"/login"}
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
