"use client";
import React, { FC } from "react";
import { IoIosArrowRoundBack, IoMdCopy } from "react-icons/io";

type Props = {
  active: number;
  setActive: (active: any) => void;
};

const BankTransfer: FC<Props> = ({ active, setActive }) => {
  const handleBack = () => {
    setActive(active - 1);
  };

  // Function to copy text to clipboard
  const copyToClipboard = () => {
    const textToCopy = document.getElementById("accountNumber")?.innerText;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      // Optionally, you can show some feedback to the user that the text has been copied
      alert("Text copied to clipboard!");
    }
  };

  const handlePaid = () => {
    setActive(active + 1);
  };

  return (
    <div>
      <div
        onClick={handleBack}
        className="my-4 mx-6 flex justify-start items-center gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold">Go-Back</p>
      </div>

      <div className="flex flex-row items-center justify-end text-sm text-neutral-color-800">
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <img
            className="h-10 w-10 relative"
            loading="lazy"
            alt=""
            src="/progress.svg"
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

      <div className="flex flex-col items-center justify-start gap-[24px] text-center text-2xl text-neutral-black">
        <div className="w-[470px] flex flex-col items-center justify-start gap-[16px]">
          <h2 className="m-0 relative text-inherit tracking-[-0.55px] font-bold font-inherit inline-block">
            Bank Transfer
          </h2>
          <div className="self-stretch relative text-base leading-[24px] text-neutral-color-500">
            Make your transfer to the account details below
          </div>
        </div>
        <div className="w-[40%] rounded-lg bg-white-100 shadow-lg overflow-hidden flex flex-col py-8 px-10 box-border max-w-full text-left text-sm text-neutral-color-500 ">
          <p className="mb-3">Amount to be transferred: 20,000</p>
          <div className="w-full rounded-lg bg-purple-200 p-5 overflow-hidden">
            <div className="flex flex-grow items-center justify-center py-2 px-4 gap-[4px]">
              <h4 id="accountNumber" className="text-primaryBtn font-semibold">
                0123456789
              </h4>
              <button
                onClick={copyToClipboard}
                className="text-primaryBtn text-sm font-semibold"
              >
                <IoMdCopy width={15} height={15} />
              </button>
            </div>

            <div className="flex flex-row items-center justify-center">
              <h3 className="text-black mt-4">Wema Bank</h3>
            </div>
            <div className="flex flex-row items-center justify-center">
              <h3 className="text-black mt-3 mb-3">FX Karasell</h3>
            </div>
          </div>

          <button
            onClick={handlePaid}
            className="p-2 mt-3 my-4 text-[#fff] bg-primaryBtn w-full rounded-lg"
          >
            I Have Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
