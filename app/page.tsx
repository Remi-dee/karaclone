"use client";
import MomoModal from "@/Components/CustomModal/MomoModal";
import Footer from "@/Components/LandingPage/Footer";
import HeroPage from "@/Components/LandingPage/HeroPage";
import Navbar from "@/Components/LandingPage/Navbar";
import React from "react";

const Page = () => {
  return (
    <div className="text-slate-900">
      <Navbar />
      <HeroPage />
      <MomoModal />
      <Footer />
    </div>
  );
};

export default Page;
