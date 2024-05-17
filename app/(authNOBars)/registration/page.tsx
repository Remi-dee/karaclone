"use client";

import React from "react";
import BusinessDetails from "@/Components/Auth/BusinessDetails";
import CreateUser from "@/Components/Auth/CreateUser";
import CreatePassword from "@/Components/Auth/CreatePassword,";
import Activate2fa from "../activate-2fa/Activate2fa";
import VerifyEmail from "@/Components/Auth/VerifyEmail";
import QrCode from "@/Components/SignUp/QrCode";
import { useSelector } from "react-redux";
import { TbNumber4Small } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { increaseRegistrationStage } from "@/redux/features/auth/authSlice";

function page() {
  const globalState = useSelector((state) => state.auth);
  const level = globalState?.registrationStage;
  const accountType = globalState?.account_type;
  console.log(globalState);
  const dispatch = useDispatch();
  const continueHandler = () => {
    dispatch(increaseRegistrationStage());
  };
  return (
    <>
      {level === 1 ? (
        <CreateUser />
      ) : level === 2 ? (
        accountType !== "individual" ? (
          <BusinessDetails />
        ) : (
          continueHandler()
        )
      ) : level === 3 ? (
        <CreatePassword />
      ) : level === 4 ? (
        <VerifyEmail />
      ) : level === 5 ? (
        <Activate2fa />
      ) : (
        TbNumber4Small
      )}
    </>
  );
}

export default page;
