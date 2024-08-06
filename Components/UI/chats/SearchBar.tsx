import React from "react";
import Image from "next/image";
import sendIcon from "@/public/svg/send.svg";

const SearchBar = () => (
  <div className="w-full mt-[24px] flex flex-col justify-center items-center">
    <div className="flex items-center bg-[#EFEFEF] rounded-lg w-[327px] h-[48px] px-4 gap-2.5">
      <input
        type="text"
        className="w-full bg-transparent outline-none placeholder:text-[12px] placeholder:leading-[14.4px] placeholder:italic placeholder:text-[#BDBDBD]"
        placeholder="Search for help..."
      />
      <button className="flex-shrink-0">
        <Image src={sendIcon} alt="" />
      </button>
    </div>
  </div>
);

export default SearchBar;
