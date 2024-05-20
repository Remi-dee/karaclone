"use Client";
import React from "react";
import { FaEye } from "react-icons/fa";
import {
  kycSelector,
  toggleStartKybModalSuccess,
  toggleStartKycModalSuccess,
} from "@/redux/features/kyc/kycSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLoadUserQuery } from "@/redux/features/user/userApi";
import KycModal from "@/Components/KYC/Kyc";
import BalanceDropdown from "@/Components/BalanceDropdown";
import { checkAuthentication } from "@/hooks/ProtectedRoute";
import KYBModal from "@/Components/KYC/kyb";
import { useRouter } from "next/navigation";
import Image from "next/image";
import arrowRight from "@/public/svg/arrow-right.svg";
import DashHomeBeforeKyc from "./Home/DashHomeBeforeKyc";
import DashHomeAfterKyc from "./Home/DashHomeAfterKyc";
import CreateKYC from "./KYC/CreateKYC";
function Home() {


  const { kycBegin } = useSelector((state) => state?.kyc);

  return (
    <div className="w-full  h-full  ">
      {/* //this determines if kyc page is to be displayed or the base homepage */}

      {/* find a way to change true to state of kyc status */}

      {kycBegin ? (
        <CreateKYC />
      ) : true ? (
        <DashHomeAfterKyc />
      ) : (
        <DashHomeBeforeKyc />
      )}
    </div>
  );
}

export default checkAuthentication(Home);
