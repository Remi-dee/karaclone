"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import signupHero1 from "../../public/Images/signupHero-1.png";
import signupHero2 from "../../public/Images/signupHero-2.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/details/${selectedOption}`);
  };

  const toggle = () => {
    setContent(!content);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setContent((prevState) => !prevState);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 w-full flex pt-0 h-full  justify-center">
      <div className="w-full   flex flex-col pb-4  items-center justify-center  bg-[#FBFBFB]">
        <div className=" bg-white-300">
          <div className="w-[450px]  mx-auto mt-20 shadow-lg">
            <div className="w-[400px] mx-auto pt-8">
              <div className="w-[25px] flex justify-center shadow-lg border rounded-md h-[25px]">
                <TiUser className="text-lg" />
              </div>
              <h2 className="font-bold text-2xl py-2">Choose Account Type</h2>
              <p className="text-sm text-gray-300">
                Select the type of account you would like to get started with.
              </p>
              <form>
                <div className="flex flex-col gap-2 mt-4 mb-6">
                  <label htmlFor="" className="font-semibold">
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
                      Individual
                    </option>
                    <option value="business" className="">
                      Business
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className={`w-full p-2 rounded-md text-center ${
                    isButtonDisabled
                      ? "bg-gray-300 text-black"
                      : "bg-primaryBtn text-white-100 "
                  } `}
                  disabled={isButtonDisabled}
                  onClick={handleSubmit}
                >
                  Continue
                </button>
              </form>

              <p className="py-4 text-center text-sm text-gray-300">
                Already have an account?{" "}
                <Link className="text-primaryBtn" href={"/login"}>
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      );
};

export default SignUpContent;
