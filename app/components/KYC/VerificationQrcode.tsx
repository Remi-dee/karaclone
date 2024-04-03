import Image from "next/image";
import QrCode from "../../../public/Images/Qrcode.png"
import {IoIosInformationCircleOutline} from "react-icons/io"

interface QrCodeProp {
  onNext: () => void;
}
const VerificationQrcode: React.FC<QrCodeProp> = ({ onNext }) => {
  return (
    <div className="mt-6 flex flex-col justify-center items-center">
      <h4 className="font-semibold text-xl">Scan QR code</h4>
      <div className="w-[300px] h-[300px]">
        <Image src={QrCode} alt="" className="w-full h-full"/>
      </div>
      <div className="flex justify-start items-center text-gray-200 mt-2 gap-2">
      <IoIosInformationCircleOutline/>
      <p className="text-xs ">Use your phone&apos;s camera</p>
      </div>
    </div>
  );
};

export default VerificationQrcode;
