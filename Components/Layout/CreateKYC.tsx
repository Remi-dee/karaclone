"use client";
import React, { useState } from "react";

import { useSelector } from "react-redux";
import KYCInfo from "../UI/KYC/KYCInfo";
import KYCQuestion from "../UI/KYC/KYCQuestion";
import KYBInfo from "../UI/KYC/KYBInfo";
import KYBQuestion from "../UI/KYC/KYBQuestion";
const CreateKYC = () => {
  const [active, setActive] = useState(1);
  const { kycLevel, kybBegin } = useSelector((state: any) => state?.kyc);
  const [kycDetails, setKycDetails] = useState({
    country: "",
    id_document_type: "",
    id_document: "",
    address_document_type: "",
    address_document: "",
    bvn: "",
  });

  const [kycQuestion, setKycQuestion] = useState({
    is_politician: false,
    is_criminal_convict: false,
  });
  const [kybQuestion, setkybQuestion] = useState({
    is_politician: false,
    is_criminal_convict: false,
  });

  return (
    <div className="w-full flex justify-center items-center h-max max-h-[890px] invisible-scrollbar overflow-y-scroll">
      <div className="w-[100%]">
        {kycLevel === 1 &&
          (kybBegin ? (
            <KYBInfo
              kycDetails={kycDetails}
              setKycDetails={setKycDetails}
              active={active}
              setActive={setActive}
            />
          ) : (
            <KYCInfo
              kycDetails={kycDetails}
              setKycDetails={setKycDetails}
              active={active}
              setActive={setActive}
            />
          ))}
        {kycLevel === 2 &&
          (kybBegin ? (
            <KYBQuestion
              kybQuestion={kybQuestion}
              setKybQuestion={setkybQuestion}
              kybDetails={kycDetails}
              active={active}
              setActive={setActive}
            />
          ) : (
            <KYCQuestion
              kycQuestion={kycQuestion}
              setKycQuestion={setKycQuestion}
              kycDetails={kycDetails}
              active={active}
              setActive={setActive}
            />
          ))}
      </div>
    </div>
  );
};

export default CreateKYC;
