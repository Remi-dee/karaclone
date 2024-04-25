"use client";
import React, { FC } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  active: number;
  setActive: (active: any) => void;
};

const FundAmount: FC<Props> = ({ active, setActive }) => {
  const router = useRouter();
  const handleSubmit = () => {
    setActive(active + 1);
  };
  const handleBack = () => {
    router.push("/dashboard/home");
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
            Fund Wallet
          </h2>
          <div className="self-stretch relative text-base leading-[24px] text-neutral-color-500">
            Enter the amount and currency you want to fund
          </div>
        </div>
        <div className="w-[40%] rounded-lg bg-white-100 shadow-lg overflow-hidden flex flex-col items-center justify-start py-8 px-10 box-border max-w-full text-left text-sm text-neutral-color-500 ">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch rounded-lg bg-purple-50 overflow-hidden flex flex-col items-start justify-start py-2 px-4 gap-[4px]">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[65px] mq450:gap-[32px]">
                <div className="flex-1 relative leading-[20px] inline-block min-w-[72px]">
                  Wallet Balance
                </div>
                <div className="bg-white-100 py-1.5 px-[7px] rounded-lg overflow-hidden flex flex-row items-center justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-neutral-color-100 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
                  <Image width={15} height={15} alt="" src="/Images/NGN.png" />
                  <div className="relative text-xs tracking-[-0.25px] font-body-md-medium text-neutral-black text-right inline-block min-w-[73px]">
                    Nigerian Naira
                  </div>
                </div>
              </div>
              <b className="relative text-lg tracking-[-0.02em] leading-[28px] inline-block text-neutral-black min-w-[95px]">
                20,000NGN
              </b>
            </div>
            <div className="flex flex-col items-start justify-start text-base text-neutral-black">
              <div className="flex flex-col items-start justify-start gap-[40px]">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="w-[433px] overflow-x-auto flex flex-col items-start justify-start max-w-full">
                    <div className="w-[433px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                            <div className="relative tracking-[-0.02em] leading-[20px] font-semibold inline-block min-w-[112px]">
                              Amount to Fund
                            </div>
                            <div className="self-stretch rounded-xl overflow-hidden flex flex-row flex-wrap items-center justify-start py-1 px-[15px] gap-[10px] text-neutral-color-400 border-[1px] border-solid border-neutral-color-200">
                              <button className="cursor-pointer [border:none] p-2 bg-whitesmoke rounded-2xl overflow-x-auto flex flex-row items-center justify-start gap-[4px]">
                                <Image
                                  width={15}
                                  height={15}
                                  alt=""
                                  src="/Images/NGN.png"
                                />
                                <div className="relative text-sm tracking-[-0.02em] leading-[20px] font-medium font-body-md-medium text-neutral-900 text-left  min-w-[32px]">
                                  NGN
                                </div>
                              </button>
                              <div className="flex-1 relative">
                                <input
                                  type="number"
                                  name=""
                                  id=""
                                  placeholder="Amount"
                                  className="w-full border-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[9px] text-sm text-neutral-color-500">
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-neutral-color-100" />
                    <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-between py-2 px-4 gap-[20px]">
                      <div className="flex flex-row items-center justify-start gap-[277px]">
                        <div className="relative leading-[20px] inline-block min-w-[97px]">
                          Transaction Fee
                        </div>
                        <div className="relative tracking-[-0.02em] leading-[20px] font-medium text-neutral-black inline-block min-w-[27px]">
                          0.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="p-2 my-2 text-[#fff] bg-primaryBtn w-full rounded-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundAmount;
