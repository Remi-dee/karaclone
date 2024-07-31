"use client";
import React, { useState } from "react";
import CustomDropdown from "@/Components/CustomDropdown/CustomDropdown";
import { transactionOption } from "./transactionType";
import { currencyData } from "./currencyData";
import TransactionDate from "./TransactionDate";
import TransactionTable from "./TransactionTable";
import TransactionList from "./TransactionList";

const Transaction = () => {
  const statusList = [
    {
      value: "Reversal",
      label: "Reversal",
    },

    {
      value: "Deposit",
      label: "Deposit",
    },
    {
      value: "Trade",
      label: "Trade",
    },
  ];
  const [transactionType, setTransactionType] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");

  const handleTransaction = (value: string) => {
    setTransactionType(value);
  };

  const handleCurrency = (value: string) => {
    setCurrency(value);
  };

  return (
    <div className=" m-0 shadow-lg box-border rounded-[8px] h-[778px] bg-white-100">
      <div className="w-[100%]   rounded-md">
        <div className=" p-[1rem] h-full">
          <h2 className="py-[24px] text-[20px] leading-[24px] tracking-[-2%] font-bold">
            Transactions
          </h2>

          <div className="flex md:flex-row flex-col pb-6 md:gap-0 gap-5">
            <div className="  w-full flex gap-[18px] items-center">
              <div className="border border-gray-800 p-2 rounded-lg ">
                <CustomDropdown
                  options={currencyData}
                  onSelect={handleCurrency}
                  placeholder="All Currencies"
                  displayImages
                  className=""
                />
              </div>
              <div className="border border-gray-800 p-2 rounded-lg">
                <CustomDropdown
                  options={transactionOption}
                  onSelect={handleTransaction}
                  placeholder="All transactions"
                  className="text-gray-800"
                />
              </div>

              <div className="hidden md:flex border border-gray-800 p-2 rounded-lg">
                <CustomDropdown
                  options={statusList}
                  onSelect={handleCurrency}
                  placeholder="All Status "
                  displayImages
                  className=""
                />
              </div>
            </div>

            <TransactionDate />
          </div>
          <hr className="border hidden md:flex border-gray-500" />
          <div className="py-4">
            <TransactionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
