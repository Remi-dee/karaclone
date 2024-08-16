"use client";
import React, { useState } from "react";
import KYBQuestion from "../UI/KYC/KYBQuestion";

const CreateKYB = () => {
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
    <div className="w-full flex justify-center  min-h-[800px]  invisible-scrollbar max-h-[1000px]  overflow-y-scroll">
      <div className="w-[100%] h-full">
        {active === 1 && (
          // <KYBInfo
          //   kybDetails={kybDetails}
          //   setKybDetails={setKybDetails}
          //   active={active}
          //   setActive={setActive}
          // />

          <KYBQuestion
            kybQuestion={kybQuestion}
            setKybQuestion={setKybQuestion}
            kybDetails={kybDetails}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 2 && (
          <KYBQuestion
            kybQuestion={kybQuestion}
            setKybQuestion={setKybQuestion}
            kybDetails={kybDetails}
            active={active}
            setActive={setActive}
          />
        )}
      </div>
    </div>
  );
};

export default CreateKYB;
