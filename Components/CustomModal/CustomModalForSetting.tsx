import { RootState } from "@/redux/store";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "@/redux/modal/modalSlice";

type CustomModalprops = {
  children: ReactNode;
};

const CustomModal: React.FC<CustomModalprops> = ({ children }) => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {!isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center inset-0 z-[50000]  overflow-auto bg-gray-200 bg-opacity-50">
          <div className="relative bg-[white]  overflow-y-auto rounded-[16px] shadow-lg mt-5 w-[550px] p-8 max-w-[550px] max-h-[90vh]  min-h-[350px] flex">
            {children}
            <div
              onClick={closeModalHandler}
              className="absolute top-0 right-0 p-4 mt-[32px]  cursor-pointer"
            >
              {/* <MdCancel className="text-gray-200 text-lg" /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;