"use client";
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import TradeTab from "./TradeTab";
import TradeTable from "./SellTradeTable";
import BuyTradeTable from "./BuyTradeTable";
import Link from "next/link";
import BuyTradePage from "./BuyTradePage";
import CreateTrade from "./CreateTrade";
import TradeHistory from "./TradeHistory";
import EmptyTrade from "./EmptyTrade";


const Trade = () => {
  const [activeButton, setActiveButton] = useState("Buy");
  const [switchPage, setswitchPage] = useState(false);
  const handleBuy = () => {
    setActiveButton("Buy");
  };

  const handleSell = () => {
    setActiveButton("Sell");
  };
  return (
    <div className=" ">
      {!switchPage ? (
        <div className=" h-[840px] bg-white-100  rounded-[8px] w-full p-[1.5rem] shadow-lg  box-border">
          <div className=" w-full">
            <div className="">
              <div className="flex justify-between items-center">
                <h2 className="py-[24px] text-[20px] leading-[24px] tracking-[-2%] font-bold">
                  Trade Board
                </h2>
                <Link href={"/create-trade"} className="">
                  <div className="flex justify-center rounded-[8px] items-center p-[8px_10px]   gap-2 cursor-pointer bg-primaryBtn  text-white-100">
                    <IoIosAddCircle className="text-lg  bg-primaryBtn" />
                    <p className="text-xs font-semibold">New Trade</p>
                  </div>
                </Link>
              </div>
              <TradeTab onSelectBuy={handleBuy} onSelectSell={handleSell} />
              <div className="mt-[12px]">
                {activeButton === "Buy" && <TradeTable />}
                {activeButton === "Sell" && <BuyTradeTable />}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <BuyTradePage />
        // <CreateTrade/>
      // <EmptyTrade/>
      )}
    </div>
  );
};

export default Trade;
