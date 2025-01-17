"use client";
import React, { FC, useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCreditCard, FaBuilding } from "react-icons/fa";
import BankTransfer from "./BankTransfer";
import {
  increaseFundWallet,
  setAmountToFund,
  setIsWalletFund,
  userSelector,
} from "@/redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import DirectDebit from "./DirectDebit";
import { authSelector } from "@/redux/features/auth/authSlice";
import {
  isPaymentSuccessSelector,
  setIsPaymentSuccess,
  setPaymentDetails,
} from "@/redux/features/truelayer/truelayerSlice";
import { useMonoWidget } from "@/app/mono/monoServices";
import {
  useFundWalletMutation,
  useLoadUserQuery,
} from "@/redux/features/user/userApi";
import { useCreatePaymentMutation } from "@/redux/features/truelayer/truelayerApi";
import { toast } from "react-toastify";
import { handleCreateTruelayerPayment } from "@/utils/truelayerService";

const FundMethod: FC<any> = ({ active, setActive }) => {
  const [showComponent, setShowComponent] = useState(true);
  const [option, setOption] = useState<string | null>(null);
  const { wallets, selectedCurrency } = useSelector(userSelector);
  const openMonoWidget = useMonoWidget();

  const [
    createPayment,
    { isLoading: isCreatingPayment, error: paymentError, data: paymentData },
  ] = useCreatePaymentMutation();
  const [
    fundWallet,
    {
      isLoading: isCreatingFund,
      error: fundError,
      data: fundData,
      isSuccess: isFundSuccess,
    },
  ] = useFundWalletMutation();
  const isPaymentSuccess = useSelector(isPaymentSuccessSelector);

  const { data } = useLoadUserQuery({});

  const { amountToFund } = useSelector(userSelector);
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(increaseFundWallet(1));
  };

  useEffect(() => {
    if (isPaymentSuccess && isFundSuccess) {
      toast.success("Wallet funded successfully");
    } else {
      ("Unable to fund wallet, please try again");
    }

    if (fundError) {
      toast.error("An error occurred!");
      console.log(fundError);
    }
  }, [isFundSuccess, fundError, isPaymentSuccess]);

  const handleOptionChange = (option: string) => {
    setOption(option);
  };

  const handleSelect = async () => {
    setShowComponent(false);

    if (option === "Connect with Bank" && selectedCurrency === "NGN") {
      await openMonoWidget();
    } else {
      // const paymentCreated = await handleCreateTruelayerPayment(
      //   { amount: amountToFund, currency: selectedCurrency },
      //   data,
      //   createPayment,
      //   dispatch,
      //   setPaymentDetails
      // );
      // if (paymentCreated.status === "success") {
      //   dispatch(setIsPaymentSuccess(true));
      localStorage.setItem("isWalletFund", "true");
      console.log("here is it", selectedCurrency);
      fundWallet({
        currency_code: selectedCurrency,
        amount: Number(amountToFund),
      });
      //   }
    }
  };

  return (
    <>
      {showComponent ? (
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

          <div className="flex mt-[1.2rem] flex-col items-center justify-start gap-[24px] text-center text-2xl text-neutral-black">
            <div className="  w-full  md:w-[470px] flex flex-col items-center justify-start gap-[12px] md:gap-[16px]">
              <h2 className="m-0 relative text-inherit tracking-[-0.55px] font-bold font-inherit inline-block">
                Select Payment Method
              </h2>
              <div className="self-stretch relative text-sm md:text-base text-[#7C7C7C] leading-[24px] text-neutral-color-500">
                Select how you want to fund your account
              </div>
            </div>
            <div className=" w-full md:w-[550px] rounded-lg bg-white-100 shadow-lg overflow-hidden flex flex-col items-center justify-start py-8 px-10 box-border max-w-full text-left text-sm text-neutral-color-500 ">
              <div
                onClick={() => handleOptionChange("Direct Debit")}
                className={`w-full h-[48px] cursor cursor-pointer flex justify-start items-center mt-6 mb-4 gap-2 p-2 border rounded-md ${
                  option === "Direct Debit"
                    ? "border-black-200 bg-[#F5F1FF]"
                    : "border-gray-200 bg-white-100"
                }`}
              >
                <div className="flex  flex-grow justify-between">
                  <div className="flex flex-grow space-x-4">
                    <FaCreditCard className="mt-1" />
                    <h4 className="text-black-200 font-semibold text-sm">
                      Direct Debit
                    </h4>
                  </div>
                </div>
                <input
                  type="radio"
                  checked={option === "Direct Debit"}
                  onChange={() => handleOptionChange("Direct Debit")}
                  className="w-10 checked:bg-primaryBtn"
                />
              </div>

              <div
                onClick={() => handleOptionChange("Connect with Bank")}
                className={`w-full h-[48px] cursor cursor-pointer flex justify-start items-center mt-6 mb-4 gap-2 p-2 border rounded-md ${
                  option === "Connect with Bank"
                    ? "border-black-200 bg-[#F5F1FF]"
                    : "border-gray-200 bg-white-100"
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
                  checked={option === "Connect with Bank"}
                  onChange={() => handleOptionChange("Connect with Bank")}
                  className="w-10 checked:bg-primaryBtn"
                />
              </div>

              <button
                onClick={handleSelect}
                className="p-2 h-[44px] mt-[24px] text-[#fff] bg-primaryBtn w-full rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : option === "Direct Debit" ? (
        <DirectDebit />
      ) : (
        <BankTransfer />
      )}
    </>
  );
};

export default FundMethod;
