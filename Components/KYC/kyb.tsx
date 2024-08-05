import { useDispatch } from "react-redux";
import DefaultModal from "../CustomModal/CustomModalAlt";
import {
  toggleKbyBegin,
  toggleStartKybModalSuccess,
} from "@/redux/features/kyc/kycSlice";
import { MdOutlineCheck } from "react-icons/md";
import Link from "next/link";

const KYBModal = () => {
  const dispatch = useDispatch();

  return (
    <DefaultModal
      dismiss={() => {
        dispatch(toggleStartKybModalSuccess({ data: false }));
      }}
    >
      <form className=" w-full px-[0.9rem]  md:px-0   ">
        <div className=" w-full">
          <div className="flex w-full  justify-between">
            <img src="/svg/featured_wallet.svg" alt="" />
            <div></div>
          </div>
          <div>
            <h1 className="text-[#3D3D3D] w-full  text-[17px] leading-[28px] tracking-[-2%] md:text-[24px] mb-5 font-semibold">
              Complete your KYB Verification
            </h1>
            <p className="mt-5 mb-5">This will enable you to:</p>

            <div className="mb-5">
              <ul>
                <li>
                  <div className="mt-4 flex gap-1 text-sm">
                    <MdOutlineCheck className="rounded-full text-center bg-primaryBtn text-white-100 font-montserrat" />
                    Fund your wallet
                  </div>
                </li>
                <li>
                  <div className="mt-4 flex gap-1 text-sm">
                    <MdOutlineCheck className="rounded-full text-center bg-primaryBtn text-white-100 font-montserrat" />
                    Exchange your currency at best rate
                  </div>
                </li>
                <li>
                  <div className="mt-4 flex gap-1 text-sm">
                    <MdOutlineCheck className="rounded-full text-center bg-primaryBtn text-white-100 font-montserrat" />
                    Start a P2P transaction
                  </div>
                </li>
                <li>
                  <div className="mt-4 flex gap-1 text-twinklly-gray text-sm">
                    <MdOutlineCheck className="rounded-full text-center bg-primaryBtn text-white-100 font-montserrat" />
                    Withdraw funds seemlessly
                  </div>
                </li>
              </ul>
            </div>
            {/* <Link href="/kyc-business"> */}
            <button
              onClick={() => {
                dispatch(toggleKbyBegin());
                dispatch(toggleStartKybModalSuccess({ data: false }));
              }}
              className="p-2 my-2 text-[#fff] bg-primaryBtn w-full rounded-lg"
            >
              Begin Verification
            </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
    </DefaultModal>
  );
};

export default KYBModal;
