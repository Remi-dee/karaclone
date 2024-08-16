"use client";

import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import arrow from "@/public/svg/arrow-right.svg";
import backarrow from "@/public/svg/backarrow.svg";
import receipt from "@/public/Images/receipt.png";
import blackBack from "@/public/svg/blackBack.svg";
import { useDispatch } from "react-redux";
import { closeChatModal } from "@/redux/modal/modalSlice";
const data = [1, 2, 3, 4];

function TicketDetails({ clickHandler }: { clickHandler: any }) {
  const [Value, setValue] = useState("");

  const handleChange = (option: string) => {
    // console.log(option)
    setValue(option);
    clickHandler(option);
  };
  const [activeButton, setActiveButton] = useState("Processing");

  const handleButtonClick = (status: string) => {
    setActiveButton(status);
  };
  const dispatch = useDispatch();
  return (
    <div className=" w-full text-[#1E1E1E] h-[810px]   py-[1em] flex  flex-col rounded-[12px]   ">
      <section className=" flex   py-[1rem] h-full     flex-col    w-full relative ">
        <section className=" flex  justify-between pr-[1rem]">
          <Image
            width={15}
            height={15}
            src={blackBack}
            onClick={() => handleChange("ticketStatus")}
            className=" bg-blend-darken ml-[0.6rem] cursor-pointer z-20"
            alt=""
          />
          <MdCancel
            onClick={() => dispatch(closeChatModal())}
            className="text-gray-200 text-lg  cursor-pointer"
          />
        </section>

        <div className=" w-full p-[1rem] pl-[2rem]">
          <h1 className=" font-bold text-[16px] tracking-[-2%]  leading-[24px]   ">
            Ticket Info
          </h1>
        </div>
        <div className=" w-full  h-full  flex justify-center  ">
          <div className=" gap-[18px]  flex  w-[327px] flex-col  h-[608px] border  border-[#EFEFEF] p-[16px]  rounded-[8px] ">
            <div className="flex justify-between items-center ">
              <span className=" text-[#7C7C7C] leading-[20px] text-[14px] font-[400]">
                Ticket ID
              </span>
              <p className="text-[#1E1E1E] font-[500]  leading-[20px] tracking-[-2%] text-[14px]   ">
                20230605-185522
              </p>
            </div>
            <div className="flex justify-between items-center ">
              <span className=" text-[#7C7C7C] leading-[20px] text-[14px] font-[400]">
                Ticket Status
              </span>
              <p className="text-[#EF6820] font-[500]  leading-[20px] tracking-[-2%] text-[14px]   ">
                Processing
              </p>
            </div>
            <div className="flex justify-between items-center ">
              <span className=" text-[#7C7C7C] leading-[20px] text-[14px] font-[400]">
                Ticket Issued
              </span>
              <p className="text-[#1E1E1E] font-[500]  leading-[20px] tracking-[-2%] text-[14px]   ">
                Failed top up
              </p>
            </div>

            <div className="bg-[#EFEFEF] h-[0.5px] mt-[12px] w-[295px]"></div>

            <div className=" flex gap-[10px]  flex-col">
              <span className=" text-[#7C7C7C] leading-[20px] text-[14px] font-[400]">
                Ticktet Description
              </span>

              <p className=" tracking-[-2%] leading-[20px] text-[14px] font-[500] text-justify  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, quia nobis? Id similique adipisci amet nostrum incidunt
                ducimus natus vitae earum a facere, ea velit odio dolores
                recusandae unde aperiam?
              </p>
            </div>
            <div className="bg-[#EFEFEF] h-[0.5px] mt-[8px] w-[295px]"></div>
            <div className=" w-full ">
              <h2 className=" font-[600] text-[14px] text-[#1E1E1E] tracking-[-2%]  leading-[24px]   ">
                Uploaded Image
              </h2>
            </div>

            <div className=" w-full ">
              <Image alt="" src={receipt} />
            </div>
          </div>
        </div>
      </section>

      <section className="  mb-[17px] py-[1rem] w-full flex  justify-center">
        <div className=" w-[295px] h-[104px] text-center flex  flex-col gap-[14px] justify-center">
          <span className=" text-[#7F56D9] rounded-[8px] border-[#7F56D9] border p-[10px_16px] leading-[24px] tracking-[-2%] font-semibold ">
            Escalate Ticket
          </span>
          <span className=" text-[white] text-center rounded-[8px] bg-[#FF104B] border-none  p-[10px_16px] leading-[24px] tracking-[-2%] font-semibold ">
            Close Ticket
          </span>
        </div>
      </section>
    </div>
  );
}

export default TicketDetails;
