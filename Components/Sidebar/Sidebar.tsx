"use client";
import { useRouter } from "next/navigation";
import WalletSvg from "../svgIcon/WalletSvg";
import HomeSvg from "../svgIcon/HomeSvg";
import TransactionSvg from "../svgIcon/TransactionSvg";
import OrderSvg from "../svgIcon/OrderSvg";
import P2pTradeSvg from "../svgIcon/P2pTradeSvg";
import SettingsSvg from "../svgIcon/SettingsSvg";
import LogoutSvg from "../svgIcon/LogoutSvg";
import questionmark from "@/public/questionmark.svg";
import docbox from "@/public/docbox.png";
import Image from "next/image";

type Props = {
  link: string;
  showSideBar: boolean;
};

const sidebarLinks = [
  {
    id: 1,
    label: "Home",
    href: "/dashboard/Home",
    icon: "/Images/dashboard.png",
  },
  { id: 2, label: "Wallet", href: "/dashboard/Wallet", icon: "" },
  { id: 3, label: "Transaction", href: "/dashboard/Transaction", icon: "" },
  { id: 4, label: "Order", href: "/dashboard/Order", icon: "" },
  { id: 5, label: "P2P-Trade", href: "/dashboard/P2P-Trade", icon: "" },
];

const moreSidebarLinks = [
  { id: 6, label: "Settings", href: "/dashboard/Settings", icon: "" },
  { id: 7, label: "Logout", href: "/dashboard/Logout", icon: "" },
];

const Sidebar = ({ link, showSideBar }: Props) => {
  const router = useRouter();

  const isLinkActive = (label: string) =>
    label.toLowerCase() === link?.toLowerCase();

  return (
    <div
      className={`border-r border-slate-200 h-full w-96    lg:relative ${
        showSideBar ? "hidden " : " block"
      }
   block absolute z-[1000] py-5 bg-white-100 duration-700 transition-transform	`}
    >
      <div className="px-4 mb-10">
        <img src="/fxkara-logo.svg" className="mx-auto" height="200px" alt="" />
      </div>
      <nav className="flex flex-col px-5 w-full gap-2 h-[65vh]">
        {sidebarLinks.map((eachdata, index) => (
          <button
            key={index}
            onClick={() => router.push(eachdata.href)}
            className={`text-[#fff] py-3 px-4 small focus:outline-none rounded-xl ${
              isLinkActive(eachdata.label)
                ? "bg-purple-800 text-[#fff]"
                : "text-slate-700 hover:text-purple-700 hover:bg-purple-100"
            } flex items-center text-sm font-medium`}
          >
            {isLinkActive(eachdata.label) ? (
              <>
                {eachdata.label.toLowerCase() === "home" ? (
                  <HomeSvg iconColor="#fff" />
                ) : eachdata.label.toLowerCase() === "wallet" ? (
                  <WalletSvg iconColor="#fff" />
                ) : eachdata.label.toLowerCase() === "transaction" ? (
                  <TransactionSvg iconColor="#fff" />
                ) : eachdata.label.toLowerCase() === "order" ? (
                  <OrderSvg iconColor="#fff" />
                ) : eachdata.label.toLowerCase() === "p2p-trade" ? (
                  <P2pTradeSvg iconColor="#fff" />
                ) : null}
                <span className="ml-3 text-[#fff]">{eachdata.label}</span>
              </>
            ) : (
              <>
                {eachdata.label.toLowerCase() === "home" ? (
                  <HomeSvg iconColor="#727272" />
                ) : eachdata.label.toLowerCase() === "wallet" ? (
                  <WalletSvg iconColor="#727272" />
                ) : eachdata.label.toLowerCase() === "transaction" ? (
                  <TransactionSvg iconColor="#727272" />
                ) : eachdata.label.toLowerCase() === "order" ? (
                  <OrderSvg iconColor="#727272" />
                ) : eachdata.label.toLowerCase() === "p2p-trade" ? (
                  <P2pTradeSvg iconColor="#727272" />
                ) : null}
                <span className="ml-3">{eachdata.label}</span>
              </>
            )}
          </button>
        ))}
        <hr className="border-t w-full h-2" />

        {moreSidebarLinks.map((eachdata, index) => (
          <button
            key={index}
            onClick={() => router.push(eachdata.href)}
            className={`text-[#fff] py-3 px-4 small focus:outline-none rounded-xl ${
              isLinkActive(eachdata.label)
                ? "bg-purple-800 text-[#fff]"
                : "text-slate-700 hover:text-purple-700 hover:bg-purple-100"
            } flex items-center text-sm font-medium`}
          >
            {isLinkActive(eachdata.label) ? (
              <>
                {eachdata.label.toLowerCase() === "settings" ? (
                  <SettingsSvg iconColor="#fff" />
                ) : eachdata.label.toLowerCase() === "logout" ? (
                  <LogoutSvg iconColor="#fff" />
                ) : null}
                <span className="ml-3 text-[#fff]">{eachdata.label}</span>
              </>
            ) : (
              <>
                {eachdata.label.toLowerCase() === "settings" ? (
                  <SettingsSvg iconColor="#727272" />
                ) : eachdata.label.toLowerCase() === "logout" ? (
                  <LogoutSvg iconColor="#D70035" />
                ) : null}
                <span className="ml-3">{eachdata.label}</span>
              </>
            )}
          </button>
        ))}
      </nav>

      <div className=" w-full flex   justify-center">
        <div className=" docBoxImage text-white-300 p-[1rem]  flex flex-col  gap-y-[0.5rem] relative">
          <div className=" ">
            <Image
              src={questionmark}
              alt=""
              className=" w-[1.5rem] h-[1.5rem] "
            />
          </div>
          <div className=" flex flex-col     ">
            <p className=" ">Need help?</p>
            <p className=" text-[0.8rem]">Please check our docs</p>
            <button className="bg-[#FFFFFF] mt-[5%] text-black-200 w-[90%] rounded-2xl px-3 py-2">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
