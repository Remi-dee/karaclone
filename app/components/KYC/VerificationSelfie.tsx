import Image from "next/image";
import Logo from "../../../public/Images/Logo.png";
import picLogo from "../../../public/Images/picture_img.png"

interface verificationSelfieProp {
  onNext: () => void;
}

const VerificationSelfie: React.FC<verificationSelfieProp> = ({ onNext }) => {
  return (
    <div className="pt-8">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[100px] my-6">
          <Image src={Logo} alt="" className="w-full" />
        </div>
        <h4 className="text-[#3D3D3D] text-lg font-semibold pb-4">Take Selfie</h4>
        <p className="text-[#475467] text-center pb-3">
          To complete registration, snap a quick selfie, ensuring clarity in the
          picture.
        </p>

        <div className="relative w-[180px] h-[180px] mb-6 rounded-full">
          <input
            className="absolute w-full h-full inset-0 opacity-0 cursor-pointer"
            type="file"
            accept="image/*" capture="user"
          />
          <Image src={picLogo} alt="" className="w-full h-full"/>
        </div>
        <button
        onClick={onNext}
        className="p-2 my-4 text-white-100 bg-primaryBtn w-full rounded-lg"
      >
        Continue
      </button>
      </div>
    </div>
  );
};

export default VerificationSelfie;
