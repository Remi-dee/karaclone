"use client";
import { ReactElement, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiSolidCopy } from "react-icons/bi";
import Image from "next/image";
import USD from "@/public/Images/USD.png";
import { BiSolidBank } from "react-icons/bi";
import NGN from "@/public/Images/NGN.png";
import TradeSuccess from "@/app/(trade)/buy-trade/TradeSuccess";
import AddRecipient from "@/app/(trade)/buy-trade/AddRecipient";
import { useDispatch } from "react-redux";
import { toggleBuyTradeDisplay } from "@/redux/features/user/userSlice";

const BuyTrade = () => {
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(toggleBuyTradeDisplay(1));
  };
  const [selectRecipient, setSelectRecipient] = useState<boolean>(false);
  const [option, setOption] = useState<string | null>("");

  const [selectedComponent, setSelectedComponent] =
    useState<React.ReactNode>(null);

  const handleOptionChange = (selectedOption: string) => {
    setOption(selectedOption);
  };

  const handleContinue = () => {
    setSelectRecipient(false); // Hide the recipient selection modal
    // Render the component based on the selected option
    switch (option) {
      case "option 1":
      case "option 2":
        setSelectedComponent(<TradeSuccess />);
        break;
      case "add recipient":
        setSelectedComponent(<AddRecipient />);
        break;
      default:
        setSelectedComponent(null);
        break;
    }
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
                <p className="text-gray-300">Transaction ID</p>
                <div className="flex justify-start items-center  gap-1  ">
                  <span className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                    01234567893r3d-fdf4rwd
                  </span>
                  <BiSolidCopy className="text-primaryBtn cursor-pointer" />
                </div>
              </div>

              <div className="flex justify-between items-center my-2 text-sm">
                <p className="text-gray-300">Date & Time</p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  12/01/2024 <span> | 2.00PM</span>
                </p>
              </div>

              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-300">Transaction Type</p>
                <div className="flex justify-start items-center  gap-1  ">
                  <Image src={USD} alt="US logo" width={15} height={15} />

                  <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                    Buying USD
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center my-2 text-sm ">
                <p className="text-gray-300">Rate</p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  1400NGN <span> = 1USD</span>
                </p>
              </div>

              <div className="flex justify-between items-center mt-[8px]  text-sm">
                <p className="text-gray-300">Purchase</p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  150USD
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
                onClick={() => setSelectRecipient(true)}
                className={`p-2   text-white-100 bg-primaryBtn w-full rounded-lg `}
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
      {selectRecipient && (
        <div className="fixed top-0 left-0 w-screen bg-opacity-80 h-screen bg-black-200">
          <div className="w-[400px]  mx-auto rounded-md bg-white-100 mt-20 shadow-lg">
            <div className="w-[380px] flex flex-col justify-start items-center mx-auto">
              <div className="w-[30px] h-[30px] flex justify-center items-center border border-gray-700 mt-4 rounded-sm shadow-lg">
                <BiSolidBank className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold py-2">Select Beneficiary</h3>
              <p className="text-gray-300 text-xs text-center">
                Please select a beneficiary from the list of existing ones, or
                alternatively, you can choose to add a new beneficiary.
              </p>
              <div
                onClick={() => handleOptionChange("option 1")}
                className={`w-full cursor-pointer flex justify-between items-center rounded-md my-4 border  p-1 ${
                  option === "option 1"
                    ? "border-primaryBtn"
                    : "border-gray-300"
                }`}
              >
                <div className="flex justify-start items-start gap-2">
                  <input
                    type="radio"
                    checked={option === "option 1"}
                    onChange={() => handleOptionChange("option 1")}
                    className="w-[20px]"
                  />

                  <div>
                    <p className="text-xs font-semibold">Ogunsola Omorinsola</p>
                    <span className="text-xs text-gray-300">8299011604</span>
                  </div>
                </div>
                <Image src={USD} alt="" width={20} height={20} />
              </div>
              <div
                onClick={() => handleOptionChange("option 2")}
                className={`w-full cursor-pointer flex justify-between items-center rounded-md my-4 border  p-1 ${
                  option === "option 2"
                    ? "border-primaryBtn"
                    : "border-gray-300"
                }`}
              >
                <div className="flex justify-start items-start gap-2">
                  <input
                    type="radio"
                    checked={option === "option 2"}
                    onChange={() => handleOptionChange("option 2")}
                    className="w-[20px]"
                  />

                  <div>
                    <p className="text-xs font-semibold">Afuwape Abiodun</p>
                    <span className="text-xs text-gray-300">8299011604</span>
                  </div>
                </div>
                <Image src={NGN} alt="" width={20} height={20} />
              </div>
              <div
                onClick={() => handleOptionChange("add recipient")}
                className="w-full cursor-pointer flex justify-start items-center gap-6 rounded-md my-4 border border-gray-300 p-3"
              >
                <input
                  type="radio"
                  checked={option === "add recipient"}
                  onChange={() => handleOptionChange("add recipient")}
                />
                <p className="text-primaryBtn text-xs font-semibold">
                  New Recipient
                </p>
              </div>
              <button
                onClick={handleContinue}
                disabled={!option}
                className={`p-2  text-white-100 bg-primaryBtn w-full rounded-lg ${
                  !option && "opacity-50 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      {selectedComponent}
    </div>
  );
};

export default BuyTrade;
