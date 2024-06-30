"use client";

import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import bgChat from "@/public/Images/bgchat.png";
import robot from "@/public/Images/robot.png";
import logo from "@/public/translogo.png";
import rightarrow from "@/public/svg/rightarrow.svg";
import arrow from "@/public/svg/arrow-right.svg";
import backarrow from "@/public/svg/backarrow.svg";
import blackBack from "@/public/svg/blackBack.svg";
import { closeChatModal } from "@/redux/modal/modalSlice";
import { useDispatch } from "react-redux";
const data = [1, 2, 3, 4];

function TicketPage({ clickHandler }: { clickHandler: any }) {
  const [Value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (option: string) => {
    // console.log(option)
    setValue(option);
    clickHandler(option);
  };
  const [activeButton, setActiveButton] = useState("Processing");

  const handleButtonClick = (status: string) => {
    setActiveButton(status);
  };
  return (
    <div className=" w-full px-[1.5rem] h-[800px]  grid-flow-col grid grid-rows-[20%_75%_10%] rounded-[12px]   ">
      <section className=" flex   py-[1rem] h-full     flex-col    w-full relative ">
        <section className=" flex  justify-between">
          <Image
            width={15}
            height={15}
            src={blackBack}
            onClick={() => handleChange("")}
            className=" bg-blend-darken ml-[0.6rem] cursor-pointer z-20"
            alt=""
          />
          <MdCancel
            onClick={() => dispatch(closeChatModal())}
            className="text-gray-200 cursor-pointer text-lg"
          />
        </section>
        <div className=" px-[1rem] w-full mt-[1.5rem]">
          <h1 className=" font-bold text-[16px] tracking-[-2%]  leading-[24px]   ">
            Ticket Status
          </h1>
        </div>

        <section className=" w-full flex mt-[1.5rem]  justify-center items-center">
          <div className=" border flex py-[0.6rem] w-[90%] justify-center rounded-[12px]  border-[#EFEFEF]">
            <button
              className={`${
                activeButton === "Processing"
                  ? "text-[white] bg-[#7F56D9]"
                  : "text-[black] bg-transparent"
              } w-[140px] h-[36px]  px-[8px] gap-[10px] rounded-[8px]`}
              onClick={() => handleButtonClick("Processing")}
            >
              Processing
            </button>
            <button
              className={`${
                activeButton === "Completed"
                  ? "text-[white] bg-[#7F56D9]"
                  : "text-[black] bg-transparent"
              } w-[140px] h-[36px] px-[8px] gap-[10px] rounded-[8px]`}
              onClick={() => handleButtonClick("Completed")}
            >
              Completed
            </button>
          </div>
        </section>

        {/* //body */}
        <div className=" w-full  flex justify-center mt-[19px]">
          <section className=" flex  flex-col w-[327px] h-[240px] border  p-[16px] border-[#EFEFEF]  rounded-[8px] gap-[10px]  ">
            {data.map((e, i) => {
              return (
                <div key={i}>
                  <div
                    key={i}
                    className="flex items-center justify-between w-[295px] h-[34px] p-2  rounded"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#292929] text-[12px] leading-[14.4px] tracking-tight mb-1">
                        Ticket Description
                      </span>
                      <span className="font-medium text-[#989898] text-[10px] leading-[16px] tracking-tight">
                        Ticket Id: 20230605-185522
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        src={arrow}
                        alt="icon"
                        onClick={() => handleChange("Ticket Details")}
                        className=" cursor-pointer w-[12px] h-[12px]"
                      />
                    </div>
                  </div>

                  {i < data.length - 1 && (
                    <div className="bg-[#EFEFEF] h-[0.5px] mt-[12px] w-[295px]"></div>
                  )}
                </div>
              );
            })}
          </section>
        </div>
      </section>
    </div>
  );
}

export default TicketPage;
