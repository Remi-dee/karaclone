"use client";
import { FC, useState } from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon, SunIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../Home";
import Wallet from "../components/Wallet/Wallet";
import Transaction from "../components/Transactions/Transaction";
import Trade from "../components/Trade/Trade";
import { useLoadUserQuery } from "@/redux/features/user/userApi";
import {
  authSelector,
  toggleLogoutModal,
} from "@/redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import LogoutModal from "@/app/components/Auth/LogoutModal";
type Props = {};

const Dashboard: FC<Props> = (urlParam: any) => {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const urlLink: any = urlParam.params.sidebarlink;
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const { logoutModalOpen } = useSelector(authSelector);
  const { data } = useLoadUserQuery({});
  return (
    <div className="flex items-center h-screen">
      {/* sidebar */}
      <Sidebar link={urlLink} showSideBar={showSidebar} />

      <div className="bg-gray-100 h-full w-full ">
        {/* Wrap Bars3Icon component inside button element */}
        <button
          className="block lg:hidden fixed top-0 left-0 z-[1000] m-4 p-2 rounded-xl bg-white-100 border border-slate-200  text-white"
          onClick={toggleSidebar}
        >
          <Bars3Icon className="text-gray-300 h-6 w-6" />
        </button>

        <div className="flex justify-between py-5 border-slate-200 bg-white-100">
          <div className="flex items-center">
            <div className="hidden lg:block ml-5">
              <p className="text-black-200 font-bold text-lg">
                {data?.user.name}
              </p>
              <p className="text-sm text-gray-300">
                Trade and withdraw funds easily
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center font-bold mr-5">
              <ArrowsRightLeftIcon className="text-purple-700 text-sm h-6 w-6" />
              <p className="text-purple-700">Check out our rates </p>
            </div>
            <BellIcon className="text-gray-300 h-6 w-6" />
            <SunIcon className="text-gray-300 h-6 w-6" />
            <UserCircleIcon
              className="text-gray-300 h-6 w-6 cursor-pointer"
              onClick={() => dispatch(toggleLogoutModal({ data: true }))}
            />
          </div>
        </div>

        {/* content */}
        <div className="px-5 text-slate-900 h-screen overflow-y-auto py-5  bg-purple-50">
          {/* {urlLink.toLowerCase() === 'home' &&
                <Withdraw />} */}
          {urlLink.toLowerCase() === "home" && <Home />}
          {urlLink.toLowerCase() === "wallet" && <Wallet />}
          {urlLink.toLowerCase() === "transaction" && <Transaction />}
          {urlLink.toLowerCase() === "p2p-trade" && <Trade />}
        </div>
      </div>
      {logoutModalOpen && <LogoutModal />}
    </div>
  );
};

export default Dashboard;
