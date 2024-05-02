"use client";
import { useProcessKycMutation } from "@/redux/features/kyc/kycApi";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack } from "react-icons/io";

type Props = {
  kybQuestion: any;
  setKybQuestion: (kybQuestion: any) => void;
  kybDetails: any;
  active: number;
  setActive: (active: any) => void;
};

const KYBQuestion: FC<Props> = ({
  kybQuestion,
  setKybQuestion,
  kybDetails,
  active,
  setActive,
}) => {
  const router = useRouter();
  const [isPolitician, setIsPolitician] = useState(kybQuestion.is_politician);
  const [isCriminalConvict, setIsCriminalConvict] = useState(
    kybQuestion.is_criminal_convict
  );
  const [processKyc, { isLoading, isSuccess, error }] = useProcessKycMutation();

  useEffect(() => {
    if (isSuccess) {
      router.push("dashboard/home");
      toast.success("User KYC is successful");
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
    setKybQuestion({ ...kybQuestion });

    const data = {
      country: kybDetails.country,
      id_document_type: kybDetails.id_document_type,
      id_document: kybDetails.id_document,
      address_document_type: kybDetails.address_document_type,
      address_document: kybDetails.address_document,
      cac_document: kybDetails.cac_document,
      bvn: kybDetails.bvn,
      is_politician: kybQuestion.is_politician,
      is_criminal_convict: kybQuestion.is_criminal_convict,
    };

    await processKyc(data);
  };

  const handleBack = () => {
    setActive(active - 1);
  };

  return (
    <div className="w-full mx-auto ">
      <div
        onClick={handleBack}
        className="my-4 mx-6 flex justify-start items-center gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold">Go-Back</p>
      </div>
      <div className="mt-5 mb-2 items-center text-center">
        <h3 className="py-2 font-semibold text-2xl">KYC Questions</h3>
        <p className="text-gray-300 text-sm">
          Answer all questions below to complete your kyc
        </p>
      </div>
      <div className="w-[80%] pt-6 mx-auto mt-4 rounded-md shadow-lg">
        <form className="px-5 py-5" onSubmit={handleSubmit}>
          <div className="mt-10 mb-5">
            <p className="text-black text-xl font-bold">
              Are you a politically exposed person?
            </p>
          </div>
          <div className="sm:space-y-8 space-y-4">
            <div className="row sm:grid-row-2 gap-4 sm:gap-12">
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
          <div className="sm:space-y-8 space-y-4">
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

export default KYBQuestion;
