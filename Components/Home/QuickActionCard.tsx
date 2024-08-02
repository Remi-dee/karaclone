"use client";

import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  toggleWalletDispaly,
  toggleReversalState,
  toggleCreateTrade,
} from "@/redux/features/user/userSlice";
function QuickActionCard() {
  const dispatch = useDispatch();
  const router = useRouter();

  const quickActions = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className="mt-5 xl:mt-0 md:w-full xl:w-1/2 bg-white-100 rounded-2xl border border-slate-200   p-[1rem] lg:p-[24px] md:h-[421px]  h-full">
      <p className="font-bold text-lg  ">Quick Actions</p>

      <div className="grid grid-rows-2 grid-flow-col mt-[20px] gap-4 w-full cursor-pointer">
        {quickActions.map((eachdata, index) => (
          <div
            onClick={eachdata.function}
            key={index}
            className=" border h-full xl:max-h-[156px] border-slate-200 px-2 rounded py-3"
          >
            <img
              src={`${eachdata.icon}`}
              className=" h-[32px]  w-[32px] md:h-[38px]   md:w-[38px] "
              alt=""
            />

            <p className=" tracking-[-2%] text-[12px] xl:text-[15px] mt-[15px] xl:mt-[8px] font-semibold">
              {eachdata.title}
            </p>
            <p className="text-[#7C7C7C] mt-[8px] text-[11px] leading-[20px]">
              {eachdata.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickActionCard;
