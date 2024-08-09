import React, { useState } from "react";
import { useSelector } from "react-redux";
import WalletHome from "../UI/Wallet/WalletHome";
import FundAmount from "../features/FundWallet/FundAmount";
import FundMethod from "../features/FundWallet/FundMethod";
import FundSuccess from "../features/FundWallet/FundSuccess";

export default function Wallet() {
  const globalState = useSelector((state: any) => state?.user);
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
