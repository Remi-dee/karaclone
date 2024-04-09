"use client";
import React, { FC, useState } from "react";
import { CountryDropdown } from "react-country-region-selector";

type Props = {
  kybDetails: any;
  setKybDetails: (kycDetails: any) => void;
  active: number;
  setActive: (active: any) => void;
};

const KYCInfo: FC<Props> = ({
  kybDetails,
  setKybDetails,
  active,
  setActive,
}) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryChange = (country: any, e: any) => {
    setSelectedCountry(country);

    setKybDetails({
      ...kybDetails,
      country: e.target.value,
    });
  };

  const handleIdDocumentChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setKybDetails({ ...kybDetails, id_document: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleCacDocumentChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setKybDetails({ ...kybDetails, cac_document: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddressDocumentChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setKybDetails({ ...kybDetails, address_document: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setActive(active + 1);
  };
  return (
    <div className="w-full mx-auto ">
      <div className="mt-5 mb-2 items-center text-center">
        <h3 className="py-2 font-semibold text-2xl">KYB Verification</h3>
        <p className="text-gray-300 text-sm">
          Fill in the details below to complete your kyb
        </p>
      </div>
      <div className="w-[80%] pt-6 mx-auto mt-4 rounded-md shadow-lg">
        <form className="px-5 py-5" onSubmit={handleSubmit}>
          <h3 className="font-semibold text-xl">Verify ID</h3>
          <p className="text-gray-300 text-sm">
            Upload government issued identity card.
          </p>
          <div className="sm:space-y-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-12">
              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm">
                  Select Country<span className="text-red-400">*</span>
                </label>
                <CountryDropdown
                  classes="p-2 w-full border border-gray-300 rounded-lg"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  // defaultOptionLabel={formik.values.country || ""}
                  name="country"
                  id="country"
                />
                {/* {formik.touched.fullName && formik.errors.fullName && (
                  <p className="mt-2 text-sm text-danger font-medium">
                    {formik.errors.fullName}
                  </p>
                )} */}
              </div>

              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm">
                  Select Document<span className="text-red-400">*</span>
                </label>
                <select
                  className="p-2 w-full border border-gray-300 rounded-lg"
                  defaultValue=""
                  required
                  value={kybDetails.id_document_type}
                  onChange={(e: any) =>
                    setKybDetails({
                      ...kybDetails,
                      id_document_type: e.target.value,
                    })
                  }
                  id=""
                >
                  <option value="" disabled hidden>
                    Select type
                  </option>{" "}
                  <option value="National Id Card">National ID Card</option>
                  <option value="NIN Slip">NIN Slip</option>
                  <option value="International Passport">
                    International Passport
                  </option>
                  <option value="Driver License">Driver's Licence</option>
                  <option value="Voter Card">Voter's Card</option>
                </select>
                {/* {formik.touched.fullName && formik.errors.fullName && (
                  <p className="mt-2 text-sm text-danger font-medium">
                    {formik.errors.fullName}
                  </p>
                )} */}
              </div>
            </div>
          </div>
          <div className=" flex flex-col mt-2 gap-1">
            <label htmlFor="" className="font-semibold text-sm">
              Upload Document<span className="text-red-400">*</span>
            </label>
            <input
              type="file"
              className="p-1.5 border rounded-md outline-none"
              placeholder="type in your business address"
              required
              accept="image/*"
              id="file"
              onChange={handleIdDocumentChange}
            />
          </div>

          <div className="mt-10 mb-5">
            <h3 className="font-semibold text-xl">Verify Business</h3>
            <p className="text-gray-300 text-sm">
              Upload a government issued CAC document
            </p>
          </div>
          <div className="sm:space-y-8 space-y-4">
            <div className="grid sm:grid-cols-2 sm:gap-12">
              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm">
                  Upload Document<span className="text-red-400">*</span>
                </label>
                <input
                  type="file"
                  className="p-2 w-full border border-gray-300"
                  placeholder="type in your business address"
                  required
                  accept="image/*"
                  id="file"
                  onChange={handleCacDocumentChange}
                />{" "}
              </div>
            </div>
          </div>

          <div className="mt-10 mb-5">
            <h3 className="font-semibold text-xl">Verify Business Address</h3>
            <p className="text-gray-300 text-sm">
              Upload a document displaying your business address.
            </p>
          </div>
          <div className="sm:space-y-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-12">
              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm">
                  Select Document<span className="text-red-400">*</span>
                </label>
                <select
                  className="p-2 w-full border border-gray-300 rounded-lg"
                  defaultValue=""
                  required
                  value={kybDetails.address_document_type}
                  onChange={(e: any) =>
                    setKybDetails({
                      ...kybDetails,
                      address_document_type: e.target.value,
                    })
                  }
                  id=""
                >
                  <option value="" disabled hidden>
                    Select type
                  </option>{" "}
                  <option value="Waste Bill">Waste Bill</option>
                  <option value="Electricity Bill">Electricity Bill</option>
                </select>
                {/* {formik.touched.fullName && formik.errors.fullName && (
                  <p className="mt-2 text-sm text-danger font-medium">
                    {formik.errors.fullName}
                  </p>
                )} */}
              </div>

              <div className="w-full">
                <label htmlFor="" className="font-semibold text-sm">
                  Upload Document<span className="text-red-400">*</span>
                </label>
                <input
                  type="file"
                  className="p-2 w-full border border-gray-300"
                  placeholder="type in your business address"
                  required
                  accept="image/*"
                  id="file"
                  onChange={handleAddressDocumentChange}
                />{" "}
              </div>
            </div>
          </div>

          <div className="mt-10 mb-5">
            <h3 className="font-semibold text-xl">Bank Verifcation</h3>
            <p className="text-gray-300 text-sm">
              Enter your bank verification number (BVN)
            </p>
          </div>

          <label htmlFor="" className="font-semibold text-sm">
            Enter BVN<span className="text-red-400">*</span>
          </label>
          <div className="flex items-center mt-2 border mb-6 rounded-md">
            <input
              type="text"
              placeholder="223748958938"
              className="w-full rounded-md p-2 focus:outline-none"
              required
              value={kybDetails.bvn}
              onChange={(e: any) =>
                setKybDetails({
                  ...kybDetails,
                  bvn: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full flex items-center justify-end">
            <input
              type="submit"
              value="continue"
              className="w-full h-[40px] bg-[#7F56D9] text-center text-[#fff] rounded mt-8 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default KYCInfo;
