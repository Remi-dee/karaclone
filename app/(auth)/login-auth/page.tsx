"use client";
import { useVerifyTwofaMutation } from "@/redux/features/user/userApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";
import getTokenFromLocalStorage from "@/hooks/FetchUserToken";
type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
};

export default function Home() {
  const storedUser = getTokenFromLocalStorage("user");

  const userObject = storedUser ? JSON.parse(storedUser) : null;
  const router = useRouter();
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const [verify, { isSuccess, error }] = useVerifyTwofaMutation();

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("Verified successfully");
  //     router.push("/dashboard/home");
  //   }
  //   if (error) {
  //     if ("data" in error) {
  //       const errorData = error as any;
  //       toast.error(errorData.data.message);
  //       setInvalidError(true);
  //     } else {
  //       console.log("An error occurred:", error);
  //     }
  //   }
  // }, [isSuccess, error]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<any>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const verificationNumber = Object.values(verifyNumber).join("");

  const verificationHandler = async () => {
    if (verificationNumber.length !== 6) {
      setInvalidError(true);
      return;
    }
    setInvalidError(false);

    console.log("here is verify number", verificationNumber);
    console.log("here is stored user id", userObject._id);
    try {
      const response = await verify({
        userId: userObject._id,
        code: verificationNumber,
      }).unwrap();

      console.log("here is response", response);

      localStorage.setItem("auth_token", response.accessToken);
      localStorage.setItem("user", JSON.stringify(response.user));
      router.push("/dashboard/home");
    } catch (error) {
      toast.error("Invalid verification code");
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && verifyNumber[index] === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs[index + 1].current?.focus();
    } else if (e.key === "Enter") {
      verificationHandler();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value)) {
      setVerifyNumber((prev: any) => ({ ...prev, [index]: value }));
      if (index < 5) {
        inputRefs[index + 1].current?.focus();
      }
    } else {
      setVerifyNumber((prev: any) => ({ ...prev, [index]: "" }));
    }
  };

  // const handleInputChange = (index: number, value: string) => {
  //   setInvalidError(false);
  //   let newValue = value; // Initialize newValue with the provided value

  //   // If the length of the value is greater than 1, trim it to keep only the first character
  //   if (value.length > 1) {
  //     newValue = value.slice(0, 1);
  //   }

  //   // Update the verifyNumber state with the new value for the specified index
  //   const newVerifyNumber = { ...verifyNumber, [index]: newValue };
  //   setVerifyNumber(newVerifyNumber);

  //   // Move focus to the next input if a single character is entered
  //   if (value.length === 1 && index < 5) {
  //     inputRefs[index + 1].current?.focus();
  //   }
  // };
  // const handleInputChange = (index: number, value: string) => {
  //   setInvalidError(false);
  //   const newVerifyNumber = { ...verifyNumber, [index]: value };
  //   setVerifyNumber(newVerifyNumber);

  //   if (value === "" && index > 0) {
  //     inputRefs[index - 1].current?.focus();
  //   } else if (value.length === 1 && index < 3) {
  //     inputRefs[index + 1].current?.focus();
  //   }
  // };
  return (
    <main className="flex px-[1rem] font-lato w-full min-h-screen">
      <div className="w-full   flex flex-col pb-4 justify-between  bg-[#FBFBFB]">
        <div className="flex flex-col items-center">
          <div className="mt-16 ">
            <div>
              <Image src="/fxkara-logo.svg" height={40} width={150} alt="" />
            </div>
            <div className="  h-full lg:h-[397px]  mt-[24px] md:w-[471px] w-[95%] flex flex-col justify-center">
              <div className=" flex  mt-[24px]">
                <div className="p-4 flex items-center  justify-center border-2 w-[56px] h-[56px] shadow-sm rounded-[12px]  border-[#EAECF0]  ">
                  <BsEnvelope
                    style={{
                      height: "28px",
                      width: "28px",
                      color: "#3D3D3D",
                    }}
                  />
                </div>
              </div>
              <h2 className=" tracking-[-2%] text-[#3D3D3D] mt-5 leading-[38.4px] text-[32px] font-bold">
                Enter your verification Code
              </h2>
              <p className="mt-3 text-[16px] leading-[19.2px]  text-[#7C7C7C]">
                To log in, kindly enter the code we sent to your email
              </p>
              <div className="mt-[24px] ">
                <div className="flex justify-center lg:justify-start w-full  items-center my-4 gap-4">
                  {Object.keys(verifyNumber).map((key, index) => (
                    <input
                      type="number"
                      key={key}
                      ref={inputRefs[index]}
                      className={`md:w-[64px] w-[40px] h-[40px] md:min-h-[64px] md:min-w-[64px] md:h-[64px] bg-transparent border-[2px]  flex items-center text-black dark:text-white rounded-[8px] leading-[60px] tracking-[-2%] justify-center text-[24px] md:text-[48px] placeholder:text-[#BDBDBD] font-Poppins outline-none text-center ${
                        invalidError
                          ? "shake border-red-500"
                          : "dark:border-white border-[#BDBDBD]"
                      }`}
                      placeholder="0"
                      maxLength={1}
                      value={verifyNumber[key as keyof VerifyNumber]}
                      onChange={(e) => handleInputChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  ))}
                </div>

                <div className=" mt-[40px]">
                  <button
                    onClick={verificationHandler}
                    className="w-full bg-[#F2F4F7] text-[#98A2B3] rounded-lg h-12 mt-6 flex justify-center items-center"
                  >
                    Access your Account
                  </button>
                </div>
                <div className="text-[#7C7C7C] text-sm mt-8 text-center">
                  &apos; Didn't recieve the email?{" "}
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
      </div>
    </main>
  );
}
