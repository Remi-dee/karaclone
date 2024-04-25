import React, { Suspense } from "react";
import Image from "next/image";
import man from "@/public/loginMan.png";
import stars from "@/public/Stars.png";
import SignUpOptions from "@/Components/Auth/SignUpOptions";
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
    <div className=" flex h-full bg-[#FBFBFB]">
      <div className="   _w-full lg:w-[45%] hidden lg:flex w-[450px] bg-white-100 h-[100vh] lg:h-full shadow-lg ">
        <SignUpOptions
        // accountType={params?.accountType}
        // active={active}
        // setActive={setActive}
        />
      </div>
      <div className="  w-full  items-center  justify-center  flex top-0 h-screen  flex-col  ">
        {children}
      </div>
    </div>
  );
}
