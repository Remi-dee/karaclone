"use client";

import React, { useState } from "react";
import Image from "next/image";
import setting from "@/public/svg/setting.svg";
import support from "@/public/svg/support.svg";
import profile from "@/public/svg/profile.svg";
import exit from "@/public/svg/exit.svg";
import { useDispatch, useSelector } from "react-redux";
import { openChatModal, toggleProfileModal } from "@/redux/modal/modalSlice";
import { useRouter } from "next/navigation";

function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state: any) => state?.auth);

  return (
    <div className=" w-full h-[284px]     p-[12px] flex  flex-col rounded-[12px]   ">
      <section className=" flex  h-full     flex-col    w-full relative ">
        <section className="  border-b border-[#DCDCDC]  flex  h-[72px] justify-between  w-full">
          <div className="flex gap-4 items-center">
            <div className="flex-shrink-0 bg-[#F3F3F3] rounded-[50%] w-[42px] h-[44px] flex items-center justify-center p-2 text-center">
              <span className="text-lg font-bold"> {user.name[0]}</span>
            </div>
            <div className=" flex flex-col   justify-between h-[70%]">
              <div className="text-lg font-semibold text-[#464646]">
                {user.name}
              </div>
              <div className="text-sm text-[#989898] tracking-[-2%] leading-[16px]   ">
                {user?.account_type === "individual"
                  ? " Personal Account"
                  : "Business Account"}
              </div>
            </div>
          </div>
        </section>
        {/*  */}

        {/*  */}
        <section className=" mt-[1rem] w-full flex flex-col gap-[1.2rem]">
          <div
            onClick={() => {
              dispatch(toggleProfileModal());
              router.push("/dashboard/settings");
            }}
            className=" flex cursor-pointer gap-[10px]  px-[12px] "
          >
            <div>
              <Image src={profile} alt="" />
            </div>
            <div>
              <p className=" font-medium  text-[15px]  leading-[22px] tracking-[-2%] text-[#7C7C7C]   ">
                Profile
              </p>
            </div>
          </div>
          {/*  */}
          <div
            onClick={() => {
              dispatch(toggleProfileModal());
              router.push("/dashboard/settings");
            }}
            className=" cursor-pointer px-[12px] flex items-center gap-[10px] "
          >
            <div>
              <Image src={setting} alt="" />
            </div>
            <div>
              <p className=" font-medium  text-[15px]  leading-[22px] tracking-[-2%] text-[#7C7C7C]   ">
                Account Settings
              </p>
            </div>
          </div>
          {/*  */}
          <div className=" cursor-pointer px-[12px] flex items-center gap-[10px] ">
            <div>
              <Image src={support} alt="" />
            </div>
            <div
              onClick={() => {
                dispatch(toggleProfileModal());
                dispatch(openChatModal());
              }}
            >
              <p className=" font-medium  text-[15px]  leading-[22px] tracking-[-2%] text-[#7C7C7C]   ">
                Contact Support
              </p>
            </div>
          </div>
          {/*  */}
          <div className="bg-[#EFEFEF] h-[0.5px]  mt-[4px]  w-full"></div>
          <div
            onClick={() => {
              dispatch(toggleProfileModal());
              router.push("/dashboard/logout");
            }}
            className=" flex  items-center  px-[12px] gap-[10px] cursor-pointer "
          >
            <div>
              <Image src={exit} alt="" />
            </div>
            <div>
              <p className=" font-medium  text-[15px]  leading-[22px] tracking-[-2%] text-[#D70035]   ">
                Logout
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Profile;
