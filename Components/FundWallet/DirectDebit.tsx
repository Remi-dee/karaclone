"use client";
import React, { FC, useState } from "react";
import { IoIosArrowRoundBack, IoMdCopy } from "react-icons/io";
import copy from "@/public/svg/copy.svg";
import Image from "next/image";
import FundWalletSummary from "./FundWalletSummary";
// type Props = {
//   active: number;
//   setActive: (active: any) => void;
// };

const DirectDebit: FC<any> = () => {
  const handleBack = () => {
    // setActive((active -= 1));
  };

  const [isContinue, setIsOpen] = useState(true);
  const [selectedBank, setSelectedBank] = useState("Select Payment Method");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBank(event.target.value);
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
  const [isSubmitReady, setIsSubmitReady] = useState(false);
  const handlePaid = () => {
    // setActive(active + 1);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitReady(true);
  };

  return (
    <>
      {isSubmitReady ? (
        <FundWalletSummary />
      ) : (
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

          <div className="flex flex-col mt-[24px] items-center justify-start gap-[24px] text-center text-2xl text-neutral-black">
            <div className="w-[470px] flex flex-col items-center justify-start gap-[16px]">
              <h2 className="m-0 leading-[28.8px] lg:text-[24px] relative text-inherit tracking-[-0.55px] font-bold font-inherit inline-block">
                Direct Debit
              </h2>
              <div className="self-stretch relative text-base leading-[24px] text-[#7C7C7C]">
                Fill in the details below to make a direct Debit
              </div>
            </div>
            <div className="w-[528px] h-[348px] rounded-lg bg-white-100 shadow-lg overflow-hidden flex flex-col py-8 px-10 box-border max-w-full text-left text-sm text-neutral-color-500 ">
              <div>
                <label
                  htmlFor=""
                  className=" text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
                >
                  Bank Name
                </label>
                <div className="h-[46px] w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                  <select
                    name=""
                    value={selectedBank}
                    onChange={handleChange}
                    className="w-full rounded-[12px] text-gray-300 outline-none border-none text-xs focus:border-black focus:ring-0 focus:outline-none p-1"
                    id=""
                  >
                    {["Select Payment Method", "Zenith", "Union", "Wema"].map(
                      (e, i) => {
                        return (
                          <option
                            key={i}
                            value={e}
                            className="text-[400] text-[16px] leading-[24px] w-full"
                          >
                            {e}
                          </option>
                        );
                      }
                    )}
                  </select>
                </div>
              </div>

              {/* marke */}

              <div className=" mt-[24px] w-[433px]">
                <label
                  htmlFor=""
                  className=" text-[16px] mb-[10px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
                >
                  Account Number
                </label>
                <input
                  type="text"
                  name=""
                  // value={selectedBank}
                  // onChange={handleChange}
                  placeholder="Enter your account number"
                  className="h-[46px] w-[433px] gap-[10px] mt-[10px] rounded-[12px] text-gray-300 p-[8px_16px_8px_16px]  border-[#DCDCDC] border  text-[16px] focus:border-black focus:ring-0 focus:outline-none "
                  id=""
                ></input>
              </div>

              <div>
                <button
                  onClick={onSubmit}
                  type="submit"
                  className={`
      w-[433px]     h-[44px]     mt-[24px]    px-[16px]         py-[10px]         gap-[8px]         rounded-[8px]  border-t-[1px]         border-t-[#000]         border-opacity-0            text-[16px]  font-semibold   text-[#98A2B3]      text-cente        leading-[24px]        hover:opacity-100       focus:opacity-100  ${
        isSubmitReady ? "bg-[#7F56D9] text-[white] " : "bg-[#F2F4F7]"
      }  `}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DirectDebit;
