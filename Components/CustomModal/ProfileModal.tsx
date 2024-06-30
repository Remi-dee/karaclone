import { RootState } from "@/redux/store";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleProfileModal } from "@/redux/modal/modalSlice";

type CustomModalprops = {
  children: ReactNode;
};

const ProfileModal: React.FC<CustomModalprops> = ({ children }) => {
  const isProfileModalOpen = useSelector(
    (state: RootState) => state.modal.isProfileModalOpen
  );
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(toggleProfileModal());
  };
  const stopPropagationHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      {isProfileModalOpen && (
        <div
          onClick={closeModalHandler}
          className="fixed  top-0 left-0 right-0 w-screen h-screen flex justify-center items-center inset-0 z-[50000]  overflow-auto bg-[#989898] bg-opacity-10"
        >
          <div className=" " onClick={stopPropagationHandler}>
            <div className="absolute bg-[white]  overflow-y-auto    shadow-lg right-[1.7rem]   top-[6rem]  w-[375px]  max-w-[284px] max-h-[284px]  min-h-[284px] flex">
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

export default ProfileModal;
