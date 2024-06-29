"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { toggleCreateTradeStage } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import bag from "@/public/svg/bag.svg";
import BalanceDropdown from "../BalanceDropdown";
import CreateTradeDropDown from "../CustomDropdown/CreateTradeDropDown";
import { closeModal, closeTradeModal } from "@/redux/modal/modalSlice";
const AmountToTrade = () => {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState<string>("");
  const router = useRouter();
  const handleDone = () => {
    dispatch(closeTradeModal());
  };
  const handleCurrency = (value: string) => {
    setCurrency(value);
  };
  return (
    <div className="">
      <div className=" w-[550px] p-[32px_40px_32px_40px] mt-[2rem] ml-[4rem] gap-[25px] mx-auto rounded-[16px] bg-white-100 h-[411px] shadow-lg overflow-hidden flex flex-col justify-center items-center py-8 px-10 box-border max-w-full text-left text-sm text-neutral-color-500 ">
        <div className="w-[56px] h-[56px]   flex justify-center items-center  rounded-[12px] ">
          <Image src={bag} width={56} height={56} alt="" />
        </div>
        <div className=" flex  flex-col gap-[12px]">
          <h3 className=" text-[29px] tracking-[-2%] text-center text-[#3D3D3D] leadng-[38.4px] font-bold py-2">
            Enter Amount
          </h3>
          <p className="text-[#7C7C7C] leading-[24px] text-[16px] text-center ">
            Enter the specify amount of dollar you want to buy.
          </p>
        </div>

        <div className="w-[360px] h-[48px] border flex  items-center rounded-[12px] p-[8px_16px_8px_16px]">
          <div>
            <input
              className="w-[215px] h-[16px] border-r  border-r-[#BDBDBD]  placeholder:text-sm placeholder:text-[#989898] outline-none"
              placeholder="Amount to Buy"
              //   onChange={handleAmountChange}
              type="text"
              //   value={amount}
            />
          </div>
          <div className="w-[115px] flex justify-center items-center ml-[5px] bg-[#F7F7F7] rounded-[16px] ">
            <CreateTradeDropDown
              onSelect={handleCurrency}
              options={["USD"]}
              placeholder="Currency"
              className="w-full outline-none"
              displayImages
            />
          </div>
        </div>

        <div className=" mt-[9px]">
          <button
            onClick={handleDone}
            className="p-[12px] text-[14px] leading-[20px] w-[470px] text-[#fff] bg-primaryBtn  h-[44px] rounded-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountToTrade;
