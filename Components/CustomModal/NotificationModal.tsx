import { RootState } from "@/redux/store";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeNotificationModal } from "@/redux/modal/modalSlice";

type CustomModalprops = {
  children: ReactNode;
};

const NotificationModal: React.FC<CustomModalprops> = ({ children }) => {
  const isNotificationModalOpen = useSelector(
    (state: RootState) => state.modal.isNotificationModalOpen
  );
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(closeNotificationModal());
  };
  const stopPropagationHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      {isNotificationModalOpen && (
        <div
          onClick={closeModalHandler}
          className="fixed  top-0 left-0 right-0 w-full md:w-screen h-screen flex justify-center items-center inset-0 z-[50000]  overflow-auto bg-[#989898] bg-opacity-10"
        >
          <div className=" " onClick={stopPropagationHandler}>
            <div className="absolute bg-[white]  overflow-y-auto  notificationScrollBar  shadow-lg right-0 md:right-[1rem]   top-[7rem]  md:w-[375px] w-full max-w-full  md:max-w-[375px] max-h-[80vh]  min-h-[350px] flex">
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

export default NotificationModal;
