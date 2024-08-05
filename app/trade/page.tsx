"use client";
import React, { useState } from "react";
import Navbar from "@/Components/LandingPage/Navbar";
import { Cta } from "@/Components/LandingPage/component/Cta";
import Footer from "@/Components/LandingPage/Footer";
import { FaCheck, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

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
      <div className="max-w-6xl mx-auto  py-10 ">
        <div className="flex flex-col items-center py-10 gap-5 justify-center max-w-3xl mx-auto">
          <p className="text-4xl text-slate-950 font-bold text-center">
            Digital Trading Solutions for the Modern Era
          </p>
          <p className="text-slate-500 text-center">
            Explore cutting-edge digital trading solutions designed to meet the
            demands of the modern era. From advanced trading platforms to
            innovative investment strategies, our solutions empower you to
            thrive in today's fast-paced digital landscape.
          </p>
        </div>
        <img
          src="Images/Group 1171275083.png"
          alt=" about image"
          className="rounded-lg"
        />
      </div>

      {/* about secttion  */}
      <div className="  bg-slate-50 py-20  ">
        <div className="flex  max-w-6xl mx-auto gap-20">
          {/* left  */}
          <div className="flex flex-col flex-1">
            <p className="text-purple-700 text-sm p-0 font-bold ">
              What is TRADE?
            </p>
            <p className="text-slate-900 font-bold text-4xl ">
              Empowering Trade on the FX KARASELL Platform
            </p>
          </div>

          {/* right */}
          <div className="flex items-center items- max-w-6xl mx-auto flex-1">
            <section className="">
              <div className="container mx-auto gap-5 flex flex-col ">
                <p className="text-slate-500 ">
                  Discover the power of seamless trading on the FX Karasell
                  platform. Access a world of opportunities with our
                  user-friendly interface and robust trading tools, designed to
                  empower traders of all levels. Experience efficient and secure
                  transactions while navigating the dynamic world of digital
                  assets effortlessly.
                </p>
                <button className="bg-[#D70035] rounded-full w-max px-6 py-2.5 hover:bg-[#db0339] focus:outline-none transition-all duration-500">
                  Get Started
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* company values  */}
        <div className="bg-slate-50 py-10">
          <div className="flex  flex-col max-w-6xl mx-auto ">
            <div className="flex flex-col items-center gap-5">
              <div className="flex gap-10">
                {companyValues.map((value, index) => (
                  <div key={index} className="flex flex-col items-start gap-5">
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
        <div className="flex  gap-4 max-w-6xl mx-auto ">
          <div className="flex-1 flex items-center rounded-3xl bg-[#010101] overflow-hidden relative px-4 py-3 ">
            <div className=" absolute left-[54%] top-0 z-20">
              <img src="Images/image 231.png" alt="" />
            </div>
            <div className="absolute top-[5%]  left-0 z-30 p-10 flex flex-col gap-y-10">
              <div>
                <p className="uppercase text-slate-300 text-sm">What is P2p?</p>
                <p className="text-4xl font-bold ">
                  Empowering <br /> Direct Exchange{" "}
                </p>
              </div>

              <p className="w-2/3 text-slate-300 mt-16 text-lg ">
                P2P refers to decentralized exchanges between two parties
                without intermediaries, covering direct communication, file
                sharing, and financial transactions.
              </p>
            </div>
          </div>
          <div className=" py-12 bg-slate-100 rounded-3xl px-6 w-3/12">
            <div className=" mx-auto  text-slate-800">
              <h2 className="text-3xl font-bold text-slate-950 mb-3">
                Uses of P2P
              </h2>
              <ul className=" flex flex-col  divide-y-2 divide-[#eee]">
                {p2pUses.map((use, index) => (
                  <li key={index} className="flex  items-center gap-4  py-1.5">
                    <div className="rounded-full bg-[#0c101b] p-1.5">
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

      {/* about secttion  */}
      <div className="  bg-slate-50 py-20  ">
        <div className="flex  max-w-6xl mx-auto gap-20">
          {/* left  */}
          <div className="flex flex-col flex-1">
            <p className="text-purple-700 text-sm p-0 font-bold ">
              Benefit of Trade
            </p>
            <p className="text-slate-900 font-bold text-4xl ">
              Transforming Payments with KarasellTrade
            </p>
          </div>

          {/* right */}
          <div className="flex items-center items- max-w-6xl mx-auto flex-1">
            <section className="">
              <div className="container mx-auto gap-5 flex flex-col ">
                <p className="text-slate-500 ">
                  Karasell Trade enables rapid, secure, and cost-effective
                  international payments that settle within minutes, offering
                  significant savings compared to traditional payment channels.
                  It empowers financial institutions and startups to provide
                  cutting-edge business solutions, facilitating peer-to-peer
                  payments and a range of services.
                </p>
                <button className="bg-[#D70035] rounded-full w-max px-6 py-2.5 hover:bg-[#db0339] focus:outline-none transition-all duration-500">
                  Get Started
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* company values  */}
        <div className="bg-slate-50 py-10">
          <div className="flex  flex-col max-w-6xl mx-auto ">
            <div className="flex flex-col items-center gap-5">
              <div className="flex gap-10">
                {companyValues2.map((value, index) => (
                  <div key={index} className="flex flex-col items-start gap-5">
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
        <div className="flex  flex-col gap-4 max-w-6xl mx-auto ">
          <div className="flex-1 flex items-center rounded-3xl bg-[#0C101B] overflow-hidden relative  ">
            <div className=" ml-auto top-0 z-20">
              <img src="Images/Frame 1618868617.png" alt="" />
            </div>
            <div className="absolute top-[5%]  left-0 z-30 p-10 flex flex-col gap-y-10">
              <div>
                <p className="uppercase text-slate-300 text-sm">What is P2p?</p>
                <p className="text-4xl font-bold ">
                  Empowering <br /> Direct Exchange{" "}
                </p>
              </div>

              <p className="w-2/3 text-slate-300 mt-16 text-lg ">
                P2P refers to decentralized exchanges between two parties
                without intermediaries, covering direct communication, file
                sharing, and financial transactions.
              </p>
            </div>
          </div>

          <div className=" mx-auto  grid grid-cols-3 gap-5 items-center mt-6">
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
      <div className="flex  flex-col  bg-[#0C101B] mx-auto py-10">
        <div className="flex flex-col gap-y-10 lg:w-4/5 mx-auto  lg:p-10  my-10">
          <h4 className="font-bold text-4xl  text-[white] w-2/3">
            Transacting on FxKarasell DONE! in 4 simple steps
          </h4>
        </div>

        <div className=" mx-auto lg:w-4/5 flex gap-x-5 items-center mt-6">
          {getStarted.map((feature) => (
            <div className="flex flex-col   items-center justify-center gap-4 mx-auto">
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
