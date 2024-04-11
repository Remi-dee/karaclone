"use client";
import React, { FC } from "react";
import Link from "next/link";
import { TiUser } from "react-icons/ti";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { styles } from "../../../app/styles/style";

type Props = {
  basicDetails: any;
  setBasicDetails: (basicDetails: any) => void;
  active: number;
  setActive: (active: any) => void;
  handleBasicDetailsSubmit: any;
};

const BasicUserDetails: FC<Props> = ({
  basicDetails,
  setBasicDetails,
  handleBasicDetailsSubmit,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleBasicDetailsSubmit();
  };

  return (
    <div className="w-[500px] mt-4 shadow-xl rounded-md bg-white-100 ml-20">
      <div className="w-[400px] mt-4 mx-auto">
        <div className="w-[25px] flex justify-center shadow-md border border-gray-200  rounded-md h-[25px]">
          <TiUser className="text-lg" />
        </div>
        <h3 className="py-2 font-semibold text-lg">Input Basic Details</h3>
        <p className="text-gray-300 text-sm">
          Fill in your basic details to get started
        </p>
        <form onSubmit={handleSubmit} className={`${styles.label}`}>
          <div className=" flex flex-col mt-2 gap-1">
            <label htmlFor="" className="font-semibold text-sm">
              Full Name<span className="text-red-400">*</span>
            </label>
            <input
              type="name"
              name=""
              required
              value={basicDetails.name}
              onChange={(e: any) =>
                setBasicDetails({ ...basicDetails, name: e.target.value })
              }
              id="name"
              placeholder="First name and Last name"
              className={`${styles.input}`}
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
              value={basicDetails.gender}
              onChange={(e: any) =>
                setBasicDetails({ ...basicDetails, gender: e.target.value })
              }
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className=" flex flex-col mt-2 gap-1">
            <label htmlFor="" className="font-semibold text-sm">
              Email Address<span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name=""
              required
              value={basicDetails.email}
              onChange={(e: any) =>
                setBasicDetails({ ...basicDetails, email: e.target.value })
              }
              id="email"
              placeholder="example@domain.com"
              className={`${styles.input}`}
            />
          </div>
          <label htmlFor="" className="font-semibold text-sm">
            Phone Number<span className="text-red-400">*</span>
          </label>
          <div className="flex items-center mt-2 border mb-6 rounded-md">
            <select value="" className=" rounded-md p-1.5 focus:outline-none">
              <option value="NG">+234</option>
              <option value="US">+1</option>
              <option value="UK">+44</option>
            </select>
            <input
              type="text"
              required
              value={basicDetails.phone}
              onChange={(e: any) =>
                setBasicDetails({ ...basicDetails, phone: e.target.value })
              }
              placeholder="Phone Number"
              className=" w-[96%]  outline-none"
            />
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

export default BasicUserDetails;
