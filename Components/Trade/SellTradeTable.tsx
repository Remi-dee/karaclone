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
import {
  useGetAllTradeExecptMineQuery,
  useGetSingleTradeQuery,
} from "@/redux/features/user/userApi";
import CustomModal from "../CustomModal/CustomModal";
import { openModal, openTradeModal } from "@/redux/modal/modalSlice";
import AmountToTrade from "./AmountToTrade";
import TradeSuccessModal from "../CustomModal/TradeSuccessModal";
import { RootState } from "@/redux/store";

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
  console.log(allTradeData.data);
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
    <div className="p-0 m-0 box-border max-h-[610px]  overflow-auto  overflow-y-scroll  h-full w-full ">
      {listOfTrades && listOfTrades.length > 0 ? (
        <>
          <table className="w-[100%] overflow-hidden overflow-y-scroll border-collapse">
            <thead>
              <tr key="1" className="bg-gray-900 text-sm">
                <th className="p-4 text-left">Trade ID</th>
                <th className="p-4 text-left">Price (NGN)</th>
                <th className="p-4 text-left">Available (USD)</th>
                <th className="p-4 text-left">Limit (USD)</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {listOfTrades?.map((item: any, i: any) => (
                <tr
                  key={i}
                  id={item.tradeId}
                  className="leading-[24px] overflow-auto text-[#464646] tracking-[-2%] border-b text-[16px] border-b-gray-500"
                >
                  <td className="p-4">{item.tradeId}</td>
                  <td className="p-4">{item.amount}</td>
                  <td className="p-4">{item.available || "2,000"}</td>
                  <td className="p-4">{item.limit || "100 - 2000"}</td>
                  <td className="p-4">
                    <button
                      disabled={isLoading}
                      onClick={() => handleBuyButton(item.tradeId)}
                      className="w-[130px] h-[30px] rounded-md text-sm text-white-100 bg-primaryBtn p-1"
                    >
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Pagination /> */}
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
