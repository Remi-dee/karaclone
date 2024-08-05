"use client";

import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import arrowRight from "@/public/svg/arrow-right.svg";
import {
  kycSelector,
  toggleStartKybModalSuccess,
  toggleStartKycModalSuccess,
} from "@/redux/features/kyc/kycSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetAllUserWalletsQuery,
  useLoadUserQuery,
} from "@/redux/features/user/userApi";
import QuickActionCard from "../UI/Home/QuickActionCard";
import TransactionTable from "../UI/Transactions/TransactionTable";
import BalanceDropdown from "../BalanceDropdown";
import KycModal from "../UI/KYC/Kyc";
import KYBModal from "../UI/KYC/kyb";

function DashHomeAfterKyc() {
  const { startKycModalOpen, startKybModalOpen } = useSelector(kycSelector);

  const {
    data: wallets,
    error,
    isLoading,
  } = useGetAllUserWalletsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const [selectedWallet, setSelectedWallet] = useState<any>(null);
  const { data } = useLoadUserQuery({});
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (wallets && wallets?.length > 0) {
      setSelectedWallet(wallets[0]);
    }
  }, [wallets]);

  return (
    <div className=" w-full  pb-[1rem]">
      <div className="block xl:flex items-center gap-4">
        <div className="  flex flex-col gap-2 h-full">
          {/* kyc verification card */}

          {data?.user?.account_type === "individual" ? (
            <div className="relative dashHomeImage w-full p-[1rem] flex-1 grow overflow-hidden min-h-fit rounded-2xl">
              <div className="relative grid  grid-cols-[72%_35%]  lg:flex text-white-100 lg:w-[460px] lg:h-[200px]  w-full h-[145.39px] ">
                <div className=" flex relative gap-[14px] lg:gap-[25px] top-0 lg:top-[34px]  flex-col lg:w-[320px] lg:h-[88px] w-[95%] h-full">
                  <div className=" w-full">
                    <p className="font-bold  text-xs  leading-[28px] tracking-[-2%] text-[#EFEFEF] ">
                      Complete your account set up by verifying your KYC
                    </p>
                    <p className="text-xs   leading-[24px] text-[#BDBDBD]">
                      Verify your KYC to access all features
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(
                        toggleStartKycModalSuccess({
                          data: true,
                        })
                      );
                    }}
                    className="rounded-lg  md:h-max w-[114px] md:w-max bg-[#7F56D9] font-semibold  text-white-100 tracking-[-2%] leading-[20px] md:p-[14px] p-[7.27px_7.27px]  text-[10px] md:text-[12px] text-nowrap  block focus:outline-0  "
                  >
                    Start KYC Verification
                  </button>
                </div>
                <Image
                  src="/svg/cardImage.svg"
                  width={200}
                  height={212}
                  className=" lg:w-[200px] lg:h-[200px]  w-[132.5px] min-h-[128.43px] mix-blend-normal absolute lg:absolute  right-[-0.7rem] top-[-0.5rem] lg:right-[-2.2rem] "
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div className="relative dashHomeImage w-full p-[1rem] flex-1 grow overflow-hidden min-h-fit rounded-2xl ">
              {/* <img
              src="/Images/Background.png"
              className="absolute top-0 bottom-0  right-0 left-0 bg-cover "
              alt=""
            /> */}
              <div className="relative grid  grid-cols-[72%_35%]  lg:flex text-white-100 md:w-[460px] lg:h-[200px]  w-full h-[145.39px] ">
                <div className=" flex relative gap-[14px] lg:gap-[25px] top-0 lg:top-[34px]  flex-col lg:w-[320px] lg:h-[88px] w-[95%] h-full">
                  <div className="  w-full">
                    <p className="font-bold  text-xs  leading-[28px] tracking-[-2%] text-[#EFEFEF] ">
                      Complete your account set up by verifying your KYB
                    </p>
                    <p className=" text-xs   leading-[24px] text-[#BDBDBD]">
                      Verify your KYB to access all features
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(
                        toggleStartKybModalSuccess({
                          data: true,
                        })
                      );
                    }}
                    className="rounded-lg  md:h-max w-[114px] md:w-max bg-[#7F56D9] font-semibold  text-white-100 tracking-[-2%] leading-[20px] md:p-[14px] p-[7.27px_7.27px]  text-[10px] md:text-[12px] text-nowrap  block focus:outline-0  "
                  >
                    Start KYB Verification
                  </button>
                </div>

                <Image
                  src="/svg/cardImage.svg"
                  width={200}
                  height={212}
                  className=" lg:w-[200px] lg:h-[ 200px]  w-[132.5px] min-h-[128.43px] mix-blend-normal absolute lg:absolute  right-[-0.7rem] top-[-0.5rem] lg:right-[-2.2rem] "
                  alt=""
                />
              </div>
            </div>
          )}

          {/* Wallet balances cards */}

          <div className=" bg-white-100 min-h-[95px] h-[95px]  xl:min-h-[166px] mt-[16px] rounded-xl flex-1 grow flex xl-mb-0  justify-between items-center border border-slate-200  w-full  gap-[16px]">
            <div className=" bg-white-100 w-full  rounded-md p-4">
              <div className=" flex justify-between content-between ">
                <div className="flex items-center gap-[16px]">
                  <h2 className="  text-[#7C7C7C] leading-[24px] text-[16px]">
                    Wallet Balance
                  </h2>

                  <span className="text-gray-300">
                    <FaEye className="text-[24px] " />
                  </span>
                </div>
                <div className="">
                  <div>
                    <BalanceDropdown
                      wallets={wallets}
                      selectedWallet={selectedWallet}
                      setSelectedWallet={setSelectedWallet}
                    />
                  </div>
                </div>
              </div>
              <p className="text-[32px] flex   items-end gap-[4px] leading-[38.4px] tracking-[-2%] font-bold   text-[#1E1E1E] mt-2">
                {selectedWallet?.escrow_balance.toFixed(2)}
                <span className="text-[#7C7C7C] text-[16px] pb-[2px] leading-[24px] ">
                  {selectedWallet?.currency_code}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Quick actions cards*/}
        <QuickActionCard />
      </div>

      {/* table */}
      <div className=" border h-[322px] lg:h-[482px] mt-[24px]   text-[20px] leading-[24px] border-slate-200 tracking-[-2%] bg-white-100 rounded-lg overflow-hidden w-full">
        <div className="p-6  mx-auto bg-white    border-b border-slate-200 flex items-center justify-between space-x-4">
          <div className="text-[16px] leading-[24px] md:text-[20px] font-bold tracking-[-2%] text-[#1E1E1E]">
            Recent Transactions
          </div>
          <div className=" flex gap-[1px] justify-center items-center">
            <a href="#" className="text-[#3D3D3D] text-[16px] leading-[24px]">
              See All
            </a>
            <Image
              src={arrowRight}
              alt=""
              className="inline-flex h-[15.84px] width-[7px]"
              width={24}
              height={24}
            />
          </div>
        </div>

        <TransactionTable />
      </div>
      {startKycModalOpen && <KycModal />}
      {startKybModalOpen && <KYBModal />}
    </div>
  );
}

export default DashHomeAfterKyc;
