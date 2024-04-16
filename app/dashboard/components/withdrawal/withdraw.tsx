"use client";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import EnterAmount from "../props/EnterAmount";
import BankDetails from "../props/BankDetails";
import ConfirmTransaction from "../props/ConfirmTransaction";
import Success from "../props/success";

function Withdraw() {
  // const step: number = 1; // Current step
  const [step, setStep] = useState<number>(4);

  const addStep = () => {
    if (step == 4) {
      return;
    }
    setStep(step + 1);
  };

  const minusStep = () => {
    if (step == 1) {
      return;
    }
    setStep(step - 1);
  };

  const textInformation = [
    {
      headerText: "Make A Withdrawal",
      smallText:
        "Withdraw your money in 3 easy steps. Enter the amount you want to withdraw",
    },
    {
      headerText: "Enter Bank Details",
      smallText: "Fill in your bank details to continue",
    },
    {
      headerText: "Confirm Transaction",
      smallText: "You’re about to make a withdrawal of $10 for a fee of $0.03",
    },
  ];

  return (
    <div className=" h-full flex flex-col items-center justify-center">
      {/* top bar */}

      {step !== 4 && (
        <div className="flex items-center justify-between w-full ">
          <div className=" flex items-center " onClick={minusStep}>
            <div className="bg-purple-600 p-1.5 rounded mr-2">
              <ArrowLeftIcon className=" h-4 w-4 text-white-100 font-bold" />
            </div>
            <p className="text-purple-600 font-bold text-base">Go Back</p>
          </div>

          <div className="flex items-center ">
            <img src="/svg/Progress.svg" alt="" />
            <div className="block pl-3">
              <p className="text-xs ">Step {step}/3</p>
              <p className="text-xs text-purple-600">Enter Withdrawal Amount</p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full my-auto  p-5 mx-auto md:w-1/2 lg:w-2/4 xl:4/6 2xl:w-2/6 ">
        {textInformation.map(
          (textInformation, index) =>
            step === index + 1 && (
              <div
                key={index}
                className="flex flex-col items-center justify-center pt-10 px-2"
              >
                <h3 className="font-bold text-xl">
                  {textInformation.headerText}
                </h3>
                <p className="text-gray-300 mt-3 text-sm text-center">
                  {textInformation.smallText}
                </p>
              </div>
            )
        )}
        {step === 1 && <EnterAmount changeStep={addStep} />}
        {step === 2 && <BankDetails changeStep={addStep} />}
        {step === 3 && <ConfirmTransaction changeStep={addStep} />}
        {step === 4 && <Success changeStep={addStep} />}
      </div>
    </div>
  );
}
export default Withdraw;
