import React from "react";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import arrowRight from "@/public/svg/arrow-right.svg";
import QuickActionCard from "./QuickActionCard";
import TransactionTable from "../Transactions/TransactionTable";

const balanceData = [
  {
    imgSrc: "/svg/moneys.svg",
    title: "Wallet Balance",
    value: "200,000",
    currency: "NGN",
    hasEyeIcon: true,
    extraContent: (
      <div className="h-[44px] ml-[1rem] md:ml-0 w-full md:w-[140px] justify-self-end border items-center flex p-[12px_8px_12px_8px] gap-[8px] bg-[white] border-[#EFEFEF] rounded-[8px]">
        <div className="w-[20px] h-[20px] flex justify-center items-center">
          <Image
            src="/svg/nigeriaflag.svg"
            alt="Nigeria Flag"
            className="w-[12px] h-[11.5px] md:w-[16px] md:h-[15px]"
            height={15}
            width={16}
          />
        </div>
        <div>
          <h2 className="leading-[20px] text-[10px] md:text-[14px] text-[#1E1E1E] text-right">
            Naira Balance
          </h2>
        </div>
      </div>
    ),
  },
  {
    imgSrc: "/linechart.svg",
    title: "Total Transactions",
    value: "12",
    currency: null,
    hasEyeIcon: false,
    extraContent: null,
  },
  {
    imgSrc: "/icon.svg",
    title: "Total Transaction Value",
    value: "200,000",
    currency: "NGN",
    hasEyeIcon: true,
    extraContent: null,
  },
];

const BalanceCard = ({
  imgSrc,
  title,
  value,
  currency,
  hasEyeIcon,
  extraContent,
}: {
  imgSrc: any;
  title: any;
  value: any;
  currency: any;
  hasEyeIcon: any;
  extraContent: any;
}) => (
  <div className="bg-[white] flex flex-row p-[16px] md:p-[18px_24px_18px_24px] min-h-[134px] font-lato h-[134px] w-full md:w-[490px] rounded-[8px] justify-between border border-slate-200">
    <div className="md:w-[75px] w-[55px] pl-[3px] h-full flex justify-center items-center">
      <div className="bg-[#F3EEFF] rounded-full flex justify-center items-center max-w-[60px]  h-[32px] md:w-[60px] w-[32px] md:h-[60px]">
        <img
          src={imgSrc}
          className=" w-[16px] h-[16px] md:w-[32px] md:h-[32px]  "
          alt={title}
        />
      </div>
    </div>
    <div className="flex w-full ml-0 md:ml-[16px] p-[1rem] md:p-[10px_32px_10px_10px] justify-center flex-col gap-[16px] h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center content-center gap-[0.2rem]">
          <h2 className="text-[#7C7C7C] leading-[20px] text-[12px] md:text-[16px]">
            {title}
          </h2>
          {hasEyeIcon && (
            <span className="text-gray-300 ml-[3px] w-[12px] h-[12px]">
              <FaEye />
            </span>
          )}
        </div>
        {extraContent && <div className="flex-shrink-0">{extraContent}</div>}
      </div>
      <p className="text-[20px] md:text-[32px] mt-[4px] font-bold text-[black] leading-[38.4px] tracking-[-2%]">
        {value}
        {currency && (
          <span className="text-gray-300 text-[19.52px] tracking-[-2%] ml-[3px] font-medium leading-[24px]">
            {currency}
          </span>
        )}
      </p>
    </div>
  </div>
);

function DashHomeBeforeKyc() {
  return (
    <div className="h-full  font-lato">
      <div className="block lg:flex items-center gap-4">
        {/* Wallet balances cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-2 h-full">
          {balanceData.map((data, index) => (
            <BalanceCard key={index} {...data} />
          ))}
        </div>

        {/* Quick actions cards */}
        <QuickActionCard />
      </div>

      {/* Table Content */}
      <div className="border mt-[24px] h-[428px] border-slate-200 bg-white-100 rounded-lg w-full">
        <div className="p-6 mx-auto bg-white border-b border-slate-200 flex items-center justify-between space-x-4">
          <div className="text-xl font-medium text-black-200">
            Recent Transactions
          </div>
          <div className="flex gap-[1px] justify-center items-center">
            <a href="#" className="text-[#3D3D3D] text-[16px] leading-[24px]">
              See All
            </a>
            <Image
              src={arrowRight}
              alt=""
              className="inline-flex h-[15.84px] width-[7px]"
              width={24}
              height={24}
            />
          </div>
        </div>

        <div className="p-6 bg-white-100 flex flex-col items-center space-x-4">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}

export default DashHomeBeforeKyc;
