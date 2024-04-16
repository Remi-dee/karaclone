import Image from "next/image";
import stepTwoImg from "../../../public/Images/step-two_img.png";
import { BiSolidBank } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface bankStatementProp {
  onNext: () => void;
}

const BankStatement: React.FC<bankStatementProp> = ({ onNext }) => {
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
      <p className="text-xs font-bold p-1">Bank Statement</p>
      <div className="relative h-[50px] flex  justify-start items-center  gap-4 border rounded-md border-gray-200">
        <input
          type="file"
          className="absolute w-full h-full inset-0 opacity-0 cursor-pointer"
        />
        <button className="h-full w-[100px] rounded-lg  bg-gray-700 text-gray-300 font-medium">
          Upload file
        </button>
        <p className="text-gray-300 font-medium">statement.pdf</p>
      </div>
      <div className="flex justify-start items-center text-gray-200 gap-2">
        <IoIosInformationCircleOutline />
        <p className="text-xs ">
          Please provide a recent bank statement in PNG, or PDF format.
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

export default BankStatement;
