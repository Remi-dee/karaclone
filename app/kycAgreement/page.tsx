
"use client";
import Footer from "@/Components/LandingPage/Footer";
import Navbar from "@/Components/LandingPage/Navbar";
import React, { useState } from "react";

const KycAgreement: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-black mb-4 text-center text-slate-800 py-20 bg-slate-50">
        KYC/AML
      </h1>
      <div className=" p-6 max-w-6xl mx-auto text-slate-900 prose text-sm">
        <h2 className=" font-semibold mt-6 mb-2">Our privacy policy</h2>

        <p className="mb-4 text-sm text-slate-700">
          KYC/AML
          <br></br>
          ‍This the Fx Karasell approach to anti-money laundering (AML) and
          know-your-customer (KYC) processes Money laundering is the process
          whereby the financial proceeds of a crime are disguised to give the
          impression of legitimate income. Often criminals target financial
          service providers through which they attempt to launder criminal
          proceeds without raising suspicion. In many cases, laundered funds are
          used to fund further crime or to finance terrorism. Sometimes both.
          <br></br>
          <br></br>
          As a means to combat money laundering and to counter terrorist
          financing (CTF), most countries have implemented AML and CTF
          legislation which imposes obligations on financial service providers.
          Although it is not always clear in some of our countries, where we
          have a presence, whether these obligations fall on cryptocurrency
          providers, these laws, together with guidance from regulators,
          applicable task forces and industry best practice, form the
          cornerstone of Luno’s approach to AML and CTF. As such, Fx Karasell
          has implemented systems and controls that meet the standards
          applicable to regulated sectors such as banking. This decision
          reflects our desire to prevent money laundering and terrorist
          financing.
          <br></br>
          <br></br>
          Key components of our AML and CTF framework include the following:
          <br></br>
          <br></br>
          Establishing and maintaining a risk-based approach to the assessment
          and management of money laundering and terrorist financing risks;
          Establishing and maintaining a risk-based approach to Customer Due
          Diligence (CDD), including customer identification, verification and
          KYC procedures. To ensure we meet these standards, our customers are
          required to provide certain personal details and documents when
          opening a Fx Karasell Account. The nature, and extent, of what is
          required is guided by the customer’s deposit and withdrawal limits
          and, in some cases, the customer’s country of residence. In certain
          circumstances, Fx Karasell may perform enhanced due diligence
          procedures for customers presenting a higher risk, such as those
          transacting large volumes and Politically Exposed Persons (PEPs);{" "}
          <br></br>
          <br></br>
          Establishing and maintaining risk-based systems and procedures for the
          monitoring of ongoing customer activity; Establishing procedures for
          reporting suspicious activity internally and to the relevant law
          enforcement authorities as appropriate; Maintaining appropriate KYC
          records for the minimum prescribed periods; Providing training on the
          framework and raising awareness among all relevant employees;
          Designing systems and controls to allow Fx Karasell to comply with all
          required sanction screening processes imposed by, for example, the
          United Nations, European Union, UK Treasury and US Office of Foreign
          Assets Control (OFAC) and to take measures to prevent transacting with
          individuals, companies and countries appearing on these sanctions
          lists.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default KycAgreement;
