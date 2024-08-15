"use client";
import React, { useState } from "react";
import Navbar from "@/Components/LandingPage/Navbar";
import { Cta } from "@/Components/LandingPage/component/Cta";
import Footer from "@/Components/LandingPage/Footer";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import aboutBannerImg from "@/public/Images/aboutImage.png";
import jointImg from "@/public/Images/benefit.png";
const About = () => {
  const sections = [
    {
      icon: "Images/image 218.png", // Replace with appropriate icon
      heading: "Cross Border Payments",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: "Images/image 218 (1).png", // Replace with appropriate icon
      heading: "Lorem ipsum dolor sit amet",
      text: "Consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: "Images/image 220 (1).png", // Replace with appropriate icon
      heading: "Fast & Effective",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];

  const features2 = [
    {
      title: "Sign up",
      description:
        "As a team at Karasell, we're committed to tackling the complexities of trading different currencies globally. Our primary focus begins with facilitating transactions involving common fiat currencies.",
      icon: "/Images/profilePerson.png", // Replace with the actual path to your sign-up icon
    },
  ];
  const companyValues = [
    {
      icon: "Images/Stars Minimalistic.png", // Replace with appropriate icon
      heading: "Excellence",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: "Images/Shield Check.png", // Replace with appropriate icon
      heading: "Integrity",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: "Images/Lightbulb Bolt.png", // Replace with appropriate icon
      heading: "Innovation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* hero section */}
      <div className="md:max-w-6xl mt-[24px] items-center mx-0  md:mx-auto  py-0 md:py-10  flex  w-full  justify-center flex-col  ">
        <div className=" w-[85%] h-full ">
          <div className="flex flex-col items-center py-10 gap-[16px] md:gap-5 justify-center  w-full md:max-w-3xl md:mx-auto">
            <p className=" text-[24px] font-Josefin   md:text-4xl text-[#1E1E1E]  md:text-slate-950 font-bold leading-[29.71px] text-center">
              Simplifying Currency Exchange and Enhancing financial flexibility
            </p>
            <p className=" text-[#161C2D] leading-[24px] md:text-slate-500 text-center">
              With a commitment to transparency, security, and exceptional
              service, we strive to create a seamless platform where users can
              trade with confidence and convenience
            </p>
          </div>
          <Image
            src={aboutBannerImg}
            alt=" about image"
            className=" h-full rounded-lg"
          />
        </div>
      </div>
      {/* about secttion  */}
      <div className=" w-full  bg-slate-100 py-20 flex flex-col md:flex-row  ">
        <div className="flex flex-col md:flex-row  max-w-full md:max-w-6xl mx-0 items-center md:mx-auto gap-20">
          {/* left  */}
          <div className="flex flex-col w-[85%] md:w-full gap-7">
            <p className="md:text-slate-900 leading-[24.76px] text-[#1E1E1E] font-bold text-[20px] text-center md:text-start md:text-4xl ">
              Some of the benefits of using Karasell
            </p>
            <Image src={jointImg} alt="benefit Image" className="rounded-lg" />
          </div>

          {/* right */}
          <div className=" w-[80%] md:w-full flex items-center items- max-w-6xl mx-auto">
            <section className="">
              <div className="container mx-auto gap-5 flex flex-col ">
                {sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <img
                      className=""
                      src={section.icon}
                      alt="section image heading w-[40px] md:w-full h-[40px] md:fulll  "
                    />
                    <h3 className=" font-bold mt-2 md:text-purple-700  text-[#7F56D9] text-[16px] leading-[32px] ">
                      {section.heading}
                    </h3>
                    <p className="md:text-slate-500 mt-[8px] leading-[29px] text-[14px] text-[#1E1E1E] ">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* highlight section  */}
      <div className=" bgAboutOne bg-[#0C101B] text-[#FFFFFF] py-20 w-full  ">
        <div className=" w-full bgAbouttwo h-full">
          <div className="flex  text-center w-[80%] md:w-full items-center  justify-center  max-w-6xl mx-auto gap-20">
            <p className=" text-[12.32px] text-center leading-[18.48px] md:text-lg">
              As a team at Karasell, we're committed to tackling the
              complexities of trading different currencies globally. Our primary
              focus begins with facilitating transactions involving common fiat
              currencies.
            </p>
          </div>
        </div>
      </div>

      {/* cta key  */}
      <div className="flex  w-full  items-center md:items-center  h-full  flex-col md:container mx-0 md:mx-auto pb-10">
        {/* new */}
        <div className="flex mt-[24px]  h-[195px] flex-col md:gap-y-10 gap-y-[16px] lg:w-4/5 mx-auto bg-[#0C101B] p-[1.5rem] rounded-[24px] w-[90%] md:rounded-3xl lg:p-10 md:mt-10">
          <h4 className="  font-normal md:font-bold  text-[14px] leading-[18.2px] md:text-4xl  text-[white] w-full md:w-2/3">
            Create your Karasell account to start Trading seamless and for
            simplified transactions.
          </h4>
          <button className="text-slate-100  rounded-full border-0 ring-0 focus:ring-0 focus:outline-none hover:bg-purple-700 bg-[#7F56D9]  w-max p-[2px_9.06px_2px_9.06px] gap-[8.77px] md:px-6 md:py-5 flex items-center md:gap-3 leading-[16.98px] text-[14px] font-[400] transition-all duration-500">
            Create an Account
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>
          <p className="text-slate-200 md:font-medium md:text-base text-[4.81px] leading-[-0.06px] ">
            Got questions??
            <span className="text-purple-700 ml-[4px] md:font-bold font-normal ">
              Contact our support now
            </span>
          </p>
        </div>

        <div className=" lg:mx-auto  mx-0   w-[90%] lg:w-4/5 flex gap-x-5 items-center mt-6">
          {features2.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col w-[90%] md:w-full  flex-1  gap-5 p-5 pb-10 bg-[#0C101B] rounded-3xl"
            >
              <div className="flex flex-col p-[0.5rem_1rem]  w-full  md:p-16 ">
                <p className="text-[#fff]/90 font-normal md:font-medium text-center text-[14px] leading-[21.03px] md:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* company values  */}
      <div className="bg-[#FBFBFB] text-[#1E1E1E] p-[60px_24px_60px_24px] w-full md:py-20">
        <div className="flex  flex-col max-w-6xl w-full mx-auto ">
          <div className="flex flex-col  w-fullitems-start gap-10 pb-10">
            <p className="md:text-3xl text-[20px] font-normal text-center md:text-start md:font-bold ">
              Our Company Values
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex md:flex-row flex-col gap-10">
              {companyValues.map((value, index) => (
                <div key={index} className="flex flex-col items-start gap-5">
                  <img src={value.icon} alt="icon" />
                  <h3 className="text-xl font-bold ">{value.heading}</h3>
                  <p className="text-[#1E1E1E] text-[14px] leading-[29px] ">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>{" "}
      </div>
      <Cta />
      <Footer />
    </div>
  );
};

export default About;
