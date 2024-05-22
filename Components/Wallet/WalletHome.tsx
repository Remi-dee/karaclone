"use client";

import React, { useState } from "react";
import { TiEye } from "react-icons/ti";
import { IoIosAddCircle, IoIosArrowRoundUp } from "react-icons/io";
import { CgArrowsExchange } from "react-icons/cg";
import { walletData } from "./walletData";
import TransactionTable from "../Transactions/TransactionTable";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleWalletDispaly,
  toggleReversalState,
  toggleCreateTrade,
  toggleCreateTradeStage,
} from "@/redux/features/user/userSlice";

import { toast } from "react-toastify";
function WalletHome() {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleCurrency = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const handleFundWallet = () => {
    if (selectedCurrency) {
      dispatch(toggleWalletDispaly("fund-wallet"));
      // router.push("/fund-wallet");
    }
  };

  const handleTrade = () => {
    if (selectedCurrency) {
      dispatch(toggleCreateTrade(true));
      dispatch(toggleCreateTradeStage(2));
      router.push("/dashboard/P2P-Trade");
    }
  };
  const handleReversal = () => {
    if (selectedCurrency) {
      dispatch(toggleReversalState(true));
      router.push("/dashboard/Home");
    } else {
      toast.warn("Please, select a currency!");
    }
  };
  return (
    <div className=" w-full  h-full">
      <div className="w-full rounded-md h-[369px] shadow-lg p-[1.5rem]  flex flex-col gap-[24px]   bg-white-100">
        <div className=" flex flex-col gap-[13px]">
          <h2 className=" text-[20px]  font-Josefin leading-[24px]  font-bold tracking-[-2%] ">
            Wallet
          </h2>
          <div className="flex justify-start gap-[4px] items-center text-[#7C7C7C]">
            <p className="  font-medium text-[16px]  leading-[24px]   tracking-[-2%] ">
              My Balances
            </p>
            <TiEye className=" text-[20px]  text-[#7C7C7C]" />
          </div>
          <p className="leading-[24px] text-[#7C7C7C]  text-[16px] font-regular tracking-[-2%]">
            Select each curre ncy to perform a transaction
          </p>
        </div>
        <div className="flex justify-start lg:justify-between gap-[16px] items-center">
          {walletData?.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCurrency(item.name)}
              className={`w-[210px] h-[119px] currency cursor-pointer p-[16px_24px_16px_24px] border rounded-[8px] ${
                selectedCurrency === item.name
                  ? "border-primaryBtn"
                  : "border-[#DCDCDC]"
              }`}
            >
              <div className="flex justify-start items-center  text-gray-300 gap-[16px]">
                <div className=" flex gap-[8px]">
                  <Image
                    src={item.img}
                    width={20}
                    height={20}
                    alt=""
                    className=" min-w-[24px]  min-h-[24px]   "
                  />
                  <p className="font-semibold tracking-[-2%] text-[16px] leading-[24px]   ">
                    {item.name}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-300 py-2">Available balance</p>
              <p className="font-bold leading-[28.8px] tracking-[-2%] text-[24px]">
                {item.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-6 pt-4">
          <div
            className={` action flex justify-start content-center place-items-center place-content-center gap-1 items-center cursor-pointer w-[122px] h-[42px] p-[16px] border rounded-md ${
              selectedCurrency
                ? "text-[#000] border-[#000] cursor-pointer"
                : "text-gray-300 border-[#DCDCDC] cursor-not-allowed"
            }`}
            onClick={handleFundWallet}
          >
            <IoIosAddCircle />
            <p className="text-[#1E1E1E] text-[12px] leading-[24px] cursor-pointer ">
              Fund Wallet
            </p>
          </div>
          <div
            className={` action flex justify-start items-center  w-[122px] h-[42px] p-[16px] border rounded-md ${
              selectedCurrency
                ? "text-[#000] border-[#000] cursor-pointer"
                : "text-gray-300 border-[#DCDCDC] cursor-not-allowed"
            }`}
            onClick={handleTrade}
          >
            <CgArrowsExchange className=" text-[20px]" />
            <p className="text-[#1E1E1E] text-[12px] leading-[24px]  cursor-pointer">
              Trade
            </p>
          </div>

          <div
            className={` action flex justify-start items-center  w-[122px] h-[42px] p-[16px] border rounded-md ${
              selectedCurrency
                ? "text-[#000] border-[#000] cursor-pointer"
                : "text-gray-300 border-[#DCDCDC] cursor-not-allowed"
            }`}
            onClick={handleReversal}
          >
            <IoIosArrowRoundUp className=" text-[20px]" />
            <p className="text-[#1E1E1E] text-[12px] leading-[24px] cursor-pointer">
              Reversal
            </p>
          </div>
        </div>
      </div>
      <div className="w-full rounded-md shadow-lg mt-4 p-4 my-4 bg-white-100">
        <h2 className="font-bold text-sm py-2">Recent Transactions</h2>
        <TransactionTable />
      </div>
    </div>
  );
}

export default WalletHome;
