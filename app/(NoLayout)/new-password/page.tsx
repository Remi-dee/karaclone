"use client";

import React from "react";

import fxKara from "@/public/fxkara-logo.svg";
import Image from "next/image";
import Link from "next/link";
import NewPassword from "@/Components/Auth/NewPassword";

function page() {
  return (
    <div className="flex w-full justify-center px-[1rem] py-[1.4rem] md:p-[32px_40px_32px_40px]  bg-white-300  h-full ">
      <div className=" gap-[24px]  text-center  h-full  flex   flex-col justify-center w-full">
        <div className=" w-full mt-[1rem] flex justify-center _pt-[120px]">
          <Image
            src={fxKara}
            className="mx-auto  mix-blend-darken"
            // height="200px"
            alt=""
          />
        </div>

        {/* shadow container*/}
        <div className=" mt-0 md:mt-[1rem]  mx-0 md:mx-auto">
          <NewPassword />
        </div>
        <div className="mt-5 text-center text-[1rem] flex items-center justify-center">
          <p className="text-[#7C7C7C] text-nowrap mr-1 leading-[19px]  md:w-fit tracking-[-2%]">
            Remembered your password?
          </p>
          <Link href="/login" className="text-[black]  font-bold small">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
