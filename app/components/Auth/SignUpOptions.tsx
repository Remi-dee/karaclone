import React, { FC } from "react";
import Image from "next/image";
import Logo from "../../../public/Images/Logo.png";
import { GiCheckMark } from "react-icons/gi";

type Props = {
  accountType: string;
  active: number;
  setActive: (active: number) => void;
};
const SignUpOptions: FC<Props> = ({ accountType, active }) => {
  const individualOptions = [
    "Choose Account Type",
    "Input Basic Details",
    "Create Password",
    "Verify Email Address",
    "Activate Two Factor Authentication",
  ];
  const businessOptions = [
    "Choose Account Type",
    "Input Basic Details",
    "Input Business Details",
    "Create Password",
    "Verify Email Address",
    "Activate Two Factor Authentication",
  ];
  const optionsToRender =
    accountType === "individual" ? individualOptions : businessOptions;
  return (
    <div>
      <div className="my-5 mx-5">
        <Image src={Logo} alt="" className="w-48" />
      </div>
      <div>
        {optionsToRender.map((option: any, index: number) => (
          <div key={index} className={"w-full flex py-5"}>
            <div
              className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
                active + 1 > index ? "bg-purple-100" : "bg-[384766_1]"
              } relative`}
            >
              <GiCheckMark className="text-[15px]" />
              {index !== optionsToRender.length - 1 && (
                <div
                  className={`absolute h-[30px] w-1 ${
                    active + 1 > index ? "bg-purple-100" : "bg-[384766_1]"
                  } bottom-[-100%]`}
                />
              )}
            </div>
            <h5
              className={`pl-3 ${
                active === index
                  ? "dark:text-white text-black"
                  : "dark:text-white text-black"
              } text-[20px]`}
            >
              {option}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SignUpOptions;
