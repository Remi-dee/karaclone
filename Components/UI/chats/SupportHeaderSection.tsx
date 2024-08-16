import React from "react";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import bgChat from "@/public/Images/bgchat.png";
import robot from "@/public/Images/robot.png";
import logo from "@/public/translogo.png";
import { closeChatModal } from "@/redux/modal/modalSlice";

interface HeaderSectionProps {
  handleChange: (option: string) => void;
}

const SupportHeaderSection: React.FC<HeaderSectionProps> = ({
  handleChange,
}: {
  handleChange: any;
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex chatPageBg py-[1rem] overflow-y-hidden flex-col min-h-[231px] w-full h-[231px] relative">
      <section className="flex justify-between pr-[1rem]">
        <Image
          src={bgChat}
          alt="Background"
          className="absolute top-0 left-0 right-0 bottom-0"
        />
        <Image
          src={logo}
          className="bg-blend-darken min-w-[90px] min-h-[25px]"
          alt="Logo"
        />
        <MdCancel
          onClick={() => dispatch(closeChatModal())}
          className="text-gray-200 cursor-pointer z-40 text-lg"
        />
      </section>

      <section className="px-[1rem] mt-[1rem] flex text-[white] justify-between">
        <div className="flex flex-col gap-[4px]">
          <h1 className="leading-[38.4px] text-[32px] font-bold tracking-[-2%]">
            Help Center
          </h1>
          <p className="leading-[28px] font-medium text-[18px] tracking-[-2%] text-[#EFEFEF]">
            Always available to assist you
          </p>
        </div>
        <div className="h-full">
          <Image src={robot} className="w-[120px] h-[108.75px]" alt="Robot" />
        </div>
      </section>

      <section className="px-[0.8rem] md:p-[1rem] flex justify-between">
        <button
          onClick={() => handleChange("ticketStatus")}
          className="z-40 w-[160px] h-[38px] bg-[#7F56D9] text-[white] rounded-[8px] outline-none"
        >
          Ticket Status
        </button>
        <button
          onClick={() => handleChange("contactSupport")}
          className="z-40 w-[160px] h-[38px] border-[1.1px] outline-none border-[#7F56D9] text-[#7F56D9] rounded-[8px]"
        >
          Contact support
        </button>
      </section>
    </div>
  );
};

export default SupportHeaderSection;
