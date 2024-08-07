"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import man from "@/public/loginMan.png";
import stars from "@/public/stars.png";
import manphone from "@/public/Images/manphone.png";
import manbluebg from "@/public/Images/manbluebg.png";
import manscan from "@/public/Images/manscan.png";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef();
  const slides = useMemo(
    () => [
      {
        image: manphone,
        text: "Effortlessly add funds to your account with our simple and user-friendly top-up feature for convenient wallet top up.",
        title: "Easy top up ",
      },
      {
        image: man,
        text: "Instantly buy and sell coins with our peer-to-peer transaction feature. Seamlessly connect with buyers and sellers globally.",
        title: "Easy Peer-to-Peer Transactions",
      },
      {
        image: manbluebg,
        title: "Manage Multiple Currencies",
        text: "Store, send, and receive funds in multiple currencies hassle-free. From USD to EUR, manage it all in one place.",
      },
      {
        image: manscan,
        text: "Instantly buy and sell coins with our peer-to-peer transaction feature. Seamlessly connect with buyers and sellers globally.",
        title: "Easy Peer-to-Peer Transactions",
      },
    ],
    []
  );
  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  const goToPreviousSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className=" w-full  relative  lg:w-[] bg-[#FBFBFB] _lg:h-screen h-full lg:h-[960px] flex  jusc items-center ">
      <div className="  h-max w-full relative ">
        <div className=" flex justify-center  max-h-full overflow-y-hidden  lg:flex-row flex-col ">
          <div className="lg:flex-1 relative h-full rounded-[20px] hidden px-[2rem] lg:flex justify-center items-center content-center">
            <div className="overflow-hidden relative rounded-[20px] flex items-center w-[614px] h-[912px]">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full min-h-full h-full">
                    <Image
                      src={slide.image}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                ))}
              </div>
              <div className="text_for_login  bottom-[1rem] mb-[3rem] absolute text-[#FFFFFF]">
                <div className="px-[1rem] w-full">
                  <div className="flex w-full justify-between items-center">
                    <div className="inline-flex">
                      <p className="font-[600] leading-[30px] text-3xl">
                        {slides[currentIndex].title}
                      </p>
                    </div>
                    <div className="inline-flex">
                      <Image
                        className="w-[9rem] h-[1.5rem]"
                        src={stars}
                        alt="stars"
                      />
                    </div>
                  </div>
                  <div className="text-base space-[4px] mt-[1rem]">
                    {slides[currentIndex].text}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-1 w-full block lg:flex pt-0 h-full  lg:justify-center ">
            <div className=" w-full h-full">
              <div className=" w-full">{children}</div>
            </div>
          </div>

          {/* footer notes <>ToDo: can migrate when refactoring</> */}
          <div className=" absolute  text-[#475467]  text-sm   right-[8rem] bottom-[1rem]   gap-x-[1rem] justify-center  hidden lg:flex ">
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
