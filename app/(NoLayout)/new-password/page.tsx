"use client";

import React from "react";

import fxKara from "@/public/fxkara-logo.svg";
import Image from "next/image";
import Link from "next/link";
import NewPassword from "@/Components/Auth/NewPassword";

function page() {
  return (
    <div className="flex w-full  justify-center p-[32px_40px_32px_40px]  bg-white-300 h-[960px]">
      <div className=" gap-[24px]  text-center  h-[381px] flex   flex-col justify-center w-full">
        <div className=" w-full flex justify-center pt-[3rem]">
          <Image
            src={fxKara}
            className="mx-auto h-full w-full mix-blend-darken"
            // height="200px"
            alt=""
          />
        </div>

        {/* shadow container*/}
        <div className=" mt-[5rem]  mx-auto">
          <NewPassword />
        </div>
        <div className="mt-5 text-center text-sm flex items-center justify-center">
          <p className="text-[#7C7C7C] mr-1 leding-[19px] tracking-[-2%]">
            Remembered your password?
          </p>
          <Link href="/login" className="text-[black] font-bold small">
            Login to your account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
