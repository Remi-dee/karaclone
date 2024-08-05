import React from "react";
import WarnIcon from "@/public/svg/warnIcon.svg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/modal/modalSlice";
function YesNoDeactivate({
  setVerificationSuccess,
}: {
  setVerificationSuccess: any;
}) {
  const dispatch = useDispatch();
  return (
    <div className=" w-full  h-full flex flex-col gap-[28px] py-[1rem] md:py-0 md:gap-[40px]">
      <div className=" w-full flex justify-center">
        <Image
          src={WarnIcon}
          alt=""
          className=" md:w-[56px] w-[40px] h-[40px] md:h-[56px]"
        />
      </div>

      <div className=" w-full text-center">
        <h2 className=" leading-[33.11px]  font-semibold text-[19px] md:text-[22px]  text-center ">
          Are you sure you want to deactivate authentication method
        </h2>
      </div>

      <div className="  flex  justify-between">
        <button
          onClick={() => {
            dispatch(closeModal());

            setVerificationSuccess(false);
          }}
          className=" p-[12px] shadow-xs w-[45%] md:w-[215px] border  border-[#3D3D3D] outline-none rounded-[8px]   "
        >
          No
        </button>
        <button
          onClick={() => {
            dispatch(closeModal());

            setVerificationSuccess(false);
          }}
          className=" p-[12px] shadow-xs bg-[#D92D20] text-[white] w-[45%] md:w-[215px] border outline-none  border-[#D92D20] rounded-[8px]   "
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default YesNoDeactivate;
