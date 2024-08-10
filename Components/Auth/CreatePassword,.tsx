"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import passwordLogo from "@/public/Images/passwordLogo.png";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import mark from "@/public/mark.svg";
import closecirce from "@/public/close-circle.svg";
import greenCorrect from "@/public/svg/greenCorrect.svg";
import { useDispatch, useSelector } from "react-redux";
import { increaseRegistrationStage } from "@/redux/features/auth/authSlice";

const CreatePassword: FC<any> = () => {
  const [registerUser, { isLoading, isSuccess, error, data }] =
    useRegisterMutation();
  const globalState = useSelector((state: any) => state?.auth);
  const [passwordValid, setPasswordValid] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState("password");

  useEffect(() => {
    if (isSuccess) {
      toast.success("User registration successful");
      localStorage.setItem("auth_token", data?.activation_token as any);
      dispatch(increaseRegistrationStage());
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isLoading, isSuccess, error]);

  const validatePassword = (password: string) => {
    setPasswordValid(password.length >= 8);
    setHasSpecialCharacter(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    if (confirmPassword !== "") {
      setConfirmPasswordValid(password === confirmPassword);
    }
  };

  const validateConfirmPassword = (confirmPassword: string) => {
    setConfirmPasswordValid(confirmPassword === userPassword);
  };

  const submitPasswordHandler = (e: any) => {
    e.preventDefault();
    const data = {
      name: globalState?.name,
      gender: globalState?.gender,
      email: globalState?.email,
      phone: globalState?.phone,
      account_type: globalState?.account_type,
      role: "user",
      business_name: globalState?.business_name,
      business_address: globalState?.business_address,
      business_email: globalState?.business_email,
      business_line: globalState?.business_line,
      password: userPassword,
    };
    registerUser(data);
  };

  return (
    <div className="p-[1rem] w-full md:w-[500px] bg-[#FFFFFF] md:h-[693px] rounded-md shadow-[40px_4px_40px_0px_#7F56D91A] border border-[#EAECF0] md:shadow-lg">
      <div className="w-full md:w-[400px] pt-6 flex flex-col gap-y-[24px] mx-0 md:mx-auto">
        <div className="w-full">
          <div className="w-[56px] h-[56px] flex justify-center items-center shadow-md border border-gray-200 rounded-md">
            <Image src={passwordLogo} alt="" className="w-[28px] h-[28px]" />
          </div>
          <div className="leading-[19.2px] mt-[24px] font-[400]">
            <h3 className="py-2 font-semibold text-2xl">Create Password</h3>
            <p className="text-gray-300 text-sm">Create your password</p>
          </div>
        </div>
        <div className="w-full">
          <form className="w-full flex flex-col gap-y-[32px]">
            <div className="flex flex-col mt-2">
              <label
                htmlFor=""
                className="font-semibold text-[16px] tracking-[-2%]"
              >
                Password
              </label>
              <div className="mt-[8px] relative w-full">
                <input
                  type={showPassword}
                  className="w-full p-1.5 border rounded-md outline-none"
                  placeholder="Type in your password"
                  required
                  value={userPassword}
                  onChange={(e: any) => {
                    setUserPassword(e.target.value);
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
              <div className="flex flex-col mt-[16px] gap-y-[8px]">
                {/* Password Validity Checks */}
                <div className="flex justify-start items-center gap-2">
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full text-center ${
                      passwordValid ? "bg-green-500" : "bg-[#DCDCDC]"
                    }`}
                  >
                    <Image src={passwordValid ? greenCorrect : mark} alt="" />
                  </div>
                  <p className="text-[#989898] text-xs">
                    Minimum of 8 characters
                  </p>
                </div>

                <div className="flex justify-start items-center gap-2">
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full text-center ${
                      hasSpecialCharacter ? "bg-green-500" : "bg-[#DCDCDC]"
                    }`}
                  >
                    <Image
                      src={hasSpecialCharacter ? greenCorrect : mark}
                      alt=""
                    />
                  </div>
                  <p className="text-[#989898] text-xs">
                    Must contain special character
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
              <div className="flex justify-start items-center gap-2 mt-[16px]">
                <div className="w-[20px] h-[20px] flex justify-center items-center rounded-full text-center">
                  <Image
                    src={confirmPasswordValid ? greenCorrect : closecirce}
                    alt=""
                  />
                </div>
                <p className="text-[#989898] text-xs">
                  {confirmPasswordValid
                    ? "Passwords match"
                    : "Passwords do not match"}
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-end">
              <input
                type="submit"
                onClick={submitPasswordHandler}
                value="Continue"
                className={`w-full h-[40px] text-[16px] font-semibold text-center text-[#98A2B3] rounded-[8px] ${
                  passwordValid && hasSpecialCharacter && confirmPasswordValid
                    ? "bg-primary cursor-pointer"
                    : "bg-[#DCDCDC] cursor-not-allowed"
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
                className="text-[#7F56D9] leading-[20px] tracking-[-0.1px] font-medium"
                href="/auth/signin"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
