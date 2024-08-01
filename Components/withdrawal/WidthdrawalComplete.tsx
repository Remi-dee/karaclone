"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { toggleReversalState } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";

const WithdrawalComplete = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleDone = () => {
    dispatch(toggleReversalState(false));
    router.push("/dashboard/Wallet");
  };
  return (
    <div>
      <div className="flex  flex-col items-center justify-start gap-[24px] text-center text-2xl text-neutral-black">
        <div className=" w-full md:w-[550px] md:p-[32px_40px_32px_40px] mt-1 md:mt-32 h-[326px] gap-[25px] mx-auto rounded-lg bg-white-100 shadow-lg overflow-hidden flex flex-col justify-center items-center py-8 px-10 box-border max-w-full text-left text-sm text-neutral-color-500 ">
          <div className="w-[56px] h-[56px] shadow-sm flex justify-center items-center border border[#EAECF0] rounded-[12px] ">
            <div className="w-[20]  rounded-sm text-white-100">
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.888 2.83398H9.11134C4.86467 2.83398 2.33301 5.36565 2.33301 9.61232V19.3773C2.33301 23.6357 4.86467 26.1673 9.11134 26.1673H18.8763C23.123 26.1673 25.6547 23.6357 25.6547 19.389V9.61232C25.6663 5.36565 23.1347 2.83398 18.888 2.83398ZM19.5763 11.8173L12.9613 18.4323C12.798 18.5957 12.5763 18.689 12.343 18.689C12.1097 18.689 11.888 18.5957 11.7247 18.4323L8.42301 15.1307C8.08467 14.7923 8.08467 14.2323 8.42301 13.894C8.76134 13.5557 9.32134 13.5557 9.65967 13.894L12.343 16.5773L18.3397 10.5807C18.678 10.2423 19.238 10.2423 19.5763 10.5807C19.9147 10.919 19.9147 11.4673 19.5763 11.8173Z"
                  fill="#17B26A"
                />
              </svg>
            </div>
          </div>
          <div className=" flex  flex-col gap-[12px]">
            <h3 className=" text-[32px] text-center text-[#3D3D3D] leadng-[38.4px] font-bold py-2">
              Reversal Successful
            </h3>
            <p className="text-[#7C7C7C] leading-[24px] text-[16px] text-center ">
              NGN 1,000 has been successfully reversed into your account. You
              will receive your money shortly
            </p>
          </div>

          <button
            onClick={handleDone}
            className="p-[12px] w-full md:w-[470px] text-[#fff] bg-primaryBtn  h-[44px] rounded-lg"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalComplete;
