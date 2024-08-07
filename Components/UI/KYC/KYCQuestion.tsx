"use client";
import { useProcessKycMutation } from "@/redux/features/kyc/kycApi";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack } from "react-icons/io";
import { decreaseKycLevel } from "@/redux/features/kyc/kycSlice";
import { useDispatch } from "react-redux";
import QuestionSection from "./QuestionSection";
import PurpleCheckBox from "@/Components/PurpleCheckBox";

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
  const [isPolitician, setIsPolitician] = useState(kycQuestion.is_politician);
  const [isCriminalConvict, setIsCriminalConvict] = useState(
    kycQuestion.is_criminal_convict
  );
  const [processKyc, { isLoading, isSuccess, error }] = useProcessKycMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      toast.success("User KYC is successful");
      router.push("dashboard/home");
    }
    if (error && "data" in error) {
      const errorMessage = error as any;
      toast.error(errorMessage.data.message);
    }
  }, [isLoading, isSuccess, error]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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

  const handleBack = (e: any) => {
    e.preventDefault();
    dispatch(decreaseKycLevel());
  };

  return (
    <div className=" w-full mx-0 md:w-[85%]  md:mx-auto ">
      <div
        onClick={handleBack}
        className="my-4 mx-6 flex justify-start items-center gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold">Go-Back</p>
      </div>
      <div className="mt-5 mb-2 items-center text-center">
        <h3 className="py-2 font-bold text-[20px] md:text-[24px] leding-[28.8px] text-[#1E1E1E]  ">
          KYC Questions
        </h3>
        <p className="text-[#7C7C7C] leading-[20px] md:leading-[24px] text-[14px] md:text-[16px]">
          Answer all questions below to complete your kyc
        </p>
      </div>
      <div className=" w-full md:w-[80%]  h-max md:h-[498px] px-[1rem] py-0  _md:p-[22px_40px_22px_40px]  mx-auto mt-[24px]  rounded-[8px] bg-[white] shadow-lg">
        <form className=" md:px-5 py-5" onSubmit={handleSubmit}>
          <QuestionSection
            question="Are you a politically exposed person?"
            name="politicianOption"
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
                checked: isCriminalConvict,
                onChange: () => setIsCriminalConvict(true),
              },
              {
                label: "No",
                checked: !isCriminalConvict,
                onChange: () => setIsCriminalConvict(false),
              },
            ]}
          />
          <div className=" flex gap-[8px] mt-[39px] object-center  h-full w-full  content-center items-center  ">
            <div className=" mt-0 md:mt-[5px]">
              <PurpleCheckBox />
            </div>
            <p className=" text-[#000000]  w-full text-sm md:text-[16px] font-normal md:font-bold  leading-[30px]   tracking-[-2%]  ">
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
