"use client";
import { useRouter } from "next/navigation";

import questionmark from "@/public/questionmark.svg";
import Image from "next/image";
import { openCheckRateModal } from "@/redux/modal/modalSlice";
import ArrowsRightLeftIcon from "@heroicons/react/20/solid/ArrowsRightLeftIcon";
import { useDispatch } from "react-redux";
import { GiCancel } from "react-icons/gi";
import HomeSvg from "@/Components/svgIcon/HomeSvg";
import LogoutSvg from "@/Components/svgIcon/LogoutSvg";
import P2pTradeSvg from "@/Components/svgIcon/P2pTradeSvg";
import SettingsSvg from "@/Components/svgIcon/SettingsSvg";
import TransactionSvg from "@/Components/svgIcon/TransactionSvg";
import WalletSvg from "@/Components/svgIcon/WalletSvg";
import OrderSvg from "@/Components/svgIcon/OrderSvg";
type Props = {
  link: string;
  showSideBar: boolean;
  toggleSidebar: () => void;
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
  { id: 5, label: "Trade Board", href: "/dashboard/P2P-Trade", icon: "" },
];

const moreSidebarLinks = [
  { id: 6, label: "Settings", href: "/dashboard/Settings", icon: "" },
  { id: 7, label: "Logout", href: "/dashboard/Logout", icon: "" },
];

