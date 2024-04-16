"use client";
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
const TransactionDate = () => {
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  const handleFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value);
  };

  const handleToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value);
  };
  return (
    <div className="flex justify-start items-center gap-4">
      <div className="relative w-auto flex justify-between items-center gap-2 cursor-pointer rounded-md p-3 border">
        <input
          type="date"
          onChange={handleFromDate}
          placeholder="from text"
          className=" absolute w-full opacity-0 inset-0 cursor-pointer  outline-none "
        />
        <p className="text-gray-800 font-semibold text-xs">from</p>
        <span className="text-gray-800 font-semibold text-xs">{fromDate}</span>
        <FaCalendarAlt className="cursor-pointer ml-2 text-gray-300" />
      </div>
      <div className="relative w-auto flex justify-between items-center gap-2 cursor-pointer rounded-md p-3 border">
        <input
          type="date"
          onChange={handleToDate}
          placeholder="from text"
          className=" absolute w-full opacity-0 inset-0 cursor-pointer  outline-none "
        />
        <p className="text-gray-800 font-semibold text-xs">to</p>
        <span className="text-gray-800 font-semibold text-xs">{toDate}</span>
        <FaCalendarAlt className="cursor-pointer ml-2 text-gray-300" />
      </div>
    </div>
  );
};

export default TransactionDate;
