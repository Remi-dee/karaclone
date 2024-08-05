"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon, SunIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import {
  useFundWalletMutation,
  useLoadUserQuery,
} from "@/redux/features/user/userApi";
import {
  authSelector,
  toggleLogoutModal,
} from "../../../redux/features/auth/authSlice";
import {
  setTransactionPaymentId,
  trueLayerSelector,
  isPaymentSuccessSelector,
} from "@/redux/features/truelayer/truelayerSlice";
import { useGetNotificationsQuery } from "@/redux/features/notification/notificationApi";
import { openChatModal } from "@/redux/modal/modalSlice";

import LogoutModal from "@/Components/Auth/LogoutModal";
import SettingsLogoutModal from "@/Components/Auth/SettingsLogOut";
import NotificationModal from "@/Components/CustomModal/NotificationModal";
import CheckRateModal from "@/Components/CustomModal/CheckRateModal";
import ChatModal from "@/Components/CustomModal/ChatModal";
import ProfileModal from "@/Components/CustomModal/ProfileModal";
import Notification from "@/Components/features/Notification/Notification";
import TodayRate from "@/Components/features/Rate/TodayRate";
import Profile from "@/Components/features/Profile/Profile";
import MobileSideBar from "@/Components/features/Sidebar/MobileSideBar";
import DashboardNav from "@/Components/features/dashboardNav";
import Sidebar from "@/Components/features/Sidebar/Sidebar";
import Home from "@/Components/Layout/Home";
import Transaction from "@/Components/Layout/Transaction";
import Trade from "@/Components/Layout/Trade";
import Wallet from "@/Components/Layout/Wallet";
import Settings from "@/Components/Layout/Settings";
import Support from "@/Components/Layout/Support";
import CreateTradeSuccess from "@/Components/UI/Trade/CreateTradeSuccess";

import chatIcon from "@/public/chaticon.png";

const Dashboard = ({ params }: { params: { sidebarlink: string } }) => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isBuyTrade, setIsBuyTrade] = useState(false);
  const [isCreateTrade, setIsCreateTrade] = useState(false);
  const [isWalletFund, setIsWalletFund] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  const searchParams = useSearchParams();
  const urlLink: string = params.sidebarlink;
  const paymentId = searchParams.get("payment_id");

  const { logoutModalOpen } = useSelector(authSelector);
  const isPaymentSuccess = useSelector(isPaymentSuccessSelector);
  const { transactionPaymentId } = useSelector(trueLayerSelector);

  const { data: notificationData, refetch } = useGetNotificationsQuery(
    undefined,
    {
      pollingInterval: 10000,
    }
  );
  const { data } = useLoadUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleChatIcon = () => {
    dispatch(openChatModal());
  };

  useEffect(() => {
    if (notificationData) {
      const hasUnread = notificationData.data.some(
        (notification: any) => !notification.read
      );
      setHasNewNotifications(hasUnread);
    }
  }, [notificationData]);

  useEffect(() => {
    dispatch(setTransactionPaymentId(paymentId));

    const storedIsCreateTrade = localStorage.getItem("isCreateTrade");
    const storedIsWalletFund = localStorage.getItem("isWalletFund");
    const storedIsBuyTrade = localStorage.getItem("isBuyTrade");

    if (storedIsBuyTrade === "true") {
      setIsBuyTrade(true);
    } else if (storedIsCreateTrade === "true") {
      setIsCreateTrade(true);
    } else if (storedIsWalletFund === "true") {
      setIsWalletFund(true);
    }
  }, []);

  if (paymentId) {
    return (
      <CreateTradeSuccess
        isCreateTrade={isCreateTrade}
        isBuyTrade={isBuyTrade}
        isWalletFund={isWalletFund}
        transactionPaymentId={transactionPaymentId}
      />
    );
  }

  return (
    <div className="flex bg-[#F5F1FB] relative w-full h-screen max-h-screen fixed top-0 bottom-0">
      {/* Sidebar */}
      <Sidebar link={urlLink} />
      <MobileSideBar
        toggleSidebar={toggleSidebar}
        link={urlLink}
        showSideBar={showSidebar}
      />
      <Image
        onClick={handleChatIcon}
        src={chatIcon}
        alt=""
        className="fixed cursor-pointer right-[1rem] bottom-[1rem] md:bottom-[0.5rem] z-[900] h-[50px] w-[50px]"
      />

      <div className="overflow-auto h-screen w-full">
        <div className="min-h-[1024px] w-full">
          <div className="relative w-full h-[100px]">
            <div className="flex flex-col md:flex-col py-5 border-slate-200 p-[1rem_1.5rem] md:p-[24px_40px_24px_40px] bg-white-100">
              <DashboardNav toggleSidebar={toggleSidebar} />
            </div>
            {/* Content */}
            <div className="px-5 text-slate-900 h-full w-full py-5 bg-[#F5F1FB]">
              {urlLink.toLowerCase() === "home" && <Home />}
              {urlLink.toLowerCase() === "wallet" && <Wallet />}
              {urlLink.toLowerCase() === "transaction" && <Transaction />}
              {urlLink.toLowerCase() === "p2p-trade" && <Trade />}
              {urlLink.toLowerCase() === "settings" && <Settings />}
              {urlLink.toLowerCase() === "logout" && <SettingsLogoutModal />}
            </div>
          </div>
        </div>
      </div>

      {/* modals */}
      <NotificationModal>
        <Notification />
      </NotificationModal>

      <ChatModal>
        <Support />
      </ChatModal>

      <CheckRateModal>
        <TodayRate />
      </CheckRateModal>

      <ProfileModal>
        <Profile />
      </ProfileModal>

      {logoutModalOpen && <LogoutModal />}
    </div>
  );
};

export default Dashboard;
