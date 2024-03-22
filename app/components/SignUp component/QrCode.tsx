import React, { useState } from "react";
import Image from "next/image";
import scan from "../../../public/Images/scan.png";
import Qrcode from "../../../public/Images/Qrcode.png";
import TwoFactorCode from "./TwoFactorCode";

const QrCode = () => {
  const [twoFaCode, setTwoFaCode] = useState(true);
  return (
    <>
    {twoFaCode ? (
        <div className="w-[450px] mx-auto  shadow-lg  rounded-md border border-white-100">
        <div className="w-[350px] pt-6 mx-auto">
          <div className="w-[25px] flex justify-center items-center shadow-md border border-gray-200  rounded-md h-[25px]">
            <Image src={scan} alt="Scan" />
          </div>
          <h2 className="py-2 font-semibold text-2xl">Scan QR Code</h2>
          <p className="text-gray-300 text-xs pb-2">
            Download the google authenticator app, scan the QR code or enter
            this code manually in your authenticator app.
          </p>
          <p className="text-center text-sm">Scan QR Code</p>
          <div className="w-[200px] mx-auto">
            <Image src={Qrcode} alt="QR Code" className="w-full" />
          </div>
          <div className="flex justify-between items-center my-4">
            <span className="font-semibold text-sm">
              33245JN 47738NJ 327463339
            </span>
            <span className="text-primaryBtn text-sm font-semibold">Copy</span>
          </div>
          <button onClick={()=>setTwoFaCode(false)} className="w-full p-2 mb-6 rounded-md text-center  bg-primaryBtn text-white-100 ">
            Continue
          </button>
        </div>
      </div>
    ) : (
        <TwoFactorCode/>
    )}
      
    </>
  );
};

export default QrCode;
