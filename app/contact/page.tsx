"use client";
import React, { useState } from "react";
import Navbar from "@/Components/LandingPage/Navbar";
import { Cta } from "@/Components/LandingPage/component/Cta";
import Footer from "@/Components/LandingPage/Footer";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const contactMethods = [
    {
      //   icon: <FaEnvelope className="text-gray-600 mr-2" />,
      label: "Email Us",
      value: "fxkarasell@gmail.com",
    },
    {
      //   icon: <FaPhone className="text-gray-600 mr-2" />,
      label: "Call Us",
      value: "+234 789 898 7542",
    },
    {
      //   icon: <FaMapMarkerAlt className="text-gray-600 mr-2" />,
      label: "Address",
      value: "Plot 32, Araromi Road, Lekki Phase 1, 22134, Lagos, Nigeria",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-slate-50 w-full">
        {/* contact us form */}
        <div className="min-w-7xl max-w-7xl  flex-col  flex items-center mx-auto py-20 ">
          <p className="text-center mt-10 text-slate-500">Have Questions.</p>
          <h1 className="text-4xl font-bold  text-slate-900">
            Contact Our Team
          </h1>
          <div className="flex  flex-1 w-full mx-auto  gap-10 mt-10">
            <section className="  ">
              <div className="flex flex-col space-y-4  container">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex  bg-[white] border border-slate-200 rounded-lg justify-between p-4 items-start  py-5 gap-10 "
                  >
                    <div className="flex gap-4 flex-col">
                      <p className="text-slate-700 font-bold">{method.label}</p>
                      <p className=" text-slate-400 text-sm">{method.value}</p>
                    </div>
                    {/* arrow icon */}
                    <div className="w-max h-max bg-[#d700360e] p-4 rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-[#D70035] "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                ))}

                <div className="flex  bg-[white] border border-slate-200 rounded-lg justify-between p-4 items-start  py-5 gap-10 ">
                  <div className="flex gap-4 flex-col">
                    <p className="text-slate-700 font-bold">Socials</p>
                    <div className="flex gap-4 items-center ">
                      <a
                        href="https://facebook.com"
                        className="border rounded-full border-slate-200 text-slate-800 p-2.5 hover:border-slate-500 hover:bg-slate-100 duration-500 transition-all "
                        aria-label="Facebook"
                      >
                        <FaWhatsapp className="size-4" />
                      </a>
                      <a
                        href="https://twitter.com"
                        className="border rounded-full border-slate-200 text-slate-800 p-2.5 hover:border-slate-500 hover:bg-slate-100 duration-500 transition-all "
                        aria-label="Twitter"
                      >
                        <FaTiktok className="size-4" />
                      </a>
                      <a
                        href="https://instagram.com"
                        className="border rounded-full border-slate-200 text-slate-800 p-2.5 hover:border-slate-500 hover:bg-slate-100 duration-500 transition-all "
                        aria-label="Instagram"
                      >
                        <FaInstagram className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="  flex flex-col items-center justify-center flex-1 bg-white rounded-xl border border-[#eee] p-10 bg-[white] ">
              <form className="w-full ">
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-4 text-sm">
                    <div className="flex flex-col w-1/2">
                      <label
                        htmlFor="full-name"
                        className="mb-2 text-slate-500 "
                      >
                        Full Name
                      </label>
                      <input
                        id="full-name"
                        type="text"
                        placeholder="Full Name"
                        className="border p-3 rounded-md  focus:outline-[#616161]  border-[#eee] text-sm placeholder:text-slate-500"
                      />
                    </div>
                    <div className="flex flex-col w-1/2">
                      <label htmlFor="email" className="mb-2 text-slate-500 ">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="border p-3 rounded-md  focus:outline-[#616161] border-[#eee] text-sm placeholder:text-slate-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="subject" className="mb-2 text-slate-500 ">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      className="border p-3 rounded-md  focus:outline-[#616161] border-[#eee] text-sm placeholder:text-slate-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 text-slate-500 ">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Message"
                      className="border p-3 rounded-md  focus:outline-[#616161] border-[#eee] text-sm placeholder:text-slate-500"
                      rows={10}
                      cols={50}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#D70035] text-white p-3 rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Cta />
      <Footer />
    </div>
  );
};

export default ContactUs;
