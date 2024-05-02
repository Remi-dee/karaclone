"use client";
import React, { useState } from "react";
import CustomDropdown from "@/Components/CustomDropdown/CustomDropdown";
import { transactionOption } from "./transactionType";
import { currencyData } from "./currencyData";
import TransactionDate from "./TransactionDate";
import TransactionTable from "./TransactionTable";

const Transaction = () => {
  const [transactionType, setTransactionType] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");

  const handleTransaction = (value: string) => {
    setTransactionType(value);
  };

  const handleCurrency = (value: string) => {
    setCurrency(value);
  };

  return (
    <div className="p-0 m-0 box-border bg-white-100">
      <div className="w-[100%] min-h-[70vh] shadow-lg rounded-md">
        <div className="w-[96%] mx-auto">
          <h2 className="py-4 text-lg font-semibold">Transaction</h2>
          <div className="max-w-[600px] w-full pb-6 flex flex-wrap justify-start gap-2 items-center">
            <div className="border border-gray-800 p-2 rounded-lg">
              <CustomDropdown
                options={transactionOption}
                onSelect={handleTransaction}
                placeholder="All Transaction"
                className="text-gray-800"
              />
            </div>
            <div className="border border-gray-800 p-2 rounded-lg">
              <CustomDropdown
                options={currencyData}
                onSelect={handleCurrency}
                placeholder="All Currency"
                displayImages
                className=""
              />
             
            </div>
            <TransactionDate />
          </div>
          <hr className="border border-gray-500" />
          <div className="py-4">
            <TransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
