"use client";
import React, { useState } from "react";
import KYBInfo from "./KYBInfo";
import KYBQuestion from "./KYBQuestion";

type Props = {};

const CreateKYB = (props: Props) => {
  const [active, setActive] = useState(1);
  const [kybDetails, setKybDetails] = useState({
    country: "",
    id_document_type: "",
    id_document: "",
    address_document_type: "",
    address_document: "",
    cac_document: "",
    bvn: "",
  });

  const [kybQuestion, setKybQuestion] = useState({
    is_politician: false,
    is_criminal_convict: false,
  });

  return (
    <div className="w-full flex justify-center items-center  min-h-screen">
      <div className="w-[100%]">
        {active === 1 && (
          <KYBInfo
            kybDetails={kybDetails}
            setKybDetails={setKybDetails}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 2 && (
          <KYBQuestion
            kybQuestion={kybQuestion}
            setKybQuestion={setKybQuestion}
            kybDetails={kybDetails}
          />
        )}
      </div>
    </div>
  );
};

export default CreateKYB;
