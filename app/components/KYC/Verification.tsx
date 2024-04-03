import Image from "next/image";
import { CiMail } from "react-icons/ci";
import scan from "../../../public/Images/scan.png";
import { useState } from "react";
interface verification {
  optionsSelected:(option:string)=>void
}
const Verification: React.FC<verification> = ({optionsSelected }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
    optionsSelected(option);

  };
  return (
    <div className="mt-6">
      <h4 className="font-semibold text-xl">
        Continue verification on your phone
      </h4>
      <div
        onClick={() => handleSelectedOption("qrCode")}
        className="flex justify-start items-start my-6 p-4 h-[80px] gap-3 rounded-md bg-gray-700 border border-gray-200 cursor-pointer"
      >
        <div className="w-[25px] h-[25px]">
          <Image src={scan} alt="" className="w-full h-full" />
        </div>
        <span>
          <p className="font-semibold">QR Code</p>
          <p className="text-xs text-gray-100">
            Complete the process on your phone by scanning a QR code.
          </p>
        </span>
      </div>
      <div
        onClick={() => handleSelectedOption("mail")}
        className="flex justify-start items-start my-6 p-4 h-[80px] gap-3 rounded-md bg-gray-700 border border-gray-200 cursor-pointer"
      >
        <div>
          <CiMail className="text-2xl" />
        </div>
        <span>
          <p className="font-semibold">Email</p>
          <p className="text-xs text-gray-100">
            Complete the process on your phone by following the link provided in
            an email.
          </p>
        </span>
      </div>
      {selectedOption && <div>{selectedOption}</div>}
    </div>
  );
};

export default Verification;
