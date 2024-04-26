"use client";
import React, { FC } from "react";
import Link from "next/link";
import { TiUser } from "react-icons/ti";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { styles } from "@/styles/style";

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
    <div className="w-[550px]  h-[874px] py-[1rem]  flex justify-center items-center  gap-y-[24px] shadow-xl rounded-md  ml-20">
      <div className=" h-[630px] w-[470px]  gap-y-[24px] flex flex-col justify-center      ">
        <div className="w-[56px] flex justify-center  items-center content-center shadow-md border border-[#EAECF0]   rounded-md min-h-[56px]">
          <TiUser className="text-[28px] " />
        </div>
        <div className=" flex flex-col gap-y-[16px]">
          <h3 className="tracking-[-2%]  font-bold  leding-[38.4px] text-[32px]">
            Input Basic Details
          </h3>
          <p className="text-gray-300 text-sm">
            Further KYC verification will be required on the dashboard. Kindly
            complete it to ensure uninterrupted service. Thank you.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`${styles.label} gap-y-[24px] mt-[8px] flex flex-col`}
        >
          <div className=" flex flex-col gap-y-[8px] ">
            <label
              htmlFor=""
              className="font-semibold text-[16px] leding-[20px] tracking-[-2%]"
            >
              Full Name<span className=" pl-[0.1rem] text-red-400">*</span>
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
              className={`${styles.input} padingForInput`}
            />
            <div className="flex items-center justify-start text-gray-200  gap-y-[8px]">
              <IoIosInformationCircleOutline />
              <p className="text-sm">Your Surname is your Last Name</p>
            </div>
          </div>

          <div className=" flex flex-col  gap-y-[8px]">
            <label
              htmlFor=""
              className="font-semibold text-[16px] leding-[20px] tracking-[-2%]"
            >
              Gender<span className=" pl-[0.1rem] text-red-400">*</span>
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
          <div className=" flex flex-col  gap-y-[8px]">
            <label
              htmlFor=""
              className="font-semibold text-[16px] leding-[20px] tracking-[-2%]"
            >
              Email Address<span className="text-red-400  pl-[0.1rem]">*</span>
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

          <div className=" flex flex-col  gap-y-[8px]">
            <label
              htmlFor=""
              className="font-semibold text-[16px] leding-[20px] tracking-[-2%]"
            >
              Home Address<span className="text-red-400  pl-[0.1rem]">*</span>
            </label>
            <input
              type="text"
              name=""
              required
              value={basicDetails.email}
              onChange={(e: any) =>
                setBasicDetails({ ...basicDetails, email: e.target.value })
              }
              id="homeaddress"
              placeholder="4a, example street, ikeja lagos."
              className={`${styles.input}`}
            />
          </div>
          <div className=" flex flex-col gap-y-[8px]">
            <label
              htmlFor=""
              className="font-semibold text-[16px] leding-[20px] tracking-[-2%]"
            >
              Phone Number<span className="text-red-400  pl-[0.1rem]">*</span>
            </label>
            <div className="flex items-center mt-2 border mb-6 rounded-md">
              <select value="" className=" rounded-md p-1.5 focus:outline-none">
                <option value="+1">US</option>
                <option value="+234">NG</option>
                <option value="+44">UK</option>
              </select>
              <input
                type="text"
                required
                value={basicDetails.phone}
                onChange={(e: any) =>
                  setBasicDetails({ ...basicDetails, phone: e.target.value })
                }
                placeholder="  +1(555) 000-0000"
                className=" w-[96%]  outline-none"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            <input
              type="submit"
              value="Continue"
              className="w-full h-[40px] bg-[#7F56D9] text-center text-[#fff] rounded  cursor-pointer"
            />
          </div>
        </form>
        <div>
          <p className="py-4 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link
              className="text-[#7F56D9] leading-[19px] tracking-[-2%] font-[700] ml-1 "
              href={"/login"}
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicUserDetails;
