import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import USD from "../../public/Images/USD.png";
import NGN from "../../public/Images/NGN.png"
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiSolidCopy } from "react-icons/bi";

const CreateTradeDetails = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/dashboard/P2P-trade");
  };

  return (
    <div className="p-0 m-0">
      <div
        onClick={handleBack}
        className="my-4 mx-6 flex justify-start items-center gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold">Go-Back</p>
      </div>

      <div className="flex flex-col justify-center items-center mt-4">
        <h2 className="text-lg font-semibold pb-4">Create Trade</h2>
        <p className="text-sm w-[500px] text-gray-300 text-center pb-4">
          Please note that all transactions may take a few minutes to process.
          Rest assured, all transactions are safe and secure.
        </p>
        <div className="w-[370px] shadow-xl rounded-md mt-4 mb-6">
          <div className="w-[340px] mx-auto">
            <h2 className="font-semibold py-4">Trade Details</h2>
            <div className="flex justify-between items-center text-sm">
              <p className="text-gray-300">Currency</p>
              <div className="flex justify-start items-center  gap-1 my-2 ">
                <Image src={NGN} width={15} height={15} alt=""/>
                <p className="text-xs">NGN</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <p className="text-gray-300">Exit Currency</p>
              <div className="flex justify-start items-center  gap-1 mb-2 ">
                <Image src={USD} alt="" width={15} height={15}/>
                <p className="text-xs">USD</p>
              </div>
            </div>

            <div className="flex justify-between items-center my-2 text-sm">
              <p className="text-gray-300">Rate</p>
              <p className="text-xs font-semibold">
                1NGN = <span>0.0081938374</span>
              </p>
            </div>

            <div className="flex justify-between items-center text-sm">
              <p className="text-gray-300">Amount</p>
              <p className="text-xs font-semibold">1,000,000 NGN</p>
            </div>

            <div className="flex justify-between items-center my-2 text-sm">
              <p className="text-gray-300">Minimum Bid</p>
              <p className="text-xs font-semibold">
                10,000 NGN
              </p>
            </div>

            <div className="flex justify-between items-center mt-6 mb-2 text-sm">
              <p className="text-gray-300">Payment Method</p>
              <p className="text-xs font-semibold">Bank Transfer</p>
            </div>

            <div className="flex justify-between items-center my-2 text-sm">
              <p className="text-gray-300">Bank Name</p>
              <p className="text-xs font-semibold">Wema Bank</p>
            </div>

            <div className="flex justify-between items-center my-2 text-sm">
              <p className="text-gray-300">Account Number</p>
              <p className="text-xs font-semibold">0240766453</p>
            </div>
           
            <div className="flex justify-between items-center my-2 text-sm">
              <p className="text-gray-300">Account Name</p>
              <p className="text-xs font-semibold">Ogunsola Simisola</p>
            </div>

            <div className="flex justify-between items-center mt-6 mb-2 text-sm">
              <p className="text-gray-300">Trade Fee</p>
              <p className="text-red-600 text-xs font-semibold">0.01%</p>
            </div>
            
            <button
              className={`p-2  mb-4 text-white-100 bg-primaryBtn w-full rounded-lg `}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTradeDetails;
