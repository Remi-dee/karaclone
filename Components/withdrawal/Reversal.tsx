"use client";
import React, { FC, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toggleReversalState } from "@/redux/features/user/userSlice";

import ReversalSuccessful from "./ReversalSuccessful";

const Reversal: FC = () => {
  const [isWithdrawalCompleted, setIsWithdrawalCompleted] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setIsWithdrawalCompleted(false);
  };

  const handleBack = () => {
    dispatch(toggleReversalState(false));
  };

  return (
    <div>
      {isWithdrawalCompleted ? (
        <div>
          <div className="flex flex-row items-center justify-between text-sm text-neutral-color-800">
            <div
              onClick={handleBack}
              className="my-4 mx-6 flex justify-start items-center gap-1 cursor-pointer"
            >
              <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
              <p className="text-primaryBtn font-semibold">Go-Back</p>
            </div>

            <div className="hidden md:flex flex-row items-center justify-center gap-[16px]">
              <Image
                width={10}
                height={10}
                className="h-10 w-10 relative"
                loading="lazy"
                alt=""
                src="/svg/progress.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <div className="relative leading-[20px] inline-block min-w-[54px]">
                  Step 1/3
                </div>
                <div className="relative text-base tracking-[-0.39px] leading-[24px] font-semibold text-primary-main whitespace-pre-wrap inline-block min-w-[99px]">
                  Enter Amount
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex flex-col min-w-full w-full md:min-w-[513px] md:w-[513px] mt-[64px] items-center justify-start gap-[24px] text-center text-2xl text-neutral-black">
              <div className="w-full md:w-[470px] flex flex-col items-center justify-start gap-[16px]">
                <h2 className="m-0 relative text-inherit tracking-[-0.55px] font-bold font-inherit inline-block">
                  Reversal
                </h2>
                <div className="self-stretch relative text-[#7C7C7C] text-[16px] leading-[24px] text-neutral-color-500">
                  We are about to reverse 1,000 NGN to your account.
                </div>
              </div>

              <div className="w-full md:w-[513px] h-[220px] rounded-lg mt-[30px] p-[32px_40px_32px_40px] bg-white-100 shadow-lg overflow-hidden flex flex-col items-center justify-start py-8 box-border max-w-full text-left text-sm text-neutral-color-500 px-[1rem]">
                <div className="w-full flex flex-col gap-[16px]">
                  <div className="flex w-full justify-between">
                    <span className="text-[#7C7C7C] text-[14px] leading-[20px]">
                      Transaction Fee
                    </span>
                    <span className="text-[#1E1E1E] tracking-[-2%] text-[14px] leading-[20px] font-medium">
                      20 NGN
                    </span>
                  </div>
                  <div className="flex w-full justify-between">
                    <span className="text-[#7C7C7C] text-[14px] leading-[20px]">
                      Amount you will get
                    </span>
                    <span className="text-[#1E1E1E] tracking-[-2%] text-[14px] leading-[20px] font-medium">
                      980 NGN
                    </span>
                  </div>
                </div>
                <div className="flex w-full mt-[40px] flex-col items-start justify-start gap-[24px]">
                  <button
                    onClick={handleSubmit}
                    className="p-[12px] text-[#fff] bg-[#7F56D9] w-full md:w-[470px] rounded-lg"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ReversalSuccessful />
      )}
    </div>
  );
};

export default Reversal;
