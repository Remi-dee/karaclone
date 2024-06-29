import React from "react";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import bgChat from "@/public/Images/bgchat.png";
import robot from "@/public/Images/robot.png";
import logo from "@/public/translogo.png";
import rightarrow from "@/public/svg/rightarrow.svg";
import sendIcon from "@/public/svg/send.svg";
function ChatPage() {
  return (
    <div className=" w-full h-[800px]   ">
      <div className=" flex chatPageBg  py-[1rem]    flex-col  min-h-[231px]   w-full h-[231px] relative ">
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

        <section className=" px-[1rem] mt-[1rem] flex text-[white]  justify-between  ">
          <div className=" flex flex-col gap-[4px]">
            <h1 className=" leading-[38.4px] text-[32px] font-bold tracking-[-2%]    ">
              Help Center
            </h1>

            <p className=" leading-[28px] font-medium text-[18px]  tracking-[-2%]   text-[#EFEFEF]">
              Always available to assist you
            </p>
          </div>

          <div className=" h-full ">
            <Image src={robot} className=" w-[120px]  h-[108.75px]" alt="" />
          </div>
        </section>

        <section className=" p-[1rem] flex justify-between">
          <button
            onClick={() => alert("")}
            className=" z-40 w-[160px] h-[38px] bg-[#7F56D9] text-[white] rounded-[8px]  outline-none  "
          >
            Ticket Status
          </button>
          <button
            onClick={() => alert("")}
            className=" z-40 w-[160px] h-[38px] bg-[] border-[1.1px] outline-none border-[#7F56D9]  text-[#7F56D9]  rounded-[8px]    "
          >
            Contact support
          </button>
        </section>
      </div>
      <div className=" w-full mt-[24px]  flex flex-col justify-center items-center">
        <div className="flex items-center bg-[#EFEFEF] rounded-lg w-[327px] h-[48px] px-4 gap-2.5">
          <input
            type="text"
            // value={searchValue}
            // onChange={handleInputChange}
            className="w-full bg-transparent outline-none  placeholder:text-[12px] placeholder:leading-[14.4px]  placeholder:italic placeholder:text-[#BDBDBD]  "
            placeholder="Search for help..."
          />
          <button
            // onClick={handleSearch}
            className="flex-shrink-0"
          >
            <Image src={sendIcon} alt="" />
          </button>
        </div>
      </div>

      {/* another line */}
      <div className=" pb-[1rem]">
        <div className=" h-full w-full flex justify-center mt-[24px]">
          <div className="  max-h-[248px] h-full flex  flex-col  w-[327px]  p-[16px] gap-[10px] rounded-[8px] border border-[#EFEFEF]  ">
            <EachFaq />

            <div className=" w-[295px]  h-[0.5px] bg-[#EFEFEF]   "></div>

            <EachFaq />

            <div className=" w-[295px]  h-[0.5px] bg-[#EFEFEF]   "></div>
            <EachFaq />
            <div className=" w-[295px]  h-[0.5px] bg-[#EFEFEF]   "></div>
            <EachFaq />

            <div className=" w-[295px]  h-[0.5px] bg-[#EFEFEF]   "></div>

            <EachFaq />

            <div className=" w-[295px]  h-[0.5px] bg-[#EFEFEF]   "></div>
            <EachFaq />
          </div>
        </div>

        {/* another line */}

        <div className=" h-[200px] w-full flex justify-center mt-[24px] ">
          <div className="     h-full flex  flex-col  w-[327px]  p-[16px] gap-[10px] rounded-[8px] border border-[#EFEFEF]  ">
            <h1 className=" font-semibold text-[12px] leading-[14.4px] tracking-[-2%] text-[#292929]  ">
              Share your thoughts or suggestions with us.
            </h1>

            <div className=" mt-[8px] select-container text-[14px] leading-[20px] text-[#3D3D3D] ">
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className=" text-[14px] mt-[12px] h-[44px] leading-[20px] text-[#3D3D3D] w-full  ">
              <p className="font-semibold  text-[12px] leading-[14.4px] tracking-[-2%] text-[#292929] ">
                Leave more details below
              </p>

              <input
                type="text"
                placeholder=""
                className=" mt-[8px] outline-none border h-full p-[12px] w-full rounded-[12px] border-[#3D3D3D]"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;

function EachFaq(params: any) {
  return (
    <div className="  flex justify-between  ">
      <p className=" text-[10px] leading-[16px] tracking-[-2%] h-full w-full">
        Can I trust the sellers/buyers on the platform?
      </p>
      <Image src={rightarrow} alt=" w-[14px] h-[12px]" />
    </div>
  );
}
