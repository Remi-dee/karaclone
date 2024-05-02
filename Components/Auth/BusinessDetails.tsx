"use client";
import React, { FC } from "react";
import Link from "next/link";
import businessLogo from "@/public/Images/Business-logo.png";
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
    <div className="w-[550px] h-[760px] mx-auto mt-4 rounded-[12px] shadow-lg bg-[#FFFFFF]">
      <div className="w-[470px] pt-6 mx-auto">
        <div className="w-[56px] h-[56px] flex justify-center items-center shadow-md border border-gray-200  rounded-[12px] ">
          <Image src={businessLogo} alt="" className="w-[28px] mt-1 h-[28px]" />
        </div>
        <h3 className="mt-[24px] font-bold text-2xl text-[#1E1E1E] leading-[38.4px] tracking-[-2%]">
          Input Business Details
        </h3>
        <p className="text-[#7C7C7C] text-sm  mt-[16px]">
          Further KYB verification will be required on the dashboard. Kindly
          complete it to ensure uninterrupted service. Thank you.
        </p>
        <form
          onSubmit={handleSubmit}
          className=" mt-[32px] h-[502px] flex flex-col gap-[24px]"
        >
          <div className=" flex flex-col mt-2 gap-2">
            <label
              htmlFor=""
              className=" text-[#1E1E1E] font-semibold text-[16px] tracking-[-2%] leading-[20px] "
            >
              Business Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="p-[8px_16px_8px_16px] mt-[8px] border rounded-[12px] outline-none"
              placeholder="type in your business name"
              required
              value={businessDetails?.business_name}
              onChange={(e: any) =>
                setBusinessDetails({
                  ...businessDetails,
                  business_name: e.target.value,
                })
              }
            />
          </div>
          <div className=" flex flex-col mt-2 gap-1">
            <label
              htmlFor=""
              className="text-[#1E1E1E] font-semibold text-[16px] tracking-[-2%] leading-[20px]"
            >
              Business Address <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="p-[8px_16px_8px_16px] mt-[8px] border rounded-[12px] outline-none"
              placeholder="type in your business address"
              required
              value={businessDetails?.business_address}
              onChange={(e: any) =>
                setBusinessDetails({
                  ...businessDetails,
                  business_address: e.target.value,
                })
              }
            />
          </div>
          <div className=" flex flex-col mt-2 gap-1">
            <label
              htmlFor=""
              className="text-[#1E1E1E] font-semibold text-[16px] tracking-[-2%] leading-[20px]"
            >
              Business Email Address<span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              className="p-[8px_16px_8px_16px] border rounded-[12px] mt-[8px] #989898 outline-none"
              placeholder="example@domain.com"
              required
              value={businessDetails?.business_email}
              onChange={(e: any) =>
                setBusinessDetails({
                  ...businessDetails,
                  business_email: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-sm">
              Business Phone Number <span className="text-red-400">*</span>
            </label>
            <div className="flex items-center  border mt-[8px] rounded-[12px]">
              <select
                value=""
                className=" rounded-[12px] p-1.5 focus:outline-none"
              >
                <option value="+1">US</option>
                <option value="+234">NG</option>
                <option value="+44">UK</option>
              </select>
              <input
                type="text"
                placeholder="+1(555) 000-0000"
                className=" w-[96%] p-[8px_16px_8px_16px]  outline-none #989898"
                required
                value={businessDetails?.business_line}
                onChange={(e: any) =>
                  setBusinessDetails({
                    ...businessDetails,
                    business_line: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="w-full flex gap-[16px] flex-col  ">
            <input
              type="submit"
              value="Continue"
              className="w-full h-[40px] bg-[#7F56D9] text-center text-[#fff] rounded-[8px]  cursor-pointer"
            />
            <div>
              <p className=" text-center text-sm text-gray-300">
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
        </form>
      </div>
    </div>
  );
};

export default BusinessDetails;
