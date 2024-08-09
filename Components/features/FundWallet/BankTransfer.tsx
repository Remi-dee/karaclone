"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack, IoMdCopy } from "react-icons/io";
import copy from "@/public/svg/copy.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { increaseFundWallet } from "@/redux/features/user/userSlice";
const BankTransfer: FC = () => {
  const dispatch = useDispatch();
  const handleBack = () => {
    // setActive(active - 1);

    dispatch(increaseFundWallet(2));
  };

  const [copied, setCopied] = useState(false);
  const accountNumberRef = useRef<any>(null);

  const handleCopy = () => {
    const textToCopy = accountNumberRef.current?.innerText;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    }
  };

  useEffect(() => {
    if (copied) {
      toast.success("Copied to clipboard!");
    }
  }, [copied]);

  const handlePaid = () => {
    // setActive(active + 1);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between text-sm text-neutral-color-800">
        <div
          onClick={handleBack}
          className="flex items-center text-[16px] leading-[24px] tracking-[-2%] w-full gap-1 cursor-pointer"
        >
          <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
          <p className="text-primaryBtn font-semibold ml-[4px] mt-[3px] md:mt-0">
            Go-Back
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-[16px]">
          <img
            className="md:h-10 h-8 w-8 md:w-10 relative"
            loading="lazy"
            alt=""
            src="/svg/progress.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative leading-[20px] inline-block min-w-[54px]">
              Step 1/3
            </div>
            <div className="relative text-xs md:text-base tracking-[-0.39px] leading-[24px] font-semibold text-primary-main whitespace-pre-wrap inline-block min-w-[99px]">
              Enter Amount
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[1.5rem] justify-start gap-[24px] text-center text-2xl text-neutral-black">
        <div className="  w-full  md:w-[470px] flex flex-col items-center justify-start gap-[12px] md:gap-[16px]">
          <h2 className="m-0 leading-[28.8px] lg:text-[24px] relative text-inherit tracking-[-0.55px] font-bold font-inherit inline-block">
            Bank Transfer
          </h2>
          <div className="self-stretch relative text-base leading-[24px] text-[#7C7C7C]">
            Make your transfer to the account details below
          </div>
        </div>
        <div className=" w-full md:w-[528px] h-[348px] rounded-lg bg-white-100 shadow-lg overflow-hidden flex flex-col py-8 px-[1rem] md:px-10 box-border max-w-full text-left text-sm text-neutral-color-500 ">
          <p className="mb-3 text-[1rem] lg:text-[16px] leading-[24px] ">
            Amount to be transferred: <span ref={accountNumberRef}>20,000</span>
          </p>
          <div className="w-full rounded-lg bg-[#E4D8FF] p-5 overflow-hidden">
            <div className="flex flex-grow items-center justify-center py-2 px-4 gap-[4px]">
              <h4
                id="accountNumber"
                className="text-[#5111AD]  text-[1rem] lg:text-[20px] font-medium  tracking-[-2%]  leading-[24px]"
              >
                0123456789
              </h4>
              <button
                onClick={handleCopy}
                className="text-primaryBtn text-sm font-semibold"
              >
                <Image alt="" src={copy} width={15} height={15} />
                {/* <IoMdCopy width={15} height={15} /> */}
              </button>
            </div>
            <div className="  flex flex-col gap-[8px] text-[16px] leading-[24px] text-[#525252]">
              <div className="flex flex-row items-center justify-center">
                <h3 className="text-black mt-4">Wema Bank</h3>
              </div>
              <div className="flex flex-row items-center justify-center">
                <h3 className="text-black mt-3 mb-3">FX Karasell</h3>
              </div>
            </div>
          </div>

          <button
            onClick={handlePaid}
            className="p-2  my-4  mt-[24px] text-[#fff] bg-primaryBtn w-full rounded-lg"
          >
            I Have Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
