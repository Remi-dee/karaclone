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
    <div className=" flex h-[1000px] bg-[#FBFBFB]">
      <div className="   _w-full lg:w-[45%] hidden lg:flex w-[450px] bg-white-100 h-[100vh] lg:h-full shadow-lg ">
        <SignUpOptions
        // accountType={params?.accountType}
        // active={active}
        // setActive={setActive}
        />
      </div>
      <div className=" relative   bottom-0  w-full  items-center  justify-center  flex top-0 h-full  flex-col  ">
        <div>{children}</div>

        <div className=" absolute  text-[#475467]  text-sm flex  right-[12rem] bottom-[1rem]   gap-x-[1rem] justify-center wf ">
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
