import { useVerifyTwofaMutation } from "@/redux/features/user/userApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdMail } from "react-icons/md";

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
};

const TwoFactorCode = () => {
  const router = useRouter();
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const [verify, { isSuccess, error }] = useVerifyTwofaMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Verified successfully");
      router.push("/signUp/activate-2fa/success");
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
    <div className="w-[500px] mx-auto  shadow-lg  rounded-md border border-white-100">
      <div className="w-[400px] pt-6 mx-auto">
        <div className="w-[25px] flex justify-center items-center shadow-md border border-gray-200  rounded-md h-[25px]">
          <MdMail className="text-sm" />
        </div>
        <h3 className="py-2 font-semibold text-2xl">
          Complete Two Factor Authentication Process
        </h3>
        <p className="text-gray-300 text-sm">
          Enter the verification code sent to you to complete your two factor
          authentication process
        </p>
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
        <button
          onClick={verificationHandler}
          className="w-full p-2 mb-6 rounded-md text-center  bg-primaryBtn text-white-100 "
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default TwoFactorCode;
