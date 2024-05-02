"use client";
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import TradeTab from "./TradeTab";
import TradeTable from "./SellTradeTable";
import BuyTradeTable from "./BuyTradeTable";
import Link from "next/link";

const Trade = () => {
  const [activeButton, setActiveButton] = useState("Buy");

  const handleBuy = () => {
    setActiveButton("Buy");
  };

  const handleSell = () => {
    setActiveButton("Sell");
  };
  return (
    <div className="p-0 m-0 box-border">
      <div className="w-full min-h-[70vh] shadow-lg rounded-md">
        <div className="w-[96%] mx-auto">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl">Trade Board</span>
            <Link href={"/create-trade"}>
            <div className="flex justify-center items-center p-2 gap-2 cursor-pointer bg-primaryBtn rounded-md text-white-100">
              <IoIosAddCircle className="text-lg" />
              <p className="text-xs font-semibold">New Ad</p>
            </div>
            </Link>
          </div>
          <TradeTab onSelectBuy={handleBuy} onSelectSell={handleSell} />
          <div className="my-2">
            {activeButton === "Buy" && <TradeTable />}
            {activeButton === "Sell" && <BuyTradeTable/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
