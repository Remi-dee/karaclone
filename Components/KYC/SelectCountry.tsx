import Image from "next/image";
import React from "react";
import stepOne from "@/public/Images/step_one_img.png";
import { FaUser } from "react-icons/fa";

interface selectCountryProp {
  onNext: () => void;
}
const SelectCountry: React.FC<selectCountryProp> = ({ onNext }) => {
  return (
    <div>
      <div className="flex justify-start gap-2 items-center">
        <Image src={stepOne} className="w-6 h-6" alt="" />
        <span>
          <p className="text-gray-300 text-xs">step 1/3</p>
          <p className="text-primaryBtn text-xs font-medium">Verify Id</p>
        </span>
      </div>

      <div className="w-[30px] h-[30px] my-4 flex justify-center items-center rounded-md shadow-md border border-gray-200">
        <FaUser />
      </div>
      <h4 className="text-xl font-semibold pb-4">Verify Id</h4>
      <p className="text-sm font-semibold">Select Country</p>

      <div className="my-4 p-2 border border-gray-200 rounded-md">
        <select
          name=""
          id=""
          className="w-full rounded-md outline-none focus:outline-none"
        >
          <option value="">Select country</option>
        </select>
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

export default SelectCountry;