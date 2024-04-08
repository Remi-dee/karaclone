import { useLoadUserQuery } from "@/redux/features/user/userApi";
import {
  ArrowsRightLeftIcon,
  BellIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { AiOutlineMail, AiOutlineBell } from "react-icons/ai";

const DashboardNavbar = () => {
  const { data } = useLoadUserQuery({});
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white shadow-custom px-[0.8em] sm:px-[2em] py-4 border-b">
      <div className="flex fixed top-0 left-0 z-[999] xl:pl-96 w-full lg:justify-between items-center xl:px-32  border-b border-slate-200 bg-white-100">
        <div className="hidden lg:block">
          <p className="text-black-200 font-bold text-lg">Hello {data?.name}</p>
          <p className="text-sm text-gray-300">
            Trade and withdraw funds easily
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center font-bold mr-5">
            <ArrowsRightLeftIcon className="text-purple-700 text-sm h-6 w-6" />
            <p className="text-purple-700">Check out our rates </p>
          </div>
          <BellIcon className="text-gray-300 h-6 w-6" />
          <SunIcon className="text-gray-300 h-6 w-6" />
          <UserCircleIcon className="text-gray-300 h-6 w-6" />
        </div>
      </div>
      {/* <div className="lg:ml-2 absolute justify-self-start">
        <h1 className="text-twinklly-dark-blue font-extrabold text-4xl">
          Twinklly
        </h1>
      </div>
      <div className="flex justify-end items-center z-30">
        <div className="flex items-center justify-between gap-x-[1.875rem]">
          <div className="relative cursor-pointer">
            <AiOutlineMail size={24} />
            <div
              className="h-[1.063rem] w-[1.063rem] bg-[#3333FF] absolute -top-1 -right-2 text-white flex 
            items-center justify-center rounded-lg"
            >
              <p className="text-xs">0</p>
            </div>
          </div>

          <AiOutlineBell className="cursor-pointer" size={24} />
          <div
            className="relative inline-flex items-center justify-center w-[1.25em] sm:w-[2.25em] h-[1.25em] 
          sm:h-[2.25em] overflow-hidden bg-[#425563] rounded-full cursor-pointer"
          />
        </div>
      </div> */}
    </nav>
  );
};

export default DashboardNavbar;
