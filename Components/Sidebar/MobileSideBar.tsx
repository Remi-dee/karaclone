"use client";
import { useRouter } from "next/navigation";
import WalletSvg from "../svgIcon/WalletSvg";
import HomeSvg from "../svgIcon/HomeSvg";
import TransactionSvg from "../svgIcon/TransactionSvg";
import P2pTradeSvg from "../svgIcon/P2pTradeSvg";
import SettingsSvg from "../svgIcon/SettingsSvg";
import LogoutSvg from "../svgIcon/LogoutSvg";
import questionmark from "@/public/questionmark.svg";
import Image from "next/image";

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

  return (
    <div
      className={`fixed w-full h-full md:hidden inset-0 z-50 transform ${
        showSideBar ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 _bg-[#d4d4d4]`}
    >
      <div className="border-r border-slate-200 w-[85%] h-full flex flex-col px-[1rem] bg-white-100 py-5">
        <div className="w-[232px] p-[0.4rem]">
          <Image
            src="/fxkara-logo.svg"
            className="ml-[20px] w-[120px] h-[34px]"
            height={34}
            width={120}
            alt=""
          />
        </div>
        <nav className="flex flex-col gap-[12px] w-full mt-[24px]">
          {sidebarLinks.map((eachdata, index) => (
            <button
              key={index}
              onClick={() => {
                router.push(eachdata.href);
                toggleSidebar();
              }}
              className={`text-[#BDBDBD] p-[10px_126px_10px_20px] font-bold leading-[22px] small focus:outline-none rounded-[10px] transition-transform duration-300 ease-in-out transform ${
                showSideBar ? "translate-x-0" : "-translate-x-full"
              } delay-${index * 75}ms ${
                isLinkActive(eachdata.label)
                  ? "bg-purple-800 text-[#fff]"
                  : "text-[#BDBDBD] hover:text-white hover:bg-purple-100"
              } flex items-center text-sm font-medium`}
            >
              <div className="flex flex-row gap-[12px]">
                {eachdata.label.toLowerCase() === "home" ? (
                  <HomeSvg
                    iconColor={
                      isLinkActive(eachdata.label) ? "#fff" : "#727272"
                    }
                  />
                ) : eachdata.label.toLowerCase() === "wallet" ? (
                  <WalletSvg
                    iconColor={
                      isLinkActive(eachdata.label) ? "#fff" : "#727272"
                    }
                  />
                ) : eachdata.label.toLowerCase() === "transaction" ? (
                  <TransactionSvg
                    iconColor={
                      isLinkActive(eachdata.label) ? "#fff" : "#727272"
                    }
                  />
                ) : eachdata.label.toLowerCase() === "trade board" ? (
                  <P2pTradeSvg
                    iconColor={
                      isLinkActive(eachdata.label) ? "#fff" : "#727272"
                    }
                  />
                ) : null}
                <span className="text-nowrap">{eachdata.label}</span>
              </div>
            </button>
          ))}
          <hr className="border-t w-full" />
          <div className="w-full mt-[10px]">
            <p className="text-[#989898] p-[0px_24px_0px_20px] leading-[20px] text-[14px] font-[500] tracking-[-2%]">
              Account
            </p>
          </div>
          {moreSidebarLinks.map((eachdata, index) => (
            <button
              key={index}
              onClick={() => {
                router.push(eachdata.href);
                toggleSidebar();
              }}
              className={`text-[#BDBDBD] p-[10px_126px_10px_20px] font-bold leading-[22px] small focus:outline-none rounded-[10px] transition-transform duration-300 ease-in-out transform ${
                showSideBar ? "translate-x-0" : "-translate-x-full"
              } delay-${(index + sidebarLinks.length) * 75}ms ${
                isLinkActive(eachdata.label)
                  ? "bg-purple-800 text-[#fff]"
                  : "text-[#BDBDBD] hover:text-white hover:bg-purple-100"
              } flex items-center text-sm font-medium`}
            >
              <div className="flex flex-row gap-[12px]">
                {eachdata.label.toLowerCase() === "settings" ? (
                  <SettingsSvg
                    iconColor={
                      isLinkActive(eachdata.label) ? "#fff" : "#727272"
                    }
                  />
                ) : eachdata.label.toLowerCase() === "logout" ? (
                  <LogoutSvg
                    iconColor={
                      isLinkActive(eachdata.label) ? "#fff" : "#D70035"
                    }
                  />
                ) : null}
                <span className="ml-3">{eachdata.label}</span>
              </div>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 flex justify-center items-center w-[265px] h-[231px]">
          <div className="docBoxImage w-[218px] h-[170px] mt-[31px]">
            <div className="text-white-300 p-[1rem] flex flex-col gap-y-[10px]">
              <div className="mt-[4px] w-[35px] h-[34px]">
                <Image
                  src={questionmark}
                  alt=""
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="flex flex-col h-[38px] gap-[2px] w-[111px]">
                <p className="text-[14px]">Need help?</p>
                <p className="text-[12px]">Please check our docs</p>
              </div>
              <div className="flex mx-auto w-full">
                <button className="bg-[#FFFFFF] text-black-200 w-[95%] rounded-[12px] p-[0px_8px_0px_8px] text-[12px] h-[35px] flex justify-center items-center">
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
