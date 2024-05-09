import { useRouter } from "next/navigation";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const FundSuccess = () => {
  const router = useRouter();
  const handleDone = () => {
    router.push("/dashboard/home");
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-start gap-[24px] text-center text-2xl text-neutral-black">
        <div className="w-[550px] p-[32px_40px_32px_40px] mt-32 h-[326px] gap-[25px] mx-auto rounded-lg bg-white-100 shadow-lg overflow-hidden flex flex-col justify-center items-center py-8 px-10 box-border max-w-full text-left text-sm text-neutral-color-500 ">
          <div className="w-[56px] h-[56px] flex justify-center items-center shadow-md border border-gray-200 rounded-md ">
            <div className="w-[20] bg-green-500 rounded-sm text-white-100">
              <IoIosCheckmark className=" text-[28px]" />
            </div>
          </div>
          <div className=" flex  flex-col gap-[12px]">

 
          <h3 className=" text-[32px] text-[#3D3D3D] leadng-[38.4px] font-bold py-2">
            Transaction is Being Processed
          </h3>
          <p className="text-[#7C7C7C] leading-[24px] text-[16px] text-center ">
          We will confirm your transaction shortly and your wallet would be funded immediately
          </p>
          </div>

          <button
            onClick={handleDone}
            className="p-[12px] w-[470px] text-[#fff] bg-primaryBtn  h-[44px] rounded-lg"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundSuccess;
