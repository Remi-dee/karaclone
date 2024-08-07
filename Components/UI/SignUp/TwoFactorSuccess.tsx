import React from "react";
import Link from "next/link";
import Image from "next/image";
import tick from "@/public/tick.svg";
const TwoFactorSuccess = () => {
  return (
    <div className="  w-full md:w-[550px] flex  justify-center items-center  h-max md:h-[370px] mx-auto p-[32px_40px_32px_40px]   shadow-lg rounded-md border border-white-100">
      <div className="   w-full md:w-[400px] gap-[40px] flex flex-col ">
        <div className="w-[56px] h-[56px] flex justify-center items-center shadow-md border border-[#EAECF0] rounded-[12px] ">
          <Image src={tick} alt="" />
        </div>
        <div className=" flex flex-col gap-[16px]">
          <h3 className="font-semibold text-[32px] leading-[38.4px] text-[#3D3D3D] tracking-[-2%]">
            Two Factor Authentication Activated Successfully
          </h3>
          <p className="text-[#7C7C7C] text-[16px] ">
            Two factor authentication has been successfully enabled for your
            account. Your account is now more secure
          </p>
        </div>
        <Link href={"/dashboard/home"}>
          <button className="w-full p-[12px] text-[14px] rounded-md text-center  bg-primaryBtn text-[#FFFFFF] leading-[20px] ">
            Go To Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TwoFactorSuccess;
