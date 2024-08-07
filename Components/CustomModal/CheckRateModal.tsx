import { RootState } from "@/redux/store";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeCheckRateModal } from "@/redux/modal/modalSlice";

type CustomModalprops = {
  children: ReactNode;
};

const CheckRateModal: React.FC<CustomModalprops> = ({ children }) => {
  const isCheckRateModalOpen = useSelector(
    (state: RootState) => state.modal.isCheckRateModalOpen
  );
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(closeCheckRateModal());
  };
  const stopPropagationHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      {isCheckRateModalOpen && (
        <div
          onClick={closeModalHandler}
          className="fixed  top-0 left-0 right-0 w-screen h-screen flex justify-center items-center inset-0 z-[50000]  overflow-auto bg-[#989898] bg-opacity-10"
        >
          <div className=" " onClick={stopPropagationHandler}>
            <div className="absolute bg-[white] rounded-[8px]  overflow-y-auto  invisible-scrollbar  shadow-lg right-[4%] md:right-[6%]   top-[2rem] md:top-[7rem]  w-[95%] md:w-[513px]   max-w-full md:max-w-[513px] max-h-[80vh]  min-h-max md:min-h-[350px] flex  ">
              {children}
              <div
                onClick={closeModalHandler}
                className="absolute top-0 right-0 cursor-pointer"
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

export default CheckRateModal;
