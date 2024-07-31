"use client";

import {
  useGetTransactionFeesQuery,
  useGetConversionFeesQuery,
  useGetRandomPasswordQuery,
  useGetSingleCurrencyPairQuery,
  useGetAllCurrencyPairsQuery,
  useGetAllUsersWalletQuery,
} from "@/redux/features/user/userApi";
import React from "react";
import { useSelector } from "react-redux";
import LogoWhite from "@/public/Images/Original-Logo-white.svg";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const globalState = useSelector((state: any) => state.auth);

  // const data = useGetTransactionFeesQuery();
  // const data = useGetConversionFeesQuery();
  // const data = useGetRandomPasswordQuery();
  // const data = useGetAllCurrencyPairsQuery();
  // const data = useGetSingleCurrencyPairQuery("29293839");
  // const data = useGetAllUsersWalletQuery();
  // console.log(data);

  return (
    <footer className="flex flex-col w-full bg-[#0C101B] py-10 pt-20 text-[white] p-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between ">
        <div className="flex flex-1  flex-col group ">
          <div className="flex items-center mb-10">
            <Link href="/">
              <Image
                src={LogoWhite}
                alt="Funtravel logo"
                className="mr-2 text-[white] "
              />
            </Link>
          </div>
          <p className="hidden md:block font-medium text-base text-slate-200 mt-4">
            Find us on social media{" "}
          </p>
          <div className="hidden md:block  group w-full mt-4">
            <div className="flex gap-4 items-center ">
              <a
                href="https://facebook.com"
                className="border rounded-full border-slate-200 text-slate-200 p-2.5 hover:border-slate-500 hover:text-slate-300 duration-500 transition-all "
                aria-label="Facebook"
              >
                <FaWhatsapp className="size-4" />
              </a>
              <a
                href="https://twitter.com"
                className="border rounded-full border-slate-200 text-slate-200 p-2.5 hover:border-slate-500 hover:text-slate-300 duration-500 transition-all "
                aria-label="Twitter"
              >
                <FaTiktok className="size-4" />
              </a>
              <a
                href="https://instagram.com"
                className="border rounded-full border-slate-200 text-slate-200 p-2.5 hover:border-slate-500 hover:text-slate-300 duration-500 transition-all "
                aria-label="Instagram"
              >
                <FaInstagram className="size-4" />
              </a>
            </div>
          </div>
        </div>
        <div className=" md:mx-auto  flex md:justify-between gap-20">
          <div className="flex flex-col  gap-7 text-slate-300 text-sm">
            <p className="font-bold text-[white]">QUICK LINK</p>
            <a
              href="/about "
              className="hover:text-slate-400 duration-500 transition-all "
            >
              About
            </a>
            <a
              href="/trade "
              className="hover:text-slate-400 duration-500 transition-all "
            >
              Trade
            </a>
            <a
              href="/contact "
              className="hover:text-slate-400 duration-500 transition-all "
            >
              Contact
            </a>
            <a
              href="/documentation "
              className="hover:text-slate-400 duration-500 transition-all "
            >
              Documentation
            </a>
          </div>
          <div className="flex flex-col  gap-7 text-slate-300 text-sm">
            <p className="font-bold text-[white]">LEGAL</p>

            <a
              href="/terms"
              className="hover:text-slate-400 duration-500 transition-all "
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="hover:text-slate-400 duration-500 transition-all "
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-use"
              className="hover:text-slate-400 duration-500 transition-all "
            >
              Terms of Use
            </a>

            <a
              href="/kycAgreement"
              className="hover:text-slate-400 duration-500 transition-all "
            >
              Kyc/AML
            </a>
          </div>
        </div>
      </div>
      <div className="container border-t border-slate-500 pt-5 text-slate-300 mx-auto mt-8 md:text-center text-sm">
        <p className="block md:hidden font-medium text-base text-slate-200 mt-4">
          Find us on social media{" "}
        </p>
        <div className="block md:hidden  group w-full mt-4">
          <div className="flex gap-4 items-center ">
            <a
              href="https://facebook.com"
              className="border rounded-full border-slate-200 text-slate-200 p-2.5 hover:border-slate-500 hover:text-slate-300 duration-500 transition-all "
              aria-label="Facebook"
            >
              <FaWhatsapp className="size-4" />
            </a>
            <a
              href="https://twitter.com"
              className="border rounded-full border-slate-200 text-slate-200 p-2.5 hover:border-slate-500 hover:text-slate-300 duration-500 transition-all "
              aria-label="Twitter"
            >
              <FaTiktok className="size-4" />
            </a>
            <a
              href="https://instagram.com"
              className="border rounded-full border-slate-200 text-slate-200 p-2.5 hover:border-slate-500 hover:text-slate-300 duration-500 transition-all "
              aria-label="Instagram"
            >
              <FaInstagram className="size-4" />
            </a>
          </div>
        </div>

        <p className="mt-4">© 2024 FXKARASELL. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
