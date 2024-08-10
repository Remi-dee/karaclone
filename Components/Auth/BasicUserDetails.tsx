"use client";

import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Link from "next/link";
import { TiUser } from "react-icons/ti";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addBasicDetailsToObject,
  increaseRegistrationStage,
} from "@/redux/features/auth/authSlice";
import { styles } from "@/styles/style";

interface PhoneFormat {
  placeholder: string;
  regex: RegExp;
}

const phoneFormats: { [key: string]: PhoneFormat } = {
  "+1": {
    placeholder: "+1 (555) 000-0000",
    regex: /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/,
  },
  "+234": {
    placeholder: "+234 800 000 0000",
    regex: /^\+234\s\d{4}\s\d{3}\s\d{4}$/,
  },
  "+44": {
    placeholder: "+44 07123 456789",
    regex: /^\+44\s\d{5}\s\d{6}$/,
  },
};

const BasicUserDetails: FC = () => {
  const [inputValuesForBasic, setInputValuesForBasic] = useState({
    name: "",
    business_address: "",
    email: "",
    gender: "",
    phone: "",
    role: "user",
  });
  const [selectedCountry, setSelectedCountry] = useState<string>("+1");
  const [isValid, setIsValid] = useState<boolean>(true);

  const globalState = useSelector((state: any) => state.auth);

  const validatePhoneNumber = (value: string) => {
    const isValid = value.startsWith(selectedCountry);
    setIsValid(isValid);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      validatePhoneNumber(value);
    }

    setInputValuesForBasic((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (inputValuesForBasic.phone) {
      validatePhoneNumber(inputValuesForBasic.phone);
    }
  }, [selectedCountry]);

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);

    setInputValuesForBasic((prevState) => ({
      ...prevState,
      phone: "",
    }));

    setIsValid(true);
  };

  const dispatch = useDispatch();

  const continueHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addBasicDetailsToObject(inputValuesForBasic));
    dispatch(increaseRegistrationStage());
  };

  const renderInputField = (
    label: string,
    name: string,
    type: string,
    placeholder: string,
    value: string,
    required = true
  ) => (
    <div className="flex flex-col gap-y-[8px]">
      <label
        htmlFor={name}
        className="font-semibold text-[16px] leading-[20px] tracking-[-2%]"
      >
        {label}
        <span className="pl-[0.1rem] text-red-400">{required && "*"}</span>
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={handleInputChange}
        id={name}
        placeholder={placeholder}
        className={`${styles.input} padingForInput`}
      />
    </div>
  );

  return (
    <div className="w-full lg:w-[550px] h-[876px] py-[3px] md:py-[1rem] flex justify-center items-center gap-y-[24px] shadow-[40px_4px_40px_0px_#7F56D91A] border border-[#EAECF0]  md:shadow-lg rounded-md ml-0 ">
      <div className="h-[630px] w-full p-[1rem] lg:w-[470px] gap-y-[24px] flex flex-col justify-center">
        <div className="md:w-[56px] w-[32px] flex justify-center items-center content-center shadow-md border border-[#EAECF0] rounded-md min-h-[32px]  md:min-h-[56px]">
          <TiUser className="md:text-[38px] text-[22px]" />
        </div>
        <div className="flex flex-col gap-y-[16px]">
          <h3 className="tracking-[-2%] font-bold leading-[38.4px] text-[26px] md:text-[32px]">
            Input Basic Details
          </h3>
          <p className="text-gray-300 text-sm">
            Further KYC verification will be required on the dashboard. Kindly
            complete it to ensure uninterrupted service. Thank you.
          </p>
        </div>
        <form
          className={`${styles.label} gap-y-[24px] mt-[8px] flex flex-col`}
          onSubmit={continueHandler}
        >
          {renderInputField(
            "Full Name",
            "name",
            "text",
            "First name and Last name",
            inputValuesForBasic.name
          )}
          <div className="flex items-center justify-start text-gray-200 gap-y-[8px]">
            <IoIosInformationCircleOutline />
            <p className="text-sm">Your Surname is your Last Name</p>
          </div>

          <div className="flex flex-col gap-y-[8px]">
            <label
              htmlFor="gender"
              className="font-semibold text-[16px] leading-[20px] tracking-[-2%]"
            >
              Gender<span className="pl-[0.1rem] text-red-400">*</span>
            </label>
            <select
              className="p-1.5 border border-gray-200 rounded-md"
              name="gender"
              id="gender"
              value={inputValuesForBasic.gender}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {renderInputField(
            "Email Address",
            "email",
            "email",
            "example@domain.com",
            inputValuesForBasic.email
          )}
          {renderInputField(
            "Home Address",
            "business_address",
            "text",
            "4a, example street, Ikeja Lagos.",
            inputValuesForBasic.business_address
          )}

          <div className="flex flex-col gap-y-[8px]">
            <label
              htmlFor="phone"
              className="font-semibold text-[16px] leading-[20px] tracking-[-2%]"
            >
              Phone Number<span className="text-red-400 pl-[0.1rem]">*</span>
            </label>
            <div className="flex items-center mt-2 border mb-6 rounded-md">
              <select
                value={selectedCountry}
                onChange={handleCountryChange}
                className="rounded-md p-1.5 focus:outline-none"
              >
                <option value="+1">US</option>
                <option value="+234">NG</option>
                <option value="+44">UK</option>
              </select>
              <input
                type="text"
                required
                name="phone"
                value={inputValuesForBasic.phone}
                onChange={handleInputChange}
                placeholder={phoneFormats[selectedCountry].placeholder}
                className={`w-[96%] outline-none ${
                  !isValid ? "border-red-500" : ""
                }`}
              />
              {!isValid && (
                <p className="text-red-500 text-sm mt-1">
                  Must match {selectedCountry}!
                </p>
              )}
            </div>
          </div>

          <div className="w-full flex items-center justify-end">
            <button
              type="submit"
              className="w-full h-[40px] bg-[#7F56D9] text-center text-[#fff] rounded cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
        <div>
          <p className="py-4 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link
              className="text-[#7F56D9] leading-[19px] tracking-[-2%] font-[700] ml-1"
              href="/login"
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
