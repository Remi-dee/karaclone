import { CustomModalTypes } from "@/app/interfaces/general";

const DefaultModal: React.FC<CustomModalTypes> = ({
  children,
  dismiss,
  className,
}) => {
  return (
    <div
      id="medium-modal"
      tabIndex={-1}
      className="container overflow-y-auto overflow-x-hidden fixed top-0 
      right-0 left-0 z-[1000] min-w-[100vw] m md:inset-0 min-h-screen backdrop-blur-sm 
      backdrop-brightness-50"
    >
      <div
        className={`${className} flex flex-col sm:flex-row sm:items-center justify-center min-h-screen `}
      >
        <div className="relative bg-[#F6F6F8] sm:px-14 rounded-3xl shadow p-2 m-8">
          <button
            type="button"
            className="absolute top-5 right-5 text-[#002C79] hover:text-white p-3 
            bg-[#F6F6F8] hover:bg-dark-blue rounded-full cursor-pointer shadow"
            data-modal-toggle="medium-modal"
            onClick={dismiss}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="mt-8 pb-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultModal;
