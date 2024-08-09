"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Pagination";
import {
  addDataForSelectedTrade,
  toggleBuyTradeDisplay,
  toggleBuyTradeState,
} from "@/redux/features/user/userSlice";
import { openTradeModal } from "@/redux/modal/modalSlice";
import { RootState } from "@/redux/store";
import {
  useGetSingleTradeQuery,
  useGetAllTradeExecptMineQuery,
} from "@/redux/features/trade/tradeApi";
import EmptyTrade from "@/Components/UI/Trade/EmptyTrade";
import BuyMobileCards from "@/Components/UI/Trade/BuyMobileCard";
import BuyTradeRow from "@/Components/UI/Trade/BuyTradeRow";

const SellTrade = () => {
  const [tradeId, setTradeId] = useState<string | null>(null);
  const [listOfTrades, setListOfTrades] = useState([]);
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  const { data, isSuccess } = useGetSingleTradeQuery(tradeId!, {
    skip: !tradeId,
  });

  const allTradeData = useGetAllTradeExecptMineQuery("");

  useEffect(() => {
    if (allTradeData.isSuccess) {
      setListOfTrades(allTradeData.data);
    }
  }, [allTradeData.isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(addDataForSelectedTrade(data));
      dispatch(toggleBuyTradeDisplay(true));
      dispatch(toggleBuyTradeState(2));
    }
  }, [isSuccess, data, dispatch]);

  const handleBuyButton = (id: string) => {
    dispatch(openTradeModal());
    setTradeId(id);
  };

  const renderTradeRows = () =>
    listOfTrades.map((item: any, i: any) => (
      <BuyTradeRow
        key={i}
        item={item}
        isLoading={allTradeData.isLoading}
        handleBuyButton={handleBuyButton}
      />
    ));

  return (
    <div className="p-0 m-0 box-border max-h-[610px] overflow-auto invisible-scrollbar overflow-y-scroll h-full w-full">
      {listOfTrades.length > 0 ? (
        <>
          <div className="hidden md:block w-full">
            <table className="w-[100%] overflow-hidden overflow-y-scroll border-collapse">
              <thead>
                <tr key="1" className="bg-gray-900 text-sm">
                  <th className="p-4 text-left">Trade ID</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Available</th>
                  <th className="p-4 text-left">Limit</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>{renderTradeRows()}</tbody>
            </table>
            {/* <Pagination /> */}
          </div>
          <div className="h-[30rem] overflow-y-auto flex flex-col gap-[12px] md:hidden">
            <BuyMobileCards
              listOfTrades={listOfTrades}
              handleBuyButton={handleBuyButton}
              isLoading={allTradeData.isLoading}
            />
            {/* <Pagination /> */}
          </div>
        </>
      ) : (
        <div className="flex h-full min-h-[435px] justify-center items-center">
          <EmptyTrade />
        </div>
      )}
    </div>
  );
};

export default SellTrade;
