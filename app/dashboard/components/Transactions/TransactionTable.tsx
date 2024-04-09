"use client";
import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { transactionData } from "./TransactionData";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/modal/modalSlice";
import CustomModal from "../../../components/CustomModal/CustomModal";
import DepositDetails from "./DepositDetails";
import EmptyTransaction from "./EmptyTransaction";
const TransactionTable = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const handleTransactionDetails = (id: any) => {
    setSelectedItemId(id);
    dispatch(openModal(id));
  };
  return (
    <div className="mt-4 box-border">
      {transactionData && transactionData.length > 0 ? (
        <>
          <table className="w-[100%] overflow-auto border-collapse  ">
            <tr className="bg-gray-900 text-sm">
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>
            {transactionData?.map((item) => (
              <tr
                key={item.id}
                className="text-gray-800 border-b text-xs border-b-gray-500"
              >
                <td className="p-4">{item.type}</td>
                <td className="p-4">{item.description}</td>
                <td className="p-4">{item.amount}</td>
                <td className="p-4">
                  {item.date} <span>| {item.time}</span>
                </td>
                <td className=" flex justify-center items-center w-4/6 gap-2 bg-[#EFFFEF] rounded-md text-[#00A600] mt-2 px-4 py-2">
                  <span className="w-[10px] h-[10px] rounded-full bg-[#00A600]"></span>
                  <span>{item.status}</span>
                </td>
                <td>
                  <BiSolidRightArrow
                    className="cursor-pointer"
                    onClick={() => handleTransactionDetails(item.id)}
                  />
                </td>
                <div className="pt-4">
                  <CustomModal>
                    <DepositDetails />
                  </CustomModal>
                </div>
              </tr>
            ))}
          </table>
          <hr className="border border-gray-500" />
          <div className="flex justify-between items-center my-4">
            <div className="w-auto flex justify-center items-center gap-2 p-1 rounded-md border border-primaryBtn text-primaryBtn  hover:bg-primaryBtn hover:text-white-100 cursor-pointer">
              <IoIosArrowRoundBack className="text-white-100 bg-primaryBtn" />
              <p className="text-xs font-semibold">Previous</p>
            </div>
            <div className="flex justify-start items-center gap-3 ">
              <button className="w-[30px] h-[30px] rounded-full bg-purple-200 text-primaryBtn active:bg-purple-200 active:text-primaryBtn">
                1
              </button>
              <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
                2
              </button>
              <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
                3
              </button>
              <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
                ...
              </button>
              <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
                8
              </button>
              <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
                9
              </button>
              <button className="w-[30px] h-[30px] rounded-full bg-white-100 active:bg-purple-200 active:text-primaryBtn">
                10
              </button>
            </div>
            <div className="w-auto flex justify-center items-center gap-1 p-1 rounded-md border border-primaryBtn text-primaryBtn hover:bg-primaryBtn hover:text-white-100 cursor-pointer">
              <p className="text-xs font-semibold">Next</p>
              <IoIosArrowRoundForward className="text-white-100 bg-primaryBtn" />
            </div>
          </div>
        </>
      ) : (
        <EmptyTransaction />
      )}
    </div>
  );
};

export default TransactionTable;
