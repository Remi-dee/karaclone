import React from 'react'
import Link from "next/link";
import { TiUser } from "react-icons/ti";
import { IoIosInformationCircleOutline } from "react-icons/io";
const SignpKyc = () => {
  return (
    <div className="w-[450px] mt-4 shadow-xl rounded-md bg-white-100 ml-20">
    <div className="w-[400px] mt-4 mx-auto">
      <div className="w-[25px] flex justify-center shadow-md border border-gray-200  rounded-md h-[25px]">
        <TiUser className="text-lg" />
      </div>
      <h3 className="py-2 font-semibold text-lg">Input Basic Details</h3>
      <p className="text-gray-300 text-sm">
        Fill in your basic details to get started
      </p>
      <form>
        <div className=" flex flex-col mt-2 gap-1">
          <label htmlFor="" className="font-semibold text-sm">
            Full Name<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            className="p-1.5 border rounded-md outline-none"
            placeholder="First name and Last name"
          />
          <div className="flex items-center justify-start text-gray-200  gap-2">
            <IoIosInformationCircleOutline />
            <p className="text-sm">Your Surname is your Last Name</p>
          </div>
        </div>

        <div className=" flex flex-col mt-2 gap-1">
          <label htmlFor="" className="font-semibold text-sm">
            Gender<span className="text-red-400">*</span>
          </label>
          <select
            className="p-1.5 border border-gray-200 rounded-md"
            name=""
            id=""
          >
            <option value="" disabled selected>
              Gender
            </option>
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Other</option>
          </select>
        </div>
        <div className=" flex flex-col mt-2 gap-1">
          <label htmlFor="" className="font-semibold text-sm">
            Email Address<span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            className="p-1.5 border rounded-md outline-none"
            placeholder="example@domain.com"
          />
        </div>
        <label htmlFor="" className="font-semibold text-sm">
          Phone Number<span className="text-red-400">*</span>
        </label>
        <div className="flex items-center mt-2 border mb-6 rounded-md">
          <select value="" className=" rounded-md p-1.5 focus:outline-none">
            <option value="">US+1</option>
            <option value="">Uk+44</option>
          </select>
          <input
            type="text"
            placeholder="Phone Number"
            className=" w-[96%]  outline-none"
          />
        </div>
        <Link href={"/signUp/business-details"}>
          <button className="w-full p-2 rounded-md text-center  bg-primaryBtn text-white-100 ">
            Continue
          </button>
        </Link>
      </form>
      <p className="py-4 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link className="text-primaryBtn" href={"/login"}>
              Log In
            </Link>
          </p>
    </div>
  </div>
  )
}

export default SignpKyc;