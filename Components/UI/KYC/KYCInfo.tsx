"use client";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { IoIosArrowRoundBack } from "react-icons/io";
import caution from "@/public/svg/caution.svg";
import { increaseKycLevel, toggleKycOff } from "@/redux/features/kyc/kycSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
type Props = {
  kycDetails: any;
  setKycDetails: (kycDetails: any) => void;
  active: number;
  setActive: (active: any) => void;
};

const KYCInfo: FC<Props> = ({
  kycDetails,
  setKycDetails,
  active,
  setActive,
}) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [address_Document_Name, setaddress_Document_Name] = useState("");
  const [documentFile, setdocumentFile] = useState("");

  const updateFileDetails = (file: File, key: string) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      if (reader.readyState === 2) {
        setKycDetails({ ...kycDetails, [key]: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (
    e: any,
    setName: (name: string) => void,
    key: string
  ) => {
    const file = e.target.files?.[0];
    setName(file?.name || "");
    if (file) updateFileDetails(file, key);
  };

  const handleInputChange = (key: string) => (e: any) => {
    setKycDetails({ ...kycDetails, [key]: e.target.value });
  };

  const dispacth = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispacth(increaseKycLevel());
  };

  const router = useRouter();
  const handleBack = (e: any) => {
    e.preventDefault();
    dispacth(toggleKycOff());
  };

  return (
    <div className="w-full flex  relative md:w-[95%] lg:w-[90%]   flex-col mx-0  md:mx-auto mt-[9rem] dslmb-[2em] h-max  md:h-[1100px]   max-h-max  ">
      <div
        onClick={handleBack}
        className=" flex  items-center text-[16px] leading-[24px] tracking-[-2%] mt-[27rem] md:mt-[2rem] w-full gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold ml-[4px] mt-[3px] md:mt-0  ">
          Go-Back
        </p>
      </div>

      <div className="mt-[24px] mb-2 items-center text-center">
        <h3 className="py-2 font-bold text-[24px] leading-[28.8px]  tracking-[-2%]   ">
          KYC Verification
        </h3>
        <p className="text-[#7C7C7C] leading-[24px] text-[16px]">
          Fill in the details below to complete your KYC
        </p>
      </div>
      <div className="w-[100%]  h-max md:h-[1104px] flex  px-[1rem] py-[2rem]  md:p-[32px_40px_32px_40px]  mt-[24px] mx-auto  rounded-[8px] mb-[1rem]  bg-[white]">
        <form className=" w-full" onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-[8px]   ">
            <h3 className="font-semibold text-[18px] leading-[28px]   ">
              Verify ID
            </h3>
            <p className="text-[#7C7C7C] text-[16px] leading-[24px]  ">
              Upload government issued identity card.
            </p>
          </div>
          <div className=" flex  flex-col mt-[24px]">
            <div className="grid  sm:grid-cols-2 gap-[24px]">
              <div className="w-full flex flex-col gap-[8px]   ">
                <label
                  htmlFor=""
                  className="font-semibold text-[16px] text-[#1E1E1E]  tracking-[-2%] leading-[24px]  "
                >
                  Select Country
                </label>
                <CountryDropdown
                  classes="p-2  h-[48px] w-full border border-gray-300 rounded-[12px]"
                  value={selectedCountry}
                  onChange={(country: any, e: any) => {
                    setSelectedCountry(country);
                    setKycDetails({
                      ...kycDetails,
                      country: e.target.value,
                    });
                  }}
                  name="country"
                  id="country"
                />
              </div>

              <div className="w-full flex flex-col gap-[8px] ">
                <label
                  htmlFor=""
                  className="font-semibold text-[16px] text-[#1E1E1E]  tracking-[-2%] leading-[24px] "
                >
                  Select Document
                </label>
                <select
                  className="p-2 h-[48px] w-full border border-gray-300 rounded-[12px]"
                  defaultValue=""
                  required
                  value={kycDetails.id_document_type}
                  onChange={handleInputChange("id_document_type")}
                  id=""
                >
                  <option value="" disabled hidden>
                    Select type
                  </option>
                  <option value="National Id Card">National ID Card</option>
                  <option value="NIN Slip">NIN Slip</option>
                  <option value="International Passport">
                    International Passport
                  </option>
                  <option value="Driver License">Driver's Licence</option>
                  <option value="Voter Card">Voter's Card</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" flex flex-col mt-[24px]  gap-[8px]">
            <label
              htmlFor=""
              className="font-semibold text-[16px] text-[#1E1E1E]  tracking-[-2%] leading-[24px]"
            >
              Upload Document
            </label>

            <div className="file-upload-container mt-[8px]">
              <label
                className="upload-box  text-[#7C7C7C] text-[16px]  tracking-[-2%] leading-[24px] font-semibold "
                htmlFor="file-upload"
              >
                Upload File
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={(e: any) =>
                  handleFileChange(e, setdocumentFile, "id_document")
                }
                required
              />
              <span id="file-name" className="file-name">
                {documentFile || "sample.pdf"}
              </span>
            </div>
            <div className=" flex items-center gap-[8px] leading-[20px] text-[14px] text-[#7C7C7C]">
              <span>
                <Image src={caution} alt="" />
              </span>{" "}
              <span>The file must be either in PDF or DOC format.</span>
            </div>
          </div>

          <div className=" w-full h-[1px] bg-[#EFEFEF] my-[24px]"></div>

          <div className="">
            <div className=" flex flex-col gap-[8px]   ">
              <h3 className="font-semibold text-[18px] leading-[28px]   ">
                Verify Address
              </h3>
              <p className="text-[#7C7C7C] text-[16px] leading-[24px]  ">
                Upload a document displaying your address.
              </p>
            </div>
          </div>
          <div className="sm:space-y-8 space-y-4">
            <div className="  flex flex-col gap-4 ">
              <div className="w-full mt-[24px] flex flex-col gap-[8px]">
                <label
                  htmlFor=""
                  className=" font-semibold text-[16px] text-[#1E1E1E]  tracking-[-2%] leading-[24px]"
                >
                  Select Document
                </label>
                <select
                  className="p-2  px-[12px]  h-[48px] w-full border border-gray-300 rounded-[12px]"
                  defaultValue=""
                  required
                  value={kycDetails.address_document_type}
                  onChange={handleInputChange("address_document_type")}
                  id=""
                >
                  <option value="" disabled hidden>
                    Select type
                  </option>
                  <option value="Waste Bill">Waste Bill</option>
                  <option value="Electricity Bill">Electricity Bill</option>
                </select>
              </div>

              <div className="mt-[24px]  w-full flex flex-col gap-[8px]">
                <label
                  htmlFor=""
                  className="font-semibold text-[16px] text-[#1E1E1E]  tracking-[-2%] leading-[24px]"
                >
                  Upload Document
                </label>
                <div className="file-upload-container">
                  <label
                    className="upload-box  text-[#7C7C7C] text-[16px]  tracking-[-2%]  leading-[24px] font-semibold  "
                    htmlFor="address_file-upload"
                  >
                    Upload File
                  </label>
                  <input
                    id="address_file-upload"
                    type="file"
                    onChange={(e: any) =>
                      handleFileChange(
                        e,
                        setaddress_Document_Name,
                        "address_document"
                      )
                    }
                  />
                  <span id="file-name" className="file-name">
                    {address_Document_Name || "Sample PDF"}
                  </span>
                </div>
                <div className=" flex items-center gap-[8px] leading-[20px] text-[14px] text-[#7C7C7C]">
                  <span>
                    <Image src={caution} alt="" />
                  </span>
                  <span>The file must be either in PDF or DOC format.</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full h-[1px] bg-[#EFEFEF] my-[24px]"></div>

          <div className="flex flex-col gap-[24px]">
            <div className=" flex flex-col gap-[8px]   ">
              <h3 className="font-semibold text-[18px] leading-[28px]   ">
                Bank Verification
              </h3>
              <p className="text-[#7C7C7C] text-[16px] leading-[24px]  ">
                Enter your bank verification number (BVN)
              </p>
            </div>
            <div className=" flex  flex-col gap-[8px]">
              <label
                htmlFor=""
                className="font-semibold  text-[16px] text-[#1E1E1E]  tracking-[-2%] leading-[24px]"
              >
                Enter BVN
              </label>
              <div className="flex items-center mt-2 h-[48px] border mb-6 rounded-md">
                <input
                  type="text"
                  placeholder="Enter digit"
                  className="w-full leading-[24px] text-[16px] text-[#989898] h-full rounded-md p-2 focus:outline-none"
                  required
                  value={kycDetails.bvn}
                  onChange={handleInputChange("bvn")}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center  justify-end">
            <input
              onClick={handleSubmit}
              type="submit"
              value="Continue"
              className="w-full p-[12px] h-[44px] bg-[#7F56D9] text-center text-[#fff] rounded-[12px] mt-8 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default KYCInfo;
