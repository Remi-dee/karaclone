"use client";
import { useEffect, useState } from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon, SunIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import CircleIcon from "@/public/profile-circle.png";
import profileIcon from "@/public/svg/circled_profile.svg";
import Menu from "@/public/menu.png";

import Home from "@/Components/Layout/Home";

import Transaction from "@/Components/Layout/Transaction";
import Trade from "@/Components/Layout/Trade";
import {
  useFundWalletMutation,
  useLoadUserQuery,
} from "@/redux/features/user/userApi";
import {
  authSelector,
  toggleLogoutModal,
} from "../../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import LogoutModal from "@/Components/Auth/LogoutModal";
import Settings from "@/Components/Layout/Settings";
import chatIcon from "@/public/chaticon.png";
import Image from "next/image";
import wave from "@/public/svg/wave.svg";
import SettingsLogoutModal from "@/Components/Auth/SettingsLogOut";

import ChatModal from "@/Components/CustomModal/ChatModal";
import Chat from "@/Components/Chat/Chat";
import {
  openChatModal,
  openCheckRateModal,
  openNotificationModal,
  toggleProfileModal,
} from "@/redux/modal/modalSlice";
import Notification from "@/Components/features/Notification/Notification";
import NotificationModal from "@/Components/CustomModal/NotificationModal";
import CheckRateModal from "@/Components/CustomModal/CheckRateModal";
import TodayRate from "@/Components/features/Rate/TodayRate";
import ProfileModal from "@/Components/CustomModal/ProfileModal";
import Profile from "@/Components/features/Profile/Profile";
import Logo from "@/public/Images/Logo.png";
import { useSearchParams } from "next/navigation";
import CreateTradeSuccess from "@/Components/UI/Trade/CreateTradeSuccess";
import { userSelector } from "@/redux/features/user/userSlice";
import {
  isPaymentSuccessSelector,
  setTransactionPaymentId,
  trueLayerSelector,
} from "@/redux/features/truelayer/truelayerSlice";
import {
  useBuyTradeMutation,
  useCreateTradeMutation,
} from "@/redux/features/trade/tradeApi";
import { toast } from "react-toastify";
import { useGetNotificationsQuery } from "@/redux/features/notification/notificationApi";
import MobileSideBar from "@/Components/features/Sidebar/MobileSideBar";
import DashboardNav from "@/Components/features/dashboardNav";
import Sidebar from "@/Components/features/Sidebar/Sidebar";
import Wallet from "@/Components/Layout/Wallet";
const Dashboard = ({ params }: { params: { sidebarlink: string } }) => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isBuyTrade, setIsBuyTrade] = useState(false);
  const [isCreateTrade, setIsCreateTrade] = useState(false);
  const [isWalletFund, setIsWalletFund] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  const [
    buyTrade,
    {
      isLoading: isBuyingTrade,
      error: buyTradeError,
      data: buyTradeData,
      isSuccess: isBuyTradeSuccess,
    },
  ] = useBuyTradeMutation();
  const [
    createTrade,
    {
      isLoading: isCreatingTrade,
      error: tradeError,
      data: tradeData,
      isSuccess: isTradeSuccess,
    },
  ] = useCreateTradeMutation();

  const [
    fundWallet,
    {
      isLoading: isFundingWallet,
      error: fundWalletError,
      data: fundWalletData,
      isSuccess: isFundWalletSuccess,
    },
  ] = useFundWalletMutation();

  // const urlLink: any = urlParam.params.sidebarlink;
  const searchParams = useSearchParams();
  const urlLink: string | any = params.sidebarlink;
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const { selectedCurrency } = useSelector(userSelector);
  const { amountToFund } = useSelector(userSelector);
  const { logoutModalOpen } = useSelector(authSelector);
  const isPaymentSuccess = useSelector(isPaymentSuccessSelector);
  const { transactionPaymentId } = useSelector(trueLayerSelector);
  const { data: notificationData, refetch } = useGetNotificationsQuery(
    undefined,
    {
      // Add polling interval
      pollingInterval: 10000, // Poll every 10 seconds
    }
  );
  const { data } = useLoadUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const handleChatIcon = () => {
    dispatch(openChatModal());
  };
  const paymentId = searchParams.get("payment_id");

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

    // Retrieve state from local storage on component mount
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

    console.log("iscreate trade i", isCreateTrade);
    console.log("is buy trade i", isBuyTrade);
    console.log("is fun is", isWalletFund);
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
    <div className="flex bg-[#F5F1FB]  relative w-full h-screen max-h-screen   fixed top-0  bottom-0  _h-[1024px]">
      {/* sidebar */}

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
        className=" fixed cursor-pointer  right-[1rem]  bottom-[1rem] md:bottom-[0.5rem] z-[900]  h-[50px] w-[50px]"
      />

      <div className="  overflow-auto  h-screen w-full">
        <div className="min-h-[1024px] w-full">
          <div className=" relative  w-full  h-[100px]">
            {/* Wrap Bars3Icon component inside button element */}
            {/* <button
              className="block lg:hidden fixed top-0 left-0 z-[1000]"
              onClick={toggleSidebar}
            >
              <Image src={Menu} width={20} height={6} alt="" />
            </button> */}

            <div className="flex flex-col md:flex-col   py-5 border-slate-200 p-[1rem_1.5rem] md:p-[24px_40px_24px_40px] bg-white-100">
              <DashboardNav toggleSidebar={toggleSidebar} />
            </div>
            {/* content */}
            <div className="px-5 text-slate-900 h-full   w-full py-5  bg-[#F5F1FB]">
              {/* {urlLink.toLowerCase() === 'home' &&
                <Withdraw />} */}
              {urlLink.toLowerCase() === "home" && <Home />}
              {/* {urlLink.toLowerCase() === "home" && <CreateKYC />} */}
              {/* {urlLink.toLowerCase() === "home" && <CreateKYB />} */}
              {urlLink.toLowerCase() === "wallet" && <Wallet />}
              {urlLink.toLowerCase() === "transaction" && <Transaction />}
              {urlLink.toLowerCase() === "p2p-trade" && <Trade />}
              {urlLink.toLowerCase() === "settings" && <Settings />}
              {urlLink.toLowerCase() === "logout" && <SettingsLogoutModal />}
            </div>
          </div>
        </div>
      </div>

      <NotificationModal>
        <Notification />
      </NotificationModal>

      <ChatModal>
        <Chat />
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
