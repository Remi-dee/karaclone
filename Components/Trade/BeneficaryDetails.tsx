import React, { useState } from "react";
import Image from "next/image";
import svgBank from "@/public/svg/svgBank.svg";
function BeneficaryDetails({ onSelect }: { onSelect: any }) {
  const continueHanlder = (e: any) => {
    e.preventDefault();
    onSelect("1");
  };

  return (
    <div className="   h-[1000px]  max-h-[1027px]  min-h-max">
      <div className=" w-full justify-center flex">
        <Image src={svgBank} alt="" />
      </div>

      <div className=" text-center flex flex-col gap-[12px] mt-[24px] ">
        <h1 className=" leading-[34.8px] tracking-[-2%] font-[600] text-[29px]   ">
          Recipient Details
        </h1>

        <p className=" leading-[24px] text-[#7C7C7C] text-[16px]   ">
          Fill the correct details below to complete trade
        </p>
      </div>

      <div className=" mt-[35px] w-full flex flex-col gap-[24px]">
        <BeneficiaryInput onchange="" label="  Account Name" />
        <BeneficiaryInput onchange="" label="  Account Number" />
        <BeneficiarySelect label="Bank Name" />
        <BeneficiaryInput onchange="" label="Swift Code" />
        <BeneficiaryInput onchange="" label="ACH Routing" />
        <BeneficiarySelect label="Account  Type" />
        <BeneficiaryInput onchange="" label="Bank Address" />

        <button
          onClick={continueHanlder}
          //   onClick={handleTradeDetails}
          className="p-[12px]  rounded-[8px] mt-[12px] text-white-100 bg-[#7F56D9]  w-full h-[44px]["
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default BeneficaryDetails;

function BeneficiaryInput({ label }: { label: string; onchange: string }) {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event: any) => {
    const value = event.target.value;
    setSelectedValue(value);
    onchange = value; // Pass the selected value to the parent component
  };
  return (
    <div className="flex flex-col gap-[10px]">
      <label className="font-lato text-lg font-semibold leading-6 tracking-tight text-left">
        {label}
      </label>
      <input
        value={selectedValue}
        onChange={handleChange}
        type="text"
        className="w-[433px] h-[48px] p-2 pl-4 pr-4 gap-2 rounded-[12px] border  border-[#DCDCDC] focus:opacity-100"
      />
    </div>
  );
}

function BeneficiarySelect({ label }: { label: string }) {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event: any) => {
    const value = event.target.value;
    setSelectedValue(value);
    onchange = value; // receive the selected value where the  component is used
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label className="font-lato text-lg font-semibold leading-6 tracking-tight text-left">
        {label}
      </label>
      <div className="relative w-[433px]">
        <select
          value={selectedValue}
          onChange={handleChange}
          className="appearance-none w-full h-[48px] p-2 pl-4 pr-10 rounded-[12px] border border-[#DCDCDC] focus:opacity-100"
        >
          <option value="" disabled selected hidden>
            Select an option
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
