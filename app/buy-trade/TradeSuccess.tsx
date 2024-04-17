import { useRouter } from "next/navigation";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const TradeSuccess = () => {
    const router = useRouter();
    const handleBack = () => {
      router.push("/dashboard/P2P-trade");
    };
  return (
    <div className="fixed top-0 left-0 w-screen bg-opacity-80 h-screen bg-black-200">
      <div className="w-[380px] h-[350px] mx-auto rounded-md bg-white-100 mt-20 shadow-lg">
        <div className="w-[360px] flex flex-col justify-start items-center mx-auto">
          <div className="w-[30px] h-[30px] flex justify-center items-center border border-gray-700 mt-4 rounded-sm shadow-lg">
            <IoIosCheckmark className="text-lg text-white-100 bg-green-600" />
          </div>
          <h3 className="text-xl font-semibold py-2">Transaction Successful</h3>
          <p className="text-gray-300 text-sm text-center pb-4">
            Your transaction has been successfully processed. Please check your
            wallet for confirmation.
          </p>
          <button
          onClick={handleBack}
            className={`p-2  my-4 text-white-100 bg-primaryBtn w-full rounded-lg `}
          >
            Go To The Trade Board
          </button>
          <p className="text-xs text-red-600 pt-4 px-3 text-center">
            Note: If the funds remain unused for 24 hours, they will
            automatically be returned to your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradeSuccess;
