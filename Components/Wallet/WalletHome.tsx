"use client";

import React, { useEffect, useState } from "react";
import { TiEye } from "react-icons/ti";
import { IoIosAddCircle, IoIosArrowRoundUp } from "react-icons/io";
import { CgArrowsExchange } from "react-icons/cg";

import TransactionTable from "../Transactions/TransactionTable";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleWalletDispaly,
  toggleReversalState,
  toggleCreateTrade,
  toggleCreateTradeStage,
  toggleBuyTradeDisplay,
  setLoading,
  setWallets,
  setError,
  setSelectedCurrency,
  userSelector,
} from "@/redux/features/user/userSlice";
import NGN from "@/public/Images/NGN.png";

import GBP from "@/public/Images/GBP.png";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { useGetAllUserWalletsQuery } from "@/redux/features/user/userApi";
function WalletHome() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleCurrency = (currency: string) => {
    dispatch(setSelectedCurrency(currency));
  };
  const { selectedCurrency } = useSelector(userSelector);
  const { data, error, isLoading } = useGetAllUserWalletsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
    console.log("here is data 1", data);
    if (data) {
      console.log("here is data", data);
      dispatch(setWallets(data));
    }

    if (error) {
      console.log("here is error", error);
      dispatch(setError(error.toString()));
    }

    if (isLoading) {
      console.log("here is loading", isLoading);
    }
  }, [data, error, isLoading, dispatch]);

  const handleFundWallet = () => {
    if (selectedCurrency) {
      dispatch(toggleWalletDispaly("fund-wallet"));
      // router.push("/fund-wallet");
    }
  };

  const handleTrade = () => {
    if (selectedCurrency) {
      dispatch(toggleCreateTrade(true));
      dispatch(toggleBuyTradeDisplay(false));
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

  const wallets = data?.wallets || [];

  // Sort wallets: NGN first, then GBP
  const sortedWallets = wallets.sort((a, b) => {
    if (a.currency_code === "NGN") return -1;
    if (b.currency_code === "NGN") return 1;
    if (a.currency_code === "GBP") return -1;
    if (b.currency_code === "GBP") return 1;
    return 0;
  });

  console.log(sortedWallets);
  return (
    <div className=" w-full  h-full">
      <div className="w-full rounded-md  shadow-lg p-[1.5rem]  flex flex-col gap-[24px]   bg-white-100">
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
          <p className="leading-[24px] text-[#7C7C7C]  text-[14px] md:text-[16px] font-regular tracking-[-2%]">
            Select each currency to perform a transaction
          </p>
        </div>
        <div className="flex justify-start lg:justify-between gap-[16px] items-center">
          {data?.map((item: any) => (
            <div
              key={item.id}
              onClick={() => handleCurrency(item.currency_code)}
              className={`w-[210px] h-[119px] currency cursor-pointer p-[16px_24px_16px_24px] border rounded-[8px] ${
                selectedCurrency === item.name
                  ? "border-primaryBtn"
                  : "border-[#DCDCDC]"
              }`}
            >
              <div className="flex justify-start items-center  text-gray-300 gap-[16px]">
                <div className=" flex gap-[8px]">
                  <Image
                    src={item.currency_code === "NGN" ? NGN : GBP}
                    width={20}
                    height={20}
                    alt=""
                    className=" min-w-[24px]  min-h-[24px]   "
                  />
                  <p className="font-semibold tracking-[-2%] text-[16px] leading-[24px]   ">
                    {item.currency_code}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-300 py-2">Available balance</p>
              <p className="font-bold leading-[28.8px] tracking-[-2%] text-[24px]">
                {item.currency_code == "NGN" ? "N" : "E"} {item.escrow_balance}
              </p>
            </div>
          ))}
        </div>
        {/* md:flex-row flex flex-col mx-auto   gap-6 pt-4 */}
        <div className="md:flex-row flex flex-col   md:w-full   gap-6 pt-4">
          <div
            className={`w-full md:w-[356px] action flex justify-center content-center place-items-center place-content-center gap-1 items-center cursor-pointer  h-[42px] p-[16px] border rounded-md ${
              selectedCurrency
                ? "text-[#000] border-[#000] cursor-pointer"
                : "text-gray-300 border-[rgb(220,220,220)] cursor-not-allowed"
            }`}
            onClick={handleFundWallet}
          >
            <IoIosAddCircle />
            <p className="text-[#1E1E1E]   text-[12px] leading-[24px] cursor-pointer ">
              Fund Wallet
            </p>
          </div>
          <div
            className={`w-full md:w-[356px] action flex justify-center items-center   h-[42px] p-[16px] border rounded-md ${
              selectedCurrency
                ? "text-[#000] border-[#000] cursor-pointer"
                : "text-gray-300 border-[#DCDCDC] cursor-not-allowed"
            }`}
            onClick={handleTrade}
          >
            <CgArrowsExchange className=" text-[20px]" />
            <p className="text-[#1E1E1E] w-fit text-[12px] leading-[24px]  cursor-pointer">
              Trade
            </p>
          </div>

          <div
            className={`w-full md:w-[356px] action flex justify-center items-center   h-[42px] p-[16px] border rounded-md ${
              selectedCurrency
                ? "text-[#000] border-[#000] cursor-pointer"
                : "text-gray-300 border-[#DCDCDC] cursor-not-allowed"
            }`}
            onClick={handleReversal}
          >
            <IoIosArrowRoundUp className=" text-[20px]" />
            <p className="text-[#1E1E1E] w-fit text-[12px] leading-[24px] cursor-pointer">
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
