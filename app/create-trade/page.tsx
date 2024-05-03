"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import CustomDropdown from "@/Components/CustomDropdown/CustomDropdown";

import CreateTradeDetails from "./createTrade";
import { currencyData } from "@/Components/Transactions/currencyData";

const CreateTrade = () => {
  const router = useRouter();
  const [currency, setCurrency] = useState<string>("");

  const [showTradeDetails, setShowTradeDetails] = useState(false);

  const handleTradeDetails = () => {
    setShowTradeDetails(true);
  };

  if (showTradeDetails) {
    return <CreateTradeDetails />;
  }

  const handleCurrency = (value: string) => {
    setCurrency(value);
  };
  const handleBack = () => {
    router.push("/dashboard/P2P-trade");
  };

  return (
    <div className="m-0 p-0 box-border overflow-hidden">
      <div
        onClick={handleBack}
        className="my-4 mx-6 flex justify-start items-center gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold">Go-Back</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <h2 className="text-lg font-semibold pb-4">Create a Trade</h2>
        <p className="text-sm text-gray-300 pb-4">
          Fill in the details below to sell your currency
        </p>
        <div className="w-[370px] shadow-xl rounded-md mb-6">
          <form className="w-[350px] mx-auto">
            <div>
              <label htmlFor="" className="text-sm font-semibold">
                Currency
              </label>
              <div className="p-1 rounded-md mt-1 bg-gray-900">
                <CustomDropdown
                  onSelect={handleCurrency}
                  className="w-full flex justify-between"
                  placeholder="select currency"
                  options={currencyData}
                  displayImages
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="" className="text-sm font-semibold">
                Select Exit Currency
              </label>
              <div className="p-1 w-full rounded-md mt-1 bg-gray-900">
                <CustomDropdown
                  onSelect={handleCurrency}
                  className="w-full flex justify-between"
                  placeholder="select currency"
                  options={currencyData}
                  displayImages
                />
              </div>
            </div>
            <hr className="mt-2 border-gray-900" />
            <h3 className="py-3 font-semibold text-sm">Price</h3>
            <div>
              <label htmlFor="" className="text-sm font-semibold">
                Rate
              </label>
              <div className="p-1 rounded-md mt-2 flex bg-gray-900">
                <input
                  type="text"
                  className="w-[80%] outline-none bg-transparent placeholder:text-gray-300"
                />
                <div className="w-[20%] text-left bg-transparent text-sm">
                  {currency}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-sm font-semibold">
                Amount
              </label>
              <div className="p-1 border border-gray-200 rounded-md mt-2 flex ">
                <input
                  type="text"
                  className="w-[80%] outline-none bg-transparent placeholder:text-gray-300"
                />
                <div className="w-[20%] text-left bg-transparent text-gray-300 text-sm">
                  {currency}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-sm font-semibold">
                Minimum Bid
              </label>
              <div className="p-1 rounded-md border border-gray-200 mt-2 mb-4 flex">
                <input
                  type="text"
                  className="w-[80%] outline-none bg-transparent placeholder:text-gray-300"
                />
                <div className="w-[20%] text-left bg-transparent text-gray-300 text-sm">
                  {currency}
                </div>
              </div>
            </div>
            <hr className="mt-2 border-gray-900" />
            <h3 className="py-4 font-semibold text-sm">Payment Details</h3>
            <div>
              <label htmlFor="" className="text-xs font-semibold">
                Payment Method
              </label>
              <div className="p-1 rounded-md border border-gray-200 mt-2 mb-4 flex">
                <select
                  name=""
                  className="w-full text-gray-300 text-xs p-1"
                  id=""
                >
                  <option value="" className="text-300 w-full">
                    Select payment method
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-xs font-semibold">
                Bank Name
              </label>
              <div className="p-1 rounded-md border border-gray-200 mt-2 mb-4 flex">
                <select
                  name=""
                  className="w-full text-gray-300 p-1 text-xs"
                  id=""
                >
                  <option value="" className="text-300 w-full">
                    Select Bank
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-xs font-semibold">
                Account Number
              </label>
              <div className="p-1 rounded-md border border-gray-200 mt-2 mb-4 flex">
                <input
                  type="text"
                  className="outline-none placeholder:gray-200 placeholder:text-xs"
                  placeholder="Enter Account Number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-xs font-semibold">
                Account Name
              </label>
              <div className="p-1 rounded-md border border-gray-200 mt-2 mb-4 flex">
                <input
                  type="text"
                  className="outline-none placeholder:gray-200 placeholder:text-xs"
                  placeholder="Enter Account name"
                />
              </div>
            </div>
            <hr className="mt-2 border-gray-900" />
            <h3 className="py-3 font-semibold text-sm">
              Additional Information
            </h3>
            <div className="flex flex-col mb-6">
              <label htmlFor="" className="text-sm font-medium pb-1">
                Terms of Trade
              </label>
              <textarea
                name=""
                id=""
                cols={10}
                rows={5}
                className="border border-200 rounded-md resize-none outline-none"
              ></textarea>
            </div>
            <button
              onClick={handleTradeDetails}
              className="p-2 my-4 text-white-100 bg-primaryBtn w-full rounded-lg"
            >
              create Ad
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTrade;
