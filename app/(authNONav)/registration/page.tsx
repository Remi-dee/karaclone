"use client";

import React from "react";
import BusinessDetails from "@/Components/Auth/BusinessDetails";
import CreateUser from "@/Components/Auth/CreateUser";
import CreatePassword from "@/Components/Auth/CreatePassword,";

import VerifyEmail from "@/Components/Auth/VerifyEmail";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseRegistrationStage } from "@/redux/features/auth/authSlice";
import TwoFactorAuth from "@/Components/Auth/TwoFactorAuth";

function Page() {
  const globalState = useSelector((state: any) => state.auth);
  const level = globalState?.registrationStage;
  const accountType = globalState?.account_type;

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
        <TwoFactorAuth />
      ) : (
        <></>
      )}
    </>
  );
}

export default Page;