const MobileSideBar = ({ link, showSideBar, toggleSidebar }: Props) => {
  const router = useRouter();

  const isLinkActive = (label: string) =>
    label.toLowerCase() === link?.toLowerCase();
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed top-0  bottom-0  bg-[rgb(198,198,198,0.3)] w-full min-h-full h-full md:hidden inset-1 z-[10000] transform ${
        showSideBar ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 _bg-[#d4d4d4]`}
    >
      <div className="border-r border-slate-200 w-[86%] h-full flex flex-col px-[1rem] bg-white-100 py-5">
        <div className=" w-full flex  items-center    justify-between ">
          <div className="w-[232px] p-[0.4rem]">
            <Image
              src="/fxkara-logo.svg"
              className="ml-[10px] w-[120px] h-[34px]"
              height={34}
              width={120}
              alt=""
            />
          </div>

          <div>
            <GiCancel
              onClick={() => toggleSidebar()}
              className=" text-[19px]"
            />
          </div>
        </div>
        <nav className="flex p-[0.4rem] flex-col gap-[12px] w-[232px] mt-[24px] h-[468px] ">
          {sidebarLinks.map((eachdata, index) => (
            <button
              key={index}
              onClick={() => router.push(eachdata.href)}
              className={`text-[#BDBDBD] p-[10px_126px_10px_20px]  font-bold leading-[22px] small focus:outline-none rounded-[10px] ${
                isLinkActive(eachdata.label)
                  ? "bg-purple-800 text-[#fff] "
                  : "text-[#BDBDBD]  hover:text-[white] hover:bg-purple-100"
              } flex items-center text-sm font-medium    ${
                eachdata.label === "Trade Board" && link === "P2P-Trade"
                  ? "bg-purple-800 text-[#fff] "
                  : "text-[#BDBDBD]  hover:text-[white] hover:bg-purple-100"
              }   `}
            >
              {isLinkActive(eachdata.label) ? (
                <div className="flex flex-row gap-[12px]">
                  {eachdata.label.toLowerCase() === "home" ? (
                    <HomeSvg iconColor="#fff" />
                  ) : eachdata.label.toLowerCase() === "wallet" ? (
                    <WalletSvg iconColor="#fff" />
                  ) : eachdata.label.toLowerCase() === "transaction" ? (
                    <TransactionSvg iconColor="#fff" />
                  ) : eachdata.label.toLowerCase() === "order" ? (
                    <OrderSvg iconColor="#fff" />
                  ) : eachdata.label.toLowerCase() === "trade board" ? (
                    <P2pTradeSvg iconColor="#fff" />
                  ) : null}
                  <span className=" text-nowrap  ">{eachdata.label}</span>
                </div>
              ) : (
                <div className=" flex flex-row gap-[12px]">
                  {eachdata.label.toLowerCase() === "home" ? (
                    <HomeSvg iconColor="#727272" />
                  ) : eachdata.label.toLowerCase() === "wallet" ? (
                    <WalletSvg iconColor="#727272" />
                  ) : eachdata.label.toLowerCase() === "transaction" ? (
                    <TransactionSvg iconColor="#727272" />
                  ) : eachdata.label.toLowerCase() === "order" ? (
                    <OrderSvg iconColor="#727272" />
                  ) : eachdata.label.toLowerCase() === "trade board" ? (
                    <P2pTradeSvg
                      iconColor={
                        eachdata.label.toLowerCase() === "trade board" &&
                        link === "P2P-Trade"
                          ? "#fff"
                          : "#727272"
                      }
                    />
                  ) : null}
                  <span className="  w-full text-[14px] tracking-[-2%] leading-[22px] text-nowrap">
                    {eachdata.label}
                  </span>
                </div>
              )}
            </button>
          ))}
          <hr className="border-t w-full h-2" />

          <div className=" w-full mt-[10px]">
            <p className=" text-[#989898] p-[0px_24px_0px_20px] leading-[20px] text-[14px] font-[500] tracking-[-2%]">
              Account
            </p>
          </div>
          {moreSidebarLinks.map((eachdata, index) => (
            <button
              key={index}
              onClick={() => router.push(eachdata.href)}
              className={`text-[#fff] p-[10px_126px_10px_20px] small focus:outline-none rounded-[10px] ${
                isLinkActive(eachdata.label)
                  ? "bg-purple-800 text-[#fff]"
                  : "text-slate-700 hover:text-purple-700 hover:bg-purple-100"
              } flex items-center text-sm font-medium`}
            >
              {isLinkActive(eachdata.label) ? (
                <div className=" flex flex-row gap-[12px]">
                  {eachdata.label.toLowerCase() === "settings" ? (
                    <SettingsSvg iconColor="#fff" />
                  ) : eachdata.label.toLowerCase() === "logout" ? (
                    <LogoutSvg iconColor="#fff" />
                  ) : null}
                  <span className={"ml-3 text-[#fff]  text-nowrap"}>
                    {eachdata.label}
                  </span>
                </div>
              ) : (
                <>
                  {eachdata.label.toLowerCase() === "settings" ? (
                    <SettingsSvg iconColor="#727272" />
                  ) : eachdata.label.toLowerCase() === "logout" ? (
                    <LogoutSvg
                      iconColor={
                        eachdata.label.toLowerCase() === "logout"
                          ? "#D70035"
                          : "#D70035"
                      }
                    />
                  ) : null}
                  <span
                    className={`ml-3 ${
                      eachdata.label.toLowerCase() === "logout"
                        ? " text-[#D70035]"
                        : "text-[black]"
                    }  ${
                      eachdata.label.toLowerCase() === "logout"
                        ? " text-[#D70035] "
                        : "text-[#D70035]"
                    }  `}
                  >
                    {eachdata.label}
                  </span>
                </>
              )}
            </button>
          ))}
        </nav>{" "}
        <div className="realative bottom-0 flex justify-center items-center w-[265px] h-[251px]">
          <div className="docBoxImage w-[218px] h-[170px] mt-[31px]">
            <div className="text-white-300 p-[1rem] flex flex-col gap-y-[15px]">
              <div className="mt-[4px] w-[35px] h-[34px]">
                <Image
                  src={questionmark}
                  alt=""
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div className="flex flex-col h-[28px] gap-[2px] w-[141px]">
                <p className="text-[14px]">Need help?</p>
                <p className="text-[12px]">Please check our docs</p>
              </div>
              <div className="flex mx-auto w-full">
                <button className="bg-[#FFFFFF] text-black-200 w-[95%] rounded-[12px] p-[0px_8px_0px_8px] text-[12px] h-[22px] flex justify-center items-center">
                  DOCUMENTATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
