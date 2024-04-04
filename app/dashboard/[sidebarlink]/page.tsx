"use client"
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import { BellIcon,SunIcon,UserCircleIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from '@heroicons/react/24/outline';
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../Home";
import Wallet from "../Wallet";
import Withdraw from "../components/withdrawal/withdraw";
type Props = {};



const Dashboard: FC<Props> = (urlParam:any) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const urlLink:any = urlParam.params.sidebarlink
    const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    };
    console.log(typeof urlLink)
    // const endPoint:string = urlLink.link
    return (
    <div className="flex items-center bg-white-300Background (FBFBFB) h-screen">

        {/* sidebar */}
        <Sidebar link={urlLink} showSideBar={showSidebar} />

        <div className="bg-gray-100 h-full w-full ">



            {
            /* Wrap Bars3Icon component inside button element */
            }
            <button
                className="block lg:hidden fixed top-0 left-0 z-[1000] m-4 p-2 rounded-xl bg-white-100 border border-slate-200  text-white"
                onClick={toggleSidebar}>
                <Bars3Icon className="text-gray-300 h-6 w-6" />
            </button>


            <div
                className="flex fixed top-0 left-0 z-[999] xl:pl-96 w-full justify-end lg:justify-between items-center px-10 pr-15 xl:px-32  border-b border-slate-200 bg-white-100 py-5">
                <div className="hidden lg:block">
                    <p className="text-black-200 font-bold text-lg">Hello Omorinsola</p>
                    <p className="text-sm text-gray-300">Trade and withdraw funds easily</p>
                </div>


                <div className="flex items-center gap-5">
                    <div className="flex items-center font-bold mr-5">
                        <ArrowsRightLeftIcon className="text-purple-700 text-sm h-6 w-6" />
                        <p className="text-purple-700">Check out our rates </p>
                    </div>
                    <BellIcon className="text-gray-300 h-6 w-6" />
                    <SunIcon className="text-gray-300 h-6 w-6" />
                    <UserCircleIcon className="text-gray-300 h-6 w-6" />

                </div>
            </div>
            {/* content */}
            <div className="px-5 md:px-10 lg:px-10 xl:px-28 xxl:px-32 text-slate-900 h-screen overflow-y-auto pt-24 md:pt-36 bg-white-100">


            {/* {urlLink.toLowerCase() === 'home' &&
                <Withdraw />} */}
                {urlLink.toLowerCase() === 'home' &&
                <Home />}
                {urlLink.toLowerCase() === 'wallet' &&
                <Wallet />}

            </div>
        </div>
    </div>
    );
    };

    export default Dashboard;
