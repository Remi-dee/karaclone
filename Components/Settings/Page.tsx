"use client";
import React from "react";
import SettingTab from "./SettingTab";
import BasicDetails from "./BasicDetails";
import Security from "./Security";
import TransLimit from "./TransLimit";
import Notifications from "./Notifications";

import { useSelector } from "react-redux";

const Page = (props: any) => {
  const { settingsOption } = useSelector((state: any) => state?.user);

  return (
    <div className="">
      <SettingTab />

      <div className=" mt-[40px]">
        {settingsOption === "Basic Details" ? (
          <BasicDetails />
        ) : settingsOption === "Security" ? (
          <Security />
        ) : settingsOption === "Transaction Limits" ? (
          <TransLimit />
        ) : settingsOption === "Notifications" ? (
          <Notifications />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Page;

{
  /* <DeactivateVerification />

<YesNoDeactivate /> */
}
