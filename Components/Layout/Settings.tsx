"use client";
import React from "react";

import { useSelector } from "react-redux";
import BasicDetails from "../UI/Settings/BasicDetails";
import Notifications from "../UI/Settings/Notifications";
import Security from "../UI/Settings/Security";
import SettingTab from "../UI/Settings/SettingTab";
import TransLimit from "../UI/Settings/TransLimit";

const Settings = (props: any) => {
  const { settingsOption } = useSelector((state: any) => state?.user);

  return (
    <div className=" w-full">
      <SettingTab />

      <div className=" pb-[2rem] md:pb-0  mt-[40px]">
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

export default Settings;

{
  /* <DeactivateVerification />

<YesNoDeactivate /> */
}
