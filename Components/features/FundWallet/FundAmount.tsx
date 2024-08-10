"use client";
import React, { FC } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseFundWallet,
  setAmountToFund,
  toggleWalletDispaly,
  userSelector,
} from "@/redux/features/user/userSlice";
import NGN from "@/public/Images/NGN.png";
import GBP from "@/public/Images/GBP.png";

const FundAmount: FC<any> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { wallets, selectedCurrency } = useSelector(userSelector);

  const handleSubmit = () => {
    dispatch(increaseFundWallet(2));
  };

  const handleBack = () => {
    dispatch(toggleWalletDispaly(""));
  };

  const filteredWallets = wallets?.filter(
    (wallet: any) => wallet.currency_code === selectedCurrency
  );

  const handleChange = (e: any) => {
    dispatch(setAmountToFund(e.target.value));
  };

  return (
    <div>
      <div className="flex flex-row items-center mt-[0.7rem] md:mt-0 justify-between text-sm text-neutral-color-800">
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

      <div className="w-full flex justify-center">
        <div className="flex flex-col min-w-full md:min-w-[513px] w-full md:w-[513px] mt-[64px] items-center justify-start gap-[24px] text-center text-2xl text-neutral-black">
          <div className="w-full md:w-[470px] flex flex-col items-center justify-start gap-[16px]">
            <h2 className="m-0 relative text-inherit tracking-[-0.55px] font-bold font-inherit inline-block">
              Fund Wallet
            </h2>
            <div className="self-stretch relative text-[#7C7C7C] text-[16px] leading-[24px] text-neutral-color-500">
              Enter the amount and currency you want to fund
            </div>
          </div>

          {filteredWallets?.map((wallet: any) => (
            <div
              key={wallet.id}
              className="w-full md:w-[513px] rounded-lg mt-[20px] bg-white-100 shadow-lg overflow-hidden flex flex-col items-center justify-start py-8 px-[0.9rem] md:px-10 box-border max-w-full text-left text-sm text-neutral-color-500"
            >
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch w-full md:w-[433px] h-[80px] p-[8px_16px_8px_16px] rounded-lg bg-purple-50 overflow-hidden flex flex-col items-start justify-start py-2 px-4 gap-[4px]">
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[65px] mq450:gap-[32px]">
                    <div className="flex-1 text-[14px] text-[#7C7C7C] relative leading-[20px] inline-block">
                      Wallet Balance
                    </div>
                    <div className="h-[32px] w-[67px] justify-center border items-center flex p-[12px_8px_12px_8px] gap-[8px] bg-[white] border-[#EFEFEF] rounded-[8px]">
                      <div className="w-[20px] h-[20px] flex justify-center items-center">
                        <Image
                          src={selectedCurrency === "NGN" ? NGN : GBP}
                          alt=""
                          height={15}
                          width={16}
                        />
                      </div>
                      <div>
                        <h2 className="leading-[14.4px] text-[12px] text-[#1E1E1E] text-right">
                          {selectedCurrency}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <b className="relative text-[18px] tracking-[-2%] font-bold leading-[28px] inline-block text-[#1E1E1E] min-w-[95px]">
                    {wallet.currency_code === selectedCurrency
                      ? wallet.escrow_balance
                      : ""}
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start text-base text-neutral-black">
                  <div className="flex flex-col items-start justify-start gap-[5px] md:gap-[40px]">
                    <div className="flex flex-col items-start justify-start gap-[16px]">
                      <div className="w-full md:w-[433px] overflow-x-auto flex flex-col items-start justify-start max-w-full">
                        <div className="w-full md:w-[433px] flex flex-col items-start justify-start">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                              <div className="relative tracking-[-0.02em] text-[16px] leading-[20px] font-semibold inline-block min-w-full md:min-w-[112px]">
                                Amount to Fund
                              </div>
                              <div className="self-stretch rounded-xl overflow-hidden flex flex-row flex-wrap items-center justify-start py-1 px-[15px] gap-[10px] text-neutral-color-400 border-[1px] border-solid border-neutral-color-200">
                                <button className="cursor-pointer [border:none] p-2 bg-whitesmoke rounded-2xl overflow-x-auto flex flex-row items-center justify-start gap-[4px]">
                                  <Image
                                    width={15}
                                    height={15}
                                    alt=""
                                    src={selectedCurrency === "NGN" ? NGN : GBP}
                                  />
                                  <div className="relative text-sm tracking-[-0.02em] leading-[20px] font-medium font-body-md-medium text-neutral-900 text-left min-w-[32px]">
                                    {selectedCurrency}
                                  </div>
                                </button>
                                <div className="flex-1 relative">
                                  <input
                                    type="number"
                                    placeholder="Amount"
                                    onChange={handleChange}
                                    className="w-full border-none outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-start justify-start gap-[9px] text-sm text-neutral-color-500">
                        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-neutral-color-100" />
                        <div className="self-stretch rounded-lg overflow-hidden flex flex-col items-start justify-between py-2 px-4 gap-[20px]">
                          <div className="flex flex-row items-center justify-start gap-0 md:gap-[277px]">
                            <div className="relative w-max text-[#7C7C7C] text-[14px] leading-[20px] inline-block">
                              Transaction Fee:
                            </div>
                            <div className="relative tracking-[-0.02em] ml-[4px] md:ml-0 leading-[20px] font-medium text-neutral-black inline-block min-w-[27px]">
                              2.42
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="p-2 my-2 text-[#fff] bg-[#7F56D9] w-full rounded-lg"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundAmount;
