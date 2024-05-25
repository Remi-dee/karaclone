import React, { useState } from "react";

import { useRouter } from "next/navigation";
import FundAmount from "../FundWallet/FundAmount";
import FundMethod from "../FundWallet/FundMethod";
import FundSuccess from "../FundWallet/FundSuccess";
import WalletHome from "./WalletHome";
import { useSelector } from "react-redux";

export default function Wallet() {
  const globalState = useSelector((state: any) => state?.user);
  // console.log(globalState);
  return (
    <div className="  w-full  h-full">
      {globalState?.walletDisplay === "" ? (
        <WalletHome />
      ) : globalState?.walletDisplay === "fund-wallet" ? (
        globalState?.fundStage === 1 ? (
          <FundAmount />
        ) : globalState?.fundStage === 2 ? (
          <FundMethod />
        ) : globalState.fundStage === 3 ? (
          <FundSuccess />
        ) : null
      ) : null}
    </div>
  );
}
