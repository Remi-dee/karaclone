"use Client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthentication } from "@/hooks/ProtectedRoute";
import DashHomeBeforeKyc from "../features/DashHomeBeforeKyc";
import DashHomeAfterKyc from "../features/DashHomeAfterKyc";
import Reversal from "../withdrawal/Reversal";
import CreateKYC from "./CreateKYC";


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
