"use client";

import React, { useState } from "react";

import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/20/solid";

import profileIcon from "@/public/svg/circled_profile.svg";
import Menu from "@/public/menu.png";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import wave from "@/public/svg/wave.svg";

import {
  openCheckRateModal,
  openNotificationModal,
  toggleProfileModal,
} from "@/redux/modal/modalSlice";
import Logo from "@/public/Images/Logo.png";
import { useLoadUserQuery } from "@/redux/features/user/userApi";
import { useGetNotificationsQuery } from "@/redux/features/notification/notificationApi";

type props = {
  toggleSidebar: () => void;
};

function DashboardNav({ toggleSidebar }: props) {
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  const { data: notificationData, refetch } = useGetNotificationsQuery(
    undefined,
    {
      // Add polling interval
      pollingInterval: 10000, // Poll every 10 seconds
    }
  );
  const dispatch = useDispatch();
  const handleBellClick = () => {
    setHasNewNotifications(false);
    dispatch(openNotificationModal());
    // markNotificationsRead(); // Mark notifications as read in the backend
    refetch(); // Fetch the latest notifications after marking as read
  };

  const { data } = useLoadUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  return (
    <>
      <div className=" flex  flex-row  w-full justify-between items-start ">
        <div className="flex flex-col md:space-y-0 space-y-6 items-start">
          <div>
            <button className="md:hidden cursor-pointer">
              <Image src={Logo} alt="Logo" className="" />
            </button>
          </div>

          <div className=" hidden md:block md:ml-5">
            <span className="text-black-200 font-bold text-lg">
              <div className=" flex gap-[4px]">
                <p className="text-black-200 font-bold  text-[14px] md:text-lg   ">
                  {"Hello, " + data?.user?.name}
                </p>
                <Image src={wave} width={20} height={6} alt="" />
              </div>
            </span>
            <p className="text-sm w-full text-gray-300">
              Trade and withdraw funds easily
            </p>
          </div>
        </div>

        <div className="flex justify-between space-x-[330px]">
          <div className="flex items-center gap-5 md:gap-[40px]">
            <div
              onClick={() => dispatch(openCheckRateModal())}
              className=" cursor-pointer items-center font-bold lg:mr-5 hidden md:flex"
            >
              <ArrowsRightLeftIcon className="text-purple-700 text-sm h-6 w-6" />
              <p className="text-purple-700 hidden lg:flex">
                Check out our rates{" "}
              </p>
            </div>
            <div className="relative">
              <BellIcon
                onClick={handleBellClick}
                className="text-gray-300 cursor-pointer h-6 w-6"
              />
              {hasNewNotifications && (
                <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></div>
              )}
            </div>
            {/* <SunIcon className="text-gray-300 h-6 w-6" /> */}

            <button
              className="block h-8 w-8 cursor-pointer"
              onClick={() => dispatch(toggleProfileModal())}
            >
              <Image src={profileIcon} alt="Profile" className="h-6 w-6" />
            </button>

            <button
              className=" cursor-pointer md:hidden block"
              onClick={() => toggleSidebar()}
            >
              <Image src={Menu} className="h-6 w-6" alt="Menu" />
            </button>
          </div>
        </div>
      </div>

      <div className="  flex flex-col mt-[16px] md:hidden md:ml-5">
        <span className="text-[#1E1E1E] font-bold text-lg">
          <div className=" flex gap-[4px]">
            <p className="text-[#1E1E1E] font-[500] tracking-[-2%]  text-[16px]   ">
              {"Hello, " + data?.user?.name}
            </p>
            <Image src={wave} width={20} height={6} alt="" />
          </div>
        </span>
        <p className="text-[14px] w-full text-[#7C7C7C]">
          Trade and withdraw funds easily
        </p>
      </div>
    </>
  );
}

export default DashboardNav;
