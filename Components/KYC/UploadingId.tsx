"use client";
import React, { useState } from "react";
import stepOne from "@/public/Images/step_one_img.png";
import { FaUser } from "react-icons/fa";
import { IoIosInformationCircleOutline, IoIosCheckmark } from "react-icons/io";
import { MdClose } from "react-icons/md";
import uploadingImg from "@/public/Images/uploadingImg.png";
import uploadedImg from "@/public/Images/uploadedImg.png";
import Image from "next/image";

interface uploadingIdprop {
  onNext: () => void;
}
const UploadingId: React.FC<uploadingIdprop> = ({ onNext }) => {
  const [uploading, setUploading] = useState(true);
  const toggleUploading = () => {
    setUploading(!uploading);
  };
  return (
    <div>
      {uploading ? (
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
              <Image src={uploadingImg} alt="" className="w-[20px] h-[20px]" />
            </div>
            <p className="py-4 font-semibold text-sm">Uploading Image </p>
          </div>
          <div className="flex justify-start items-center text-gray-200 gap-2">
            <IoIosInformationCircleOutline />
            <p className="text-xs ">
              Max file size is 4MB PNG, JPG or JPEG file
            </p>
          </div>

          <button
            onClick={toggleUploading}
            className="p-2 my-4 text-white-100 bg-primaryBtn w-full rounded-lg"
          >
            Continue
          </button>
        </div>
      ) : (
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
              <IoIosCheckmark />
            </div>
            <p className="py-4 font-semibold text-sm">Uploaded Image </p>
          </div>
          <div className="flex justify-start items-center text-gray-200 gap-2">
            <IoIosInformationCircleOutline />
            <p className="text-xs ">
              Max file size is 4MB PNG, JPG or JPEG file
            </p>
          </div>
          <div className="bg-gray-500 p-4 rounded-sm flex justify-between items-center my-2">
            <div className="flex justify-start gap-2 items-center">
              <Image src={uploadedImg} alt="" />
              <span className="text-sm">
                <p className="font-semibold">National Id.png</p>
                <p className="text-gray-600">3.5 MB</p>
              </span>
            </div>
            <MdClose className="text-red-400 cursor-pointer" />
          </div>
          <button
            onClick={onNext}
            className="p-2 my-4 text-white-100 bg-primaryBtn w-full rounded-lg"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadingId;
