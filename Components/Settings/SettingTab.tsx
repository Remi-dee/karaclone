import React from "react";

type Props = {};

const SettingTab = (props: Props) => {
  return (
    <div className="relative top-[15px] rounded-lg bg-[#fff] w-full h-[172px] overflow-hidden">
      <div className="absolute w-full top-[24px] left-[24px] flex flex-col items-start justify-start gap-[24px]">
        <div className="w-full flex flex-row items-center justify-start">
          <b className="w-full relative tracking-[-0.02em] inline-block shrink-0">
            Settings
          </b>
        </div>
        <div className="self-stretch  rounded-xl bg-[#EFEFEF] w-[95%] flex flex-row items-center justify-start py-3.5 px-4 gap-[8px] text-base text-neutral-500">
          <div className="rounded-lg bg-[#FFFFFF]  bg-white flex flex-row items-center justify-start py-3 px-6 text-[#464646]">
            <div className="relative    tracking-[-0.02em] leading-[24px] font-semibold">
              Basic Details
            </div>
          </div>
          <div className="rounded-lg flex flex-row items-center justify-start py-3 px-6">
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
              Security
            </div>
          </div>
          <div className="rounded-lg flex flex-row items-center justify-start py-3 px-6">
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
              Transaction Limits
            </div>
          </div>
          <div className="rounded-lg flex flex-row items-center justify-start py-3 px-6">
            <div className="relative tracking-[-0.02em] leading-[24px] font-semibold">
              Notifcations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingTab;
