"use client";
import React, { useState } from "react";
import FundAmount from "@/app/components/FundWallet/FundAmount";
import FundMethod from "../components/FundWallet/FundMethod";
import FundSuccess from "../components/FundWallet/FundSuccess";

type Props = {};

const page = (props: Props) => {
  const [active, setActive] = useState(1);
  return (
    <div className="w-full bg-purple-50  min-h-screen overflow-hidden">
      <div className="w-full">
        {active === 1 && <FundAmount active={active} setActive={setActive} />}
        {active === 2 && <FundMethod active={active} setActive={setActive} />}
        {active === 3 && <FundSuccess />}
      </div>
    </div>
  );
};

export default page;
