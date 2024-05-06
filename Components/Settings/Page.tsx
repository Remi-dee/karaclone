"use client";
import React from "react";
import SettingTab from "./SettingTab";
import BasicDetails from "./BasicDetails";
import Security from "./Security";
import TransLimit from "./TransLimit";
import Notifications from "./Notifications";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="">
      <SettingTab />

      <div className=" mt-[40px]">
        {/* <BasicDetails/> */}

        {/* <Security/> */}

        {/* <TransLimit /> */}
        <Notifications/>
      </div>
    </div>
  );
};

export default Page;
