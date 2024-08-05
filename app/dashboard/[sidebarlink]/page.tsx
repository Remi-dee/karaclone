"use client";
import { useEffect, useState } from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon, SunIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import CircleIcon from "@/public/profile-circle.png";
import profileIcon from "@/public/svg/circled_profile.svg";
import Menu from "@/public/menu.png";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Home from "@/Components/Home";
import Wallet from "@/Components/Wallet/Wallet";
import Transaction from "@/Components/Transactions/Transaction";
import Trade from "@/Components/Trade/Trade";
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
import Settings from "@/Components/Settings/Page";
import chatIcon from "@/public/chaticon.png";
import Image from "next/image";
import wave from "@/public/svg/wave.svg";
import SettingsLogoutModal from "@/Components/Auth/SettingsLogOut";
import DeactivateVerification from "@/Components/Auth/DeactivateVerification";
import YesNoDeactivate from "@/Components/Auth/YesNoDeactivate";
import ChatPage from "@/Components/Chat/ChatPage";
import ConversationChat from "@/Components/Chat/ConversationChat";
import ChatModal from "@/Components/CustomModal/ChatModal";
import Chat from "@/Components/Chat/Chat";
import {
  openChatModal,
  openCheckRateModal,
  openNotificationModal,
  toggleProfileModal,
} from "@/redux/modal/modalSlice";
import Notification from "@/Components/Notification/Notification";
import NotificationModal from "@/Components/CustomModal/NotificationModal";
import CheckRateModal from "@/Components/CustomModal/CheckRateModal";
import TodayRate from "@/Components/Rate/TodayRate";
import ProfileModal from "@/Components/CustomModal/ProfileModal";
import Profile from "@/Components/Profile/Profile";
import Logo from "@/public/Images/Logo.png";
import { useSearchParams } from "next/navigation";
import CreateTradeSuccess from "@/Components/Trade/CreateTradeSuccess";
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
import MobileSideBar from "@/Components/Sidebar/MobileSideBar";
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
  // const { isCreateTrade, isBuyTrade, boughtTrade, createdTrade, isWalletFund } =
  //   useSelector(userSelector);
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

  // useEffect(() => {
  //   console.log("iscreate trade i", isCreateTrade);
  //   console.log("is buy trade i", isBuyTrade);
  //   console.log("is fun is", isWalletFund);
  //   const handleTrade = async () => {
  //     if (transactionPaymentId) {
  //       if (isCreateTrade) {
  //         // console.log("our created trade is", createdTrade);
  //         // await createTrade(createdTrade);

  //         if (tradeError) {
  //           console.error("We have a trade error:", tradeError);
  //         } else if (tradeData) {
  //           console.log("Trade successful:", tradeData);
  //         }

  //         if (isTradeSuccess) {
  //           toast.success("Trade created successfully");
  //         }
  //       } else if (isBuyTrade) {
  //         console.log("our bought trade is", boughtTrade);
  //         await buyTrade(boughtTrade);

  //         if (buyTradeError) {
  //           console.error("We have a trade error:", buyTradeError);
  //         } else if (buyTradeData) {
  //           console.log("Trade successful:", buyTradeData);
  //         }

  //         if (isBuyTradeSuccess) {
  //           toast.success("Trade bought successfully");
  //         }
  //       } else if (isWalletFund) {
  //         console.log("our bought trade is", amountToFund, selectedCurrency);
  //         await fundWallet({ amountToFund, selectedCurrency });

  //         if (buyTradeError) {
  //           console.error("We have a trade error:", buyTradeError);
  //         } else if (buyTradeData) {
  //           console.log("Trade successful:", buyTradeData);
  //         }

  //         if (isBuyTradeSuccess) {
  //           toast.success("Trade bought successfully");
  //         }
  //       }

  //       // // After using the transactionPaymentId, clear it from the URL
  //       // const params = new URLSearchParams(window.location.search);
  //       // params.delete("transactionPaymentId");
  //       // router.replace({
  //       //   pathname: router.pathname,
  //       //   query: params.toString(),
  //       // }, undefined, { shallow: true });
  //     }
  //   };

  //   handleTrade();
  // }, [
  //   transactionPaymentId,
  //   isCreateTrade,
  //   createdTrade,
  //   tradeError,
  //   tradeData,
  //   isTradeSuccess,
  //   isBuyTrade,
  //   boughtTrade,
  //   buyTradeError,
  //   buyTradeData,
  //   isBuyTradeSuccess,
  //   isPaymentSuccess,
  //   dispatch,
  //   paymentId,
  //   // router,
  // ]);

  const handleBellClick = async () => {
    setHasNewNotifications(false);
    dispatch(openNotificationModal());
    // await markNotificationsRead(); // Mark notifications as read in the backend
    refetch(); // Fetch the latest notifications after marking as read
  };

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
                      <Image
                        src={profileIcon}
                        alt="Profile"
                        className="h-6 w-6"
                      />
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
