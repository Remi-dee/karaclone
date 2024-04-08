import { RootState } from "@/redux/store";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
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
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center inset-0 z-50 pt-12 overflow-auto bg-gray-200 bg-opacity-50">
          <div className="relative bg-white-100 rounded-md shadow-lg w-full p-8 max-w-[400px]  min-h-[350px]">
            {children}
            <div
              onClick={closeModalHandler}
              className="absolute top-0 right-0 p-4 cursor-pointer"
            >
              <MdCancel className="text-gray-200 text-lg" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
