"use client";
import Link from "next/link";
import { styles } from "../../styles/style";
import { ChangeEvent, useState } from "react";
import fxKara from "@/public/fxkara-logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSendMailForResetMutation } from "@/redux/features/auth/authApi";
const ForgotPassword = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const validateEmail = (email: string): boolean => {
    return emailRegex.test(email);
  };
  const router = useRouter();
  const [SendMailForReset, { isSuccess, error, data }] =
    useSendMailForResetMutation();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateEmail(inputValue)) {
      SendMailForReset(inputValue);

      // const newRoute = "/new-password?token=36378494904030";
      // return router.push(newRoute);
      return toast.success("Pleasecheck your mail! ");
    } else {
      toast.error("Invalid email!");
    }
  };
  return (
    <div className="flex w-full  justify-center px-[1rem] py-[1.5rem] md:p-[32px_40px_32px_40px]  bg-white-300  h-full">
      <div className=" gap-[24px]  text-center  h-full flex   flex-col justify-center w-full">
        <div className=" w-full mt-[1rem] flex justify-center _pt-[120px]">
          <Image
            src={fxKara}
            className="mx-auto  mix-blend-darken"
            // height="200px"
            alt=""
          />
        </div>

        {/* shadow container*/}
        <div className="border mx-auto border-slate-100  mt-[24px]  shadow-md  h-[381px] bg-white-100 rounded-xl w-full md:w-[551px] text-center  p-[32px_40px_32px_40px] flex flex-col gap-[24px] justify-center items-center text-[black]">
          <div className=" rounded-xl md:min-h-[56px] min-h-[31px] min-w-[35px]  md:min-w-[56px] border flex flex-col items-center place-content-between place-items-center object- justify-center content-center relative border-slate-200">
            <Image
              src="/key-img.png"
              width={28}
              height={28}
              alt=""
              className=" inline-flex absolute w-[15px] md:w-[28px] md:h-[28px] h-[15px] top-[0.4rem] md:top-[0.8rem] self-center place-self-center"
            />
          </div>

          <div className="  flex flex-col gap-[12px]">
            <h3 className="font-bold  text-[28px] md:text-[32px] leading-[38.4px] text-[#3D3D3D]">
              Reset Password
            </h3>
            <p className="text-[#7C7C7C] text-[14px] md:text-[16px] tracking-[-2%]">
              Enter your email address to reset your password
            </p>
          </div>

          <div className="w-full  px-0 md:px-4 text-center">
            {/* form input */}
            <form className="w-full my-5 px-0 md:px-10">
              <div className="flex flex-col w-full mx-0 md:mx-auto  justify-center item-center text-left  gap-2">
                <label htmlFor="email" className={`${styles.label} `}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`${styles.input} w-full small mt-0`}
                />
                <button
                  onClick={handleSubmit}
                  className="bg-[#EAECF0] mt-2 text-sm rounded-md py-2 px-6 text-[14px]  text-[#98A2B3] leding-[20px] w-full"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
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
};

export default ForgotPassword;
