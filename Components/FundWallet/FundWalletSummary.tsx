"use client";

import React, { useState } from "react";
import USD from "@/public/Images/USD.png";
import copy from "@/public/svg/copy.svg";
import Image from "next/image";
import FundSuccess from "./FundSuccess";
function FundWalletSummary() {
  const [isContinue, setisContinue] = useState(false);
  const handleContinue = (e: any) => {
    e.preventDefault();

    setisContinue(true);
  };
  return (
    <>
      {isContinue ? (
        <FundSuccess />
      ) : (
        <div>
          <div className="flex mt-[32px]  flex-col justify-center items-center ">
            <div className=" flex flex-col gap-[16px] w-[513px] text-center">
              <h2 className="text-[#1E1E1E] font-bold  text-[24px] leading-[28.8px] ">
                Fund Wallet
              </h2>
              <p className="text-[16px] w-[500px] text-[#7C7C7C] leading-[24px] text-center ">
                Please note that all transactions may take a few minutes to
                process. Rest assured, all transactions are safe and secure.
              </p>
            </div>
            <div className="w-[523px] h-[444px] mt-[24px] bg-[#FFFFFF] shadow-xl rounded-md p-[32px_40px_32px_40px]">
              <div className="w-[433px] mx-auto">
                <h2 className="font-bold  leading-[28px] text-[18px] tracking-[-2%] ">
                  Transaction Details
                </h2>

                <div className="flex mt-[16px] py-[8px] gap-[8px] flex-col">
                  <div className="flex  justify-between items-center text-sm">
                    <p className="text-gray-300">Transaction Method</p>
                    <div className="flex justify-start items-center  gap-1  ">
                      <span className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                        Direct Deposit
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center my-2 text-sm">
                    <p className="text-gray-300">Amount</p>
                    <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                      ₦1,000,000
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-300">Bank Name</p>
                    <div className="flex justify-start items-center  gap-1  ">
                      <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                        Access Bank
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center my-2 text-sm">
                    <p className="text-gray-300">Account Number</p>
                    <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                      0022554346
                    </p>
                  </div>

                  <div className="flex justify-between items-center my-2 text-sm">
                    <p className="text-gray-300">Account Name</p>
                    <p className=" leading-[24px]  tracking-[-2%] font-[600] text-[14px]">
                      ADENIJI ABIODUN JUNIOR
                    </p>
                  </div>

                  <div className="flex justify-between items-center my-2 text-sm">
                    <p className="text-gray-300">Transaction Fee</p>
                    <p className="text-[#D92D20] leading-[24px]  tracking-[-2%] font-[600] text-[14px]">
                      0.1%
                    </p>
                  </div>
                  <div className="flex justify-between items-center my-2 text-sm">
                    <p className="text-gray-300">VAT Fee</p>
                    <p className="text-[#D92D20] leading-[24px]  tracking-[-2%] font-[600] text-[14px]">
                      0.1%
                    </p>
                  </div>

                  <button
                    onClick={handleContinue}
                    className={
                      "p-2   text-white-100 bg-primaryBtn w-full rounded-lg"
                    }
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FundWalletSummary;
