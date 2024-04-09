"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import signupHero_1 from "../../public/Images/signupHero-1.png";
import signupHero_2 from "../../public/Images/signupHero-2.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpContent = () => {
  const router = useRouter();
  const [content, setContent] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [scroll, setScroll] = useState(false);
  const handleSelectChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setIsButtonDisabled(selectedValue === "");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/signUp/details/${selectedOption}`);
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

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }
  return (
    <main className="flex w-full min-h-screen box-border overflow-y-hidden">
      <div className="hidden w-1/2 lg:flex flex-col justify-center items-center bg-[#292929] py-8 px-4">
        <div className="w-[45%] min-h-screen bg-signupBg">
          {content ? (
            <div className="w-[90%] mx-auto mt-12">
              <div className="w-[300px] mx-auto h-[250px] mb-8">
                <Image src={signupHero_1} alt="" className="w-full h-full" />
              </div>
              <h3 className="text-lg text-white-300 text-center font-semibold">
                Manage Multiple Currencies
              </h3>
              <p className="text-sm text-gray-200 font-medium text-center">
                Store, send, and receive funds in multiple currencies
                hassle-free. From USD to EUR, manage it all in one place.
              </p>
            </div>
          ) : (
            <div className="w-[90%] mx-auto mt-12">
              <div className="w-[300px] mx-auto h-[250px] mb-8">
                <Image src={signupHero_2} alt="" className="w-full h-full" />
              </div>
              <h3 className="text-lg text-white-300 text-center font-semibold">
                Withdraw with Ease
              </h3>
              <p className="text-sm text-gray-200 font-medium text-center">
                Convert and withdraw your balances back to your local currency
                effortlessly.
              </p>
            </div>
          )}

          <div className="w-[200px] flex justify-between items-center mx-auto  p-4 my-6">
            <div className="w-[20px]">
              <FaAngleLeft className="text-white-300 cursor-pointer" />
            </div>
            <div className="w-[100px] flex justify-center items-start gap-2 p-2">
              <button
                onClick={toggle}
                className="w-[10px] h-[10px] bg-gray-200 opacity-50 focus:bg-white-100 cursor-pointer rounded-full border-2"
              ></button>
              <button
                onClick={toggle}
                className="w-[10px] h-[10px] bg-gray-200 opacity-50 focus:bg-white-100 cursor-pointer rounded-full border-2"
              ></button>
            </div>
            <div className="w-[20px]">
              <FaAngleRight className="text-white-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2  flex flex-col pb-4  items-center justify-center  bg-[#FBFBFB]">
        <div className="w-screen/2 bg-white-300">
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
    </main>
  );
};

export default SignUpContent;
