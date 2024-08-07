"use client";

import { toggleSettingsTab } from "@/redux/features/user/userSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SettingTab = () => {
  const [selectedText, setSelectedText] = useState("Basic Details");
  const dispatch = useDispatch();
  const handleClick = (event: any) => {
    setSelectedText(event.target.innerText);

    dispatch(toggleSettingsTab(event.target.innerText));
  };

  const getClassNames = (text: string) => {
    return text === selectedText
      ? "rounded-lg bg-[#FFFFFF] bg-white text-nowrap flex flex-row items-center justify-start py-3 px-6 text-[#464646]"
      : "rounded-lg flex flex-row   items-center text-nowrap justify-start py-3 px-6";
  };

  return (
    <div className="relative top-[15px] rounded-lg bg-[#fff] w-full h-[172px] md:overflow-x-visible overflow-y-hidden overflow-x-auto invisible-scrollbar   px-[1rem]  md:px-0">
      <div className="   relative md:absolute  w-max md:w-full top-[24px] left-0 md:left-[24px]  flex flex-col items-start justify-start gap-[24px]">
        <div className="w-full  flex flex-row items-center justify-start">
          <b className="w-full text-[20px] font-bold tracking-[-2%] relative  leading-[24px] inline-block shrink-0">
            Settings
          </b>
        </div>
        <div className="self-stretch rounded-xl bg-[#EFEFEF]   w-max overflow-y-hidden overflow-x-auto md:w-[95%] flex flex-row items-center justify-start py-3.5 px-4 gap-[8px] text-base text-neutral-500 ">
          <div className={getClassNames("Basic Details")} onClick={handleClick}>
            <div className="relative cursor-pointer tracking-[-0.02em] leading-[24px] font-semibold">
              Basic Details
            </div>
          </div>
          <div className={getClassNames("Security")} onClick={handleClick}>
            <div className="relative cursor-pointer tracking-[-0.02em] leading-[24px] font-semibold">
              Security
            </div>
          </div>
          <div
            className={getClassNames("Transaction Limits")}
            onClick={handleClick}
          >
            <div className="relative cursor-pointer tracking-[-0.02em] leading-[24px] font-semibold">
              Transaction Limits
            </div>
          </div>
          <div className={getClassNames("Notifications")} onClick={handleClick}>
            <div className="relative cursor-pointer tracking-[-0.02em] leading-[24px] font-semibold ">
              Notifications
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingTab;
