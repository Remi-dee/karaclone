import React from "react";
import { BiSolidCopy } from "react-icons/bi";
const TransactionDetails = () => {
  return (
    <div className="mt-4">
      <h2 className="py-2 font-semibold text-[#000] text-center text-xl">
        Transaction Details
      </h2>
      <div className="flex justify-between items-center my-2 text-sm">
        <span>Transaction ID</span>
        <div className="flex justify-center items-center gap-1">
          <span className="text-[#000000]">0123456789</span>
          <BiSolidCopy className="text-primaryBtn" />
        </div>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span>Date & Time</span>
        <p className="text-[#000]">
          01/06/2024 <span> | 2.00PM</span>
        </p>
      </div>
      <div className="flex justify-between items-center my-2 text-sm">
        <span>Transaction Type</span>
        <p className="text-[#000]">Withdrawal</p>
      </div>
      <div className="flex justify-between items-center my-2 text-sm">
        <span>Bank Name</span>
        <p className="text-[#000]">Access bank</p>
      </div>
      <div className="flex justify-between items-center my-2 text-sm">
        <span>Account Name</span>
        <p className="text-[#000]">Ogunsola Omorinsola</p>
      </div>
      <hr className="border border-gray-500" />
      <div className="flex justify-between items-center my-4 text-sm">
        <span>Amount Tendered</span>
        <p className="text-[#000]">$100.00</p>
      </div>
      <div className="flex justify-between items-center my-4 text-sm">
        <span>Amount Recieved</span>
        <p className="text-[#000]">150,000NGN</p>
      </div>
      <div className="flex justify-between items-center my-4 text-sm">
        <span>Transaction Fee</span>
        <p className="text-[#000]">$0.03</p>
      </div>
      <div className="flex justify-between items-center  text-sm">
        <span>Status</span>
        <div className=" flex justify-center items-center  gap-2 bg-[#EFFFEF] rounded-md text-[#00A600]">
          <span className="w-[10px] h-[10px] rounded-full bg-[#00A600]"></span>
          <span>Successful</span>
        </div>
      </div>
      <button className="p-2 my-4 text-white-100 bg-primaryBtn w-full rounded-lg">
        Download Receipt
      </button>
      <hr className="border border-gray-500" />
      <p className="py-4 text-[#000] text-center">
        Need help?{" "}
        <span className="font-semibold text-sm  text-primaryBtn">
          Contact Support
        </span>
      </p>
    </div>
  );
};

export default TransactionDetails;
