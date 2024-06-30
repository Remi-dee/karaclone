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
    return dispatch(closeModal());
  };
  const stopPropagationHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      {isModalOpen && (
        <div
          onClick={closeModalHandler}
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center inset-0 z-50  overflow-auto bg-gray-200 bg-opacity-50"
        >
          <div onClick={stopPropagationHandler}>
            <div className="relative bg-[white] overflow-y-auto rounded-md shadow-lg mt-5 w-full p-8 max-w-[550px] max-h-[90vh]   h-max _min-h-[350px] flex z-40">
              {children}
              <div
                onClick={closeModalHandler}
                className="absolute top-0 right-0 p-4 mt-[32px]  cursor-pointer"
              >
                {/* <MdCancel className="text-gray-200 text-lg" /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;

{
  /* <>
{isModalOpen && (
  <div
    onClick={closeModalHandler}
    className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center inset-0 z-50 overflow-auto bg-gray-200 bg-opacity-50"
  >
    <div
      onClick={stopPropagationHandler}
      className="relative bg-white overflow-y-auto rounded-md shadow-lg mt-5 w-full p-8 max-w-[550px] max-h-[90vh] h-max min-h-[350px] flex z-40"
    >
      {children}
      <div
        onClick={closeModalHandler}
        className="absolute top-0 right-0 p-4 mt-[32px] cursor-pointer"
      >
        <MdCancel className="text-gray-200 text-lg" />
      </div>
    </div>
  </div>
)}
</> */
}
