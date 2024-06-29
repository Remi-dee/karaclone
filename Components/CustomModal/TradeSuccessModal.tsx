"use client";

import { RootState } from "@/redux/store";
import { ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { closeModal } from "@/redux/modal/modalSlice";

type CustomModalprops = {
  children: ReactNode;
};

const TradeSuccessModal: React.FC<CustomModalprops> = ({ children }) => {
  const [modalState, setmodalState] = useState(true);
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    // dispatch(closeModal());
    setmodalState(true);
  };
  const stopPropagationHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {modalState && (
        <div
          // onClick={closeModalHandler}
          className="fixed top-0 left-0 w-screen h-full flex justify-center items-center inset-0 z-50  overflow-auto bg-gray-200 bg-opacity-[0.7]"
        >
          {children}
          {/* <div
              onClick={closeModalHandler}
              className="absolute top-0 right-0 p-4 mt-[32px]  cursor-pointer"
            >
              <MdCancel className="text-gray-200 text-lg" />
            </div> */}
        </div>
      )}
    </>
  );
};

export default TradeSuccessModal;
