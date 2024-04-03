import { AiOutlineMail, AiOutlineBell } from "react-icons/ai";

const DashboardNavbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white shadow-custom px-[0.8em] sm:px-[2em] py-4 border-b">
      <div className="lg:ml-2 absolute justify-self-start">
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
      </div>
    </nav>
  );
};

export default DashboardNavbar;
