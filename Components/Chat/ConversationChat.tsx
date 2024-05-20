import React from "react";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import bgChat from "@/public/Images/bgchat.png";
import robot from "@/public/Images/robot.png";
import logo from "@/public/translogo.png";
import rightarrow from "@/public/svg/rightarrow.svg";
function ChatPage() {
  return (
    <div className=" w-full h-[800px] max-h-[800px] grid-flow-col grid grid-rows-[20%_75%_10%] rounded-[12px]   ">
      <section className=" flex chatPageBg  py-[1rem]    flex-col  min-h-[116px] max-h-[116px]   w-full h-[231px] relative ">
        <section className=" flex  justify-between pr-[1rem]">
          <Image
            src={bgChat}
            alt=""
            className=" absolute top-0 left-0 right-0 bottom-0"
          />

          <Image
            src={logo}
            className=" bg-blend-darken min-w-[90px] min-h-[25px]"
            alt=""
          />
          <MdCancel className="text-gray-200 text-lg" />
        </section>

        <div className=" flex p-[0.5rem] ">
          <div>
            <Image src={robot} className=" w-[60px] h-[54.38px]" alt="" />
          </div>
          <div className=" text-[white] h-full flex justify-center  flex-col">
            <h1 className=" text-[14px]  font-semibold  leading-[20px] ">
              KaraBot
            </h1>
            <p className="text-[10px] ">
              {" "}
              <span className=" text-[#66ff66] text-[14px] min-w-[15px] min-h-[15px] tracking-[-2%]   ">
                •
              </span>{" "}
              Active
            </p>
          </div>
        </div>
      </section>

      <section className=" flex flex-col px-[1rem] max-h-full gap-y-[16px] overscroll-auto invisible-scrollbar">
        <BotChat />

        <UserChat />
        <BotChat />

        <UserChat />
        <BotChat />
      </section>

      <section className=" flex w-full justify-center items-center">
        <div className="w-[90%] h-[46px] flex items-center bg-[#EFEFEF] p-4 rounded-lg">
          <input
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            className="w-full bg-transparent outline-none"
            placeholder="Please enter your question..."
          />
          <button
            //    onClick={handleSubmit}

            className="ml-2 flex-shrink-0"
          >
            <SendSvg />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ChatPage;

function EachFaq(params: type) {
  return (
    <div className="  flex justify-between  ">
      <p className=" text-[10px] leading-[16px] tracking-[-2%] h-full w-full">
        Can I trust the sellers/buyers on the platform?
      </p>
      <Image src={rightarrow} alt=" w-[14px] h-[12px]" />
    </div>
  );
}

function SendSvg() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5225 3.94135L9.48251 7.94135C1.38917 10.648 1.38917 15.0614 9.48251 17.7547L13.0558 18.9414L14.2425 22.5147C16.9358 30.608 21.3625 30.608 24.0558 22.5147L28.0692 10.488C29.8558 5.08802 26.9225 2.14135 21.5225 3.94135ZM21.9492 11.1147L16.8825 16.208C16.6825 16.408 16.4292 16.5014 16.1758 16.5014C15.9225 16.5014 15.6692 16.408 15.4692 16.208C15.0825 15.8214 15.0825 15.1814 15.4692 14.7947L20.5358 9.70135C20.9225 9.31469 21.5625 9.31469 21.9492 9.70135C22.3358 10.088 22.3358 10.728 21.9492 11.1147Z"
        fill="#292929"
      />
    </svg>
  );
}

function BotChat() {
  return (
    <section className="  self-start flex">
      <div className="">
        <Image className=" w-[60px] h-[54.38px]" src={robot} alt="" />
      </div>
      <div className=" max-w-[221px] rounded-md bg-[#EFEFEF]  p-[16px]   ">
        <p className=" font-[500] text-[12px] text-[#292929] leading-[18px] tracking-[-2%]  ">
          Hi Abiodun, thank you for contacting Karasell. How may i help you?
        </p>
      </div>
    </section>
  );
}
function UserChat() {
  return (
    <section className="  self-end flex ">
      <div className=" max-w-[221px] rounded-md bg-[#7F56D9]   p-[16px]   ">
        <p className=" text-[12px] font-[500] text-[white] leading-[18px] tracking-[-2%]  ">
          Hi Abiodun, thank you for contacting Karasell. How may i help you?
        </p>
      </div>
    </section>
  );
}