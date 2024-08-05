"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { tradeData } from "./tradeData";
import EmptyTrade from "./EmptyTrade";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataForSelectedTrade,
  toggleBuyTradeDisplay,
  toggleBuyTradeState,
} from "@/redux/features/user/userSlice";

import CustomModal from "../CustomModal/CustomModal";
import { openModal, openTradeModal } from "@/redux/modal/modalSlice";
import AmountToTrade from "./AmountToTrade";
import TradeSuccessModal from "../CustomModal/TradeSuccessModal";
import { RootState } from "@/redux/store";
import {
  useGetSingleTradeQuery,
  useGetAllTradeExecptMineQuery,
} from "@/redux/features/trade/tradeApi";
import TradeRow from "./TradeRow";

const SellTradeTable = () => {
  const [tradeId, setTradeId] = useState<string | null>(null);
  const [showModal, setshowModal] = useState(true);
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  const { data, error, isLoading, isSuccess } = useGetSingleTradeQuery(
    tradeId!,
    {
      skip: !tradeId, // Skip the query until tradeId is set
    }
  );

  const [listOfTrades, setlistOfTrades] = useState([]);
  // const allTradeData = useGetAllTradeQuery("");
  const allTradeData = useGetAllTradeExecptMineQuery("");
  console.log(allTradeData);
  useEffect(() => {
    // createTrade();

    if (allTradeData?.isSuccess) {
      setlistOfTrades(allTradeData?.data);
    }
  }, [allTradeData?.isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(addDataForSelectedTrade(data));
      dispatch(toggleBuyTradeDisplay(true));
      dispatch(toggleBuyTradeState(2));
    }
  }, [isSuccess]);

  const handleBuyButton = (id: string | any) => {
    //handle modal for amount
    dispatch(openTradeModal());
    // handle fetching of selected trade here

    setTradeId(id);
  };
  return (
    <div className="p-0 m-0 box-border max-h-[610px]  overflow-auto invisible-scrollbar  overflow-y-scroll  h-full w-full ">
      {listOfTrades && listOfTrades.length > 0 ? (
        <>
          <div className=" hidden md:block w-full">
            <table className="w-[100%] overflow-hidden overflow-y-scroll   border-collapse">
              <thead>
                <tr key="1" className="bg-gray-900 text-sm">
                  <th className="p-4 text-left">Trade ID</th>
                  <th className="p-4 text-left">Price </th>
                  <th className="p-4 text-left">Available</th>
                  <th className="p-4 text-left">Limit</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {listOfTrades?.map((item: any, i: any) => (
                  <>
                    <TradeRow
                      key={i}
                      item={item}
                      isLoading={isLoading}
                      handleBuyButton={handleBuyButton}
                    />
                  </>
                ))}
              </tbody>
            </table>
            {/* <Pagination /> */}
          </div>

          {/* mobile cards */}
          <div className=" h-[30rem] overflow-y-auto flex flex-col gap-[12px] md:hidden">
            {listOfTrades?.map((item: any, i: any) => (
              <div
                key={i}
                className=" p-[24px] border rounded-[24px] flex md:hidden gap-[12px]  "
              >
                <div className=" flex  flex-col gap-[12px]">
                  <h2 className=" text-[#656565] leading-[17.8px] text-[14px] ">
                    TZN-324532A
                  </h2>

                  <h1 className=" font-bold leading-[30.51px] text-[24px">
                    2000{" "}
                    <span className=" font-[500]   text-[17.8px] ">USD</span>
                  </h1>

                  <p>1550 NGN / $1</p>

                  <span className=" flex items-center">
                    Limit:
                    <p className=" text-[14px] text-[#3D3D3D] leading-[17.8px]  font-bold ">
                      10 -2000 USD
                    </p>
                  </span>
                </div>

                <div className=" flex  items-end ">
                  <button
                    disabled={isLoading}
                    onClick={() => handleBuyButton("item.trade_id")}
                    className="w-[130px] h-[30px] rounded-md text-sm text-white-100 bg-primaryBtn p-1"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}

            {/* <Pagination  /> */}
          </div>
        </>
      ) : (
        <div className="flex h-full  min-h-[435px]  justify-center items-center">
          <EmptyTrade />
        </div>
      )}
    </div>
  );
};

export default SellTradeTable;
