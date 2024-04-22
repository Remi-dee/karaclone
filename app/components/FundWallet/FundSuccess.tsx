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
        <div className="w-[40%] mt-32 pt-6 mx-auto rounded-lg bg-white-100 shadow-lg overflow-hidden flex flex-col justify-center items-center py-8 px-10 box-border max-w-full text-left text-sm text-neutral-color-500 ">
          <div className="w-[35px] h-[30px] flex justify-center items-center shadow-md border border-gray-200 rounded-md ">
            <div className="w-[20] bg-green-500 rounded-sm text-white-100">
              <IoIosCheckmark className="w-full" />
            </div>
          </div>
          <h3 className="font-semibold text-xl py-2">
            Transaction is Being Processed
          </h3>
          <p className="text-gray-200 text-sm pb-4">
            We will confirm your transaction shortly and your wallet will be
            funded immediately
          </p>

          <button
            onClick={handleDone}
            className="p-2 mt-3 my-4 text-[#fff] bg-primaryBtn w-full rounded-lg"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundSuccess;
