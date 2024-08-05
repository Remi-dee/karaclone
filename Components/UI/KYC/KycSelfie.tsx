import React from "react";
import Image from "next/image";
import { TbUserCircle } from "react-icons/tb";
import { IoIosInformationCircleOutline } from "react-icons/io";
import stepThree from "@/public/Images/step_three_img.png";
import selfieVideo from "@/public/Images/selfie_video.png";

interface kycSelfieProp {
  onNext: () => void;
}
const KycSelfie: React.FC<kycSelfieProp> = ({ onNext }) => {
  return (
    <div>
      <div className="flex justify-start gap-2 items-center">
        <Image src={stepThree} className="w-6 h-6" alt="" />
        <span>
          <p className="text-gray-300 text-xs">step 3/3</p>
          <p className="text-primaryBtn text-xs font-medium">
            Identity Verification
          </p>
        </span>
      </div>

      <div className="w-[30px] h-[30px] my-4 flex justify-center items-center rounded-md shadow-md border border-gray-200">
        <TbUserCircle />
      </div>
      <h4 className="text-xl font-semibold pb-4">Take a Selfie</h4>
      <div className="flex justify-start my-1 items-center text-gray-200 gap-2">
        <IoIosInformationCircleOutline />
        <p className="text-xs ">
          We suggest watching the video before you begin.
        </p>
      </div>
      <div className="h-[200px] rounded-md">
        <Image src={selfieVideo} alt="" className="w-full h-full" />
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

export default KycSelfie;
