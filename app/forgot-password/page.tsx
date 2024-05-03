"use client";
import Link from "next/link";
import { styles } from "../../styles/style";
import fxKara from "@/public/fxkara-logo.svg";
import Image from "next/image";
const ForgotPassword = () => {
  return (
    <div className="flex  justify-center p-[32px_40px_32px_40px]  bg-white-300 h-[960px]">
      <div className=" w-full md:w-2/3 lg:w-3/5 xl:w-2/5 2xl:w-1/4  text-center  h-[381px]">
        <div className="  pt-[120px]">
          <Image
            src={fxKara}
            className="mx-auto mix-blend-darken"
            // height="200px"
            alt=""
          />
        </div>

        {/* shadow container*/}
        <div className="border border-slate-100  mt-[24px]  shadow-md  h-[381px] bg-white-100 rounded-xl w-[551px] text-center flex flex-col gap-[24px] justify-center items-center text-[black]">
          <div className=" rounded-xl h-[56px] w-[56px] border flex flex-col items-center place-content-between place-items-center object-center content-center relative border-slate-200">
            <Image
              src="/key-img.png"
              width={28}
              height={28}
              alt=""
              className=" inline-flex absolute top-[0.8rem] self-center place-self-center"
            />
          </div>

          <div className="  flex flex-col gap-[12px]">
            <h3 className="font-bold text-[32px] leading-[38.4px] text-[#3D3D3D]">
              Reset Password
            </h3>
            <p className="text-[#7C7C7C ]text-[16px] tracking-[-2%]">
              Enter your email address to reset your password
            </p>
          </div>

          <div className="w-full  px-4 text-center">
            {/* form input */}
            <form className="w-full my-5 px-10">
              <div className="flex flex-col w-full mx-auto  justify-center item-center text-left  gap-2">
                <label htmlFor="email" className={`${styles.label} `}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className={`${styles.input} small mt-0`}
                />
                <button className="bg-[#EAECF0] mt-2 text-sm rounded-md py-2 px-6 text-[14px]  text-[#98A2B3] leding-[20px] w-full">
                  Reset Password
                </button>
              </div>
            </form>
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

export default ForgotPassword;
