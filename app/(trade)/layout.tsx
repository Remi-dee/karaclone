import React, { Suspense } from "react";
import Image from "next/image";
import fxkaraLogo from "@/public/fxkara-logo.svg";
import menu from "@/public/menu.png";
import notification from "@/public/notification.svg";
import profileImage from "@/public/profile-circle.png";
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
    <main className=" ">
      <div className=" flex w-full px-[1.5rem]  justify-between place-items-center">
        <div>
          <Image src={fxkaraLogo} alt="FXKara Logo" />
        </div>
        <div className=" flex gap-x-[1rem]">
          <Image
            className=" w-[1.5rem] h-[1.5rem]"
            src={notification}
            alt="FXKara Logo"
          />
          <Image
            className=" w-[1.5rem] h-[1.5rem]"
            src={profileImage}
            alt="FXKara Logo"
          />
          <Image
            className=" w-[1.5rem] h-[1.5rem]"
            src={menu}
            alt="FXKara Logo"
          />
        </div>
      </div>
      {children}
    </main>
  );
}
