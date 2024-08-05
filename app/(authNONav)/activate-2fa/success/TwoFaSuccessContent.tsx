import React from "react";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import Logo from "@/public/Images/Logo.png";
import TwoFactorSuccess from "@/Components/UI/SignUp/TwoFactorSuccess";

const TwoFaSuccessContent = () => {
  return (
    <div className="p-0 m-0 box-border">
      <div className="w-[100%]">
        <TwoFactorSuccess />
      </div>
    </div>
  );
};

export default TwoFaSuccessContent;
