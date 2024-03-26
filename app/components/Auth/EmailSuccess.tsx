"use client";
import React, { FC } from "react";
import { IoIosCheckmark } from "react-icons/io";

type Props = {
  active: number;
  setActive: (active: any) => void;
};

const EmailSuccess: FC<Props> = ({ active, setActive }) => {
  return (
    <div className="w-[500px] mx-auto  shadow-lg rounded-md border border-white-100">
      <div className="w-[400px] pt-6 mx-auto">
        <div className="w-[35px] h-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-md ">
          <div className="w-[20] bg-green-500 rounded-sm text-white-100">
            <IoIosCheckmark className="w-full" />
          </div>
        </div>
        <h3 className="font-semibold text-xl py-2">
          Email Verification Successful
        </h3>
        <p className="text-gray-200 text-sm pb-4">
          Your email address has been successfully verified
        </p>

        <button
          onClick={() => setActive(active + 1)}
          className="w-full p-2 mb-6 rounded-md text-center  bg-primaryBtn text-white-100 "
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmailSuccess;
