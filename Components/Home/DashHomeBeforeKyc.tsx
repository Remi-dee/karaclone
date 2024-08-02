import React from "react";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import arrowRight from "@/public/svg/arrow-right.svg";
import TransactionTable from "../Transactions/TransactionTable";
import QuickActionCard from "./QuickActionCard";

function DashHomeBeforeKyc() {
  const router = useRouter();
  const quickActions = [
    {
      title: "Fund Wallet",
      description: "Easliy top up your account",
      icon: "/svg/featured_wallet.svg",
      href: "/fund-wallet",
    },
    {
      title: "Trade",
      description: "Convert your funds seamlessly",
      icon: "/svg/featured_exchange.svg",
      href: "/dashboard/P2P-trade",
    },

    {
      title: "Reversal",
      description: "Make a reversal",
      icon: "/svg/featured_withdrawal.svg",
      href: "/fund-wallet",
    },
    {
      title: "Trade Board",
      description: "Initiate a peer to peer transfer",
      icon: "/svg/featured_p2p.svg",
      href: "/dashboard/P2P-trade",
    },
  ];

  return (
    <div className=" h-full">
      <div className="block lg:flex items-center gap-4">
        {/* Wallet balances cards */}
        <div className=" w-1/2 flex flex-col gap-2 h-full">
          {/* Wallet balances cards */}
          <div className=" bg-[white] flex flex-row p-[18px_24px_18px_24px] min-h-[134px] h-[134px] w-[490px] rounded-[8px]   lg-mb-0 justify-between border border-slate-200 ">
            <div className=" w-[75px] h-full flex  justify-center items-center">
              <div className="bg-[#F3EEFF] rounded-full flex justify-center items-center max-w-[60px] w-[60px] h-[60px]">
                <img src="/svg/moneys.svg" alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-[16px] h-full  ">
              <div className="   flex content-between justify-between  h-full flex-col ">
                <div className="flex items-center content-center gap-2">
                  <h2 className="text-[#7C7C7C] leading-[24px] text-[16px]">
                    Wallet Balance
                  </h2>
                  <span className="text-gray-300 w-[12px] h-[12px]">
                    <FaEye />
                  </span>
                </div>
                <div>
                  <p className="text-[32px] font-bold text-[black] leading-[38.4px] tracking-[-2%] ">
                    200,000
                    <span className="text-gray-300 text-[16px] ml-[3px] font-medium leading-[24px]">
                      NGN
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              {/* <div>
              <BalanceDropdown currency={""} />
            </div> */}

              <div className=" h-[44px] w-[130px]  border items-center  flex  p-[12px_8px_12px_8px] gap-[8px] bg-[white]  border-[#EFEFEF]  rounded-[8px]     ">
                <div className=" w-[20px] h-[20px]  flex justify-center items-center   ">
                  <Image
                    src="/svg/nigeriaflag.svg"
                    alt=""
                    className=""
                    height={15}
                    width={16}
                  />
                </div>

                <div>
                  <h2 className=" leading-[20px] text-[14px] text-[#1E1E1E] text-right   ">
                    Naira Balance
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[white] flex flex-row p-[18px_24px_18px_24px] min-h-[134px] h-[134px] w-[490px] rounded-[8px]   lg-mb-0 justify-between border border-slate-200 ">
            <div className=" w-[75px] pl-[6px] h-full flex  justify-center items-center ">
              <div className="bg-[#F3EEFF] rounded-full flex justify-center items-center max-w-[60px] w-[60px] h-[60px]">
                <img src="/linechart.svg" alt="" />
              </div>
            </div>
            <div className="flex w-full ml-[16px] p-[10px_32px_10px_10px]   justify-center   flex-col gap-[16px] h-full  ">
              <div className="   flex  _h-[82px] flex-col ">
                <div className="flex  gap-2">
                  <h2 className="text-[#7C7C7C] leading-[20px] text-[14px]">
                    Total Transactions
                  </h2>
                  {/* <span className="text-gray-300 w-[12px] h-[12px]">
                  <FaEye />
                </span> */}
                </div>
                <div>
                  <p className="text-[32px] mt-[4px] font-bold text-[black] leading-[38.4px] tracking-[-2%] ">
                    12
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[white] flex flex-row p-[18px_24px_18px_24px] min-h-[134px] h-[134px] w-[490px] rounded-[8px]   lg-mb-0 justify-between border border-slate-200 ">
            <div className=" w-[75px] pl-[6px] h-full flex  justify-center items-center ">
              <div className="bg-[#F3EEFF] rounded-full flex justify-center items-center max-w-[60px] w-[60px] h-[60px]">
                <img src="/icon.svg" alt="" />
              </div>
            </div>
            <div className="flex w-full ml-[16px] p-[10px_32px_10px_10px]   justify-center   flex-col gap-[16px] h-full  ">
              <div className="   flex  _h-[82px] flex-col ">
                <div className="flex items-center content-center gap-2">
                  <h2 className="text-[#7C7C7C] leading-[24px] text-[16px]">
                    Total Transaction Value
                  </h2>
                  <span className="text-gray-300 ml-[8px] w-[12px] h-[12px]">
                    <FaEye />
                  </span>
                </div>
                <div>
                  <p className="text-[32px] font-bold text-[black] leading-[38.4px] tracking-[-2%] ">
                    200,000
                    <span className="text-gray-300 text-[16px] ml-[3px] font-medium leading-[24px]">
                      NGN
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick actions cards */}
        {/* Quick actions cards*/}

        <QuickActionCard />
      </div>

      {/* Table Content */}

      <div className=" border mt-[24px] h-[428px]  border-slate-200 bg-white-100 rounded-lg  w-full">
        <div className="p-6  mx-auto bg-white    border-b border-slate-200 flex items-center justify-between space-x-4">
          <div className="text-xl font-medium text-black-200">
            Recent Transactions
          </div>
          <div className=" flex gap-[1px] justify-center items-center">
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

        <div className="p-6  bg-white-100 flex flex-col items-center space-x-4">
          <TransactionTable />
          {/* empty transactions */}
          <div className="text-center w-full flex  h-full flex-col items-center justify-center mt-[68px]">
            <img src="/svg/emptytrans.svg" alt="" />
            <p className="text-center mt-[24px] leading-[28px] tracking-[-2%] text-[18px] text-[#3D3D3D] font-semibold">
              No Transactions Yet
            </p>
            <p className="text-gray-300 leading-[24px] text-[16px] mt-[8px] ">
              Start making transactions and track your activity here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHomeBeforeKyc;
