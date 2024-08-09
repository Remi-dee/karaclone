"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/modal/modalSlice";
import CustomModal from "@/Components/CustomModal/CustomModal";
import TradeHistory from "../../UI/Trade/TradeHistory";
import NGN from "@/public/Images/NGN.png";
import GBP from "@/public/Images/GBP.png";
import USD from "@/public/Images/USD.png";
import { useGetAllTradeQuery } from "@/redux/features/trade/tradeApi";
import SellTradeMobileCard from "../../UI/Trade/SellTradeMobileCard";
import SellTableRows from "../../UI/Trade/SellTableRows"; // Import the new component
import { CurrencyImages, TradeItem } from "@/app/helpers/TradeTypes";

const currencyImages: CurrencyImages = {
  NGN,
  USD,
  GBP,
};

const BuyTradeTable = () => {
  const { data } = useGetAllTradeQuery("");
  const dispatch = useDispatch();
  const [showOption, setShowOption] = useState<string | null>(null);

  const toggleOption = (id: string) => {
    setShowOption((prev) => (prev === id ? null : id));
  };

  const openOptionModal = () => {
    setShowOption(null);
    dispatch(openModal());
  };

  return (
    <div className="p-0 m-0 box-border max-h-[610px] overflow-auto overflow-y-scroll h-full w-full">
      <table className="w-[100%] hidden md:table overflow-auto border-collapse">
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
          <SellTableRows
            data={data as TradeItem[]}
            currencyImages={currencyImages}
            GBP={GBP}
            toggleOption={toggleOption}
            showOption={showOption}
            openOptionModal={openOptionModal}
          />
        </tbody>
      </table>
      <div className="h-[30rem] overflow-y-auto flex flex-col gap-[12px] md:hidden">
        {data?.map((item: TradeItem) => (
          <SellTradeMobileCard
            key={item._id}
            item={item}
            currencyImage={currencyImages[item.currency] || GBP}
            openOptionModal={openOptionModal}
          />
        ))}
        <SellTradeMobileCard />
      </div>
      <CustomModal>
        <TradeHistory />
      </CustomModal>
    </div>
  );
};

export default BuyTradeTable;
