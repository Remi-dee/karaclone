"use client";

import React from "react";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import arrowRight from "@/public/svg/arrow-right.svg";
import KycModal from "@/Components/KYC/Kyc";
import BalanceDropdown from "@/Components/BalanceDropdown";
import {
  kycSelector,
  toggleStartKybModalSuccess,
  toggleStartKycModalSuccess,
} from "@/redux/features/kyc/kycSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLoadUserQuery } from "@/redux/features/user/userApi";
import {
  toggleWalletDispaly,
  toggleReversalState,
  toggleCreateTrade,
} from "@/redux/features/user/userSlice";
import KYBModal from "../KYC/kyb";
function DashHomeAfterKyc() {
  const { startKycModalOpen, startKybModalOpen } = useSelector(kycSelector);

  const { data } = useLoadUserQuery({});
  const dispatch = useDispatch();
  const router = useRouter();
  const quickActions = [
    {
      title: "Fund Wallet",
      description: "Easliy top up your account",
      icon: "/svg/featured_wallet.svg",
      href: "/fund-wallet",
      function: () => {
        dispatch(toggleWalletDispaly("fund-wallet"));
        router.push("/dashboard/wallet");
      },
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
      function: () => {
        dispatch(toggleReversalState(true));
        router.push("/dashboard/Home");
      },
    },
    {
      title: "Trade Board",
      description: "Initiate a peer to peer transfer",
      icon: "/svg/featured_p2p.svg",
      href: "/dashboard/P2P-trade",
    },
  ];

  return (
    <div>
      <div className="block lg:flex items-center gap-4">
        <div className="  flex flex-col gap-2 h-full">
          {/* kyc verification card */}
          {data?.user?.account_type === "individual" ? (
            <div className="relative dashHomeImage p-[1rem] flex-1 grow overflow-hidden min-h-fit rounded-2xl ">
              <div className="relative  flex text-white-100 w-[460px] h-[200px] ">
                <div className=" flex relative  gap-[25px] top-[34px]  flex-col w-[320px] h-[88px]">
                  <div>
                    <p className="font-bold text-[16px]  leading-[28px] tracking-[-2%] text-[#EFEFEF] ">
                      Complete your account set up by verifying your KYC
                    </p>
                    <p className="text-[15px] p leading-[24px] text-[#BDBDBD]">
                      Verify your KYC to access all features
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(
                        toggleStartKycModalSuccess({
                          data: true,
                        })
                      );
                    }}
                    className="rounded-lg w-max bg-[#7F56D9] font-semibold  text-white-100 tracking-[-2%] leading-[20px] p-[14px]  text-[12px] text-nowrap  block focus:outline-0 "
                  >
                    Start KYC Verification
                  </button>
                </div>
                <Image
                  src="/svg/cardImage.svg"
                  width={200}
                  height={212}
                  className=" w-[200px] h-[200px]  mix-blend-normal absolute right-[-2.2rem] "
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div className="relative dashHomeImage p-[1rem] flex-1 grow overflow-hidden min-h-fit rounded-2xl ">
              {/* <img
              src="/Images/Background.png"
              className="absolute top-0 bottom-0  right-0 left-0 bg-cover "
              alt=""
            /> */}
              <div className="relative  flex text-white-100 w-[460px] h-[200px] ">
                <div className=" flex relative  gap-[25px] top-[34px]  flex-col w-[320px] h-[88px]">
                  <div>
                    <p className="font-bold text-[16px]  leading-[28px] tracking-[-2%] text-[#EFEFEF] ">
                      Complete your account set up by verifying your KYB
                    </p>
                    <p className="text-[15px] p leading-[24px] text-[#BDBDBD]">
                      Verify your KYB to access all features
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(
                        toggleStartKybModalSuccess({
                          data: true,
                        })
                      );
                    }}
                    className="rounded-lg w-max bg-[#7F56D9] font-semibold  text-white-100 tracking-[-2%] leading-[20px] p-[14px]  text-[12px] text-nowrap  block focus:outline-0 "
                  >
                    Start KYB Verification
                  </button>
                </div>

                <Image
                  src="/svg/cardImage.svg"
                  width={200}
                  height={212}
                  className=" w-[200px] h-[200px]  mix-blend-normal absolute right-[-2.2rem] "
                  alt=""
                />
              </div>
            </div>
          )}

          {/* Wallet balances cards */}

          <div className=" bg-white-100 min-h-[166px] mt-[16px] rounded-xl flex-1 grow flex lg-mb-0  justify-between items-center border border-slate-200  w-full  gap-[16px]">
            <div className=" bg-white-100 w-full  rounded-md p-4">
              <div className=" flex justify-between content-between ">
                <div className="flex items-center gap-[16px]">
                  <h2 className="  text-[#7C7C7C] leading-[24px] text-[16px]">
                    Wallet Balance
                  </h2>

                  <span className="text-gray-300">
                    <FaEye className="text-[24px] " />
                  </span>
                </div>
                <div className="">
                  <div>
                    <BalanceDropdown currency={""} />
                  </div>
                </div>
              </div>
              <p className="text-[32px] flex   items-end gap-[4px] leading-[38.4px] tracking-[-2%] font-bold   text-[#1E1E1E] mt-2">
                0.00
                <span className="text-[#7C7C7C] text-[16px] pb-[2px] leading-[24px] ">
                  NGN
                </span>{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Quick actions cards*/}
        <div className="md:w-full lg:w-1/2 bg-white-100 rounded-2xl border border-slate-200  p-[24px] h-[421px]">
          <p className="font-bold text-lg  ">Quick Actions</p>

          <div className="grid grid-rows-2 grid-flow-col mt-[20px] gap-4 cursor-pointer">
            {quickActions.map((eachdata, index) => (
              <div
                onClick={eachdata.function}
                key={index}
                className=" border max-h-[156px] border-slate-200 px-2 rounded py-3"
              >
                <img src={`${eachdata.icon}`} alt="" />

                <p className=" tracking-[-2%] text-[15px] mt-[15px]  font-semibold">
                  {eachdata.title}
                </p>
                <p className="text-[#7C7C7C] mt-[8px] text-[11px] leading-[20px]">
                  {eachdata.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* table */}
      <div className=" border h-[482px] mt-[24px]  text-[20px] leading-[24px] border-slate-200 tracking-[-2%] bg-white-100 rounded-lg overflow-hidden w-full">
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#FBFBFB]">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-8700 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-8700 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-8700 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-8700 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-[black] text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>

            <tbody></tbody>

            {/* empty transactions */}
          </table>
          <div className="text-center mt-[68px] w-full flex flex-col items-center justify-center">
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
      {startKycModalOpen && <KycModal />}
      {/* {startKybModalOpen && <KYBModal />} */}
      {startKybModalOpen && <KycModal />}
    </div>
  );
}

export default DashHomeAfterKyc;
