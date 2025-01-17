"use client";

import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import {
  addBusinessDetailsToObject,
  increaseRegistrationStage,
} from "@/redux/features/auth/authSlice";
import businessLogo from "@/public/Images/Business-logo.png";

const BusinessDetails: FC = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state: any) => state.auth);

  const [inputValuesForBasic, setInputValuesForBasic] = useState({
    business_name: "",
    business_address: "",
    business_email: "",
    business_line: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValuesForBasic({
      ...inputValuesForBasic,
      [name]: value,
    });
  };

  const continueHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addBusinessDetailsToObject(inputValuesForBasic));
    dispatch(increaseRegistrationStage());
  };

  const renderInputField = (
    label: string,
    name: string,
    type: string,
    placeholder: string,
    value: string
  ) => (
    <div className="flex flex-col mt-2 gap-1">
      <label
        htmlFor={name}
        className="text-[#1E1E1E] font-semibold text-[16px] tracking-[-2%] leading-[20px]"
      >
        {label} <span className="text-red-400">*</span>
      </label>
      <input
        type={type}
        name={name}
        className="p-[8px_16px_8px_16px] mt-[8px] border rounded-[12px] outline-none"
        placeholder={placeholder}
        required
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );

  return (
    <div className="w-full md:w-[550px] h-max md:h-[760px] mx-auto mt-4 rounded-[12px] md:p-0 p-[1rem]  bg-[#FFFFFF]  shadow-[40px_4px_40px_0px_#7F56D91A] border border-[#EAECF0]  md:shadow-lg  ">
      <div className="w-full md:w-[470px] pt-6 mx-auto">
        <div className="w-[56px] h-[56px] flex justify-center items-center shadow-md border border-gray-200 rounded-[12px]">
          <Image
            src={businessLogo}
            alt="Business Logo"
            className="w-[28px] mt-1 h-[28px]"
          />
        </div>
        <h3 className="mt-[24px] font-bold text-2xl text-[#1E1E1E] leading-[38.4px] tracking-[-2%]">
          Input Business Details
        </h3>
        <p className="text-[#7C7C7C] text-sm mt-[16px]">
          Further KYB verification will be required on the dashboard. Kindly
          complete it to ensure uninterrupted service. Thank you.
        </p>
        <form
          onSubmit={continueHandler}
          className="mt-[32px] h-[502px] flex flex-col gap-[24px]"
        >
          {renderInputField(
            "Business Name",
            "business_name",
            "text",
            "Type in your business name",
            inputValuesForBasic.business_name
          )}
          {renderInputField(
            "Business Address",
            "business_address",
            "text",
            "Type in your business address",
            inputValuesForBasic.business_address
          )}
          {renderInputField(
            "Business Email Address",
            "business_email",
            "email",
            "example@domain.com",
            inputValuesForBasic.business_email
          )}
          <div>
            <label htmlFor="business_line" className="font-semibold text-sm">
              Business Phone Number <span className="text-red-400">*</span>
            </label>
            <div className="flex items-center border mt-[8px] rounded-[12px]">
              <select className="rounded-[12px] p-1.5 focus:outline-none">
                <option value="+1">US</option>
                <option value="+234">NG</option>
                <option value="+44">UK</option>
              </select>
              <input
                type="text"
                name="business_line"
                placeholder="+1(555) 000-0000"
                className="w-[96%] p-[8px_16px_8px_16px] outline-none"
                required
                value={inputValuesForBasic.business_line}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-full flex gap-[16px] flex-col">
            <input
              type="submit"
              value="Continue"
              className="w-full h-[40px] bg-[#7F56D9] text-center text-[#fff] rounded-[8px] cursor-pointer"
            />
            <div>
              <p className="text-center text-sm text-gray-300">
                Already have an account?{" "}
                <Link
                  className="text-[#7F56D9] leading-[19px] tracking-[-2%] font-[700]"
                  href="/login"
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
