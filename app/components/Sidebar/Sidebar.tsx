"use client"
// import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import WalletSvg from "../svgIcon/WalletSvg";
import HomeSvg from "../svgIcon/HomeSvg";
import TransactionSvg from "../svgIcon/TransactionSvg";
import OrderSvg from "../svgIcon/OrderSvg";
import P2pTradeSvg from "../svgIcon/P2pTradeSvg";
import SettingsSvg from "../svgIcon/SettingsSvg";
import LogoutSvg from "../svgIcon/LogoutSvg";




type Props = {
link:string,
showSideBar:boolean
};

const sidebarLinks = [
{ id: 1, label: 'Home', href: '/dashboard/Home', icon:'/Images/dashboard.png' },
{ id: 2, label: 'Wallet', href: '/dashboard/Wallet', icon:'' },
{ id: 3, label: 'Transaction', href: '/dashboard/Transaction', icon:'' },
{ id: 4, label: 'Order', href: '/dashboard/Order', icon:'' },
{ id: 5, label: 'P2P-Trade', href: '/dashboard/P2P-Trade', icon:'' },

];


const moreSidebarLinks = [

{ id: 6, label: 'Settings', href: '/dashboard/Settings', icon:'' },
{ id: 7, label: 'Logout', href: '/dashboard/Logout', icon:'' },
];




const Sidebar = (Props:Props) => {

console.log(Props.showSideBar)
const router = useRouter()
const link:string = Props.link
// console.log(link)
return (

<div className={`border-r border-slate-200 h-full w-96    lg:relative ${Props.showSideBar ? 'hidden ' : ' block' }
   block absolute z-[1000] py-5 bg-white-100 duration-700 transition-transform	`} >

    <div className="px-4 mb-10">
        <img src="/fxkara-logo.svg" className="mx-auto" height="200px" alt="" />
    </div>
    <nav className="flex flex-col px-5 w-full gap-2 h-[65vh]">
        {sidebarLinks.map((eachdata, index) => (
        <button key={index} onClick={()=> router.push(eachdata.href)}
            className={`text-white py-3 px-4 small focus:outline-none rounded-xl ${
            typeof eachdata.label === 'string' && typeof link === 'string' && eachdata.label.toLowerCase() ===
            link.toLowerCase()
            ? 'bg-purple-800 text-white'
            : 'text-slate-700 hover:text-purple-700 hover:bg-purple-100'
            } flex items-center text-sm font-medium`}
            >

            {eachdata.label.toLowerCase() === link.toLowerCase() ? (
            link.toLowerCase() === 'home' ? (
            <HomeSvg iconColor="#fff" />
            ) : link.toLowerCase() === 'wallet' ? (
            <WalletSvg iconColor="#fff" />
            ) : link.toLowerCase() === 'transaction' ? (
            <TransactionSvg iconColor="#fff" />
            ) : link.toLowerCase() === 'order' ? (
            <OrderSvg iconColor="#fff" />
            ) : link.toLowerCase() === 'p2p-trade' ? (
            <P2pTradeSvg iconColor="#fff" />
            ) : null
            ) : eachdata.label.toLowerCase() === 'home' ? (
            <HomeSvg iconColor="#727272" />
            ) : eachdata.label.toLowerCase() === 'wallet' ? (
            <WalletSvg iconColor="#727272" />
            ) : eachdata.label.toLowerCase() === 'transaction' ? (
            <TransactionSvg iconColor="#727272" />
            ) : eachdata.label.toLowerCase() === 'order' ? (
            <OrderSvg iconColor="#727272" />
            ) : eachdata.label.toLowerCase() === 'p2p-trade' ? (
            <P2pTradeSvg iconColor="#727272" />
            ) : null}
            <span className="ml-3">{eachdata.label}</span>
        </button>

        ))}
        <hr className="border-t w-full h-2" />

        {
        moreSidebarLinks.map((eachdata, index) => (
        <button key={index} onClick={()=> router.push(eachdata.href)}
            className={`text-white py-3 px-4 small focus:outline-none rounded-xl ${
            typeof eachdata.label === 'string' && typeof link === 'string' && eachdata.label.toLowerCase() ===
            link.toLowerCase()
            ? 'bg-purple-800 text-white'
            : 'text-slate-700 hover:text-purple-700 hover:bg-purple-100'
            } flex items-center text-sm font-medium`}
            >

            {eachdata.label.toLowerCase() === link.toLowerCase() ? (
            link.toLowerCase() === 'settings' ? (
            <SettingsSvg iconColor="#fff" />
            ) : link.toLowerCase() === 'logout' ? (
            <WalletSvg iconColor="#fff" />
            ) : null
            ) : eachdata.label.toLowerCase() === 'settings' ? (
            <SettingsSvg iconColor="#727272" />
            ) : eachdata.label.toLowerCase() === 'logout' ? (
            <LogoutSvg iconColor="#D70035" />
            ) : null}
            {eachdata.label.toLowerCase() === 'logout' ? (
            <span className="ml-3 text-red-700">{eachdata.label}</span> ):
            ( <span className="ml-3">{eachdata.label}</span>
            )}
        </button>

        ))}
    </nav>

      <div className="  text-gray-100 mt-auto">
        <div className=" flex flex-col bg-slate-100 border border-slate-100 rounded-xl m-4 p-4 pt-20">
            <p className="py-3 mt-auto">Need help?</p>
            <p>Please check our docs</p>
            <button className="bg-gray-100 text-white-300 rounded-2xl px-3 py-2">Documentation</button>
        </div>
    </div>


</div>
)};

const Style = {
    transitionProperty: "transform",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "500ms"
}





{/* */}

export default Sidebar;