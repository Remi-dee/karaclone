"use client";
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import TradeTab from "./TradeTab";
import TradeTable from "./SellTradeTable";
import BuyTradeTable from "./BuyTradeTable";

import CreateTrade from "./CreateTradeComp";

import { useDispatch, useSelector } from "react-redux";
import CreateTradeDetails from "./CreateTradeDetails";
import {
  toggleBuyTradeDisplay,
  toggleCreateTrade,
  toggleCreateTradeStage,
} from "@/redux/features/user/userSlice";

import SelectBank from "./SelectBank";

import TradeModal from "../CustomModal/TradeModal";
import BeneficaryDetails from "./BeneficaryDetails";
import BuyTradePage from "./BuyTradePage";
import CreateTradeSuccess from "./CreateTradeSuccess";
import CustomModal from "../CustomModal/CustomModal";
import TradeSuccessModal from "../CustomModal/TradeSuccessModal";
const Trade = () => {
  const globalState = useSelector((state: any) => state?.user);
  // console.log(globalState);
  const [showSelectBank, setshowSelectBank] = useState(1);
  const { createTradeState, isCreateTrade, isBuyTrade } = globalState;
  const [activeButton, setActiveButton] = useState("Buy");
  const [switchPage, setswitchPage] = useState(false);
  const handleBuy = () => {
    setActiveButton("Buy");
  };

  const handleSell = () => {
    setActiveButton("Sell");
  };
  const dispatch = useDispatch();
  const handleNewTrade = () => {
    dispatch(toggleCreateTrade(true));
    dispatch(toggleBuyTradeDisplay(false));
    dispatch(toggleCreateTradeStage(2));
  };
  return (
    <div className=" ">
      {createTradeState === 1 ? (
        <div className=" h-[840px] bg-white-100  rounded-[8px] w-full p-[1.5rem] shadow-lg  box-border">
          <div className=" w-full">
            <div className="">
              <div className="flex justify-between items-center">
                <h2 className="py-[24px] text-[20px] leading-[24px] tracking-[-2%] font-bold">
                  Trade Board
                </h2>

                <div
                  onClick={handleNewTrade}
                  className="flex justify-center rounded-[8px] items-center p-[8px_10px]   gap-2 cursor-pointer bg-primaryBtn  text-white-100"
                >
                  <IoIosAddCircle className="text-lg  bg-primaryBtn" />
                  <p className="text-xs font-semibold">New Trade</p>
                </div>
              </div>
              <TradeTab onSelectBuy={handleBuy} onSelectSell={handleSell} />
              <div className="mt-[12px]">
                {activeButton === "Buy" && <TradeTable />}
                {activeButton === "Sell" && <BuyTradeTable />}
              </div>
            </div>
          </div>
        </div>
      ) : //this section of the code renders either buy trade or sell trade components
      isBuyTrade === true ? (
        <BuyTradePage />
      ) : isCreateTrade === true ? (
        <DisplayAltCreateTrade />
      ) : null}
    </div>
  );
};

export default Trade;

function DisplayAltCreateTrade() {
  const globalState = useSelector((state: any) => state?.user);

  const { createTradeState } = globalState;
  return (
    <div>
      {createTradeState === 2 ? (
        <CreateTrade />
      ) : createTradeState === 3 ? (
        <CreateTradeDetails />
      ) : createTradeState === 4 ? (
        <CreateTradeSuccess />
      ) : null}

      {/* <CustomModal>{showSelectBank ? <></> : null}</CustomModal> */}
    </div>
  );
}
