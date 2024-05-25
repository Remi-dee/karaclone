"use client";
import React, { FC, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCreditCard, FaBuilding } from "react-icons/fa";
import BankTransfer from "./BankTransfer";
import { increaseFundWallet } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";

// type Props = {
//   active: number;
//   setActive: (active: any) => void;
// };

const FundMethod: FC<any> = ({ active, setActive }) => {
  const [showComponent, setShowComponent] = useState(true);
  const [option, setOption] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const handleOptionChange = (option: string) => {
    setOption(option);
  };
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(increaseFundWallet(1));
  };
  const handleSelct = () => {
    setShowComponent(false);
    if (option === "Bank Transfer") {
      setSelected(option);
    }
  };
  return (
    <>
      {showComponent ? (
        <div>
          <div className="flex flex-row items-center justify-between text-sm text-neutral-color-800">
            <div
              onClick={handleBack}
              className="my-4 mx-6 flex justify-start items-center gap-1 cursor-pointer"
            >
              <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
              <p className="text-primaryBtn font-semibold">Go-Back</p>
            </div>

            <div className="flex flex-row items-center justify-center gap-[16px]">
              <img
                className="h-10 w-10 relative"
                loading="lazy"
                alt=""
                src="/svg/progress.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <div className="relative leading-[20px] inline-block min-w-[54px]">
                  Step 2/3
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
                Select Payment Method
              </h2>
              <div className="self-stretch relative text-base text-[#7C7C7C] leading-[24px] text-neutral-color-500">
                Select how you want to fund your account
              </div>
            </div>
            <div className="w-[40%] rounded-lg bg-white-100 shadow-lg overflow-hidden flex flex-col items-center justify-start py-8 px-10 box-border max-w-full text-left text-sm text-neutral-color-500 ">
              <div
                onClick={() => handleOptionChange("Credit Card")}
                className={`w-full cursor cursor-pointer flex justify-start items-center mt-6 mb-4 gap-2 p-2 border rounded-md ${
                  option === "Credit Card"
                    ? "border-black-200"
                    : "border-gray-200"
                }`}
              >
                <div className="flex flex-grow justify-between">
                  <div className="flex flex-grow space-x-4">
                    <FaCreditCard className="mt-1" />
                    <h4 className="text-black-200 font-semibold text-sm">
                      Direct Debit
                    </h4>
                  </div>
                </div>
                <input
                  type="radio"
                  checked={option === "Credit Card"}
                  onChange={() => handleOptionChange("Credit Card")}
                  className="w-10 checked:bg-primaryBtn"
                />
              </div>

              <div
                onClick={() => handleOptionChange("Bank Transfer")}
                className={`w-full cursor cursor-pointer flex justify-start items-center mt-6 mb-4 gap-2 p-2 border rounded-md ${
                  option === "Bank Transfer"
                    ? "border-black-200"
                    : "border-gray-200"
                }`}
              >
                <div className="flex flex-grow justify-between">
                  <div className="flex flex-grow space-x-4">
                    <FaBuilding className="mt-1" />
                    <h4 className="text-black-200 font-semibold text-sm">
                      Connect to Bank App
                    </h4>
                  </div>
                </div>
                <input
                  type="radio"
                  checked={option === "Bank Transfer"}
                  onChange={() => handleOptionChange("Bank Transfer")}
                  className="w-10 checked:bg-primaryBtn"
                />
              </div>

              <button
                onClick={handleSelct}
                className="p-2 my-2 text-[#fff] bg-primaryBtn w-full rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : (
        selected && <BankTransfer active={active} setActive={setActive} />
      )}
    </>
  );
};

export default FundMethod;
