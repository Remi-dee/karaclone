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
        <div className="fixed top-0 left-0 right-0 w-screen h-screen flex justify-center items-center inset-0 z-[50000]  overflow-auto bg-[#404040] bg-opacity-90">
          <div className="relative bg-[white]  overflow-y-auto invisible-scrollbar  shadow-lg   w-[375px]  max-w-[375px] max-h-[90vh]  min-h-[350px] flex">
            {children}
            <div
              onClick={closeModalHandler}
              className="absolute top-0 right-0 cursor-pointer"
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
