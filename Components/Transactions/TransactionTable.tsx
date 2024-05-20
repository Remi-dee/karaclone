"use client";
import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { transactionData } from "./TransactionData";

import { useDispatch } from "react-redux";
import { openModal } from "@/redux/modal/modalSlice";
import CustomModal from "@/Components/CustomModal/CustomModal";
import DepositDetails from "./DepositDetails";
import EmptyTransaction from "./EmptyTransaction";
import Pagination from "../Pagination";
const TransactionTable = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const handleTransactionDetails = (id: any) => {
    setSelectedItemId(id);
    dispatch(openModal(id));
  };
  return (
    <section className="mt-4 box-border h-[404px]">
      {transactionData && transactionData?.length > 0 ? (
        <div className=" h-full relative w-full">
          <table className="w-[100%] border-collapse">
            <thead>
              <tr className="bg-gray-900 text-sm">
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Description</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left"></th>
              </tr>
            </thead>
            {transactionData?.map((item, i) => (
              <tbody key={i}>
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

                  <CustomModal>
                    <DepositDetails />
                  </CustomModal>
                </tr>
              </tbody>
            ))}
          </table>
          <hr className="border border-gray-500" />
          <Pagination />
        </div>
      ) : (
        <EmptyTransaction />
      )}
    </section>
  );
};

export default TransactionTable;