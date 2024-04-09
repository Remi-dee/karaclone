import Image from "next/image";
import React, { useState } from "react";
import { TiEye } from "react-icons/ti";
import { IoIosAddCircle, IoIosArrowRoundUp } from "react-icons/io";
import { CgArrowsExchange } from "react-icons/cg";
import { walletData } from "./walletData";
import TransactionTable from "../Transactions/TransactionTable";
export default function Wallet() {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  const handleCurrency = (currency: string) => {
    setSelectedCurrency(currency);
  };
  return (
    <div className="p-0 m-0 gap-4 bg-white-100">
      <div className="w-full rounded-md shadow-lg mb-3 p-4">
        <h2 className="font-semibold font-Josefin text-lg py-2">Wallet</h2>
        <div className="flex justify-start items-center text-gray-300 gap-2">
          <p className="text-sm">My Balances</p>
          <TiEye />
        </div>
        <p className="py-2 text-gray-300 text-xs">
          Select each currency to perform a transaction
        </p>
        <div className="flex justify-start flex-wrap lg:justify-between items-center mb-2">
          {walletData?.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCurrency(item.name)}
              className={`w-[150px] currency cursor-pointer p-2 border rounded-md ${
                selectedCurrency === item.name ? "border-primaryBtn" : ""
              }`}
            >
              <div className="flex justify-start items-center  text-gray-300 gap-2">
                <Image src={item.img} width={20} height={20} alt="" />
                <p className="font-semibold text-sm">{item.name}</p>
              </div>
              <p className="text-xs text-gray-300 py-2">Available balance</p>
              <p className="font-semibold">{item.amount}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-6 pt-4">
          <div
            className={` action flex justify-start gap-1 items-center cursor-pointer p-2 border rounded-md ${
              selectedCurrency
                ? "text-[#000] border-[#000] cursor-pointer"
                : "text-gray-300 border-gray-300 cursor-not-allowed"
            }`}
          >
            <IoIosAddCircle />
            <p className="text-xs">funds</p>
          </div>
          <div
            className={` action flex justify-start items-center p-2 border rounded-md ${
              selectedCurrency
                ? "text-[#000] border-[#000] cursor-pointer"
                : "text-gray-300 border-gray-300 cursor-not-allowed"
            }`}
          >
            <CgArrowsExchange />
            <p className="text-xs">Exchange</p>
          </div>

          <div
            className={` action flex justify-start items-center p-2 border rounded-md ${
              selectedCurrency
                ? "text-[#000] border-[#000] cursor-pointer"
                : "text-gray-300 border-gray-300 cursor-not-allowed"
            }`}
          >
            <IoIosArrowRoundUp />
            <p className="text-xs">Exchange</p>
          </div>
        </div>
      </div>
      <div className="w-full rounded-md shadow-lg mt-4 p-4 my-4">
        <h2 className="font-bold text-sm py-2">Recent Transactions</h2>
        <TransactionTable />
      </div>
    </div>
  );
}
