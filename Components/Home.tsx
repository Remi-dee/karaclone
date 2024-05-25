"use Client";
import React from "react";

import {
  kycSelector,
  toggleStartKybModalSuccess,
  toggleStartKycModalSuccess,
} from "@/redux/features/kyc/kycSlice";
import { useSelector, useDispatch } from "react-redux";

import { checkAuthentication } from "@/hooks/ProtectedRoute";

import DashHomeBeforeKyc from "./Home/DashHomeBeforeKyc";
import DashHomeAfterKyc from "./Home/DashHomeAfterKyc";
import CreateKYC from "./KYC/CreateKYC";
import Reversal from "./withdrawal/Reversal";
import WithdrawalComplete from "./withdrawal/WidthdrawalComplete";
function Home() {
  const globalState = useSelector((state: any) => state);
  const { kyc, auth, user } = globalState;
  const { kycBegin } = kyc;
  const { reversalInitiated } = user;

  return (
    <div className="w-full  h-full  ">
      {/* This page directs the Homepage for the dashboard */}

      {kycBegin ? (
        <CreateKYC />
      ) : reversalInitiated ? (
        <Reversal />
      ) : auth?.is_completed_kyc ? (
        <DashHomeBeforeKyc />
      ) : (
        <DashHomeAfterKyc />
      )}
    </div>
  );
}

export default checkAuthentication(Home);
