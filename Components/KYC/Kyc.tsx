import { useDispatch } from "react-redux";
import DefaultModal from "../CustomModal/CustomModalAlt";
import {
  toggleStartKycModalSuccess,
  toggleKycBegin,
} from "@/redux/features/kyc/kycSlice";
import { MdOutlineCheck } from "react-icons/md";
import Link from "next/link";

const KycModal = () => {
  const dispatch = useDispatch();

  return (
    <DefaultModal
      dismiss={() => {
        dispatch(toggleStartKycModalSuccess({ data: false }));
      }}
    >
      <form>
        <div>
          <div className="flex justify-between">
            <img src="/svg/featured_wallet.svg" alt="" />
            <div></div>
          </div>
          <div>
            <h1 className="text-black text-[24px] mb-5 font-semibold">
              Complete your KYC Verification
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

            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(toggleStartKycModalSuccess({ data: false }));
                dispatch(toggleKycBegin());
              }}
              className="p-2 my-2 text-[#fff] bg-primaryBtn w-full rounded-lg"
            >
              Begin Verification
            </button>
          </div>
        </div>
      </form>
    </DefaultModal>
  );
};

export default KycModal;