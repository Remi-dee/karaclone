"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import NGN from "@/public/Images/NGN.png";
import GBP from "@/public/Images/GBP.png";
import USD from "@/public/Images/USD.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiSolidCopy } from "react-icons/bi";
import { toggleCreateTradeStage } from "@/redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useMonoPayment, useMonoWidget } from "@/app/mono/monoServices";

const CreateTradeDetails = () => {
  const globalState = useSelector((state: any) => state.user);
  const { createdTrade } = globalState;

  console.log(createdTrade);
  const router = useRouter();
  const payWithMono = useMonoPayment();
  const openMonoWidget = useMonoWidget();
  const dispatch = useDispatch();
  const handleBack = () => {
    // router.push("/dashboard/P2P-trade");
    dispatch(toggleCreateTradeStage(2));
  };

  const handleContinue = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    openMonoWidget;
    // dispatch(toggleCreateTradeStage(4));
  };

  return (
    <div className="p-0 m-0 invisible-scrollbar overflow-auto h-[890px]  w-full ">
      <div
        onClick={handleBack}
        className="my-4 mx-6 flex justify-start items-center gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold">Go-Back</p>
      </div>

      <div className="flex flex-col justify-center items-center mt-4">
        <h2 className="text-lg font-semibold pb-4">Create Trade</h2>
        <p className="text-sm w-[500px] text-gray-300 text-center pb-4">
          Please note that all transactions may take a few minutes to process.
          Rest assured, all transactions are safe and secure.
        </p>
        <div className="w-[513px] bg-[white] p-[32px_40px_32px_40px]  h-[872px] min-h-[872px] shadow-xl rounded-md ">
          <div className=" flex flex-col gap-[24px] ">
            <h2 className="font-bold text-[18px] leading-[28px] tracking-[-2%]">
              Trade Details
            </h2>
            {/* first batch */}

            <div className=" flex flex-col gap-[12px]">
              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-300">Currency</p>
                <div className="flex justify-start items-center  gap-1   ">
                  <Image
                    src={
                      createdTrade?.currency === "NGN"
                        ? NGN
                        : createdTrade?.currency === "USD"
                        ? USD
                        : GBP
                    }
                    width={15}
                    height={15}
                    alt=""
                  />
                  <p className="text-xs">{createdTrade?.currency}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-300">Exit Currency</p>
                <div className="flex justify-start items-center  gap-1 mb-2 ">
                  <Image
                    src={
                      createdTrade?.exit_currency === "NGN"
                        ? NGN
                        : createdTrade?.exit_currency === "USD"
                        ? USD
                        : GBP
                    }
                    alt=""
                    width={15}
                    height={15}
                  />
                  <p className="text-xs">{createdTrade?.exit_currency}</p>
                </div>
              </div>

              <div className="flex justify-between items-center  text-sm">
                <p className="text-gray-300">Rate</p>
                <p className="text-xs font-semibold">
                  {/* 1NGN = <span>0.0081938374</span> */}
                  {createdTrade?.rate + " " + createdTrade?.exit_currency}
                </p>
              </div>

              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-300">Amount</p>
                <p className="text-xs font-semibold">
                  {createdTrade?.amount + " " + createdTrade?.currency}
                </p>
              </div>

              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-300">Minimum Bid</p>
                <p className="text-xs font-semibold">
                  {" "}
                  {createdTrade?.minimumBid + " " + createdTrade?.currency}
                </p>
              </div>

              <div className="flex justify-between items-center mt-6 mb-2 text-sm">
                <p className="text-gray-300">Payment Method</p>
                <p className="text-xs font-semibold">
                  {createdTrade?.payment_method}
                </p>
              </div>

              <div className="flex justify-between items-center  text-sm">
                <p className="text-gray-300">Bank Name</p>
                <p className="text-xs font-semibold">
                  {createdTrade?.bank_name}
                </p>
              </div>

              <div className="flex justify-between items-center  text-sm">
                <p className="text-gray-300">Account Number</p>
                <p className="text-xs font-semibold">
                  {createdTrade?.account_number}
                </p>
              </div>

              <div className="flex justify-between items-center  text-sm">
                <p className="text-gray-300">Account Name</p>
                <p className="text-xs font-semibold">
                  {createdTrade?.beneficiary_name}
                </p>
              </div>
              <div className="flex justify-between items-center  text-sm">
                <p className="text-gray-300">Transaction Fee</p>
                <p className="text-xs text-[#FF104B] tracking-[-2%] font-semibold">
                  {createdTrade?.transaction_fee}
                </p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-300">VAT Fee</p>
                <p className="text-xs text-[#FF104B] tracking-[-2%] font-semibold">
                  {createdTrade?.vat_fee + "%"}
                </p>
              </div>
            </div>
            {/* second batch */}
            <h2 className="font-bold text-[18px] leading-[28px] tracking-[-2%] ">
              Beneficiary Details
            </h2>
            <div className=" flex flex-col gap-[13px]">
              <div className="flex justify-between items-center  text-sm">
                <p className="text-gray-300">Bank Name</p>
                <p className="text-xs font-semibold">Wema Bank</p>
              </div>
              <div className="flex justify-between items-center  text-sm">
                <p className="text-gray-300">Account Number</p>
                <p className="text-xs font-semibold">0240548244</p>
              </div>
              <div className="flex justify-between items-center  text-sm">
                <p className="text-gray-300">Account Name</p>
                <p className="text-xs font-semibold">Ernest Damilola</p>
              </div>
            </div>
            {/* Third batch */}
            <div>
              <p className="font-bold text-[16px] leading-[28px] tracking-[-2%]">
                Amount to be received
              </p>
              <div className="p-1 border border-gray-800 flex  justify-start items-center rounded-md">
                <div className="bg-gray-500 flex justify-start py-1 items-center px-4 gap-4 rounded-md">
                  <Image src={USD} alt="" width={20} height={20} />
                  <p className="text-xs">USD</p>
                </div>
                <p className="text-gray-300 p-[8px_16px_8px_16px]">148.48</p>
              </div>
            </div>
            <button
              onClick={handleContinue}
              className="p-2 mt-[16px] text-white-100 bg-primaryBtn w-full rounded-lg"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTradeDetails;
