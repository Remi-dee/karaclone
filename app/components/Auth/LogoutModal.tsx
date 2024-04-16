import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import DefaultModal from "../CustomModal/CustomModalAlt";
import { toggleLogoutModal } from "@/redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useLogOutQuery } from "@/redux/features/user/userApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LogoutModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [logout, setLogout] = useState(false);
  const { isSuccess } = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully logged out");
    }
  }, [isSuccess]);

  const logOutHandler = async () => {
    setLogout(true);
    signOut();
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    dispatch(toggleLogoutModal({ data: false }));
    router.push("/login");
  };

  return (
    <DefaultModal
      dismiss={() => {
        dispatch(toggleLogoutModal({ data: false }));
      }}
    >
      <div className="text-center">
        <div className="flex justify-center items-center space-x-5">
          <BiLogOut className="text-2xl text-twinklly-light-red" />
          <h1 className="text-textColor items-center text-2xl font-semibold">
            Logout
          </h1>
        </div>

        <p className="mt-4">Are you sure you want to logout?</p>

        <div className="flex justify-between gap-2 p-10">
          <button
            onClick={() => {
              dispatch(toggleLogoutModal({ data: false }));
            }}
            type="submit"
            className="bg-twinklly-light-blue hover:bg-opacity-70 text-blue border rounded-lg w-48 py-2"
          >
            Cancel
          </button>
          <button
            onClick={logOutHandler}
            type="submit"
            className="bg-twinklly-light-red hover:bg-opacity-70 text-white border rounded-lg w-48 py-2"
          >
            Yes
          </button>
        </div>
      </div>
    </DefaultModal>
  );
};

export default LogoutModal;
