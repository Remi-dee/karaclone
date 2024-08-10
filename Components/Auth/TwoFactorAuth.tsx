"use client";
import { useEnableTwofaQuery } from "@/redux/features/user/userApi";
import React, { useState } from "react";
import { FaKey } from "react-icons/fa";
import QrCode from "../UI/SignUp/QrCode";

const TwoFactorAuth = () => {
  const [option, setOption] = useState<string | null>(null);
  const [showComponent, setShowComponent] = useState(true);
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);
  const [isEmailVerify, setIsEmailVerify] = useState(false);

  const { data } = useEnableTwofaQuery({
    enabled: option === "Google Authenticator",
  });

  const handleOptionChange = (selectedOption: string) => {
    setOption(selectedOption);
  };

  const handleQrAuth = () => {
    setShowComponent(false);

    if (option === "Email Authenticator") {
      setQrCodeData(data.qrCode);
      setIsEmailVerify(false);
    } else if (option === "Google Authenticator" && data?.qrCode) {
      setQrCodeData(data.qrCode);
      setIsEmailVerify(true);
    }
  };

  const renderOption = (
    authOption: string,
    label: string,
    description: string
  ) => (
    <div
      onClick={() => handleOptionChange(authOption)}
      className={`h-[75px] w-full cursor-pointer flex justify-start items-center gap-2 p-2 border rounded-md ${
        option === authOption ? "border-black-200" : "border-[#DCDCDC]"
      }`}
    >
      <div className="h-[24px] w-[24px] flex items-center justify-center">
        <input
          type="radio"
          name="auth"
          checked={option === authOption}
          onChange={() => handleOptionChange(authOption)}
          className="w-[19px] h-[19px] checked:bg-primaryBtn"
        />
      </div>
      <div className="flex flex-col gap-[8px]">
        <h4 className="text-[#333333] text-[16px] leading-[19.2px] font-[500]">
          {label}
        </h4>
        <p className="text-[#7C7C7C] text-[14px] leading-[20px]">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {showComponent ? (
        <div className="md:h-[700px] h-full p-[1rem] w-full md:w-[550px] mx-0 md:mx-auto  rounded-md  shadow-[40px_4px_40px_0px_#7F56D91A] border border-[#EAECF0]  md:shadow-lg">
          <div className="w-full md:w-[470px] mx-auto">
            <div className="w-[35px] md:w-[56px] h-[35px] md:h-[56px] flex justify-center items-center shadow-md border border-gray-200 rounded-md">
              <FaKey className="text-[22px] md:text-[28px]" />
            </div>
            <div className="flex flex-col gap-[9px] md:gap-[16px] mt-[16px]">
              <h3 className="leading-[38.4px] tracking-[-2%] font-bold text-[24px] md:text-[28px]">
                Activate Two Factor Authentication
              </h3>
              <p className="text-[#7C7C7C] pt-[16px] text-[16px] leading-[19.2px]">
                Add an extra layer of security to your account using the Google
                Authenticator app
              </p>
            </div>
            <div className="gap-y-[32px] mt-[32px] flex flex-col">
              {renderOption(
                "Google Authenticator",
                "Google Authenticator",
                "Receive authentication code on the authenticator app"
              )}
              {renderOption(
                "Microsoft Auth App",
                "Microsoft Auth App",
                "Receive authentication code on the authenticator app"
              )}
              {renderOption(
                "Email Authenticator",
                "Email Authentication",
                "Receive authentication code via your email address"
              )}
            </div>
            <div className="mt-[32px] flex flex-col gap-[16px]">
              <button
                onClick={handleQrAuth}
                className="w-full p-2 rounded-[8px] text-center bg-primaryBtn text-[#FFFFFF]"
              >
                Proceed
              </button>
              <p className="text-center text-[14px] leading-[20px] cursor-pointer text-black-200">
                Skip for Now
              </p>
            </div>
          </div>
        </div>
      ) : (
        qrCodeData && (
          <QrCode isEmailVerify={isEmailVerify} qrCode={qrCodeData} />
        )
      )}
    </>
  );
};

export default TwoFactorAuth;
