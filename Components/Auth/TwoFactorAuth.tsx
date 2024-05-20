"use client";
import { useEnableTwofaQuery } from "@/redux/features/user/userApi";
import React, { useState } from "react";
import { FaKey } from "react-icons/fa";
import QrCode from "../SignUp/QrCode";

const TwoFactorAuth = () => {
  const [option, setOption] = useState<string | null>(null);
  const [showComponent, setShowComponent] = useState(true);
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);

  // Enable 2FA query
  const { data } = useEnableTwofaQuery({
    enabled: option === "Google Authenticator",
  });

  // Handle option change
  const handleOptionChange = (option: string) => {
    setOption(option);
  };

  // Handle QR code authentication
  const handleQrAuth = () => {
    setShowComponent(false);
    if (option === "Google Authenticator" && data && data.qrCode) {
      setQrCodeData(data.qrCode);
    }
  };

  return (
    <>
      {showComponent ? (
        <div className="h-[700px] w-[550px] mx-auto  shadow-lg  rounded-md border border-white-100">
          <div className="w-[470px]  mx-auto">
            <div className="w-[56px] h-[56px] flex justify-center items-center shadow-md border border-gray-200  rounded-md ">
              <FaKey className="text-[28px]" />
            </div>
            <div className=" flex flex-col gap-[16px] mt-[16px]">
              <h3 className=" leading-[38.4px] tracking-[-2%] font-bold text-[32px]">
                Activate Two Factor Authentication
              </h3>
              <p className="text-[#7C7C7C] pt-[16px] text-[16px] leading-[19.2px]">
                Add an extra layer of security to your account using the google
                authenticator app
              </p>
            </div>

            <div className=" gap-y-[32px] mt-[32px] flex flex-col">
              <div
                onClick={() => handleOptionChange("Google Authenticator")}
                className={` h-[75px] w-full cursor cursor-pointer flex justify-start  items-center gap-2 p-2 border rounded-md ${
                  option === "Google Authenticator"
                    ? "border-black-200"
                    : "border-[#DCDCDC]"
                }`}
              >
                <div className=" h-[24px] w-[24px] flex  items-center justify-center">
                  <input
                    type="radio"
                    name="auth"
                    checked={option === "Google Authenticator"}
                    onChange={() => handleOptionChange("Google Authenticator")}
                    className="w-[19px] h-[19px] checked:bg-primaryBtn"
                  />
                </div>
                <div className=" flex flex-col gap-[8px">
                  <h4 className="text-[#333333] text-[16px] leading-[19.2px] font-[500]">
                    Google Authenticator
                  </h4>
                  <p className="text-[#7C7C7C] text-[14px] leading-[20px] ">
                    Receive authentication code on the authenticator app
                  </p>
                </div>
              </div>

              <div
                onClick={() => handleOptionChange("Google Authenticator")}
                className={` h-[75px] w-full cursor cursor-pointer flex justify-start  items-center gap-2 p-2 border rounded-md ${
                  option === "Google Authenticator"
                    ? "border-black-200"
                    : "border-[#DCDCDC]"
                }`}
              >
                <div className=" h-[24px] w-[24px] flex  items-center justify-center">
                  <input
                    type="radio"
                    name="auth"
                    checked={option === "Google Authenticator"}
                    onChange={() => handleOptionChange("Google Authenticator")}
                    className="w-[19px] h-[19px] checked:bg-primaryBtn"
                  />
                </div>
                <div className=" flex flex-col gap-[8px">
                  <h4 className="text-[#333333] text-[16px] leading-[19.2px] font-[500]">
                    Microsoft Auth App
                  </h4>
                  <p className="text-[#7C7C7C] text-[14px] leading-[20px] ">
                    Receive authentication code on the authenticator app
                  </p>
                </div>
              </div>

              <div
                onClick={() => handleOptionChange("Google Authenticator")}
                className={` h-[75px] w-full cursor cursor-pointer flex justify-start  items-center gap-2 p-2 border rounded-md ${
                  option === "Google Authenticator"
                    ? "border-black-200"
                    : "border-[#DCDCDC]"
                }`}
              >
                <div className=" h-[24px] w-[24px] flex  items-center justify-center">
                  <input
                    type="radio"
                    name="auth"
                    checked={option === "Google Authenticator"}
                    onChange={() => handleOptionChange("Google Authenticator")}
                    className="w-[19px] h-[19px] checked:bg-primaryBtn"
                  />
                </div>
                <div className=" flex flex-col gap-[8px">
                  <h4 className="text-[#333333] text-[16px] leading-[19.2px] font-[500]">
                    Email Authentication
                  </h4>
                  <p className="text-[#7C7C7C] text-[14px] leading-[20px] ">
                    Receive authentication code via your email adress
                  </p>
                </div>
              </div>
            </div>
            <div className=" mt-[32px] flex flex-col gap-[16px]">
              <button
                onClick={handleQrAuth}
                className="w-full p-2  rounded-[8px] text-center  bg-primaryBtn text-[#FFFFFF] "
              >
                Proceed
              </button>
              <p className="text-center text-[14px] leading-[20px] cursor-pointer text-black-200 ">
                Skip for Now
              </p>
            </div>
          </div>
        </div>
      ) : (
        qrCodeData && <QrCode qrCode={qrCodeData} />
      )}
    </>
  );
};

export default TwoFactorAuth;
