import Image from "next/image";
import closeCircle from "@/public/close-circle.svg";
import mark from "@/public/mark.svg";
import { FC } from "react";

const PasswordCriteria: FC<{
  valid: boolean;
  text: string;
  inputLength: number;
}> = ({ valid, text, inputLength }) => {
  // Determine the background color based on input length and validity
  const backgroundColor =
    inputLength >= 1
      ? valid
        ? "bg-green-500"
        : "bg-[#F04438]"
      : "bg-[#DCDCDC]";

  return (
    <div className="flex justify-start items-center gap-2">
      <div
        className={`w-[20px] h-[20px] flex justify-center items-center rounded-full ${backgroundColor}`}
      >
        {inputLength >= 1 && !valid ? (
          <Image src={closeCircle} alt="Invalid" width={10} height={10} />
        ) : (
          <Image src={mark} alt="Valid" width={15} height={15} />
        )}
      </div>
      <p className="text-[#989898] text-xs">{text}</p>
    </div>
  );
};

export default PasswordCriteria;
