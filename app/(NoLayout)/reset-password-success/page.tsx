"use client";
import Link from "next/link";

import fxKara from "@/public/fxkara-logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoIosCheckmark } from "react-icons/io";
const ResetPasswordSuccess = () => {
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="flex w-full  justify-center p-[32px_40px_32px_40px]  bg-white-300 h-[960px]">
      <div className=" gap-[24px]  text-center  h-[381px] flex   flex-col justify-center w-full">
        <div className=" w-full flex justify-center pt-[120px]">
          <Image
            src={fxKara}
            className="mx-auto mix-blend-darken"
            // height="200px"
            alt=""
          />
        </div>

        {/* shadow container*/}
        <div className="border mx-auto border-slate-100  mt-[24px]  shadow-md  h-[381px] bg-white-100 rounded-xl w-[551px] text-center  p-[32px_40px_32px_40px] flex flex-col gap-[24px] justify-center items-center text-[black]">
          <div className="w-[20px] h-[20px] bg-green-500 rounded-sm text-white-100">
            <IoIosCheckmark className="w-full" />
          </div>

          <div className="w-[400px] pt-6 mx-auto">
            <div className="w-[35px] h-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-md "></div>
            <h3 className="font-semibold text-xl py-2">
              Password Reset Successful
            </h3>
            <p className="text-gray-200 text-sm pb-4">
              Your password has been successfully reset. Click below to log in.
            </p>

            <button
              //   onClick={() => setActive(active + 1)}
              className="w-full p-2 mb-6 rounded-md text-center  bg-primaryBtn text-white-100 "
            >
              Continue
            </button>
          </div>
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
};

export default ResetPasswordSuccess;
