import React from "react";
import Pagination from "../Pagination";
import { tradeData } from "./tradeData";
import EmptyTrade from "./EmptyTrade";
import Link from "next/link";

const SellTradeTable = () => {
  return (
    <div className="p-0 m-0 box-border">
      {tradeData && tradeData.length > 0 ? (
        <>
          <table className="w-[100%] overflow-auto border-collapse">
            <tr className="bg-gray-900 text-sm">
              <th className="p-4 text-left">Trade ID</th>
              <th className="p-4 text-left">Rate</th>
              <th className="p-4 text-left">Available(USD)</th>
              <th className="p-4 text-left">Limit(USD)</th>
              <th className="p-4 text-left">Action</th>
            </tr>
            {tradeData?.map((item) => (
              <tr
                key={item.tradeId}
                className="text-gray-800 border-b text-xs border-b-gray-500"
              >
                <td className="p-4">{item.tradeId}</td>
                <td className="p-4">{item.price}</td>
                <td className="p-4">{item.available}</td>
                <td className="p-4">{item.limit}</td>
                <td className="p-4">
                  <Link href={"/buy-trade"}>
                  <button className="w-[90px] rounded-md text-sm text-white-100 bg-primaryBtn p-1">
                    Buy
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </table>
          <Pagination />
        </>
      ) : (
        <div className="flex justify-center items-center">
          <EmptyTrade/>
        </div>
      )}
    </div>
  );
};

export default SellTradeTable;
