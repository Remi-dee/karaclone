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
      {true && (
        <div className="fixed top-0 left-0 w-screen h-full flex justify-center items-center inset-0 z-50  overflow-auto bg-gray-200 bg-opacity-[0.7]">
          <div className="relative p-[32px_40px_32px_40px] bg-[white] overflow-y-auto rounded-md shadow-lg   h-full w-[550px] max-h-[90vh]  min-h-[350px] flex">
            {children}
            {/* <div
              onClick={closeModalHandler}
              className="absolute top-0 right-0 p-4 mt-[32px]  cursor-pointer"
            >
              <MdCancel className="text-gray-200 text-lg" />
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
