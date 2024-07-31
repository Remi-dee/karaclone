"use Client";
import Image from "next/image";
import React, { useState } from "react";

import Logo from "@/public/Images/Logo.png";
import Link from "next/link";
const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navBarLinks = [
    {
      name: "About ",
      link: "/about",
    },
    {
      name: "Trade",
      link: "/trade",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Documentation",
      link: "#",
    },
  ];

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white flex pt-7a ">
      <div className="container flex  p-4  flex-col md:flex-row justify-between items-center text-base mx-auto border-b  border-[#eee] sm:border-none">
        <div className="flex items-center  justify-between w-full sm:w-auto">
          <Link href="/">
            <Image src={Logo} alt="Funtravel logo" className="mr-2" />
          </Link>
          {/* Hamburger Icon */}
          <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 transition-transform duration-300 ease-in-out text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`hidden md:flex space-x-4 mt-4 md:mt-0 ${
            isMobileMenuOpen ? "flex" : "hidden"
          }`}
        >
          {navBarLinks.map((link) => (
            <a
              href={link.link}
              className="text-slate-900 hover:text-gray-800 transition-colors font-semibold "
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex space-x-2 mt-4 md:mt-0">
          <button className="focus:outline-none focus:ring-0 bg-[#D70035] px-4 py-2 rounded-full hover:bg-[#D70035]/90 text-sm text-[white] font-semibold transition-colors">
            Get Started Free
          </button>
          <button className="text-[#D70035] px-8 py-2 border font-semibold border-[#D70035] rounded-full transition-colors text-sm">
            Login
          </button>
        </div>
        {/* Conditional rendering for mobile menu */}

        <div
          className={`flex flex-col md:hidden space-y-4 mt-4  transition-all duration-200 ease-in-out w-full ${
            isMobileMenuOpen ? "max-h-screen py-10" : "h-0 overflow-hidden"
          }`}
        >
          {navBarLinks.map((link) => (
            <a
              href={link.link}
              className="text-slate-800 hover:text-gray-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
