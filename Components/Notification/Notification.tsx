"use client";

import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import arrow from "@/public/svg/arrowRightNotification.svg";

import { useDispatch } from "react-redux";
import {
  closeChatModal,
  closeNotificationModal,
} from "@/redux/modal/modalSlice";
const data = [1, 2, 3, 4];

function Notification() {
  const [Value, setValue] = useState("");

  // const handleChange = (option: string) => {
  //   // console.log(option)
  //   setValue(option);
  //   clickHandler(option);
  // };
  const [activeButton, setActiveButton] = useState("Processing");

  const handleButtonClick = (status: string) => {
    setActiveButton(status);
  };
  const dispatch = useDispatch();
  return (
    <div className=" w-full h-[810px]    py-[1em] flex  flex-col rounded-[12px]   ">
      <section className=" flex   py-[1rem] h-full     flex-col    w-full relative ">
        <section className="  border-b border-[#DCDCDC] px-[24px] flex  h-[72px] justify-between  w-full">
          <div>
            <h1 className=" font-bold  text-[20px] leading-[24px] tracking-[-2%] ">
              Notifications
            </h1>
          </div>

          <div>
            <MdCancel
              onClick={() => dispatch(closeNotificationModal())}
              className="text-gray-200 text-lg  cursor-pointer"
            />
          </div>
        </section>
        {/*  */}

        <div className=" w-full  flex    justify-end  p-[1rem] ">
          <h2 className=" font-semibold text-[16px] leading-[19.2px]  tracking-[-2%] text-[#7F56D9] ">
            Mark all as read
          </h2>
        </div>

        {/*  */}
        <section className=" mt-[1rem]">
          {data.map((e, i) => (
            <>
              <div className="p-4 h-[74px] rounded-md  w-full relative">
                <div className="flex items-center">
                  <div className="w-[10px] h-[10px]  min-h-[10px] min-w-[10px] bg-[#7F56D9] rounded-full mr-4"></div>
                  <div className="flex-grow w-[354px] leading-[22px] text-[14px] tracking-[-2%] text-[#1E1E1E]  ">
                    Your exchange transaction was successful. Check your balance
                  </div>
                  <div className="ml-4">
                    <Image src={arrow} alt="" />
                  </div>
                </div>
                <div
                  className="text-sm text-[#989898] mt-2"
                  style={{ marginLeft: "1.6rem" }}
                >
                  {new Date().toLocaleDateString()}
                </div>
              </div>

              {i < data.length - 1 && (
                <div className="bg-[#EFEFEF] h-[0.5px] mt-[24px]  w-full"></div>
              )}
            </>
          ))}
        </section>
      </section>
    </div>
  );
}

export default Notification;
