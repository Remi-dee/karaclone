"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { TiUser } from "react-icons/ti";
import Logo from "@/public/fxkara-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setAccountType } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import MobileSignUpOptions from "@/Components/Auth/MobileSignupOptions";

const SignUpContent = () => {
  const router = useRouter();
  const [content, setContent] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleSelectChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setIsButtonDisabled(selectedValue === "");
  };

  const toggle = () => {
    setContent(!content);
  };
  const dispatch = useDispatch();

  const handleTypeSelection = (e: any) => {
    e.preventDefault();
    dispatch(setAccountType(selectedOption));

    return router.push("/registration");
  };

  return (
    <div className="flex-1 w-full flex flex-col pt-0 h-screen  mt-[7rem] md:mt-0 justify-start md:justify-center items-center  ">
      <div className=" w-max h-max  ">
        <div className=" px-[1rem] w-full flex md:hidden  justify-start">
          <Image src={Logo} alt="Logo" className="h-[5rem]  w-[88px]  " />
        </div>
        <MobileSignUpOptions />
        <div className="w-full  h-[445px]  flex flex-col pb-4  items-center justify-center  bg-[#FBFBFB]">
          <div className=" bg-white-300   ">
            <div className="md:w-[450px] shadow-[40px_4px_40px_0px_#7F56D91A] border border-[#EAECF0]  md:shadow-lg w-[95%] p-[1rem]  mx-auto  mt-0 md:mt-20  ">
              <div className="w-[56px] items-center h-[56px] flex justify-center shadow-lg border rounded-[12px]">
                <TiUser className="text-[28px]" />
              </div>
              <div>
                <h2 className="font-bold text-[32px] leding-[38.4px] tracking-[-2%] text-[#1E1E1E] py-2">
                  Choose Account Type
                </h2>
                <p className="text-sm text-gray-300">
                  Select the type of account you would like to get started with.
                </p>
              </div>
              <div>
                <form className=" flex flex-col gap-[40px]">
                  <div className="flex flex-col gap-y-[8px]  mt-4 mb-6">
                    <label
                      htmlFor=""
                      className="font-semibold  leading-[20px] tracking-[-2%] font-lato"
                    >
                      Account Type
                    </label>
                    <select
                      name=""
                      id=""
                      value={selectedOption}
                      onChange={handleSelectChange}
                      className="p-2 border border-black rounded-md"
                    >
                      <option value="" className="">
                        Select account type
                      </option>
                      <option value="individual" className="">
                        Personal
                      </option>
                      <option value="business" className="">
                        Business
                      </option>
                    </select>
                  </div>
                  <div className=" flex gap-[16px] flex-col">
                    <div>
                      <button
                        type="submit"
                        className={`w-full p-2 rounded-md text-center ${
                          isButtonDisabled
                            ? "bg-[#EAECF0]  text-[#98A2B3] leading-[24px] font-[600]"
                            : "bg-primaryBtn text-white-100 "
                        } `}
                        disabled={isButtonDisabled}
                        onClick={handleTypeSelection}
                      >
                        Continue
                      </button>

                      <div>
                        <p className="py-4 text-center text-sm text-gray-300">
                          Already have an account?{" "}
                          <Link
                            className="text-[#7F56D9] leading-[19px] tracking-[-2%] font-[700] ml-1 "
                            href={"/login"}
                          >
                            Log In
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpContent;
