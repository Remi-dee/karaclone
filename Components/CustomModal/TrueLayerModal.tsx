"use client";

import { useDispatch } from "react-redux";
import DefaultModal from "../CustomModal/CustomModalAlt";
import toast from "react-hot-toast";
import { closeModal } from "@/redux/modal/modalSlice";
import CustomModal from "./CustomModal";

const MomoModal = () => {
  const dispatch = useDispatch();

  const YesHandler = async () => {
    dispatch(closeModal());
    // Handle  initiation to Mono here

    toast.success("Ready for Mono!!");
  };

  return (
    <CustomModal

    // dismiss={() => {
    //   dispatch(toggleMonoAndTruelayerModal(false));
    // }}
    >
      <div className="text-center">
        <p className="mt-4">
          Are you sure you want to Proceed with True Layer?
        </p>

        <div className="flex justify-between gap-2 p-10">
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            type="submit"
            className="bg-twinklly-light-blue hover:bg-opacity-70 text-blue border rounded-lg w-48 py-2"
          >
            NO
          </button>
          <button
            onClick={YesHandler}
            type="submit"
            className="bg-twinklly-light-red hover:bg-opacity-70 text-white border rounded-lg w-48 py-2"
          >
            Yes
          </button>
        </div>
      </div>
    </CustomModal>
  );
};

export default MomoModal;
