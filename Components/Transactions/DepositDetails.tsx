import Link from "next/link";
import React from "react";
import { BiSolidCopy } from "react-icons/bi";
const DepositDetails = () => {
  return (
    <div className=" gap-[24px] h-[842px] mt-[32px]  p-[32px_40px_32px_40px] flex-col flex w-[512px] text-xs font-semibold">
      <div >

      <h2 className="py-2 font-bold leading-[28px] text-[#1E1E1E] text-center text-[18px]  ">
        Transaction Details
      </h2>
      </div>
      <div className="  text-[14px]  leading-[20px]  gap-[24px] flex flex-col">
      <div className="flex justify-between items-center my-4">
        <span>Transaction ID</span>
        <div className="flex justify-center items-center gap-1">
          <span className="text-[#000000]">0123456789</span>
          <BiSolidCopy className="text-primaryBtn" />
        </div>
      </div>
  



     
      <div className="flex justify-between items-center ">
        <span>Date & Time</span>
        <p className="text-[#000]">
          01/06/2024 <span> | 2.00PM</span>
        </p>
      </div>
      <div className="flex justify-between items-center my-4">
        <span>Transaction Type</span>
        <p className="text-[#000]">Deposit</p>
      </div>
      <div className="flex justify-between items-center my-4">
        <span>Payment Method</span>
        <p className="text-[#000]">Credit Card</p>
      </div>
      <div className="flex justify-between items-center my-4 ">
        <span>Account Name</span>
        <p className="text-[#000]">Ogunsola Omorinsola E</p>
      </div>
      <hr className="border border-gray-500" />
      <div className="flex justify-between items-center my-4 ">
        <span>Amount Deposit</span>
        <p className="text-[#000]">$100.00</p>
      </div>
      <div className="flex justify-between items-center mb-2 ">
        <span>Status</span>
        <div className=" flex justify-center items-center  gap-2 bg-[#EFFFEF] rounded-md text-[#00A600]">
          <span className="w-[10px] h-[10px] rounded-full bg-[#00A600]"></span>
          <span>Successful</span>
        </div>
      </div>

      <button className="p-[10px_16px] h-[44px] w-full my-2 text-white-100 bg-primaryBtn  rounded-lg">
        Download Receipt
      </button>
      
      <hr className="border border-gray-500" />
      <p className="py-2 text-[#000] text-center">
        Need Help?{" "}
        <Link href="" className="font-semibold  text-primaryBtn">
          Contact Support
        </Link>
      </p>
      </div>
      
    </div>
  );
};

export default DepositDetails;
