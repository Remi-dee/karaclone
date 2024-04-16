import React, { useState } from "react";
import Image from "next/image";
import { SlOptions } from "react-icons/sl";
import USD from "../../../../public/Images/USD.png";
import { openModal } from "@/redux/modal/modalSlice";
import CustomModal from "@/app/components/CustomModal/CustomModal";
import TradeHistory from "./TradeHistory";
import { useDispatch } from "react-redux";

const BuyTradeTable = () => {
    const dispatch = useDispatch()
  const [showOption, setShowOption] = useState(true);

  const toggleOption = () => {
    setShowOption(!showOption);
  };

  const openOptionModal = () => {
    setShowOption(!showOption)
    dispatch(openModal())
  };
  return (
    <div className="m-0 p-0 box-border">
      <table className="w-[100%] overflow-auto border-collapse">
        <tr className="bg-gray-900 text-xs">
          <th className="p-4 text-left">Currency</th>
          <th className="p-4 text-left">Fixed Price</th>
          <th className="p-4 text-left">Available</th>
          <th className="p-4 text-left">Limit</th>
          <th className="p-4 text-left">Payment</th>
          <th className="p-4 text-left">Sold</th>
          <th className="p-4 text-left">Action</th>
        </tr>
        <tr className="text-gray-800 border-b text-xs border-b-gray-500">
          <td className=" flex justify-start items-center p-4 gap-1">
            <Image src={USD} alt="" width={15} height={15} />
            <p className="text-sm">US Dollar</p>
          </td>
          <td className="p-4">1550NGN</td>
          <td className="p-4">2,000USD</td>
          <td className="p-4">10-2,000USD</td>
          <td className="p-4">Bank Transfer</td>
          <td className="p-4">0</td>
          <div className="relative">
            <td onClick={toggleOption} className="p-4 cursor-pointer">
              <SlOptions />
            </td>
            {!showOption && (
              <div className="absolute top-8 right-4 w-[110px] h-[50px] z-10 bg-white-100 rounded-md shadow-lg">
                <div
                  onClick={openOptionModal}
                  
                  className="px-4 pt-2 cursor-pointer text-black-200 text-xs font-semibold"
                >
                  View History
                </div>
              </div>
            )}
          </div>
          <CustomModal>
            <TradeHistory />
          </CustomModal>
        </tr>
      </table>
    </div>
  );
};

export default BuyTradeTable;
