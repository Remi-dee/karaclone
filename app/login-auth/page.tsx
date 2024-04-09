"use client";
import { useVerifyTwofaMutation } from "@/redux/features/user/userApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
};

export default function Home() {
  const router = useRouter();
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const [verify, { isSuccess, error }] = useVerifyTwofaMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Verified successfully");
      router.push("/dashboard/home");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
        setInvalidError(true);
      } else {
        console.log("An error occurred:", error);
      }
    }
  }, [isSuccess, error]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const verificationHandler = async () => {
    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 6) {
      setInvalidError(true);
      return;
    }
    await verify({
      topt: verificationNumber,
    });
  };

  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };
  return (
    <main className="flex w-full min-h-screen">
      <div className="hidden w-1/2 lg:flex flex-col justify-center items-center bg-[#292929] py-8 px-4">
        <div className="px-4">
          <img src="/login-img2.svg" alt="" height="200px" />
        </div>
        <div className="my-3 text-center">
          <p className="text-[#FBFBFB] text-2xl">Withdraw with Ease</p>
          <p className="text-[#BDBDBD]  text-base">
            Convert and withdraw your balances back to your local
            <br />
            currency effortlessly.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-between w-[140px] items-center mt-5">
            <MdOutlineNavigateBefore
              className="tex-lg"
              style={{
                color: "#ffffff",
              }}
            />
            <div className="flex justify-between  items-center w-[50px]">
              <div className="h-2 w-2 rounded-full bg-[#FFFFFF]"></div>
              <div className="h-2 w-2 rounded-full bg-[#7C7C7C]"></div>
              <div className="h-2 w-2 rounded-full bg-[#7C7C7C]"></div>
            </div>
            <MdOutlineNavigateNext
              style={{
                color: "#ffffff",
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2  flex flex-col pb-4 justify-between  bg-[#FBFBFB]">
        <div className="flex flex-col items-center">
          <div className="mt-16 ">
            <div>
              <img src="/fxkara-logo.svg" height="200px" alt="" />
            </div>
            <div className="h-[500px] mt-6 w-full flex flex-col justify-center">
              <div className=" flex">
                <div className="p-4 border-2 shadow-sm  border-[#EAECF0] rounded-lg ">
                  <BsEnvelope
                    style={{
                      color: "#3D3D3D",
                    }}
                  />
                </div>
              </div>
              <h2 className="text-4xl mt-5 font-bold">
                Enter your verification Code
              </h2>
              <p className="mt-3 text-lg text-[#7C7C7C]">
                To log in, kindly enter the code we sent to your email
              </p>
              <div className="mt-6 ">
                <div className="flex justify-start items-center my-4 gap-4">
                  {Object.keys(verifyNumber).map((key, index) => (
                    <input
                      type="number"
                      key={key}
                      ref={inputRefs[index]}
                      className={`w-[45px] h-[45px] bg-transparent border-[2px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${
                        invalidError
                          ? "shake border-red-500"
                          : "dark:border-white border-[#0000004a]"
                      }`}
                      placeholder=""
                      maxLength={1}
                      value={verifyNumber[key as keyof VerifyNumber]}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  ))}
                </div>
                {/* <div className="flex justify-between">
									<div className="mt-2">
										<input
											type="text"
											placeholder="0"
											maxLength={1}
											className="w-[70px] h-[70px]  placeholder:text-[#989898]  placeholder:text-center text-center py-3  rounded-xl border-2 border-[#DCDCDC]  text-6xl focus:outline-[#3D3D3D] focus:outline-2 focus:border-[#3D3D3D] focus:border-2"
										/>
									</div>
									<div className="mt-2">
										<input
											type="text"
											placeholder="0"
											maxLength={1}
											className="w-[70px] h-[70px]  placeholder:text-[#989898]  placeholder:text-center text-center py-3  rounded-xl border-2 border-[#DCDCDC]  text-6xl focus:outline-[#3D3D3D] focus:outline-2 focus:border-[#3D3D3D] focus:border-2"
										/>
									</div>
									<div className="mt-2">
										<input
											type="text"
											placeholder="0"
											maxLength={1}
											className="w-[70px] h-[70px]  placeholder:text-[#989898]  placeholder:text-center text-center py-3  rounded-xl border-2 border-[#DCDCDC]  text-6xl focus:outline-[#3D3D3D] focus:outline-2 focus:border-[#3D3D3D] focus:border-2"
										/>
									</div>
									<div className="mt-2">
										<input
											type="text"
											placeholder="0"
											maxLength={1}
											className="w-[70px] h-[70px]  placeholder:text-[#989898]  placeholder:text-center text-center py-3  rounded-xl border-2 border-[#DCDCDC]  text-6xl focus:outline-[#3D3D3D] focus:outline-2 focus:border-[#3D3D3D] focus:border-2"
										/>
									</div>
									<div className="mt-2">
										<input
											type="text"
											placeholder="0"
											maxLength={1}
											className="w-[70px] h-[70px]  placeholder:text-[#989898]  placeholder:text-center text-center py-3  rounded-xl border-2 border-[#DCDCDC]  text-6xl focus:outline-[#3D3D3D] focus:outline-2 focus:border-[#3D3D3D] focus:border-2"
										/>
									</div>
									<div className="mt-2">
										<input
											type="text"
											placeholder="0"
											maxLength={1}
											className="w-[70px] h-[70px]  placeholder:text-[#989898]  placeholder:text-center text-center py-3  rounded-xl border-2 border-[#DCDCDC]  text-6xl focus:outline-[#3D3D3D] focus:outline-2 focus:border-[#3D3D3D] focus:border-2"
										/>
									</div>
								</div> */}
                <div>
                  <button
                    onClick={verificationHandler}
                    className="w-full bg-[#1E1E1E] text-[#FFFFFF] rounded-lg h-12 mt-6 flex justify-center items-center"
                  >
                    Access your Account
                  </button>
                </div>
                <div className="text-[#7C7C7C] text-sm mt-8 text-center">
                  Didn't recieve the email?{" "}
                  <Link href="#">
                    <span className="text-[#7F56D9] font-semibold">
                      Click to resend
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-16 h-12">
          <span>© FXkarasell 2024</span>
          <div className="flex items-center">
            {" "}
            <div className="h-1 w-1 m-2  rounded-full bg-[#7C7C7C]"></div>
            <span>Help center</span>
          </div>
          <div className="flex items-center">
            {" "}
            <div className="h-1 w-1 m-2   rounded-full bg-[#7C7C7C]"></div>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </main>
  );
}
