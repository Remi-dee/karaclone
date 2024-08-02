"use client";

import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import arrow from "@/public/svg/arrow-right.svg";
import backarrow from "@/public/svg/backarrow.svg";
import faqimage from "@/public/Images/faqimage.png";
import blackBack from "@/public/svg/blackBack.svg";
import { useDispatch } from "react-redux";
import { closeChatModal } from "@/redux/modal/modalSlice";
const data = [1, 2, 3, 4];

function FAQ({ clickHandler }: { clickHandler: any }) {
  const [Value, setValue] = useState("");

  const handleChange = (option: string) => {
    // console.log(option)
    setValue(option);
    clickHandler(option);
  };
  const [activeButton, setActiveButton] = useState("Processing");

  const handleButtonClick = (status: string) => {
    setActiveButton(status);
  };
  const dispatch = useDispatch();
  return (
    <div className=" w-full h-[810px]   p-[1.5rem]  py-[1em]   flex  flex-col rounded-[12px]   ">
      <section className=" flex   py-[1rem]    flex-col    w-full relative ">
        <section className=" flex  justify-between ">
          <Image
            width={15}
            height={15}
            src={blackBack}
            onClick={() => handleChange("")}
            className=" bg-blend-darken  cursor-pointer z-20"
            alt=""
          />
          <MdCancel
            onClick={() => dispatch(closeChatModal())}
            className="text-gray-200 text-lg  cursor-pointer"
          />
        </section>
      </section>
      <div className=" w-full ">
        <h1 className=" font-bold text-[15px] tracking-[-2%]  leading-[24px]   ">
          Can I trust the sellers/buyers on the platform?
        </h1>
      </div>

      <section className=" mt-[2rem] ">
        <p className=" font-[500] text-[12px] tracking-[-2%] text-[#1E1E1E] leading-[20px] ">
          Ensuring the reliability and trustworthiness of sellers and buyers is
          a top priority for us. We employ rigorous vetting procedures to verify
          the identity and credibility of all users before they can participate
          on our platform. This includes verifying personal information,
          credentials, and conducting background checks where applicable.
          Moreover, our platform incorporates various security measures to
          safeguard transactions and protect user data. This includes encryption
          protocols, secure payment gateways, and regular security audits to
          detect and mitigate any potential vulnerabilities. In addition to our
          proactive measures, we empower our community members to contribute to
          the trustworthiness of the platform through feedback and ratings.
          After each transaction, both buyers and sellers have the opportunity
          to rate their experience and leave comments. This feedback mechanism
          not only helps other users make informed decisions but also
          incentivizes sellers to maintain high standards of service.
        </p>
      </section>
      <section className="  my-[1rem] md:my-[0.6rem]  ">
        <Image src={faqimage} alt="" />
      </section>

      <section className=" mt-[1rem">
        <p className="font-[500] text-[12px] tracking-[-2%] text-[#1E1E1E] leading-[20px]">
          However, while we strive to create a safe and reliable environment,
          it's essential for users to exercise caution and conduct their own due
          diligence. If you encounter any suspicious behavior or have concerns
          about a particular user, our dedicated customer support team is
          available to assist you. We take all reports seriously and investigate
          them promptly to uphold the integrity of our platform.
        </p>
      </section>
    </div>
  );
}

export default FAQ;
