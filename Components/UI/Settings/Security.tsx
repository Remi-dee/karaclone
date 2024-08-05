import Image from "next/image";
import React, { useEffect, useState } from "react";
import rightarrow from "@/public/svg/arrow-right.svg";

import { useDispatch } from "react-redux";
import { openModal } from "@/redux/modal/modalSlice";

import { toast } from "react-toastify";
import {
  useDisableTwoFAMutation,
  useEnableTwoFAMutation,
  useFetchTwoFAStatusQuery,
} from "@/redux/features/user/userApi";
import { useRouter } from "next/navigation";
import CustomModal from "@/Components/CustomModal/CustomModal";
import DeactivateVerification from "@/Components/Auth/DeactivateVerification";
import YesNoDeactivate from "@/Components/Auth/YesNoDeactivate";

function Security() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [verificationResponse, setVerificationResponse] = useState(false);
  const [isTwoFAEnabled, setIsTwoFAEnabled] = useState(false);
  const { data: twoFAStatus, refetch: refetchTwoFAStatus } =
    useFetchTwoFAStatusQuery({});

  useEffect(() => {
    if (twoFAStatus) {
      setIsTwoFAEnabled(twoFAStatus.isTwoFactorEnabled);
    }
  }, [twoFAStatus]);

  const handleDeactive = () => {
    dispatch(openModal());
  };

  const [enableTwoFA] = useEnableTwoFAMutation();
  const [disableTwoFA] = useDisableTwoFAMutation();

  const handleActivate = async () => {
    try {
      const response = await enableTwoFA({}).unwrap();
      setIsTwoFAEnabled(true);
      toast("2FA activated successfully");
    } catch (error) {
      console.error("Error enabling 2FA:", error);
      toast(`Error: ${error.message}`);
    }
  };

  const handleDeactivate = async () => {
    try {
      const response = await disableTwoFA({}).unwrap();
      setIsTwoFAEnabled(false);
      toast("2FA deactivated successfully");
    } catch (error) {
      console.error("Error disabling 2FA:", error);
      toast(`Error: ${error.message}`);
    }
  };

  const handleResonse = (e: boolean) => {
    setVerificationResponse(e);
  };

  return (
    <div>
      <div className="  lg:h-[252px] flex  flex-col gap-[24px] bg-[#FFFFFF] h-max w-[100%]  p-[24px] rounded-[8px]">
        <div className=" h-full  min-h-[44px] border-b mb-0 md:mb-[0.2rem] pb-[1rem] md:pb-[0.6rem]   border-b-[#EFEFEF]">
          <h1 className="  font-bold leading-[28px] tracking-[-2%] text-[18px]   ">
            Two-factor authentication
          </h1>

          <p className="  mt-[8px] text-[#656565] text-[14px] font-medium leading-[20px] tracking-[-2%]    ">
            Help protect your account from unauthorised access by requiring a
            second authentication method in addition to your password
          </p>
        </div>

        <section className="  justify-between    h-full  flex flex-col md:flex-row content-between  w-full">
          <div className="inline-flex flex-col gap-[8px]  w-full max-w-[100%] md:max-w-[45%] flex-1">
            <h2 className="text-[#A3ADBF]">Email</h2>
            <p className="text-[#656565] text-[14px] leading-[20px] tracking-[-2%]">
              Use your email to receive your authentication code to enter when
              you log in to your Karasell account
            </p>
            {isTwoFAEnabled ? (
              <button
                onClick={handleDeactivate}
                className="flex items-center content-center gap-[8px]"
              >
                <p className="text-[#F04438] tracking-[-2%] font-medium text-[14px] leading-[20px]">
                  Deactivate <span className="ml-[8px]">{">"}</span>
                </p>
              </button>
            ) : (
              <button
                onClick={handleActivate}
                className="flex items-center content-center gap-[8px]"
              >
                <p className="text-[#7F56D9] tracking-[-2%] font-medium text-[14px] leading-[20px]">
                  Activate <span className="ml-[8px]">{">"}</span>
                </p>
              </button>
            )}
          </div>

          <div className=" w-[0.5px] h-full bg-[#DCDCDC] inline-flex"></div>

          <div className=" inline-flex flex-col gap-[8px] md:max-w-[45%] w-full max-w-full mt-[1.5rem] md:mt-0   flex-1 ">
            <h2 className=" text-[#A3ADBF]     ">AUTHENTICATOR APP</h2>

            <p className="  text-[#656565]  text-[14px] leading-[20px] tracking-[-2%] ">
              Use a mobile authentication app to get a verification code to
              enter every time you log in to your Karasell account
            </p>

            <span className=" flex   items-center content-center gap-[8px]  ">
              <p
                onClick={handleDeactive}
                className="text-[#F04438] cursor-pointer tracking-[-2%] font-medium text-[14px] leading-[20px]  "
              >
                Deactivate <span> {">"} </span>
              </p>{" "}
              {/* <Image
                src={rightarrow}
                alt=""
                className=" w-[10px]  max-w-[10px]  max-h-[10px]  h-[10px]   "
              />{" "} */}
            </span>
          </div>

          {/* <div></div> */}
        </section>
      </div>

      <div className="  h-full md:h-[132px] flex mt-[24px]  flex-col gap-[24px] bg-[#FFFFFF] w-[100%]  p-[24px] rounded-[8px]">
        <div className="  h-full flex flex-col gap-[8px] ">
          <h1 className="  font-bold leading-[28px] tracking-[-2%] text-[18px]   ">
            Password Reset
          </h1>

          <p className="  mt-[8px] text-[#656565] text-[14px] font-medium leading-[20px] tracking-[-2%]    ">
            Help protect your account from unauthorised access by requiring a
            second authentication method in addition to your password
          </p>

          <span
            onClick={() => router.push("/forgot-password")}
            className=" flex  cursor-pointer  items-center content-center gap-[8px]  "
          >
            <p className="text-[#7F56D9]  tracking-[-2%] font-medium text-[14px] leading-[20px]  ">
              Change Password
              <span className="ml-[8px]">{">"}</span>
            </p>{" "}
          </span>
        </div>
      </div>

      <CustomModal>
        {verificationResponse ? (
          <YesNoDeactivate setVerificationSuccess={handleResonse} />
        ) : (
          <DeactivateVerification setVerificationSuccess={handleResonse} />
        )}
      </CustomModal>
    </div>
  );
}

export default Security;
