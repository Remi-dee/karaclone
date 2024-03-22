"use client";
import React, { useState } from "react";
import { FaKey } from "react-icons/fa";
import QrCode from "./QrCode";
const TwoFactorAuth = () => {
  const [option, setOption] = useState(null);
  const [showComponent, setShowComponent] = useState(true);

  const handleOptionChange = (option: any) => {
    setOption(option);
  };

  const handleQrAuth = () => {
    setShowComponent(false);
  };
  return (
    <>
      {showComponent ? (
        <div className="w-[500px] mx-auto  shadow-lg  rounded-md border border-white-100">
          <div className="w-[400px] pt-6 mx-auto">
            <div className="w-[25px] flex justify-center items-center shadow-md border border-gray-200  rounded-md h-[25px]">
              <FaKey className="text-sm" />
            </div>
            <h3 className="py-2 font-semibold text-2xl">
              Activate Two Factor Authentication
            </h3>
            <p className="text-gray-300 text-sm">
              Add an extra layer of security to your account using the google
              authenticator app
            </p>
            <div
              onClick={() => handleOptionChange("Google Authenticator")}
              className={`w-full cursor cursor-pointer flex justify-start items-center mt-6 mb-4 gap-2 p-2 border rounded-md ${
                option === "Google Authenticator"
                  ? "border-black-200"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                checked={option === "Google Authenticator"}
                onChange={() => handleOptionChange("Google Authenticator")}
                className="w-10 checked:bg-primaryBtn"
              />
              <div>
                <h4 className="text-black-200 font-semibold text-sm">
                  Google Authenticator
                </h4>
                <p className="text-gray-200 text-xs">
                  Receive authentication code on the authenticator app
                </p>
              </div>
            </div>

            <div
              onClick={() => handleOptionChange("SMS Authentication")}
              className={`w-full cursor cursor-pointer flex justify-start items-center mt-6 mb-4 gap-2 p-2 border rounded-md ${
                option === "SMS Authentication"
                  ? "border-black-200"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                checked={option === "SMS Authentication"}
                onChange={() => handleOptionChange("SMS Authentication")}
                className="form-radio w-10  checked:text-primaryBtn"
              />
              <div>
                <h4 className="text-black-200 font-semibold text-sm">
                  SMS Authentication
                </h4>
                <p className="text-gray-200 text-xs">
                  Receive authentication code via sms to your phone number
                </p>
              </div>
            </div>
            <button
              onClick={handleQrAuth}
              className="w-full p-2 mb-4 rounded-md text-center  bg-primaryBtn text-white-100 "
            >
              Proceed
            </button>
            <p className="text-center text-sm cursor-pointer text-black-200 pb-6">
              Skip for Now
            </p>
          </div>
          {/* {showComponent && option === 'Google Authenticator' && <QrCode/>} */}
        </div>
      ) : (
        <QrCode />
      )}
    </>
  );
};

export default TwoFactorAuth;
