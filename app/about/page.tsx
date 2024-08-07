"use client";
import React, { useState } from "react";
import Navbar from "@/Components/LandingPage/Navbar";
import { Cta } from "@/Components/LandingPage/component/Cta";
import Footer from "@/Components/LandingPage/Footer";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

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
      <div className="max-w-6xl mx-auto  py-10 ">
        <div className="flex flex-col items-center py-10 gap-5 justify-center max-w-3xl mx-auto">
          <p className="text-4xl text-slate-950 font-bold text-center">
            Simplifying Currency Exchange and Enhancing financial flexibility
          </p>
          <p className="text-slate-500 text-center">
            With a commitment to transparency, security, and exceptional
            service, we strive to create a seamless platform where users can
            trade with confidence and convenience
          </p>
        </div>
        <img
          src="Images/aboutImage.png"
          alt=" about image"
          className="rounded-lg"
        />
      </div>

      {/* about secttion  */}
      <div className="  bg-slate-100 py-20  ">
        <div className="flex  max-w-6xl mx-auto gap-20">
          {/* left  */}
          <div className="flex flex-col gap-7">
            <p className="text-slate-900 font-bold text-4xl ">
              Some of the benefits of using Karasell
            </p>
            <img
              src="Images/image 230.png"
              alt="benefit Image"
              className="rounded-lg"
            />
          </div>

          {/* right */}
          <div className="flex items-center items- max-w-6xl mx-auto">
            <section className="">
              <div className="container mx-auto gap-5 flex flex-col ">
                {sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <img
                      className=""
                      src={section.icon}
                      alt="section heading image "
                    />
                    <h3 className=" font-bold mt-2 text-purple-700">
                      {section.heading}
                    </h3>
                    <p className="text-slate-500 ">{section.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* highlight section  */}
      <div className="  bg-[#0C101B] py-20 w-full  ">
        <div className="flex text-center items-center  justify-center  max-w-6xl mx-auto gap-20">
          <p className="text-lg">
            As a team at Karasell, we're committed to tackling the complexities
            of trading different currencies globally. Our primary focus begins
            with facilitating transactions involving common fiat currencies.
          </p>
        </div>
      </div>

      {/* cta key  */}
      <div className="flex  flex-col container mx-auto pb-10">
        <div className="flex flex-col gap-y-10 lg:w-4/5 mx-auto bg-[#0C101B] rounded-3xl lg:p-10  mt-10">
          <h4 className="font-bold text-4xl  text-[white] w-2/3">
            Create your Karasell account to start Trading seamless and for
            simplified transactions.
          </h4>
          <button className="text-slate-100  rounded-full border-0 ring-0 focus:ring-0 focus:outline-none hover:bg-purple-700 bg-purple-600  w-max px-6 py-5 flex items-center gap-3 font-bold transition-all duration-500">
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
          <p className="text-slate-200 font-medium text-base">
            Got questions??
            <span className="text-purple-700 font-bold">
              Contact our support now
            </span>
          </p>
        </div>

        <div className=" mx-auto lg:w-4/5 flex gap-x-5 items-center mt-6">
          {features2.map((feature) => (
            <div className="flex flex-col  flex-1  gap-5 p-5 pb-10 bg-[#0C101B] rounded-3xl">
              <div className="flex flex-col  p-16 ">
                <p className="text-[#fff]/90 font-medium text-center text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* company values  */}
      <div className="bg-slate-50 py-20">
        <div className="flex  flex-col max-w-6xl mx-auto ">
          <div className="flex flex-col items-start gap-10 pb-10">
            <p className="text-3xl font-bold text-slate-950">
              Our Company Values
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-10">
              {companyValues.map((value, index) => (
                <div key={index} className="flex flex-col items-start gap-5">
                  <img src={value.icon} alt="icon" />
                  <h3 className="text-xl font-bold text-slate-950">
                    {value.heading}
                  </h3>
                  <p className="text-slate-500 ">{value.text}</p>
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
