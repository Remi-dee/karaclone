import React from "react";
import Image from "next/image";
import stepTwoImg from "../../../public/Images/step-two_img.png";
import { BiSolidBank } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface bankVerificationProp {
  onNext: () => void;
}
const BankVerification: React.FC<bankVerificationProp> = ({ onNext }) => {
  return (
    <div>
      <div className="flex justify-start gap-2 items-center">
        <Image src={stepTwoImg} className="w-6 h-6" alt="" />
        <span>
          <p className="text-gray-300 text-xs">step 2/3</p>
          <p className="text-primaryBtn text-xs font-medium">
            Bank Verification
          </p>
        </span>
      </div>
      <div className="w-[30px] h-[30px] my-4 flex justify-center items-center rounded-md shadow-md border border-gray-200">
        <BiSolidBank />
      </div>
      <h4 className="text-xl font-semibold pb-4">Bank Verification</h4>
      <p className="text-xs font-bold p-1">Enter BVN</p>
      <div className="p-2 border rounded-lg border-gray-200">
        <input
          type=""
          className="w-full h-full outline-none"
          placeholder="Enter digit"
        />
      </div>
      <div className="flex justify-start mt-1 items-center text-gray-200 gap-2">
        <IoIosInformationCircleOutline />
        <p className="text-xs ">
          Your BVN must be associated to your withdrawal account
        </p>
      </div>

      <button
        onClick={onNext}
        className="p-2 my-4 text-white-100 bg-primaryBtn w-full rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};

export default BankVerification;
