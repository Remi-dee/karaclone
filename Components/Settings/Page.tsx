"use client";
import React from "react";
import SettingTab from "./SettingTab";
import BasicDetails from "./BasicDetails";
import Security from "./Security";
import TransLimit from "./TransLimit";
import Notifications from "./Notifications";
import CustomModal from "../CustomModal/CustomModal";
import VerifyEmail from "../Auth/VerifyEmail";
import DeactivateVerification from "../Auth/DeactivateVerification";
import CustomModalForSetting from "../CustomModal/CustomModalForSetting";
import YesNoDeactivate from "../Auth/YesNoDeactivate";
import ChatPage from "../Chat/ChatPage";
import ChatModal from "../CustomModal/ChatModal";
import ConversationChat from "../Chat/ConversationChat";
import { useSelector } from "react-redux";
type Props = {};

const Page = (props: Props) => {
  const { settingsOption } = useSelector((state) => state?.user);

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

        {/* <ChatModal> */}
        {/* <DeactivateVerification/> 

          <YesNoDeactivate /> */}
        {/* <ConversationChat/> */}
        {/* <ChatPage /> */}
        {/* </ChatModal> */}
      </div>
    </div>
  );
};

export default Page;
