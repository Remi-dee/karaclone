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

function Home() {
  const kyc = useSelector((state: any) => state?.kyc);
  const user = useSelector((state: any) => state?.user);
  const auth = useSelector((state: any) => state?.auth);
  // const { kyc, auth, user } = globalState;
  const { kycBegin, kybBegin } = kyc;
  const { reversalInitiated } = user;

  return (
    <div className="w-full  h-full   ">
      {/* This page directs the Homepage for the dashboard */}

      {kycBegin || kybBegin ? (
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
