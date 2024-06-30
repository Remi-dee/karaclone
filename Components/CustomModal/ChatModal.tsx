import { RootState } from "@/redux/store";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeChatModal } from "@/redux/modal/modalSlice";

type CustomModalprops = {
  children: ReactNode;
};

const ChatModal: React.FC<CustomModalprops> = ({ children }) => {
  const isChatModalOpen = useSelector(
    (state: RootState) => state.modal.isChatModalOpen
  );
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(closeChatModal());
  };
  const stopPropagationHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      {isChatModalOpen && (
        <div
          onClick={closeModalHandler}
          className="fixed  top-0 left-0 right-0 w-screen h-screen flex justify-center items-center inset-0 z-[50000]  overflow-auto bg-[#404040] bg-opacity-90"
        >
          <div className=" " onClick={stopPropagationHandler}>
            <div className="absolute bg-[white]  overflow-y-auto invisible-scrollbar  shadow-lg right-[1rem]   top-[1.5rem]  w-[375px]  max-w-[375px] max-h-[90vh]  min-h-[350px] flex">
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

export default ChatModal;
