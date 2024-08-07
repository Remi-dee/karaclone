import { closeModal } from "@/redux/modal/modalSlice";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { useDispatch } from "react-redux";
const VerificationSuccess = () => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(closeModal());
  };
  return (
    <div className="pt-8">
      <div className="flex flex-col justify-center items-center my-6">
        <div className="w-[30px] h-[30px] flex justify-center items-center rounded-md shadow-md border">
          <div className="w-[15px] h-[15px]  flex justify-center items-center rounded-md bg-[#17B26A]">
            <IoIosCheckmark className="text-white-100" />
          </div>
        </div>
        <h4 className="font-bold text-xl py-4">Completed</h4>
        <p className="text-center text-gray-300">
          Thank you, information received. Please click done to continue
        </p>
        <button
          onClick={closeModalHandler}
          className="p-2 my-4 text-white-100 bg-[#17B26A] w-full rounded-lg"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default VerificationSuccess;
