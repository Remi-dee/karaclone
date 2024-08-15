import React, { Suspense } from "react";

import SignUpOptions from "@/Components/features/Auth/SignUpOptions";
import MobileSignUpOptions from "@/Components/Auth/MobileSignupOptions";
import Logo from "@/public/fxkara-logo.svg";
import Image from "next/image";
// export const metadata: Metadata = {
//   title: "Fx",
//   description:
//     "",
//   icons: {
//     icon: "",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex md:flex-row gap-[4px] md:gap-7 flex-col h-max md:h-[1000px] bg-[#FBFBFB]">
      <div className=" h-full block md:hidden w-full">
        <div className="mt-[1.5rem]  h-full  w-full px-[1rem]">
          <Image src={Logo} alt="Logo" className=" mt-[1.5rem]  h-[23px] md:h-full  w-[88px] md:w-full" />
        </div>

        <MobileSignUpOptions />
      </div>
      <div className="   _w-full md:w-[40%] hidden md:block    w-auto bg-white-100 h-[100vh] lg:h-full shadow-lg ">
        <SignUpOptions />
      </div>

      <div className=" relative p-[1rem] lg:p-0  bottom-0  w-full  items-center  justify-center  flex top-0 h-full  flex-col  ">
        <div className=" w-full h-full lg:w-auto lg:h-auto">{children}</div>

        <div className=" absolute   text-[#475467]  w-full text-sm hidden lg:flex right-0   bottom-[1rem]   gap-[50px]   xl:gap-x-[100px] justify-center wf ">
          <p>© FXkarasell 2024</p>
          <p className="  flex  items-center gap-x-[0.3rem]">
            <span className=" text-[0.4rem] text-[#4d525a]">⚫</span> Help
            center
          </p>
          <p className="  flex  items-center gap-x-[0.3rem]">
            <span className=" text-[0.4rem] text-[#4d525a]">⚫</span> Terms of
            Service
          </p>
        </div>
      </div>
    </div>
  );
}
