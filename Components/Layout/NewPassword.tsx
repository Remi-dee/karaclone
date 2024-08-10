"use client";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useSearchParams } from "next/navigation";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { GiCheckMark, GiCancel } from "react-icons/gi";
import {
  useNewPasswordMutation,
  useRegisterMutation,
} from "@/redux/features/auth/authApi";
import { increaseRegistrationStage } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";
import passwordLogo from "@/public/Images/passwordLogo.png";

import PasswordCriteria from "../Auth/PasswordCriteria";

const NewPassword: FC = () => {
  const [registerUser, { isLoading, isSuccess, error, data }] =
    useRegisterMutation();
  const dispatch = useDispatch();
  const globalState = useSelector((state: any) => state?.auth);
  const searchParams = useSearchParams();

  const [passwordValid, setPasswordValid] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const userEmail = searchParams.get("email");
  const resetToken = searchParams.get("token");

  const [showPassword, setShowPassword] = useState("password");
  const [NewPassword] = useNewPasswordMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("User registration successful");
      localStorage.setItem("auth_token", data?.activation_token as any);
      dispatch(increaseRegistrationStage());
    }
    if (error && "data" in error) {
      toast.error((error as any).data.message);
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

  const submitPasswordHandler = (e: React.FormEvent) => {
    e.preventDefault();
    NewPassword({ resetToken: resetToken!, newPassword: userPassword });
  };

  return (
    <div className="w-full px-4 py-4 md:px-0 md:w-[500px] shadow-[40px_4px_40px_0px_#7F56D91A] border border-[#EAECF0]  md:shadow-lg h-max  rounded-md  ">
      <div className="w-full h-full md:w-[400px] pt-6 flex flex-col gap-y-6 mx-0 md:mx-auto">
        <div>
          <div className="md:w-[56px] w-[32px] h-[32px] md:h-[56px] flex justify-center items-center shadow-md border border-gray-200 rounded-md">
            <Image
              src={passwordLogo}
              alt="Password Logo"
              className="md:w-[28px] w-[19px] h-[19px] md:h-[28px]"
            />
          </div>
          <div className="leading-[19.2px] mt-6 font-normal">
            <h3 className="py-2 font-semibold text-2xl">Create Password</h3>
            <p className="text-gray-300 text-sm">Create your password</p>
          </div>
        </div>
        <div>
          <form
            onSubmit={submitPasswordHandler}
            className="flex flex-col w-full gap-y-8"
          >
            <div className="flex w-full flex-col mt-2">
              <label
                htmlFor="new-password"
                className="font-semibold text-[16px] text-start tracking-[-2%]"
              >
                New Password
              </label>
              <div className="mt-2 relative w-full">
                <input
                  type={showPassword}
                  id="new-password"
                  className="w-full p-1.5 border rounded-md outline-none"
                  placeholder="Type in your password"
                  required
                  value={userPassword}
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                />
                <div
                  onClick={() =>
                    setShowPassword(
                      showPassword === "password" ? "text" : "password"
                    )
                  }
                  className="absolute top-2 right-2 cursor-pointer"
                >
                  {showPassword === "password" ? <BsEyeSlash /> : <BsEye />}
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-y-2">
                <PasswordCriteria
                  inputLength={userPassword.length}
                  valid={passwordValid}
                  text="Minimum of 8 characters"
                />
                <PasswordCriteria
                  inputLength={userPassword.length}
                  valid={hasSpecialCharacter}
                  text="Must contain special character"
                />
              </div>
            </div>
            <div className="flex flex-col mt-2 gap-1">
              <label
                htmlFor="confirm-password"
                className="font-semibold text-[16px] text-start tracking-[-2%]"
              >
                Confirm Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword}
                  id="confirm-password"
                  className="w-full p-1.5 border rounded-md outline-none"
                  placeholder="Re-enter your password"
                  required
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    validateConfirmPassword(e.target.value);
                  }}
                />
                <div
                  onClick={() =>
                    setShowPassword(
                      showPassword === "password" ? "text" : "password"
                    )
                  }
                  className="absolute top-2 right-2 cursor-pointer"
                >
                  {showPassword === "password" ? <BsEyeSlash /> : <BsEye />}
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-y-2">
                <PasswordCriteria
                  valid={confirmPasswordValid}
                  text="Passwords must match"
                  inputLength={confirmPassword.length}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-end">
              <input
                type="submit"
                value="Continue"
                className={`w-full h-[40px] text-[16px] font-semibold text-center text-[#98A2B3] rounded-[8px] ${
                  !passwordValid ||
                  !hasSpecialCharacter ||
                  !confirmPasswordValid
                    ? "bg-[#DCDCDC] cursor-not-allowed"
                    : " text-[#FFFFFF] bg-[#7F56D9]"
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
                className="text-[#7F56D9] leading-[19px] tracking-[-2%] font-bold"
                href={"/login"}
              >
                Reset Password
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
