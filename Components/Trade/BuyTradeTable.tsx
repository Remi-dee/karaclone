import React, { useState } from "react";
import Image from "next/image";
import { SlOptions } from "react-icons/sl";

import { openModal } from "@/redux/modal/modalSlice";
import CustomModal from "@/Components/CustomModal/CustomModal";
import TradeHistory from "./TradeHistory";
import { useDispatch } from "react-redux";
import NGN from "@/public/Images/NGN.png";
import GBP from "@/public/Images/GBP.png";
import USD from "@/public/Images/USD.png";
import { useGetAllTradeQuery } from "@/redux/features/user/userApi";

const BuyTradeTable = () => {
  const data = useGetAllTradeQuery("");
  // console.log(data);

  const dispatch = useDispatch();
  const [showOption, setShowOption] = useState(true);

  const toggleOption = () => {
    setShowOption(!showOption);
  };

  const openOptionModal = () => {
    setShowOption(!showOption);
    dispatch(openModal());
  };
  return (
    <div className="p-0 m-0 box-border max-h-[610px]  overflow-auto  overflow-y-scroll  h-full w-full ">
      <table className="w-[100%] overflow-auto border-collapse">
        <thead>
          <tr className="bg-gray-900 text-[16px] leading-[24px] text-[#1E1E1E]">
            <th className="p-4 text-left">Currency</th>
            <th className="p-4 text-left">Fixed Price</th>
            <th className="p-4 text-left">Available</th>
            <th className="p-4 text-left">Limit</th>
            <th className="p-4 text-left">Payment</th>
            <th className="p-4 text-left">Sold</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item: any) => (
            <tr
              key={item?._id}
              className="leading-[24px] tracking-[-2%] text-[16px] text-[#464646] border-b font-semibold border-b-gray-500"
            >
              <td className="flex justify-start items-center p-4 gap-1">
                <Image
                  src={
                    item?.currency === "NGN"
                      ? NGN
                      : item?.currency === "USD"
                      ? USD
                      : GBP
                  }
                  alt=""
                  width={15}
                  height={15}
                />
                <p className="text-sm">{item?.currency}</p>
              </td>
              <td className="p-4">{item?.amount + " " + item?.currency}</td>
              <td className="p-4">
                {item?.amount} {item?.currency}
              </td>
              <td className="p-4">{item?.minimumBid}</td>
              <td className="p-4">{item?.payment_method || "X Method"}</td>
              <td className="p-4">{item?.sold}</td>
              <td className="relative p-4">
                <span
                  onClick={toggleOption}
                  className="flex items-center w-full relative text-center cursor-pointer"
                >
                  <SlOptions className="text-[#989898] absolute left-[1.7rem]" />
                </span>
                {!showOption && (
                  <span className="absolute top-8 right-4 w-[110px] h-[50px] z-10 bg-white-100 rounded-md shadow-lg">
                    <span
                      onClick={() => openOptionModal}
                      className="px-4 pt-2 cursor-pointer text-black-200 text-xs font-semibold"
                    >
                      View History
                    </span>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CustomModal>
        <TradeHistory />
      </CustomModal>
    </div>
  );
};

export default BuyTradeTable;
