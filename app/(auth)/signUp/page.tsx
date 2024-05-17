"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import signupHero1 from "../../public/Images/signupHero-1.png";
import signupHero2 from "../../public/Images/signupHero-2.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setAccountType } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

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

  const handleTypeSelection = (e) => {
    e.preventDefault();
    dispatch(setAccountType(selectedOption));

    return router.push(`/registration`);
  };

  return (
    <div className="flex-1 w-full flex pt-0 h-screen  justify-center items-center  ">
      <div className=" w-max h-max  ">
        <div className="w-full  h-[445px]  flex flex-col pb-4  items-center justify-center  bg-[#FBFBFB]">
          <div className=" bg-white-300">
            <div className="w-[450px]  mx-auto  mt-20 shadow-lg border-[0.1px]  border-[#eaeaea]  ">
              <div className="w-[400px] mx-auto pt-8 flex flex-col gap-y-[40px]">
                <div className="w-[56px] items-center h-[56px] flex justify-center shadow-lg border rounded-[12px]">
                  <TiUser className="text-[28px]" />
                </div>
                <div>
                  <h2 className="font-bold text-[32px] leding-[38.4px] tracking-[-2%] text-[#1E1E1E] py-2">
                    Choose Account Type
                  </h2>
                  <p className="text-sm text-gray-300">
                    Select the type of account you would like to get started
                    with.
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
    </div>
  );
};

export default SignUpContent;
