"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import scan from "@/public/Images/scan.png";
import TwoFactorCode from "./TwoFactorCode";
import { useLoadUserQuery } from "@/redux/features/user/userApi";
import fxqr from "@/public/fxqr.png";

type Props = {
  qrCode: string;
};

const QrCode: FC<Props> = ({ qrCode }) => {
  const [twoFaCode, setTwoFaCode] = useState(!true);
  const { data } = useLoadUserQuery({});
  return (
    <>
      {twoFaCode ? (
        <div className="w-[550px] mx-auto  h-[760px] shadow-lg  rounded-md border border-white-100">
          <div className="w-[470px] flex  flex-col gap-y-[32px]  mx-auto">
            <div className="w-[56px] h-[56px] flex justify-center items-center shadow-md border border-gray-200  rounded-md ">
              <Image src={scan} alt="Scan" className=" w-[28px] h-[28px]" />
            </div>
            <div>
              <h2 className=" text-[#1E1E1E] font-bold text-[32px] tracking-[-2%] leading-[38.4px]">
                Scan QR Code
              </h2>
              <p className="text-gray-300 text-[16px] leading-[19.2px] pb-2">
                Download the google authenticator app, scan the QR code or enter
                this code manually in your authenticator app.
              </p>
            </div>
            <div className=" w-[334px] h-[334px] mx-auto">
              <p className="text-center text-[18px] leading-[21.6px] tracking-[-2%]">
                Scan QR Code
              </p>
              <Image
                src={fxqr}
                alt="QR Code"
                className="w-full h-full mt-[16px]"
              />
            </div>
            <div className="flex justify-between items-center my-4">
              <span className="font-semibold text-sm">
                {data?.user.secret || "33245JN 47738NJ 327463339"}
              </span>
              <span className="text-primaryBtn text-sm font-semibold">
                Copy
              </span>
            </div>
            <button
              onClick={() => setTwoFaCode(false)}
              className="w-full p-2 mb-6 rounded-md text-center  bg-primaryBtn text-white-100 "
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <TwoFactorCode />
      )}
    </>
  );
};

export default QrCode;
