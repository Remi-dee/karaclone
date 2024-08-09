import React from "react";
import Image from "next/image";
import USD from "@/public/Images/USD.png";

const TradeHistory = () => {
  return (
    <div className="w-full md:w-[550px] m-0 overflow-auto flex justify-center h-[485px]">
      <div className="mt-[24px]">
        <p className="text-xl mb-[24px] text-center text-[#3D3D3D] tracking-[-2%] leading-[24px] font-bold">
          Trade History
        </p>
        <div className="flex w-full md:w-[470px]    p-[8px_16px] gap-10 rounded-md bg-[#7F56D91A]">
          <div className="flex flex-col w-[80%] md:w-[312px] content-center">
            <div className="flex mx-auto w-max justify-start items-center gap-2">
              <Image src={USD} alt="USD" width={15} height={15} />
              <span className="font-semibold text-[14px] leading-[16.8px] text-[#1E1E1E]">
                US Dollar
              </span>
            </div>
            <div className="w-max mx-auto">
              <p className="text-[12px] text-[#7C7C7C] leading-[14.4px] mt-[8px] tracking-[-2%]">
                Units left:
                <span className="font-semibold text-[14px] leading-[16.8px] text-[#1E1E1E] tracking-[-2%]">
                  0 USD
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[8px] flex justify-center items-center  bg-[#FF104B1A]  min-w-max h-[30px]">
            <p className="text-xs p-[8px] w-full font-semibold text-red-600 leading-[14.4px] w-max tracking-[-2%]">
              Trade Closed
            </p>
          </div>
        </div>
        <table className="w-full mt-6 text-black-200 overflow-auto border-collapse">
          <thead>
            <tr className="bg-gray-900 text-[16px] font-medium tracking-[-2%] leading-[24%]">
              <th className="  text-nowrap text-[13px] sm:text-[15px] text-center">
                Date & Time
              </th>
              <th className="  text-nowrap text-[13px] sm:text-[15px] text-left">
                Amount Sold
              </th>
              <th className="  text-nowrap text-[13px] sm:text-[15px] text-left">
                Remaining Unit
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                date: "12/02/2024",
                time: "2.00PM",
                amountSold: "500 USD",
                remainingUnit: "1500 USD",
              },
              {
                date: "12/02/2024",
                time: "2.00PM",
                amountSold: "500 USD",
                remainingUnit: "1500 USD",
              },
              {
                date: "12/02/2024",
                time: "2.00PM",
                amountSold: "500 USD",
                remainingUnit: "1500 USD",
              },
            ].map((trade, index) => (
              <tr
                key={index}
                className="text-gray-800 border-b text-xs border-b-gray-500"
              >
                <td className="p-4 text-[#7C7C7C] text-[16px] leading-[24px] text-right">
                  {trade.date} | <span className="ml-[5px]">{trade.time}</span>
                </td>
                <td className="p-4 text-[#7C7C7C] text-[16px] leading-[24px] text-left">
                  {trade.amountSold}
                </td>
                <td className="p-4 text-[#7C7C7C] text-[16px] leading-[24px] text-left">
                  {trade.remainingUnit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeHistory;
