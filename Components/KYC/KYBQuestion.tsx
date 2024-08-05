"use client";
import { useProcessKycMutation } from "@/redux/features/kyc/kycApi";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack } from "react-icons/io";
import PurpleCheckBox from "../PurpleCheckBox";
import QuestionSection from "./QuestionSection";
import { decreaseKycLevel } from "@/redux/features/kyc/kycSlice";
import { useDispatch } from "react-redux";

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
  const [isPolitician, setIsPolitician] = useState(kybQuestion?.is_politician);
  const [isCriminalConvict, setIsCriminalConvict] = useState(
    kybQuestion.is_criminal_convict
  );
  const [processKyc, { isLoading, isSuccess, error }] = useProcessKycMutation();
  const dispatch = useDispatch();
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
  }, [isLoading, isSuccess, error, router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setKybQuestion({
      ...kybQuestion,
      is_politician: isPolitician,
      is_criminal_convict: isCriminalConvict,
    });

    const data = {
      country: kybDetails.country,
      id_document_type: kybDetails.id_document_type,
      id_document: kybDetails.id_document,
      address_document_type: kybDetails.address_document_type,
      address_document: kybDetails.address_document,
      cac_document: kybDetails.cac_document,
      bvn: kybDetails.bvn,
      is_politician: isPolitician,
      is_criminal_convict: isCriminalConvict,
    };

    await processKyc(data);
  };

  const handleBack = () => {
    dispatch(decreaseKycLevel());
  };

  return (
    <div className="w-full mx-0 md:w-[85%] md:mx-auto">
      <div
        onClick={handleBack}
        className="my-4  flex justify-start items-center gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold">Go-Back</p>
      </div>
      <div className="mb-2 items-center text-center">
        <h3 className="py-2 font-bold text-[24px] leding-[28.8px] text-[#1E1E1E]">
          KYB Questions
        </h3>
        <p className="text-[#7C7C7C] leading-[20px] md:leading-[24px] text-[14px] md:text-[16px]">
          Answer all questions below to complete your KYB
        </p>
      </div>
      <div className="w-full md:w-[80%] h-max md:h-[498px] px-[1rem] py-0 _md:p-[22px_40px_22px_40px] mx-auto mt-[24px] rounded-[8px] bg-[white] shadow-lg">
        <form className="md:px-5 py-5" onSubmit={handleSubmit}>
          <QuestionSection
            name="politicianOption"
            question="Are you a politically exposed person?"
            options={[
              {
                label: "Yes",
                checked: isPolitician,
                onChange: () => setIsPolitician(true),
              },
              {
                label: "No",
                checked: !isPolitician,
                onChange: () => setIsPolitician(false),
              },
            ]}
          />
          <QuestionSection
            question="Do you have any criminal conviction between the last 5 years?"
            name="convictOption"
            options={[
              {
                label: "Yes",
                checked: isPolitician,
                onChange: () => setIsPolitician(true),
              },
              {
                label: "No",
                checked: !isPolitician,
                onChange: () => setIsPolitician(false),
              },
            ]}
          />
          <div className="flex gap-[8px] mt-[40px] content-center items-center">
            <PurpleCheckBox />
            <p className="text-[#000000] leading-[30px] font-bold tracking-[-2%]">
              I confirm that all the information I provided above are correct
              and accurate
            </p>
          </div>
          <div className="w-full flex items-center justify-end">
            <input
              type="submit"
              value="Submit"
              className="w-full h-[40px] rounded-[8px] bg-[#7F56D9] text-center text-[#fff] mt-8 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default KYBQuestion;
