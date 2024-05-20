"use client";
import React, { useState } from "react";
import KYCInfo from "./KYCInfo";
import KYCQuestion from "./KYCQuestion";
import { useSelector } from "react-redux";

const CreateKYC = () => {
  const [active, setActive] = useState(1);
  const { kycLevel } = useSelector((state) => state?.kyc);
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

  return (
    <div className="w-full flex justify-center items-center   max-h-[890px] invisible-scrollbar overflow-y-scroll   ">
      <div className="w-[100%]">
        {kycLevel === 1 && (
          <KYCInfo
            kycDetails={kycDetails}
            setKycDetails={setKycDetails}
            active={active}
            setActive={setActive}
          />
          // <KYCQuestion
          //   kycQuestion={kycQuestion}
          //   setKycQuestion={setKycQuestion}
          //   kycDetails={kycDetails}
          //   active={active}
          //   setActive={setActive}
          // />
        )}

        {kycLevel === 2 && (
          <KYCQuestion
            kycQuestion={kycQuestion}
            setKycQuestion={setKycQuestion}
            kycDetails={kycDetails}
            active={active}
            setActive={setActive}
          />
        )}
      </div>
    </div>
  );
};

export default CreateKYC;