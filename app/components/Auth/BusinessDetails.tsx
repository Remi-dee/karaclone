"use client";
import React, { FC } from "react";
import Link from "next/link";
import businessLogo from "../../../public/Images/Business-logo.png";
import Image from "next/image";

type Props = {
  businessDetails: any;
  setBusinessDetails: (businessDetails: any) => void;
  active: number;
  setActive: (active: any) => void;
  handleBusinessDetailsSubmit: any;
};

const BusinessDetails: FC<Props> = ({
  businessDetails,
  setBusinessDetails,
  handleBusinessDetailsSubmit,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleBusinessDetailsSubmit();
  };
  return (
    <div className="w-[500px] mx-auto mt-4 rounded-md shadow-lg">
      <div className="w-[400px] pt-6 mx-auto">
        <div className="w-[35px] h-[30px] flex justify-center items-center shadow-md border border-gray-200  rounded-md ">
          <Image src={businessLogo} alt="" className="w-[20px] mt-1 h-[18px]" />
        </div>
        <h3 className="py-2 font-semibold text-2xl">Input Business Details</h3>
        <p className="text-gray-300 text-sm">Fill in your business details</p>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col mt-2 gap-1">
            <label htmlFor="" className="font-semibold text-sm">
              Business Name<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="p-1.5 border rounded-md outline-none"
              placeholder="type in your business name"
              required
              value={businessDetails.business_name}
              onChange={(e: any) =>
                setBusinessDetails({
                  ...businessDetails,
                  business_name: e.target.value,
                })
              }
            />
          </div>
          <div className=" flex flex-col mt-2 gap-1">
            <label htmlFor="" className="font-semibold text-sm">
              Business Address<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="p-1.5 border rounded-md outline-none"
              placeholder="type in your business address"
              required
              value={businessDetails.business_address}
              onChange={(e: any) =>
                setBusinessDetails({
                  ...businessDetails,
                  business_address: e.target.value,
                })
              }
            />
          </div>
          <div className=" flex flex-col mt-2 gap-1">
            <label htmlFor="" className="font-semibold text-sm">
              Business Email<span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              className="p-1.5 border rounded-md outline-none"
              placeholder="example@gmail.com"
              required
              value={businessDetails.business_email}
              onChange={(e: any) =>
                setBusinessDetails({
                  ...businessDetails,
                  business_email: e.target.value,
                })
              }
            />
          </div>
          <label htmlFor="" className="font-semibold text-sm">
            Business Line<span className="text-red-400">*</span>
          </label>
          <div className="flex items-center mt-2 border mb-6 rounded-md">
            <select value="" className=" rounded-md p-1.5 focus:outline-none">
              <option value="NG">+234</option>
              <option value="US">+1</option>
              <option value="UK">+44</option>
            </select>
            <input
              type="text"
              placeholder="Phone Number"
              className=" w-[96%]  outline-none"
              required
              value={businessDetails.business_line}
              onChange={(e: any) =>
                setBusinessDetails({
                  ...businessDetails,
                  business_line: e.target.value,
                })
              }
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

export default BusinessDetails;
