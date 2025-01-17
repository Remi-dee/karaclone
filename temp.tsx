import React, { Suspense } from "react";
import Image from "next/image";
import man from "@/public/loginMan.png";
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
    <main className=" w-full  relative  lg:w-[] bg-[#FBFBFB] _lg:h-screen h-[960px] flex  jusc items-center ">
      <div className="  h-max w-full relative ">
        <div className=" flex justify-center  max-h-full overflow-y-hidden  lg:flex-row flex-col ">
          <div className="  lg:flex-1 h-full rounded-[20px]   hidden px-[2rem] lg:flex justify-center items-center  content-center ">
            <div className=" overflow-hidden relative  rounded-[20px] flex items-center w-[614px]   h-[912px]">
              <Image
                src={man}
                alt=""
                className=" object-cover   h-full w-full"
                // height={500}
                // width={500}
              />
            </div>
          </div>
          <div className="flex-1 w-full flex pt-0 h-full  justify-center ">
            <div className=" w-full h-full">
              <div className=" w-full">{children}</div>
            </div>
          </div>
          <div className=" absolute  text-[#475467]  text-sm flex  right-[8rem] bottom-[1rem]   gap-x-[1rem] justify-center wf ">
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
    </main>
  );
}
