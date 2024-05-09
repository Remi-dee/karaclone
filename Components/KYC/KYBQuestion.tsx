"use client";
import { useProcessKycMutation } from "@/redux/features/kyc/kycApi";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack } from "react-icons/io";
import PurpleCheckBox from "../PurpleCheckBox";

type Props = {
  kycQuestion: any;
  setKycQuestion: (kycQuestion: any) => void;
  kycDetails: any;
  active: number;
  setActive: (active: any) => void;
};

const KYCQuestion: FC<Props> = ({
  kycQuestion,
  setKycQuestion,
  kycDetails,
  active,
  setActive,
}) => {
  const router = useRouter();
  const [isPolitician, setIsPolitician] = useState(kycQuestion?.is_politician);
  const [isCriminalConvict, setIsCriminalConvict] = useState(
    kycQuestion?.is_criminal_convict
  );
  const [processKyc, { isLoading, isSuccess, error }] = useProcessKycMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("User KYC is successful");

      router.push("dashboard/home");
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isLoading, isSuccess, error]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Update the parent state with the new values
    setKycQuestion({ ...kycQuestion });

    const data = {
      country: kycDetails.country,
      id_document_type: kycDetails.id_document_type,
      id_document: kycDetails.id_document,
      address_document_type: kycDetails.address_document_type,
      address_document: kycDetails.address_document,
      bvn: kycDetails.bvn,
      is_politician: kycQuestion.is_politician,
      is_criminal_convict: kycQuestion.is_criminal_convict,
    };

    await processKyc(data);
  };

  const handleBack = () => {
    setActive(active - 1);
  };

  return (
    <div className="w-[95%] h-full  mx-auto ">
      <div
        onClick={handleBack}
        className=" mx-6 flex justify-start items-center gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold">Go-Back</p>
      </div>
      <div className="mb-2 items-center text-center">
        <h3 className="py-2 font-bold text-[24px] leding-[28.8px] text-[#1E1E1E]  ">
          KYC Questions
        </h3>
        <p className="text-[#7C7C7C] leading-[24px] text-[16px]">
          Answer all questions below to complete your kyc
        </p>
      </div>
      <div className="w-[80%] h-[478px] p-[32px_40px_32px_40px]  mx-auto mt-[24px]  rounded-[8px] bg-[white] shadow-lg">
        <form className="px-5 flex flex-col gap-[4px]" onSubmit={handleSubmit}>
          <div className="">
            <p className="text-black text-xl font-bold">
              Are you a politically exposed person?
            </p>
          </div>
          <div className="sm:space-y-8 space-y-4">
            <div className="  flex flex-col gap-[8px] mt-[4px]">
              <div className="w-full flex items-center">
                <label htmlFor="" className="font-semibold text-sm">
                  <input
                    type="radio"
                    name="politicianOption"
                    value="true"
                    checked={isPolitician}
                    onChange={() => setIsPolitician(true)}
                    style={{
                      backgroundColor: isPolitician
                        ? "lightpurple"
                        : "transparent",
                    }}
                  />
                  <span className="ml-2">Yes</span>
                </label>
              </div>

              <div className="w-full flex items-center">
                <label htmlFor="" className="font-semibold text-sm">
                  <input
                    type="radio"
                    name="politicianOption"
                    value="false"
                    checked={!isPolitician}
                    onChange={() => setIsPolitician(false)}
                    style={{
                      backgroundColor: !isPolitician
                        ? "lightpurple"
                        : "transparent",
                    }}
                  />
                  <span className="ml-2">No</span>
                </label>{" "}
              </div>
            </div>
          </div>

          <div className="mt-10 mb-5">
            <p className="text-black text-xl font-bold">
              Do you have any criminal conviction between the last 5 years?
            </p>
          </div>
          <div className="flex flex-col gap-[8px] mt-[4px]">
            <div className="row sm:grid-row-2 gap-4 sm:gap-12">
              <div className="w-full flex items-center">
                <label htmlFor="" className="font-semibold text-sm">
                  <input
                    type="radio"
                    name="convictOption"
                    value="true"
                    checked={isCriminalConvict}
                    onChange={() => setIsCriminalConvict(true)}
                    style={{
                      backgroundColor: isCriminalConvict
                        ? "lightpurple"
                        : "transparent",
                    }}
                  />
                  <span className="ml-2">Yes</span>
                </label>
              </div>

              <div className="w-full flex items-center">
                <label htmlFor="" className="font-semibold text-sm">
                  <input
                    type="radio"
                    name="convictOption"
                    value="false"
                    checked={!isCriminalConvict}
                    onChange={() => setIsCriminalConvict(false)}
                    style={{
                      backgroundColor: !isCriminalConvict
                        ? "lightpurple"
                        : "transparent",
                    }}
                  />
                  <span className="ml-2">No</span>
                </label>{" "}
              </div>
            </div>
          </div>

          <div className=" flex gap-[8px] mt-[40px]  content-center items-center  ">
            <PurpleCheckBox />
            <p className=" text-[#000000] leading-[30px] font-bold  tracking-[-2%]  ">
              I confirm that all the information I provided above are correct
              and accurate
            </p>
          </div>

          <div className="w-full flex items-center justify-end">
            <input
              type="submit"
              value="Submit"
              className="w-full h-[40px] rounded-[8px] bg-[#7F56D9] text-center text-[#fff]  mt-8 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default KYCQuestion;










// "use client";
// import { useProcessKycMutation } from "@/redux/features/kyc/kycApi";
// import { useRouter } from "next/navigation";
// import React, { FC, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { IoIosArrowRoundBack } from "react-icons/io";

// type Props = {
//   kybQuestion: any;
//   setKybQuestion: (kybQuestion: any) => void;
//   kybDetails: any;
//   active: number;
//   setActive: (active: any) => void;
// };

// const KYBQuestion: FC<Props> = ({
//   kybQuestion,
//   setKybQuestion,
//   kybDetails,
//   active,
//   setActive,
// }) => {
//   const router = useRouter();
//   const [isPolitician, setIsPolitician] = useState(kybQuestion.is_politician);
//   const [isCriminalConvict, setIsCriminalConvict] = useState(
//     kybQuestion.is_criminal_convict
//   );
//   const [processKyc, { isLoading, isSuccess, error }] = useProcessKycMutation();

//   useEffect(() => {
//     if (isSuccess) {
//       router.push("dashboard/home");
//       toast.success("User KYC is successful");
//     }
//     if (error) {
//       if ("data" in error) {
//         const errorMessage = error as any;
//         toast.error(errorMessage.data.message);
//       }
//     }
//   }, [isLoading, isSuccess, error]);

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     // Update the parent state with the new values
//     setKybQuestion({ ...kybQuestion });

//     const data = {
//       country: kybDetails.country,
//       id_document_type: kybDetails.id_document_type,
//       id_document: kybDetails.id_document,
//       address_document_type: kybDetails.address_document_type,
//       address_document: kybDetails.address_document,
//       cac_document: kybDetails.cac_document,
//       bvn: kybDetails.bvn,
//       is_politician: kybQuestion.is_politician,
//       is_criminal_convict: kybQuestion.is_criminal_convict,
//     };

//     await processKyc(data);
//   };

//   const handleBack = () => {
//     setActive(active - 1);
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
//         <h3 className="py-2 font-semibold text-2xl">KYC Questions</h3>
//         <p className="text-gray-300 text-sm">
//           Answer all questions below to complete your kyc
//         </p>
//       </div>
//       <div className="w-[80%] pt-6 mx-auto mt-4 rounded-md shadow-lg">
//         <form className="px-5 py-5" onSubmit={handleSubmit}>
//           <div className="mt-10 mb-5">
//             <p className="text-black text-xl font-bold">
//               Are you a politically exposed person?
//             </p>
//           </div>
//           <div className="sm:space-y-8 space-y-4">
//             <div className="row sm:grid-row-2 gap-4 sm:gap-12">
//               <div className="w-full flex items-center">
//                 <label htmlFor="" className="font-semibold text-sm">
//                   <input
//                     type="radio"
//                     name="politicianOption"
//                     value="true"
//                     checked={isPolitician}
//                     onChange={() => setIsPolitician(true)}
//                     style={{
//                       backgroundColor: isPolitician
//                         ? "lightpurple"
//                         : "transparent",
//                     }}
//                   />
//                   <span className="ml-2">Yes</span>
//                 </label>
//               </div>

//               <div className="w-full flex items-center">
//                 <label htmlFor="" className="font-semibold text-sm">
//                   <input
//                     type="radio"
//                     name="politicianOption"
//                     value="false"
//                     checked={!isPolitician}
//                     onChange={() => setIsPolitician(false)}
//                     style={{
//                       backgroundColor: !isPolitician
//                         ? "lightpurple"
//                         : "transparent",
//                     }}
//                   />
//                   <span className="ml-2">No</span>
//                 </label>{" "}
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 mb-5">
//             <p className="text-black text-xl font-bold">
//               Do you have any criminal conviction between the last 5 years?
//             </p>
//           </div>
//           <div className="sm:space-y-8 space-y-4">
//             <div className="row sm:grid-row-2 gap-4 sm:gap-12">
//               <div className="w-full flex items-center">
//                 <label htmlFor="" className="font-semibold text-sm">
//                   <input
//                     type="radio"
//                     name="convictOption"
//                     value="true"
//                     checked={isCriminalConvict}
//                     onChange={() => setIsCriminalConvict(true)}
//                     style={{
//                       backgroundColor: isCriminalConvict
//                         ? "lightpurple"
//                         : "transparent",
//                     }}
//                   />
//                   <span className="ml-2">Yes</span>
//                 </label>
//               </div>

//               <div className="w-full flex items-center">
//                 <label htmlFor="" className="font-semibold text-sm">
//                   <input
//                     type="radio"
//                     name="convictOption"
//                     value="false"
//                     checked={!isCriminalConvict}
//                     onChange={() => setIsCriminalConvict(false)}
//                     style={{
//                       backgroundColor: !isCriminalConvict
//                         ? "lightpurple"
//                         : "transparent",
//                     }}
//                   />
//                   <span className="ml-2">No</span>
//                 </label>{" "}
//               </div>
//             </div>
//           </div>

//           <div className="w-full flex items-center justify-end">
//             <input
//               type="submit"
//               value="continue"
//               className="w-full h-[40px] bg-[#7F56D9] text-center text-[#fff] rounded mt-8 cursor-pointer"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default KYBQuestion;
