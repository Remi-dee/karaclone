import React from "react";
import { BiSolidCopy } from "react-icons/bi";

const ExchangeDetails = () => {
  return (
    <div className="mt-4  text-xs font-semibold">
      <h2 className="py-2 font-semibold text-[#000] text-center text-xl">
        Transaction Details
      </h2>
      <div className="flex justify-between items-center my-4 ">
        <span>Transaction ID</span>
        <div className="flex justify-center items-center gap-1">
          <span className="text-[#000000]">0123456789</span>
          <BiSolidCopy className="text-primaryBtn" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span>Date & Time</span>
        <p className="text-[#000]">
          01/06/2024 <span> | 2.00PM</span>
        </p>
      </div>
      <div className="flex justify-between items-center my-4">
        <span>Transaction Type</span>
        <p className="text-[#000]">Exchange</p>
      </div>
      <div className="flex justify-between items-center my-4 ">
        <span>Currency Pair</span>
        <p className="text-[#000]">USD to NGN</p>
      </div>
      <div className="flex justify-between items-center my-4">
        <span>Conversion Rate</span>
        <p className="text-[#000]">1USD = 1,500NGN</p>
      </div>
      <hr className="border border-gray-500" />
      <div className="flex justify-between items-center my-4">
        <span>Amount Converted</span>
        <p className="text-[#000]">$100.00</p>
      </div>
      <div className="flex justify-between items-center my-4 ">
        <span>Amount Recieved</span>
        <p className="text-[#000]">150,000NGN</p>
      </div>
      <div className="flex justify-between items-center my-4 ">
        <span>Transaction Fee</span>
        <p className="text-[#000]">$0.03</p>
      </div>
      <div className="flex justify-between items-center  mb-2">
        <span>Status</span>
        <div className=" flex justify-center items-center  gap-2 bg-[#EFFFEF] rounded-md text-[#00A600]">
          <span className="w-[10px] h-[10px] rounded-full bg-[#00A600]"></span>
          <span>Successful</span>
        </div>
      </div>
      <button className="p-3 my-2 text-white-100 bg-primaryBtn w-full rounded-lg">
        Download Receipt
      </button>
      <hr className="border border-gray-500" />
      <p className="py-2 text-[#000] text-center">
        Need help?{" "}
        <a href="" className="font-semibold  text-primaryBtn">
          Contact Support
        </a>
      </p>
    </div>
  );
};

export default ExchangeDetails;
