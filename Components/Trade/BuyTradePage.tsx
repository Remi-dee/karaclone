"use client";
import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiSolidCopy } from "react-icons/bi";
import Image from "next/image";
import USD from "@/public/Images/USD.png";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleBuyTradeDisplay,
  toggleBuyTradeSuccessModal,
  toggleCreateTradeStage,
} from "@/redux/features/user/userSlice";
import SelectBank from "./SelectBank";
import TradeModal from "../CustomModal/TradeModal";
import BeneficaryDetails from "./BeneficaryDetails";
import TradeSuccessModal from "../CustomModal/TradeSuccessModal";
import TradeTransSuccesss from "./TradeTransSuccess";

function formatReadableDate(isoDateString: string): string {
  const date = new Date(isoDateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}

const BuyTrade = () => {
  const globalState = useSelector((state: any) => state.user);
  const { selectedTrade } = globalState;
  console.log(selectedTrade);
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(toggleCreateTradeStage(1));
    // dispatch(toggleBuyTradeDisplay(1));
  };
  const [selectRecipient, setSelectRecipient] = useState<boolean>(false);
  const [option, setOption] = useState<string | null>("");

  const [selectedComponent, setSelectedComponent] =
    useState<React.ReactNode>(null);

  const handleOptionChange = (selectedOption: string) => {
    setOption(selectedOption);
  };
  const [selectedItems, setSelectedItems] = useState("");

  const handleSelect = (item: any) => {
    console.log(item);
    setSelectedItems(item);
  };
  const handleContinue = () => {
    setSelectRecipient(true); // Hide the recipient selection modal
  };

  return (
    <div className="p-0 m-0 box-border">
      <div
        onClick={handleBack}
        className=" mx-6 flex justify-start items-center gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold">Go-Back</p>
      </div>
      <div className="flex mt-[32px]  flex-col justify-center items-center ">
        <div className=" flex flex-col gap-[16px] w-[513px] text-center">
          <h2 className="text-[#1E1E1E] font-bold  text-[24px] leading-[28.8px] ">
            Buy Trade
          </h2>
          <p className="text-[16px] w-[500px] text-[#7C7C7C] leading-[24px] text-center ">
            Please note that all transactions may take a few minutes to process.
            Rest assured, all transactions are safe and secure.
          </p>
        </div>
        <div className="w-[513px] h-[660px] mt-[24px] bg-[#FFFFFF] shadow-xl rounded-md p-[32px_40px_32px_40px]">
          <div className="w-[433px] mx-auto">
            <h2 className="font-bold  leading-[28px] text-[18px] tracking-[-2%] ">
              Transaction Details
            </h2>

            <div className="flex mt-[16px] py-[8px] gap-[16px] flex-col">
              <div className=" justify-between items-center text-sm">
                <div className="flex  justify-between items-center text-sm w-full">
                  <div>
                    <p className="text-gray-300">Transaction Status</p>
                  </div>
                  <div className="flex justify-start items-center rounded-md px-2 p-1  gap-1 my-2 bg-[#FFF0D5]">
                    <span className="w-[10px] h-[10px] rounded-md bg-[#F79009]"></span>
                    <p className="text-[#F79009] text-xs">Processing</p>
                  </div>
                </div>
              </div>

              <div className="flex  justify-between items-center text-sm">
                <p className="text-gray-300">Trade ID</p>
                <div className="flex justify-start items-center  gap-1  ">
                  <span className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                    {selectedTrade?.tradeId}
                  </span>
                  <BiSolidCopy className="text-primaryBtn cursor-pointer" />
                </div>
              </div>

              <div className="flex justify-between items-center my-2 text-sm">
                <p className="text-gray-300">Date & Time</p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  {/* 12/01/2024 <span> | 2.00PM</span> */}
                  {formatReadableDate(selectedTrade?.createdAt)}
                </p>
              </div>

              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-300">Transaction Type</p>
                <div className="flex justify-start items-center  gap-1  ">
                  <Image src={USD} alt="US logo" width={15} height={15} />

                  <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                    Buying {selectedTrade?.currency}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center my-2 text-sm ">
                <p className="text-gray-300">Rate</p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  {/* 1400NGN <span> = 1USD</span> */}
                  {selectedTrade?.rate}
                </p>
              </div>

              <div className="flex justify-between items-center mt-[8px]  text-sm">
                <p className="text-gray-300">Purchase </p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  {selectedTrade?.amount + " " + selectedTrade?.currency}
                </p>
              </div>

              <div className="flex justify-between items-center my-2 text-sm">
                <p className="text-gray-300">Price</p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  200,000NGN
                </p>
              </div>

              <div className="flex justify-between items-center my-2 text-sm">
                <p className="text-gray-300">Transaction Fee</p>
                <p className="text-[#D92D20] leading-[24px]  tracking-[-2%] font-[600] text-[14px]">
                  1.52USD
                </p>
              </div>
              <div>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[16px] pb-1">
                  Amount to be received
                </p>
                <div className="p-1 border border-gray-800 flex  justify-start items-center rounded-md">
                  <div className="bg-gray-500 flex justify-start py-1 items-center px-4 gap-4 rounded-md">
                    <Image src={USD} alt="" width={20} height={20} />
                    <p className="text-xs">USD</p>
                  </div>
                  <p className="text-gray-300 p-[8px_16px_8px_16px]">148.48</p>
                </div>
              </div>

              <button
                onClick={handleContinue}
                className={
                  "p-2   text-white-100 bg-primaryBtn w-full rounded-lg"
                }
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[513px] text-[#000000] mt-[24px] font-bold">
          <p className=" text-center text-[16px] leading-[24px]">
            Note: If the funds remain unused for 24 hours, they will
            automatically be returned to your account.
          </p>
        </div>
      </div>
      {selectRecipient ? (
        <TradeModal>
          {selectedItems === "" ? (
            <SelectBank onSelect={handleSelect} />
          ) : selectedItems === "itemid" ? (
            <BeneficaryDetails onSelect={handleSelect} />
          ) : (
            <TradeSuccessModal>
              <TradeTransSuccesss />
            </TradeSuccessModal>
          )}
        </TradeModal>
      ) : null}
      {/* {selectedComponent} */}
    </div>
  );
};

export default BuyTrade;
