"use client";
import React, { useState } from "react";
import Navbar from "@/Components/LandingPage/Navbar";
import { Cta } from "@/Components/LandingPage/component/Cta";
import Footer from "@/Components/LandingPage/Footer";
import { FaCheck, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import benefitImg from "@/public/Images/benefitImg.png";
import Image from "next/image";
import circluralImage from "@/public/Images/Frame 1618868617.png";
import whiteGlow from "@/public/Images/whiteGlow.png";
import group83 from "@/public/Images/Group 1171275083.png";
const Trade = () => {
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
      icon: "Images/Wad Of Money.png", // Replace with appropriate icon
      heading: "Trade in your local currency ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: "Images/Money Bag.png", // Replace with appropriate icon
      heading: "Trade for other Fiat currency ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: "Images/Banknote 2.png", // Replace with appropriate icon
      heading: "Buy and sell fiat currency",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];

  const p2pUses = [
    {
      icon: <FaCheck className="text-[white] size-3" />,
      heading: "Direct Trading",
    },
    {
      icon: <FaCheck className="text-[white] size-3" />,
      heading: "Lower Costs",
    },
    {
      icon: <FaCheck className="text-[white] size-3" />,
      heading: "Secure Transactions",
    },
    {
      icon: <FaCheck className="text-[white] size-3" />,
      heading: "Global Reach",
    },
    {
      icon: <FaCheck className="text-[white] size-3" />,
      heading: "Cost Efficiency",
    },
    {
      icon: <FaCheck className="text-[white] size-3" />,
      heading: "Flexibility",
    },
    {
      icon: <FaCheck className="text-[white]" />,
      heading: "Decentralization",
    },
  ];

  const companyValues2 = [
    {
      icon: "Images/Graph New.png", // Replace with appropriate icon
      heading: "Business-to-business transactions ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: "Images/buildings-2.png", // Replace with appropriate icon
      heading: "Trade finance ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: "Images/Presentation Graph.png", // Replace with appropriate icon
      heading: "Online marketplaces",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];

  const p2pUses2 = [
    {
      icon: "Images/Plain 2.png",
      title: "Direct Trading",
      description:
        "Karasell facilitates peer-to-peer trading, allowing users to buy and sell digital assets directly with each other without the need for intermediaries.",
    },
    {
      icon: "Images/Frame (7).png",
      title: "Global Reach",
      description:
        "P2P trading enables users on Karasell to transact with individuals from around the world, expanding their trading opportunities and market access.",
    },
    {
      icon: "Images/Shield Check.png",
      title: "Secure Transactions",
      description:
        " P2P trading on Karasell ensures secure transactions between counterparties, enhancing trust and reducing the risk of fraud.",
    },
    {
      icon: "Images/Tag.png",
      title: "Lower Costs",
      description:
        "By eliminating intermediaries, P2P trading on Fx Karasell can lead to lower transaction fees, benefiting both buyers and sellers on the platform.",
    },
    {
      icon: "Images/Chart Square.png",
      title: "Flexibility",
      description:
        "Users have the flexibility to negotiate terms and prices directly with each other, allowing for customized trading experiences tailored to their preferences.",
    },
    {
      icon: "Images/Frame (8).png",
      title: "Decentralization",
      description:
        "P2P trading on Karasell contributes to the decentralization of the trading ecosystem, empowering individual traders and reducing reliance on centralized exchanges.",
    },
  ];

  const getStarted = [
    {
      id: 1,
      heading: "Sign up",
      image: "Images/Frame 1618868624.png",
      description: "Description for feature one.",
    },
    {
      id: 2,
      heading: "Verify ID",
      image: "Images/Frame 1618868651.png",
      description: "Description for feature two.",
    },
    {
      id: 3,
      heading: "Fund Account",
      image: "Images/Frame 1618868651 (1).png",
      description: "Description for feature three.",
    },
    {
      id: 4,
      heading: "Start Transacting",
      image: "Images/Frame 1618868651 (2).png",
      description: "Description for feature four.",
    },
  ];
  return (
    <div>
      <Navbar />

      {/* hero section */}
      <div className=" px-[1.5rem]  md:px-0 lg:max-w-6xl bg-[#FFFFFF1A] lg:mx-auto py-[1rem] lg:py-10 ">
        <div className="flex flex-col items-center py-10 gap-5 justify-center max-w-3xl md:mx-auto">
          <p className="lg:text-[48px] lg:leading-[58px] lg:tracking-[-1.8px] text-[24px] leading-[36px] text-[#161C2D] font-bold font-Josefin text-center">
            Digital Trading Solutions for the Modern Era
          </p>
          <p className="text-[#161C2D] font-Josefin tracking-[-0.2px] lg:leading-[32px] lg:text-[19px] leading-[21px] text-sm text-center">
            Explore cutting-edge digital trading solutions designed to meet the
            demands of the modern era. From advanced trading platforms to
            innovative investment strategies, our solutions empower you to
            thrive in today's fast-paced digital landscape.
          </p>
        </div>
        <div className=" mt-[24px] md:mt-0">
          <img
            src="Images/Group 1171275083.png"
            alt=" about image"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* about secttion  */}
      <div className=" px-[1.5rem]  mt-[24px] py-[1.5rem] lg:mt-0  bg-[#FBFBFB] lg:py-20  ">
        <div className="flex  flex-col md:flex-row max-w-6xl lg:mx-auto gap-[16px] md:gap-20">
          {/* left  */}
          <div className="flex flex-col flex-1">
            <p className="text-[#7F56D9] text-[16px] leading-[24px] p-0 font-bold ">
              What is TRADE?
            </p>
            <p className="text-[#161616] font-bold text-[20px] leading-[30px] md:text-4xl mt-[8px] ">
              Empowering Trade on the FX <br /> KARASELL Platform
            </p>
          </div>

          {/* right */}
          <div className="flex items-center items- max-w-6xl lg:mx-auto flex-1">
            <section className="">
              <div className="container lg:mx-auto gap-5 flex flex-col ">
                <p className="text-[#2D2D2D]  text-sm leading-[21px] ">
                  Discover the power of seamless trading on the FX Karasell
                  platform. Access a world of opportunities with our
                  user-friendly interface and robust trading tools, designed to
                  empower traders of all levels. Experience efficient and secure
                  transactions while navigating the dynamic world of digital
                  assets effortlessly.
                </p>
                <button className=" bg-[#FF104B] md:bg-[#D70035] mt-[24px] md:mt-0 rounded-full w-max md:px-6 md:py-2.5 p-[12px_42px_12px_42px] hover:bg-[#db0339] text-[white] focus:outline-none transition-all duration-500">
                  Get Started
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* company values  */}
        <div className="bg-slate-50 mt-[32px] md:mt-0 py-0 md:py-10">
          <div className="flex  flex-col max-w-6xl lg:mx-auto ">
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col md:flex-row gap-10">
                {companyValues.map((value, index) => (
                  <div key={index} className="flex flex-col items-start gap-5">
                    <img src={value.icon} alt="icon" className="size-10" />
                    <h3 className="lg:text-xl text-[16px] font-bold leading-[32px] tracking-[-0.5px] text-[#1E1E1E]">
                      {value.heading}
                    </h3>
                    <p className="text-[#1E1E1E] leading-[29px]  text-sm mt-[16px]  tracking-[-0.2px] ">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      {/* uses section andd showcase  */}
      <div className="bg-[white] w-full  overflow-x-hidden h-full py-20">
        <div className="flex  gap-4 px-[1rem]   w-[95%] md:lg:mx-auto  mx-0  flex-col md:grid  grid-cols-[61%_33%] relative ">
          <div className="  grid grid-cols-2 items-center w-full h-[211px] lg:h-full rounded-[9.94px] bg-[#0C101B] overflow-hidden relative  ">
            <div className="  font-Josefin  relative   h-full  flex flex-col ">
              <div className=" w-full h-full  absolute lg:relative  top-[9px] pl-[1.5rem] p-[0.5rem]  lg:p-[1.8rem]   ">
                <p className="uppercase text-slate-300 mb-[6px] text-sm">
                  What is P2p?
                </p>
                <p className=" text-[20px] leading-[22.78px] lg:text-[50px] lg:leading-[55px] text-nowrap z-10 text-white-100 font-bold ">
                  Empowering <br /> Direct Exchange{" "}
                </p>
                <p className=" text-slate-300 w-full mt-[8%] lg:mt-16 text-[10px] leading-[15px] lg:text-lg ">
                  P2P refers to decentralized exchanges between two parties
                  without intermediaries, covering direct communication, file
                  sharing, and financial transactions.
                </p>
              </div>
            </div>
            <div className=" w-full h-full ">
              <Image
                src={benefitImg}
                alt=""
                className=" mix-blend-screen  w-full h-[95%]"
              />
            </div>
          </div>

          <div className=" w-full flex h-full items-center  md:block justify-center">
            <div className=" relative h-full py-12 bg-[#EFEFEF] rounded-3xl px-6  w-full  _md:w-3/12">
              <div className=" lg:mx-auto h-full  text-slate-800">
                <h2 className="text-[34px] font-bold text-[#000000] mb-3 leading-[42px] ">
                  Uses of P2P
                </h2>
                <ul className=" flex flex-col  mt-[8px] lg:mt-0  gap-y-[8px] divide-[#eee]">
                  {p2pUses.map((use, index) => (
                    <li
                      key={index}
                      className="flex  items-center gap-4  py-1.5"
                    >
                      <div className="rounded-full h-[28px] w-[28px] max-w-[28px] max-h-[28px] flex items-center justify-center bg-[#0c101b] ">
                        {use.icon}
                      </div>
                      <p className="text-xs font-semibold uppercase ">
                        {use.heading}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about secttion  */}
      <div className=" px-[1rem] lg:px-0  bg-[#FBFBFB] py-[32px] flex flex-col justify-center items-center ">
        <div className="flex flex-col md:flex-row  px-[1rem] lg:px-0 max-w-full lg:max-w-[90%] mx-0  gap-[16px]   lg:gap-[80px] md:gap-20">
          {/* left  */}
          <div className="flex flex-col w-full lg:w-[560px]    lg:px-0 ">
            <p className="text-[#7F56D9] uppercase  text-[16px] leading-[24px] p-0 font-bold ">
              Benefit of Trade
            </p>
            <p className="text-[#161616] leading-[30px] mt-[8px] lg:mt-[24px] font-normal md:font-bold text-[20px] md:text-4xl lg:text-[60px] lg:leading-[64px] ">
              Transforming Payments with KarasellTrade
            </p>
          </div>

          {/* right */}
          <div className="flex   items-center items max-w-full  w-full  flex-1">
            <section className="">
              <div className="container  gap-5 flex flex-col ">
                <p className="text-[#2D2D2D] leading-[21px] text-[14px] ">
                  Karasell Trade enables rapid, secure, and cost-effective
                  international payments that settle within minutes, offering
                  significant savings compared to traditional payment chank It
                  empowers financial institutions and startups to provide
                  cutting-edge business solutions, facilitating peer-to-peer
                  payments and a range of services.
                </p>
                <button className="bg-[#D70035] text-[white] lg:mt-[28px] mt-0 rounded-full w-max md:px-6 md:py-2.5 p-[12px_42px_12px_42px] hover:bg-[#db0339] focus:outline-none transition-all duration-500">
                  Get Started
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* <div className="mt-[32px] md:mt-0"></div> */}

        {/* company values  */}
        <div className="bg-[#FBFBFB]  mt-[32px] px-[1rem] md:px-0 md:py-10">
          <div className="flex  flex-col max-w-6xl lg:mx-auto ">
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col md:flex-row gap-10">
                {companyValues2.map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-[16px]"
                  >
                    <img src={value.icon} alt="icon" className="size-10" />
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
      </div>

      {/* uses section andd showcase  */}
      <div className="bg-[white] w-full  py-20">
        <div className="flex  flex-col gap-4 max-w-full md:max-w-6xl mx-0  md:lg:mx-auto ">
          <div className=" w-full h-full flex justify-center items-center text-[#FFFFFF]">
            <div className=" lg:max-w-[100%]   max-w-[90%]  p-[1.5rem] flex w-full items-center rounded-3xl h-[318px] bgAbouttwo bg-[#0C101B] overflow-hidden relative lg:h-[358px]  ">
              <div className="top-[35px]  absolute left-[105px]  lg:left-[38%] lg:top-[-4px] w-full">
                <Image
                  src={whiteGlow}
                  className=" h-[178.95px] w-[161.57px] lg:w-[300px] lg:h-[240.92px] "
                  alt=""
                />
              </div>

              <div className="top-[15px]  absolute left-[165px]  lg:left-[70%] lg:top-[-4px] w-full">
                <Image
                  src={circluralImage}
                  className=" h-[178.95px] w-[161.57px] lg:w-[362px] lg:h-[360.92px] "
                  alt=""
                />
              </div>
              <div className="  flex flex-col  gap-[80px] ">
                <div className=" flex flex-col gap-[8px]">
                  <p className="uppercase text-slate-300 text-sm">
                    What is P2p?
                  </p>
                  <p className="lg:text-[50px] lg:leading-[55px] leading-[26px] text-[20px] font-bold ">
                    Empowering <br className=" hidden lg:block" /> Direct{" "}
                    <br className=" lg:hidden block" /> Exchange
                  </p>
                </div>
                <div>
                  <p className="lg:w-2/3  text-[12px] lg:leading-[26px] lg:text-[16px] w-[85%] leading-[26px]   lg:text-lg ">
                    P2P refers to decentralized exchanges between two parties
                    without intermediaries, covering direct communication, file
                    sharing, and financial transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:lg:mx-auto mx-0 flex flex-col px-[1rem] md:px-0  md:grid grid-cols-3 gap-5 items-center mt-6">
            {p2pUses2.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col  flex-1  gap-5 p-5 pb-10 bg-[#0C101B] rounded-3xl"
              >
                <div className=" rounded-full ">
                  <img src={feature.icon} alt="" className="w-10 h-10" />
                </div>
                <div className="flex flex-col  mr-10 ">
                  <h3 className="text-[#fff] font-semibold pb-2 ">
                    {feature.title}
                  </h3>
                  <p className="text-[#fff]/90 font-medium text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* cta key  */}
      <div className="flex  flex-col  bg-[#0C101B] lg:mx-auto py-10">
        <div className="flex flex-col gap-y-10 lg:w-4/5 lg:mx-auto  lg:p-10  my-10">
          <h4 className="font-bold text-[20px] leading-[30px] tracking-[-2%] px-[24px] md:px-0 md:text-4xl  text-[white] w-2/3">
            Transacting on FxKarasell DONE! in 4 simple steps
          </h4>
        </div>

        <div className="  lg:mx-auto lg:w-4/5 flex flex-col md:flex-row gap-x-5 gap-y-[24px] items-center mt-6">
          {getStarted.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col  w-[208px] md:lg-full  items-center justify-center gap-4 lg:mx-auto"
            >
              <div className="bg-[#D70035] rounded-full size-14 text-center  flex items-center justify-center text-[white]">
                {feature.id}
              </div>
              <h3 className="text-[#fff] font-semibold pb-2 ">
                {feature.heading}
              </h3>
              <img
                src={feature.image}
                alt="Getting started"
                className="object-cover"
              />
              <p className="text-[#fff]/60 font-medium text-center text-sm">
                {feature.description} Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Illo, ab veniam dicta fugit magni hic ipsa
                ducimus.
              </p>
            </div>
          ))}
        </div>
      </div>

      <Cta />
      <Footer />
    </div>
  );
};

export default Trade;
