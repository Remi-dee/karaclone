import React, { Suspense } from "react";

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
    <div className=" flex h-max md:h-[1000px] bg-[#FBFBFB]">
      <div className="   _w-full lg:w-[45%] hidden lg:flex w-[450px] bg-white-100 h-[100vh] lg:h-full shadow-lg ">
        <SignUpOptions />
      </div>
      <div className=" relative p-[1rem] lg:p-0  bottom-0  w-full  items-center  justify-center  flex top-0 h-full  flex-col  ">
        <div className=" w-full h-full lg:w-auto lg:h-auto">{children}</div>

        <div className=" absolute   text-[#475467]  text-sm hidden lg:flex  right-[12rem] bottom-[1rem]   gap-x-[100px] justify-center wf ">
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
