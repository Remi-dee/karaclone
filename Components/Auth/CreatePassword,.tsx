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
import { useDispatch } from "react-redux";
import { increaseRegistrationStage } from "@/redux/features/auth/authSlice";
import { useSelector } from "react-redux";

type Props = {
  active: number;

  userPassword: any;
  setUserPassword: (userPassword: any) => void;
  businessDetails: any;
  basicDetails: any;
  accountType: string;
};

const CreatePassword: FC<Props> = ({
  active,

  businessDetails,
  basicDetails,
  accountType,
}) => {
  const [registerUser, { isLoading, isSuccess, error, data }] =
    useRegisterMutation();
  const globalState = useSelector((state) => state?.auth);
  console.log(globalState);
  const [passwordValid, setPasswordValid] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
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

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const data = {
  //     name: globalState?.name,
  //     gender: globalState?.gender,
  //     email: globalState?.email,
  //     phone: globalState?.phone,
  //     account_type: globalState?.account_type,
  //     role: "user",
  //     business_name: globalState?.business_name,
  //     business_address: globalState?.business_address,
  //     business_email: globalState?.business_email,
  //     business_line: globalState?.business_line,
  //     password: userPassword,
  //   };

  //   if (!isLoading) {
  //     await registerUser(data);
  //   }
  // };

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
            // onSubmit={handleSubmit}
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
                onClick={submitPasswordHandler}
                value="Continue"
                className={`w-full h-[40px]  text-[16px] font-semibold text-center text-[#98A2B3] rounded-[8px]
                    : " bg-[#DCDCDC] cursor-not-allowed"
                }`}
                // disabled={
                //   !passwordValid ||
                //   !hasSpecialCharacter ||
                //   !confirmPasswordValid
                // }
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

///

// Of course! Here's how you can rewrite the example with two endpoints for login and signup:

// ```javascript
// // apiSlice.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const BASE_URL = 'https://api.example.com';

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//   endpoints: (builder) => ({
//     // Endpoint for user login
//     loginUser: builder.mutation({
//       query: (credentials) => ({
//         url: '/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     // Endpoint for user signup
//     signupUser: builder.mutation({
//       query: (userData) => ({
//         url: '/signup',
//         method: 'POST',
//         body: userData,
//       }),
//     }),
//   }),
// });

// // Export hooks for usage in functional components
// export const { useLoginUserMutation, useSignupUserMutation } = apiSlice;
// ```

// In this example, I've added two endpoints: `loginUser` and `signupUser`, each defined as a mutation. The `query` function for each mutation specifies the URL and method, and you can pass data to these mutations as parameters.

// The usage of these mutations would be similar to the previous example:

// ```javascript
// // ExampleComponent.js
// import { useLoginUserMutation, useSignupUserMutation } from '../apiSlice';

// function ExampleComponent() {
//   // Example usage of login mutation
//   const [loginUser, { isLoading: loginLoading, error: loginError }] = useLoginUserMutation();

//   // Example usage of signup mutation
//   const [signupUser, { isLoading: signupLoading, error: signupError }] = useSignupUserMutation();

//   // Example handlers for login and signup
//   const handleLogin = async (credentials) => {
//     try {
//       const result = await loginUser(credentials).unwrap();
//       // Handle successful login
//     } catch (error) {
//       // Handle login error
//     }
//   };

//   const handleSignup = async (userData) => {
//     try {
//       const result = await signupUser(userData).unwrap();
//       // Handle successful signup
//     } catch (error) {
//       // Handle signup error
//     }
//   };

//   return (
//     <div>
//       {/* Your component JSX */}
//     </div>
//   );
// }

// export default ExampleComponent;
// ```

// You can replace the placeholders like `credentials` and `userData` with the actual data you want to send to the server for login and signup. Also, handle the loading and error states according to your UI requirements.
