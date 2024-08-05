import React from "react";
import stepOne from "@/public/Images/step_one_img.png";
import { FaUser } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Image from "next/image";
interface uploadIdProp {
  onNext: () => void;
}
const UploadId: React.FC<uploadIdProp> = ({ onNext }) => {
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
      <p className="text-sm font-semibold">Select document</p>

      <div className="my-4 p-2 border border-gray-200 rounded-md">
        <select
          name=""
          id=""
          className="w-full rounded-md outline-none focus:outline-none"
        >
          <option value="">National Identity Card</option>
        </select>
      </div>

      <div className=" relative w-full h-[100px] flex flex-col justify-center items-center border-2 border-dotted border-gray-200">
        <input
          type="file"
          className=" absolute w-full h-full inset-0 opacity-0 cursor-pointer  "
        />
        <div className="w-6 h-6 flex justify-center items-center rounded-full border border-gray-200">
          <AiOutlineCloudUpload />
        </div>
        <p className="py-4 font-semibold text-sm">Upload Image </p>
      </div>
      <div className="flex justify-start items-center text-gray-200 gap-2">
        <IoIosInformationCircleOutline />
        <p className="text-xs ">Max file size is 4MB PNG, JPG or JPEG file</p>
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

export default UploadId;
