"use client";

import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import arrow from "@/public/svg/arrowRightNotification.svg";
import { useDispatch } from "react-redux";
import { closeNotificationModal } from "@/redux/modal/modalSlice";
import {
  useGetNotificationsQuery,
  useMarkAllAsReadMutation,
} from "@/redux/features/notification/notificationApi";
import { toast } from "react-toastify";

function Notification() {
  type Notification = {
    id: string;
    userId: string;
    message: string;
    read: boolean;
    createdAt: string;
  };

  const dispatch = useDispatch();

  // Fetch notifications
  const { data, error, isLoading, refetch } = useGetNotificationsQuery();

  // Mark all as read mutation
  const [markAllAsRead] = useMarkAllAsReadMutation();

  // Local state for notification data
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (data) {
      setNotifications(data.data);
    } else if (error) {
      console.log(error);
      toast("An error occur:", error);
    }
  }, [data]);

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead().unwrap();
      setNotifications(
        notifications.map((notification) => ({ ...notification, read: true }))
      );
    } catch (error) {
      console.error("Error marking all as read", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading notifications</div>;

  return (
    <div className=" w-[95%] px-[1rem] md:w-full h-[810px] py-[1em] flex flex-col rounded-[12px]">
      <section className="flex py-[1rem] h-full flex-col w-full relative">
        <section className="border-b border-[#DCDCDC] px-[24px] flex h-[72px] justify-between w-full">
          <div>
            <h1 className="font-bold text-[20px] leading-[24px] tracking-[-2%]">
              Notifications
            </h1>
          </div>
          <div>
            <MdCancel
              onClick={() => dispatch(closeNotificationModal())}
              className="text-gray-200 text-lg cursor-pointer"
            />
          </div>
        </section>
        <div className="w-full flex justify-end p-[1rem]">
          <h2
            className="font-semibold text-[16px] leading-[19.2px] tracking-[-2%] text-[#7F56D9] cursor-pointer"
            onClick={handleMarkAllAsRead}
          >
            Mark all as read
          </h2>
        </div>
        <section className="mt-[1rem] m-2">
          {notifications.map((notification, i) => (
            <>
              <div
                className={`p-4  rounded-md w-full relative ${
                  notification.read ? "bg-gray-100 " : ""
                }`}
                key={notification.id}
              >
                <div className="flex items-center">
                  {!notification.read && (
                    <div className="w-[10px] h-[10px] min-h-[10px] min-w-[10px] bg-[#7F56D9] rounded-full mr-4"></div>
                  )}
                  <div className="flex-grow w-[354px] leading-[22px] text-[14px] tracking-[-2%] text-[#1E1E1E]">
                    {notification.message}
                  </div>
                  <div className="ml-4">
                    <Image src={arrow} alt="" />
                  </div>
                </div>
                <div
                  className="text-sm text-[#989898] mt-2"
                  style={{ marginLeft: "1.6rem" }}
                >
                  {new Date(notification.createdAt).toLocaleDateString()}
                </div>
              </div>
              {i < notifications.length - 1 && (
                <div className="bg-[#EFEFEF] h-[0.5px] mt-[24px] w-full"></div>
              )}
            </>
          ))}
        </section>
      </section>
    </div>
  );
}

export default Notification;
