"use client";
import MomoModal from "@/Components/CustomModal/MomoModal";
import Footer from "@/Components/LandingPage/Footer";
import HeroPage from "@/Components/LandingPage/HeroPage";
import Navbar from "@/Components/LandingPage/Navbar";
import React, { useState } from "react";

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

{
  /* <div>
<h5>Hello world!</h5>
<button onClick={openModalHandler}>open modal</button>
<CustomModal>{renderCurrentPage()}</CustomModal>
</div> */
}
