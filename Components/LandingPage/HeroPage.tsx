import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaQuestion,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import Review from "./component/Review";
import "./HeroPage.css";
import Image from "next/image";
import Logo from "@/public/Images/Logo.png";
import { motion } from "framer-motion";

import {
  stats,
  features,
  features2,
  faq,
  testimonials,
} from "./data/LandingPageData";
import { Cta } from "./component/Cta";

function HeroPage() {
  return (
    <div className="flex flex-col pt-16 md:pt-24">
      <div className="relative h-[90vh]">
        <div className="max-w-6xl mx-auto flex flex-col  z-10 text-center px-3">
          <h1 className="font-bold text-2xl md:text-4xl mx-auto pt-20 pb-8 text-center">
            Transforming Currency For Effortless Trading
          </h1>
          <p className="text-[#161C2D]/70 mx-auto text-sm md:text-lg ">
            Seamlessly manage your finances in multiple currencies, and enjoy
            hassle-free peer to peer transactions
          </p>

          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-5 justify-center items-center  mt-8">
            <button className="bg-[#D70035] hover:bg-[#D70035]/90 text-[white]  text-sm  rounded-full cursor-pointer  px-8 py-3 md:py-4  font-semibold flex items-center gap-5 w-max mx-auto md:mx-1">
              Get Started Free
              <span>
                <FaArrowRight className="w-4 h-4" />
              </span>
            </button>
            <button className=" text-[#242331] bg-[#FFEFF0] text-sm  rounded-full cursor-pointer py-3 md:py-4 px-8 font-semibold flex items-center gap-5 w-max mx-auto md:mx-1">
              Watch Video
              <FaCirclePlay className="w-7 h-7 text-[#D70035] " />
            </button>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full absolute md:-top-44 -z-10"
        >
          <img src="Images\Frame.png" alt="" className="w-full h-full" />
        </motion.div>
      </div>

      <div className="bg-[#0C101B] flex items-center py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-10 gap-10 px-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className=" mx-auto flex flex-col py-4  gap-x-10 justify-center "
            >
              <div className=" text-[#D70035] rounded-full mb-4">
                <img src={feature.icon} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#F2F2F2]/90 font-semibold pb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* for individual */}
      <div className="max-w-6xl mx-auto flex flex-col items-center py-10 px-5">
        <motion.div className="flex flex-col sm:flex-row items-center gap-5">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full flex flex-col gap-3 prose"
          >
            <p className="text-[white]  text-xs md:text-sm py-2 w-max bg-purple-700 px-3 rounded-full">
              Personal Account
            </p>
            <h1 className="text-xl md:text-4xl font-bold">For Individual</h1>
            <p className="text-slate-500 text-start  text-sm md:text-base sm:text-left md:font-medium">
              Send money to your loved ones easily in the currency of your
              choice.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>

            <div className="w-full md:hidden flex flex-col items-center gap-5">
              <img
                src="/Images/featureImage1.png"
                alt=""
                className="border border-slate-200 rounded-3xl "
              />
              phpp
            </div>
            <button className="text-[white] text-sm py-3 w-full text-center md:w-max bg-purple-700 px-8 rounded-full">
              Start Trading
            </button>
          </motion.div>
          <div className="w-full hidden md:flex flex-col items-center gap-5">
            <img
              src="/Images/featureImage1.png"
              alt=""
              className="border border-slate-200 rounded-3xl "
            />
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row-reverse items-center gap-5 justify-between mt-6 md:mt-0">
          <div className="w-full flex flex-col gap-3 prose">
            <p className="text-[white]  text-xs md:text-sm py-2 w-max bg-purple-700 px-3 rounded-full">
              Personal Account
            </p>
            <h1 className="text-xl md:text-4xl font-bold">For Business</h1>
            <p className="text-slate-500 text-start  text-sm md:text-base sm:text-left md:font-medium">
              Send money to your loved ones easily in the currency of your
              choice.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <div className="w-full md:hidden flex flex-col items-center gap-5">
              <img
                src="/Images/featureImage1.png"
                alt=""
                className="border border-slate-200 rounded-3xl "
              />
            </div>
            <button className="text-[white] text-sm py-3 w-full md:w-max mx-auto md:mx-0 text-center  bg-purple-700 px-8 rounded-full">
              Start Trading
            </button>
          </div>
          <div className="w-full  hidden md:flex flex-col items-center gap-x-5 ">
            <img
              src="/Images/featureImage1.png"
              alt=""
              className="border border-slate-200 rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="bg-slate-100">
        <div className="md:w-4/5   mx-auto flex flex-col md:flex-row items-center gap-4 py-5 justify-center lg:gap-x-10  ">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex  items-center gap-6 py-5 md:py-10 px-10"
            >
              <p className="text-[#161C2D]/90 text-4xl font-black">
                {stat.label}
              </p>
              <p className="text-[#161C2D]/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* cta key  */}
      <div className="flex  flex-col max-w-6xl mx-auto p-4">
        <div className="flex flex-col gap-y-10  w-full bg-[#0C101B] rounded-3xl p-10  mt-10">
          <h4 className="font-bold text-xl md:text-4xl  text-[white] md:w-1/3">
            Simplify Global Transactions
          </h4>
          <p className="text-slate-400 font-medium text-sm md:text-base">
            Get started with Karasell and experience easy cross-border payments
          </p>
        </div>

        <div className=" w-full  flex flex-col md:flex-row  gap-5 items-center mt-6">
          {features2.map((feature, i) => (
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

      {/*display photo */}

      <div className="mx-auto flex  justify-center">
        <img
          src="/Images/phoneFeatures.png"
          alt="Features photo"
          className="h-[70%]"
        />
      </div>

      {/* review section */}
      <div className="flex flex-col w-full bg-[#0C101B] py-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center ">
          <h1 className="font-bold text-[white]  text-3xl">Traders review</h1>
          <p className="text-[white] text-xl">
            Hear what trader are saying about our platform
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex items-center animate-scroll overflow-x-hidden  gap-5 w-max">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="review-max-w-6xl">
                <Review
                  name={testimonial.name}
                  occupation={testimonial.occupation}
                  avatarUrl={testimonial.avatar}
                  message={testimonial.message}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* faq */}

      <div className="flex flex-col w-full bg-[#0C101B] px-5 py-10 pt-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center ">
          <h1 className="font-bold text-[white]  text-center text-3xl">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 text-center md:text-start mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center justify-between mt-10">
          {faq.map((faq, i) => (
            <div
              key={i}
              className="max-w-6xl mx-auto flex flex-col items-center gap-5"
            >
              <div className="flex  gap-5 md:p-5 bg-[#0C101B] rounded-3xl">
                <div className=" rounded-full p-2 bg-[#D70035] w-max h-max">
                  <FaQuestion className="w-3 h-3 text-[white]" />
                </div>
                <div>
                  <h3 className="text-[#fff] font-semibold pb-2 ">
                    {faq.question}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="justify-center flex text-[white]/60 mt-10 text-sm ">
          <p>
            Haven’t got your answer?{" "}
            <a href="#" className="text-[#D70035] hover:font-bold duration-500">
              Contact our support now
            </a>
          </p>
        </div>
      </div>

      <Cta />
    </div>
  );
}

export default HeroPage;
