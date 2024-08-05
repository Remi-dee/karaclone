"use client";
import { increaseKycLevel, toggleKycOff } from "@/redux/features/kyc/kycSlice";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";

type Props = {
  kycDetails: any;
  setKycDetails: (kycDetails: any) => void;
  active: number;
  setActive: (active: any) => void;
};

const KYBInfo: FC<Props> = ({
  kycDetails,
  setKycDetails,
  active,
  setActive,
}) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryChange = (country: any, e: any) => {
    setSelectedCountry(country);

    setKycDetails({
      ...kycDetails,
      country: e.target.value,
    });

    // formik.setFieldValue("country", country);
  };

  function updateFileName() {
    const fileInput = document.getElementById("file-upload") as
      | HTMLElement
      | any;
    const fileNameSpan = document.getElementById("file-name") as
      | HTMLElement
      | any;
    const fileName = fileInput.files[0]
      ? fileInput?.files[0].name
      : "Sample PDF";
    fileNameSpan.textContent = fileName;
  }
  const handleIdDocumentChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setKycDetails({ ...kycDetails, id_document: reader.result });
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
          setKycDetails({ ...kycDetails, address_document: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setActive(active + 1);
  // };
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(increaseKycLevel());
  };
  const router = useRouter();
  const handleBack = (e: any) => {
    e.preventDefault();
    dispatch(toggleKycOff());
  };

  return (
    <div className="w-full flex  relative md:w-[95%] lg:w-[90%]   flex-col mx-0  md:mx-auto mt-[9rem] dslmb-[2em] h-max  md:h-[1080px]   max-h-max   ">
      <div
        onClick={handleBack}
        className=" flex  items-center text-[16px] leading-[24px] tracking-[-2%] mt-[19rem] md:mt-[2rem] w-full gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold ml-[4px] mt-[3px] md:mt-0  ">
          Go-Back
        </p>
      </div>

      <div className="mt-[24px]  items-center text-center">
        <h3 className="py-2 font-semibold text-[20px] md:text-[24px]  leading-[28.8px]  trakcing-[-2%]   ">
          KYB Verification
        </h3>
        <p className="text-[#7C7C7C] leading-[24px] text-[14px] md:text-[16px]">
          Fill in the details below to complete your KYB
        </p>
      </div>
      <div className="w-[100%]  h-max md:h-[1104px] flex  px-[1rem] py-[2rem]  md:p-[32px_40px_32px_40px]  mt-[24px] mx-auto  rounded-[8px]  bg-[white] mb-[1rem] ">
        <form className="" onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-[8px]   ">
            <h3 className="font-semibold text-[18px] leading-[28px]   ">
              Verify Business
            </h3>
            <p className="text-[#7C7C7C] text-[16px] leading-[24px]  ">
              Upload a government issued business registeration document
            </p>
          </div>
          <div className=" flex  flex-col mt-[24px]">
            <div className="grid  sm:grid-cols-2 gap-[24px]">
              <div className="w-full flex flex-col gap-[8px]   ">
                <label
                  htmlFor=""
                  className="font-semibold text-[16px] text-[#1E1E1E]  tracking-[-2%] leading-[24px]  "
                >
                  {/* Select Country<span className="text-red-400">*</span> */}
                  Select Country
                </label>
                <CountryDropdown
                  classes="p-2  h-[48px] w-full border border-gray-300 rounded-[12px]"
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
                  value={kycDetails?.id_document_type}
                  onChange={(e: any) =>
                    setKycDetails({
                      ...kycDetails,
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
                  <option value="Driver License">
                    &apos; Driver's Licence
                  </option>
                  <option value="Voter Card">&apos; Voter's Card</option>
                </select>
                {/* {formik.touched.fullName && formik.errors.fullName && (
                  <p className="mt-2 text-sm text-danger font-medium">
                    {formik.errors.fullName}
                  </p>
                )} */}
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

            <div className="file-upload-container">
              <label className="upload-box" htmlFor="file-upload">
                Upload File
              </label>
              <input id="file-upload" type="file" onChange={updateFileName} />
              <span id="file-name" className="file-name">
                Sample PDF
              </span>
            </div>
          </div>

          <div className=" w-full h-[1px] bg-[#EFEFEF] my-[24px]"></div>

          <div className="">
            <div className=" flex flex-col gap-[8px]   ">
              <h3 className="font-semibold text-[18px] leading-[28px]   ">
                Verify Business
              </h3>
              <p className="text-[#7C7C7C] text-[16px] leading-[24px]  ">
                Upload a government issued business registeration document
              </p>
            </div>
          </div>
          <div className="sm:space-y-8 space-y-4 w-full">
            <div className=" w-full">
              {/* <div className="w-full mt-[24px] flex flex-col gap-[8px]">
                {/* <label
                  htmlFor=""
                  className=" font-semibold text-[16px] text-[#1E1E1E]  tracking-[-2%] leading-[24px]"
                >
                  Select Document
                </label> */}
              {/* <select
                  className="p-2   h-[48px] w-full border border-gray-300 rounded-[12px]"
                  defaultValue=""
                  required
                  value={kycDetails?.address_document_type}
                  onChange={(e: any) =>
                    setKycDetails({
                      ...kycDetails,
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
               {formik.touched.fullName && formik.errors.fullName && (
                  <p className="mt-2 text-sm text-danger font-medium">
                    {formik.errors.fullName}
                  </p>
                )} 
              </div> */}

              <div className=" flex w-full  mt-[24px] flex-col gap-[8px]">
                <label
                  htmlFor=""
                  className="font-semibold  text-[16px] text-[#1E1E1E]  tracking-[-2%] leading-[24px]"
                >
                  Document Id Number
                </label>
                <div className="flex items-center  w-full h-[48px] border mb-6 rounded-md">
                  <input
                    type="text"
                    placeholder="Enter your document id number"
                    className=" w-full  h-full rounded-[12px] p-[8px_16px_8px_16px] focus:outline-none"
                    required
                    value={kycDetails?.bvn}
                    onChange={(e: any) =>
                      setKycDetails({
                        ...kycDetails,
                        bvn: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-[24px]  w-full flex flex-col gap-[8px]">
              <label
                htmlFor=""
                className="font-semibold text-[16px] text-[#1E1E1E]  tracking-[-2%] leading-[24px]"
              >
                Upload Document
              </label>
              <div className="file-upload-container">
                <label className="upload-box" htmlFor="file-upload">
                  Upload File
                </label>
                <input id="file-upload" type="file" onChange={updateFileName} />
                <span id="file-name" className="file-name">
                  Sample PDF
                </span>
              </div>
            </div>
          </div>

          <div className=" w-full h-[1px] bg-[#EFEFEF] my-[24px]"></div>

          <div className="flex flex-col gap-[24px]">
            <div className=" flex flex-col gap-[8px]   ">
              <h3 className="font-semibold text-[18px] leading-[28px]   ">
                Bank Verifcation
              </h3>
              <p className="text-[#7C7C7C] text-[16px] leading-[24px]  ">
                Enter your Business account bank verification number (BVN)
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
                  className="w-full h-full rounded-[12px] p-[8px_16px_8px_16px] focus:outline-none"
                  required
                  value={kycDetails?.bvn}
                  onChange={(e: any) =>
                    setKycDetails({
                      ...kycDetails,
                      bvn: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
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

export default KYBInfo;

// refctored code

// "use client";
// import { useRouter } from "next/navigation";
// import React, { FC, useState } from "react";
// import { CountryDropdown } from "react-country-region-selector";
// import { IoIosArrowRoundBack } from "react-icons/io";

// type Props = {
//   kycDetails: any;
//   setKycDetails: (kycDetails: any) => void;
//   active: number;
//   setActive: (active: any) => void;
// };

// const KYBInfo: FC<Props> = ({
//   kycDetails,
//   setKycDetails,
//   active,
//   setActive,
// }) => {
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const router = useRouter();

//   const handleCountryChange = (country: any, e: any) => {
//     setSelectedCountry(country);
//     setKycDetails({
//       ...kycDetails,
//       country: e.target.value,
//     });
//   };

//   const handleFileChange = (e: any, field: string) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setKycDetails({ ...kycDetails, [field]: reader.result });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const updateFileName = () => {
//     const fileInput = document.getElementById(
//       "file-upload"
//     ) as HTMLInputElement;
//     const fileNameSpan = document.getElementById(
//       "file-name"
//     ) as HTMLSpanElement;
//     const fileName = fileInput.files[0]
//       ? fileInput.files[0].name
//       : "Sample PDF";
//     fileNameSpan.textContent = fileName;
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     setActive(active + 1);
//   };

//   const handleBack = () => {
//     router.push("/dashboard/Home");
//   };

//   const Section: FC<{
//     title: string;
//     subtitle: string;
//     children: React.ReactNode;
//   }> = ({ title, subtitle, children }) => (
//     <div className="flex flex-col gap-[8px]">
//       <h3 className="font-semibold text-[18px] leading-[28px]">{title}</h3>
//       <p className="text-[#7C7C7C] text-[16px] leading-[24px]">{subtitle}</p>
//       <div className="flex flex-col mt-[24px]">{children}</div>
//     </div>
//   );

//   const CountrySelect: FC<{
//     value: string;
//     onChange: (country: string, e: any) => void;
//   }> = ({ value, onChange }) => (
//     <div className="w-full flex flex-col gap-[8px]">
//       <label className="font-semibold text-[16px] text-[#1E1E1E] tracking-[-2%] leading-[24px]">
//         Select Country
//       </label>
//       <CountryDropdown
//         classes="p-2 h-[48px] w-full border border-gray-300 rounded-[12px]"
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );

//   const DocumentSelect: FC<{
//     label: string;
//     value: string;
//     onChange: (e: any) => void;
//   }> = ({ label, value, onChange }) => (
//     <div className="w-full flex flex-col gap-[8px]">
//       <label className="font-semibold text-[16px] text-[#1E1E1E] tracking-[-2%] leading-[24px]">
//         {label}
//       </label>
//       <select
//         className="p-2 h-[48px] w-full border border-gray-300 rounded-[12px]"
//         value={value}
//         onChange={onChange}
//       >
//         <option value="" disabled hidden>
//           Select type
//         </option>
//         <option value="National Id Card">National ID Card</option>
//         <option value="NIN Slip">NIN Slip</option>
//         <option value="International Passport">International Passport</option>
//         <option value="Driver License">Driver's Licence</option>
//         <option value="Voter Card">Voter's Card</option>
//       </select>
//     </div>
//   );

//   const FileUpload: FC<{ label: string; onChange: (e: any) => void }> = ({
//     label,
//     onChange,
//   }) => (
//     <div className="flex flex-col mt-[24px] gap-[8px]">
//       <label className="font-semibold text-[16px] text-[#1E1E1E] tracking-[-2%] leading-[24px]">
//         {label}
//       </label>
//       <div className="file-upload-container">
//         <label className="upload-box" htmlFor="file-upload">
//           Upload File
//         </label>
//         <input id="file-upload" type="file" onChange={onChange} />
//         <span id="file-name" className="file-name">
//           Sample PDF
//         </span>
//       </div>
//     </div>
//   );

//   const TextInput: FC<{
//     label: string;
//     placeholder: string;
//     value: string;
//     onChange: (e: any) => void;
//   }> = ({ label, placeholder, value, onChange }) => (
//     <div className="flex flex-col mt-[24px] gap-[8px]">
//       <label className="font-semibold text-[16px] text-[#1E1E1E] tracking-[-2%] leading-[24px]">
//         {label}
//       </label>
//       <div className="flex items-center w-full h-[48px] border mb-6 rounded-md">
//         <input
//           type="text"
//           placeholder={placeholder}
//           className="w-full h-full rounded-[12px] p-[8px_16px] focus:outline-none"
//           value={value}
//           onChange={onChange}
//         />
//       </div>
//     </div>
//   );

//   const Divider = () => (
//     <div className="w-full h-[1px] bg-[#EFEFEF] my-[24px]"></div>
//   );

//   const SubmitButton: FC<{ label: string }> = ({ label }) => (
//     <div className="w-full flex items-center justify-end">
//       <input
//         type="submit"
//         value={label}
//         className="w-full p-[12px] h-[44px] bg-[#7F56D9] text-center text-[#fff] rounded-[12px] mt-8 cursor-pointer"
//       />
//     </div>
//   );

//   return (
//     <div className="w-full flex flex-col mx-auto mt-[12rem] h-[1080px]">
//       <div
//         onClick={handleBack}
//         className="flex justify-start items-center gap-1 cursor-pointer"
//       >
//         <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
//         <p className="text-primaryBtn font-semibold">Go-Back</p>
//       </div>

//       <div className="mt-[24px] mb-2 items-center text-center">
//         <h3 className="py-2 font-semibold text-[24px] leading-[28.8px] tracking-[-2%]">
//           KYB Verification
//         </h3>
//         <p className="text-[#7C7C7C] leading-[24px] text-[16px]">
//           Fill in the details below to complete your KYB
//         </p>
//       </div>
//       <div className="w-[80%] h-[1000px] flex p-[32px_40px_32px_40px] mt-[24px] mx-auto rounded-md bg-[white]">
//         <form onSubmit={handleSubmit}>
//           <Section
//             title="Verify Business"
//             subtitle="Upload a government issued business registration document"
//           >
//             <div className="grid sm:grid-cols-2 gap-[24px]">
//               <CountrySelect
//                 value={selectedCountry}
//                 onChange={handleCountryChange}
//               />
//               <DocumentSelect
//                 label="Select Document"
//                 value={kycDetails?.id_document_type}
//                 onChange={(e) =>
//                   setKycDetails({
//                     ...kycDetails,
//                     id_document_type: e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </Section>

//           <FileUpload
//             label="Upload Document"
//             onChange={(e) => handleFileChange(e, "id_document")}
//           />

//           <Divider />

//           <Section
//             title="Verify Business"
//             subtitle="Upload a government issued business registration document"
//           >
//             <FileUpload
//               label="Upload Document"
//               onChange={(e) => handleFileChange(e, "address_document")}
//             />
//           </Section>

//           <Divider />

//           <Section
//             title="Bank Verification"
//             subtitle="Enter your Business account bank verification number (BVN)"
//           >
//             <TextInput
//               label="Enter BVN"
//               placeholder="Enter digit"
//               value={kycDetails?.bvn}
//               onChange={(e) =>
//                 setKycDetails({ ...kycDetails, bvn: e.target.value })
//               }
//             />
//           </Section>

//           <SubmitButton label="Continue" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default KYBInfo;

// "use client";
// import { useRouter } from "next/navigation";
// import React, { FC, useState } from "react";
// import { CountryDropdown } from "react-country-region-selector";
// import { IoIosArrowRoundBack } from "react-icons/io";

// type Props = {
//   kybDetails: any;
//   setKybDetails: (kycDetails: any) => void;
//   active: number;
//   setActive: (active: any) => void;
// };

// const KYCInfo: FC<Props> = ({
//   kybDetails,
//   setKybDetails,
//   active,
//   setActive,
// }) => {
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const handleCountryChange = (country: any, e: any) => {
//     setSelectedCountry(country);

//     setKybDetails({
//       ...kybDetails,
//       country: e.target.value,
//     });
//   };

//   const handleIdDocumentChange = (e: any) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setKybDetails({ ...kybDetails, id_document: reader.result });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const handleCacDocumentChange = (e: any) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setKybDetails({ ...kybDetails, cac_document: reader.result });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAddressDocumentChange = (e: any) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setKybDetails({ ...kybDetails, address_document: reader.result });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     setActive(active + 1);
//   };

//   const router = useRouter();
//   const handleBack = () => {
//     router.push("/dashboard/Home");
//   };

//   return (
//     <div className="w-full mx-auto ">
//       <div
//         onClick={handleBack}
//         className="my-4 mx-6 flex justify-start items-center gap-1 cursor-pointer"
//       >
//         <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
//         <p className="text-primaryBtn font-semibold">Go-Back</p>
//       </div>
//       <div className="mt-5 mb-2 items-center text-center">
//         <h3 className="py-2 font-semibold text-2xl">KYB Verification</h3>
//         <p className="text-gray-300 text-sm">
//           Fill in the details below to complete your kyb
//         </p>
//       </div>
//       <div className="w-[80%] pt-6 mx-auto mt-4 rounded-md shadow-lg">
//         <form className="px-5 py-5" onSubmit={handleSubmit}>
//           <h3 className="font-semibold text-xl">Verify ID</h3>
//           <p className="text-gray-300 text-sm">
//             Upload government issued identity card.
//           </p>
//           <div className="sm:space-y-8 space-y-4">
//             <div className="grid sm:grid-cols-2 gap-4 sm:gap-12">
//               <div className="w-full">
//                 <label htmlFor="" className="font-semibold text-sm">
//                   Select Country<span className="text-red-400">*</span>
//                 </label>
//                 <CountryDropdown
//                   classes="p-2 w-full border border-gray-300 rounded-lg"
//                   value={selectedCountry}
//                   onChange={handleCountryChange}
//                   // defaultOptionLabel={formik.values.country || ""}
//                   name="country"
//                   id="country"
//                 />
//                 {/* {formik.touched.fullName && formik.errors.fullName && (
//                   <p className="mt-2 text-sm text-danger font-medium">
//                     {formik.errors.fullName}
//                   </p>
//                 )} */}
//               </div>

//               <div className="w-full">
//                 <label htmlFor="" className="font-semibold text-sm">
//                   Select Document<span className="text-red-400">*</span>
//                 </label>
//                 <select
//                   className="p-2 w-full border border-gray-300 rounded-lg"
//                   defaultValue=""
//                   required
//                   value={kybDetails.id_document_type}
//                   onChange={(e: any) =>
//                     setKybDetails({
//                       ...kybDetails,
//                       id_document_type: e.target.value,
//                     })
//                   }
//                   id=""
//                 >
//                   <option value="" disabled hidden>
//                     Select type
//                   </option>{" "}
//                   <option value="National Id Card">National ID Card</option>
//                   <option value="NIN Slip">NIN Slip</option>
//                   <option value="International Passport">
//                     International Passport
//                   </option>
//                   <option value="Driver License">Driver Licence</option>
//                   <option value="Voter Card"> Voter Card</option>
//                 </select>
//                 {/* {formik.touched.fullName && formik.errors.fullName && (
//                   <p className="mt-2 text-sm text-danger font-medium">
//                     {formik.errors.fullName}
//                   </p>
//                 )} */}
//               </div>
//             </div>
//           </div>
//           <div className=" flex flex-col mt-2 gap-1">
//             <label htmlFor="" className="font-semibold text-sm">
//               Upload Document<span className="text-red-400">*</span>
//             </label>
//             <input
//               type="file"
//               className="p-1.5 border rounded-md outline-none"
//               placeholder="type in your business address"
//               required
//               accept="image/*"
//               id="file"
//               onChange={handleIdDocumentChange}
//             />
//           </div>

//           <div className="mt-10 mb-5">
//             <h3 className="font-semibold text-xl">Verify Business</h3>
//             <p className="text-gray-300 text-sm">
//               Upload a government issued CAC document
//             </p>
//           </div>
//           <div className="">
//             <div className="w-full ">
//               <div className="w-full">
//                 <label htmlFor="" className="font-semibold text-sm">
//                   Upload Document<span className="text-red-400">*</span>
//                 </label>
//                 <input
//                   type="file"
//                   className="p-1.5 w-full rounded-md border border-gray-300"
//                   placeholder="type in your business address"
//                   required
//                   accept="image/*"
//                   id="file"
//                   onChange={handleCacDocumentChange}
//                 />{" "}
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 mb-5">
//             <h3 className="font-semibold text-xl">Verify Business Address</h3>
//             <p className="text-gray-300 text-sm">
//               Upload a document displaying your business address.
//             </p>
//           </div>
//           <div className="sm:space-y-8 space-y-4">
//             <div className="grid sm:grid-cols-2 gap-4 sm:gap-12">
//               <div className="w-full">
//                 <label htmlFor="" className="font-semibold text-sm">
//                   Select Document<span className="text-red-400">*</span>
//                 </label>
//                 <select
//                   className="p-2 w-full border border-gray-300 rounded-lg"
//                   defaultValue=""
//                   required
//                   value={kybDetails.address_document_type}
//                   onChange={(e: any) =>
//                     setKybDetails({
//                       ...kybDetails,
//                       address_document_type: e.target.value,
//                     })
//                   }
//                   id=""
//                 >
//                   <option value="" disabled hidden>
//                     Select type
//                   </option>{" "}
//                   <option value="Waste Bill">Waste Bill</option>
//                   <option value="Electricity Bill">Electricity Bill</option>
//                 </select>
//                 {/* {formik.touched.fullName && formik.errors.fullName && (
//                   <p className="mt-2 text-sm text-danger font-medium">
//                     {formik.errors.fullName}
//                   </p>
//                 )} */}
//               </div>

//               <div className="w-full">
//                 <label htmlFor="" className="font-semibold text-sm">
//                   Upload Document<span className="text-red-400">*</span>
//                 </label>
//                 <input
//                   type="file"
//                   className="p-1.5 rounded-md w-full border border-gray-300"
//                   placeholder="type in your business address"
//                   required
//                   accept="image/*"
//                   id="file"
//                   onChange={handleAddressDocumentChange}
//                 />{" "}
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 mb-5">
//             <h3 className="font-semibold text-xl">Bank Verifcation</h3>
//             <p className="text-gray-300 text-sm">
//               Enter your bank verification number (BVN)
//             </p>
//           </div>

//           <label htmlFor="" className="font-semibold text-sm">
//             Enter BVN<span className="text-red-400">*</span>
//           </label>
//           <div className="flex items-center mt-2 border mb-6 rounded-md">
//             <input
//               type="text"
//               placeholder="223748958938"
//               className="w-full rounded-md p-2 focus:outline-none"
//               required
//               value={kybDetails.bvn}
//               onChange={(e: any) =>
//                 setKybDetails({
//                   ...kybDetails,
//                   bvn: e.target.value,
//                 })
//               }
//             />
//           </div>
//           <div className="w-full flex items-center justify-end">
//             <input
//               type="submit"
//               value="Continue"
//               className="w-full h-[40px] bg-[#7F56D9] text-center text-[#fff] rounded mt-8 cursor-pointer"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default KYCInfo;
