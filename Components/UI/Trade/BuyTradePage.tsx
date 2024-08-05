"use client";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiSolidCopy } from "react-icons/bi";
import Image from "next/image";
import NGN from "@/public/Images/NGN.png";
import GBP from "@/public/Images/GBP.png";
import USD from "@/public/Images/USD.png";

import { useDispatch, useSelector } from "react-redux";
import {
  addBoughtTrade,
  toggleBuyTradeDisplay,
  toggleBuyTradeSuccessModal,
  toggleCreateTradeStage,
} from "@/redux/features/user/userSlice";
import SelectBank from "./SelectBank";
import TradeModal from "../../CustomModal/TradeModal";
import BeneficaryDetails from "./BeneficaryDetails";
import TradeSuccessModal from "../../CustomModal/TradeSuccessModal";
import TradeTransSuccesss from "./TradeTransSuccess";
import { openModal } from "@/redux/modal/modalSlice";
import { RootState } from "@/redux/store";
import AmountToTrade from "./AmountToTrade";
import {
  useBuyTradeMutation,
  useCurrencyConverterQuery,
  useCurrentRateQuery,
} from "@/redux/features/trade/tradeApi";
import { handleCreateTruelayerPayment } from "./util/truelayerService";
import { useCreatePaymentMutation } from "@/redux/features/truelayer/truelayerApi";
import { useLoadUserQuery } from "@/redux/features/user/userApi";
import {
  isPaymentSuccessSelector,
  setIsPaymentSuccess,
  setPaymentDetails,
} from "@/redux/features/truelayer/truelayerSlice";
import { useMonoWidget } from "@/app/mono/monoServices";
import { toast } from "react-toastify";

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
  const amountToBuy = useSelector((state: RootState) => state.user.amountToBuy);
  const isTradeModalOpen = useSelector(
    (state: RootState) => state.modal.isTradeModalOpen
  );
  const { selectedTrade } = globalState;
  const openMonoWidget = useMonoWidget();

  const isPaymentSuccess = useSelector(isPaymentSuccessSelector);
  const [
    createPayment,
    { isLoading: isCreatingPayment, error: paymentError, data: paymentData },
  ] = useCreatePaymentMutation();
  console.log("our selected trade is", selectedTrade);
  const [
    buyTrade,
    {
      isLoading: isBuyingTrade,
      error: buyTradeError,
      data: buyTradeData,
      isSuccess: isBuyTradeSuccess,
    },
  ] = useBuyTradeMutation();
  const [beneficiaryDetails, setBeneficiaryDetails] = useState({
    beneficiary_bank: "",
    beneficiary_name: "",
    currency: selectedTrade?.currency,
    beneficiary_account: "",
  });
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(toggleCreateTradeStage(1));
    // dispatch(toggleBuyTradeDisplay(1));
  };
  const { data } = useLoadUserQuery({});
  const [selectRecipient, setSelectRecipient] = useState<boolean>(false);
  const [rate, setRate] = useState("");
  const [option, setOption] = useState<string | null>("");
  const [convertedAmount, setConvertedAmount] = useState<string>("");
  const [buyTradeDetails, setBuyTradeDetails] = useState({
    trade_id: "",
    purchase: 0,
    beneficiary_name: "",
    beneficiary_account: "",
    beneficiary_bank: "",
    payment_method: "",
    account_number: "",
    account_name: "",
    bank_name: "",
    purchase_currency: "",
    paid_currency: "",
  });

  const handleOptionChange = (selectedOption: string) => {
    setOption(selectedOption);
  };
  const [selectedItems, setSelectedItems] = useState("");

  const { data: dataForConvertedAmount, error } = useCurrencyConverterQuery(
    {
      amount: Number(amountToBuy),
      sourceCurrency: selectedTrade?.currency,
      targetCurrency: selectedTrade?.exit_currency,
    },
    {
      skip:
        !amountToBuy ||
        !selectedTrade?.currency ||
        !selectedTrade?.exit_currency,
    }
  );

  const dataForCalc = useCurrentRateQuery(
    {
      baseCurrency: selectedTrade?.currency,
      quoteCurrency: selectedTrade?.exit_currency,
    },
    {
      skip:
        selectedTrade?.currency?.length < 2 &&
        selectedTrade?.exit_currency?.length < 2,
    }
  );

  useEffect(() => {
    setRate(dataForCalc?.data?.exchangeRate);
  }, [dataForCalc?.isSuccess, dataForCalc?.data]);

  const handleContinue = (e: any) => {
    e.preventDefault();
    setSelectRecipient(true); // Hide the recipient selection modal
    dispatch(openModal());
  };

  useEffect(() => {
    if (dataForConvertedAmount) {
      setConvertedAmount(dataForConvertedAmount);
    }

    if (error) {
      console.log("we have an error", error);
    }

    console.log("amount to buy is", amountToBuy);

    if (isPaymentSuccess && isBuyTradeSuccess) {
      toast.success("Trade bought successfully");
      // dispatch(toggleCreateTradeStage(4));
      dispatch(addBoughtTrade(buyTradeDetails));
      dispatch(toggleBuyTradeDisplay(true));
    } else {
      ("Unable to buy a trade, please try again");
    }

    if (buyTradeError) {
      toast.error("An error occurred!");
      console.log("error buying trade", buyTradeError);
    }
  }, [
    dataForConvertedAmount,
    isBuyTradeSuccess,
    buyTradeError,
    isPaymentSuccess,
  ]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;
    setBuyTradeDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const amountToBuyHandler = (e: any) => {
    console.log("here is amount to buy", amountToBuy);
  };

  const handleAccountAndNameChange = (item: any) => {
    setBeneficiaryDetails((prevDetails: any) => ({
      ...prevDetails,
      beneficiary_name: item?.name,
      beneficiary_account: item?.account,
      beneficiary_bank: item?.bank_name,
    }));

    console.log("benefi is", item);

    setBuyTradeDetails((prevState) => ({
      ...prevState,
      beneficiary_name: item?.name,
      beneficiary_account: item?.account,
      beneficiary_bank: item?.bank_name,
      trade_id: selectedTrade?.trade_id,
      purchase_currency: selectedTrade?.currency,
      paid_currency: selectedTrade?.exit_currency,
      purchase: Number(amountToBuy),
      rate: selectedTrade.exchange_rate,
    }));
  };

  const handleSelect = async (item: any) => {
    dispatch(addBoughtTrade(buyTradeDetails));
    console.log("buy trade details", buyTradeDetails);
    setSelectedItems(item);

    if (buyTradeDetails?.paid_currency === "NGN") {
      await openMonoWidget();
    } else {
      const { purchase, paid_currency } = buyTradeDetails;
      const paymentCreated = await handleCreateTruelayerPayment(
        { amount: purchase, currency: paid_currency },
        data,
        createPayment,
        dispatch,
        setPaymentDetails
      );
      if (paymentCreated.status === "success") {
        console.log("payment is successful");
        dispatch(setIsPaymentSuccess(true));
        console.log("buy trade is", buyTradeDetails);
        buyTrade({
          ...buyTradeDetails,
          status: "Processing",
        });
        localStorage.setItem("isBuyTrade", "true");
        console.log("buy trade is", {
          ...buyTradeDetails,
          status: "Processing",
        });
        dispatch(toggleBuyTradeDisplay(true));
      }
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
        <div className="w-[513px]  mt-[24px] bg-[#FFFFFF] shadow-xl rounded-md p-[32px_40px_32px_40px]">
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
                    {selectedTrade?.trade_id}
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
                  <Image
                    src={
                      selectedTrade?.currency === "NGN"
                        ? NGN
                        : selectedTrade?.currency === "USD"
                        ? USD
                        : GBP
                    }
                    alt="US logo"
                    width={15}
                    height={15}
                  />

                  <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                    Buying {selectedTrade?.currency}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center my-2 text-sm ">
                <p className="text-gray-300">Rate</p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  {rate + " " + selectedTrade?.exit_currency}{" "}
                  <span> = 1 {selectedTrade?.currency}</span>
                  {/* {selectedTrade?.rate} */}
                </p>
              </div>

              <div className="flex justify-between items-center my-2 text-sm ">
                <p className="text-gray-300">Available Purchase</p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  {selectedTrade?.available_amount +
                    " " +
                    selectedTrade?.currency}
                </p>
              </div>

              <div className="flex justify-between items-center mt-[8px]  text-sm">
                <p className="text-gray-300">Purchase </p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  {amountToBuy + " " + selectedTrade?.currency}
                </p>
              </div>

              <div className="flex justify-between items-center my-2 text-sm">
                <p className="text-gray-300">Price</p>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[14px]">
                  {convertedAmount
                    ? convertedAmount + selectedTrade.exit_currency
                    : "Loading..."}{" "}
                </p>
              </div>

              <div className="flex justify-between items-center my-2 text-sm">
                <p className="text-gray-300">Transaction Fee</p>
                <p className="text-[#D92D20] leading-[24px]  tracking-[-2%] font-[600] text-[14px]">
                  1.52{selectedTrade?.currency}
                </p>
              </div>
              <div>
                <p className="leading-[24px] text-[#1E1E1E] tracking-[-2%] font-[500] text-[16px] pb-1">
                  Amount to be received
                </p>
                <div className="p-1 border border-gray-800 flex  justify-start items-center rounded-md">
                  <div className="bg-gray-500 flex justify-start py-1 items-center px-4 gap-4 rounded-md">
                    <Image
                      src={
                        selectedTrade?.currency === "NGN"
                          ? NGN
                          : selectedTrade?.currency === "USD"
                          ? USD
                          : GBP
                      }
                      alt=""
                      width={20}
                      height={20}
                    />
                    <p className="text-xs">{selectedTrade?.currency}</p>
                  </div>
                  <p className="text-gray-300 p-[8px_16px_8px_16px]">
                    {Number(amountToBuy) - 1.52}
                  </p>
                </div>
              </div>
              <hr className="mt-2 border-gray-900 border" />
              <h3 className="text-[18px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-bold">
                Payment Details
              </h3>
              <div>
                <label
                  htmlFor=""
                  className=" text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
                >
                  Payment Method
                </label>
                <div className="h-[46px] w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px] border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                  <select
                    name="payment_method"
                    className="w-full text-gray-300 outline-none border-none text-xs p-1"
                    id=""
                    value={buyTradeDetails?.payment_method}
                    onChange={handleSelectChange}
                  >
                    <option value="" selected disabled>
                      Select Payment Method
                    </option>

                    {["Wallet", "Direct Deposit", "Connect Bank App"].map(
                      (method, index) => (
                        <option
                          key={index}
                          value={method}
                          className="text-[400] text-[16px] leading-[24px] w-full"
                        >
                          {method}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {buyTradeDetails?.payment_method === "Direct Deposit" ? (
                  <>
                    <div>
                      <label
                        htmlFor=""
                        className=" text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
                      >
                        Bank Name
                      </label>
                      <div className="h-[46px] w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                        <select
                          name="bank_name"
                          onChange={handleSelectChange}
                          className="w-full outline-none border-none text-gray-300 p-1 text-xs"
                          id=""
                        >
                          <option value="" disabled selected>
                            Select Bank
                          </option>

                          <option
                            value=" Zenith Bank"
                            className="text-300 w-full"
                          >
                            Zenith Bank
                          </option>
                          <option value="Wema Bank" className="text-300 w-full">
                            Wema Bank
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className=" text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
                      >
                        Account Number
                      </label>
                      <div className="h-[46px] w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                        <input
                          name="account_number"
                          onChange={handleSelectChange}
                          type="text"
                          className="outline-none placeholder:gray-200 placeholder:text-xs"
                          placeholder="Enter Account Number"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className=" text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
                      >
                        Account Name
                      </label>
                      <div className="h-[46px] w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                        <input
                          type="text"
                          onChange={handleSelectChange}
                          name="account_name"
                          className="outline-none placeholder:gray-200 placeholder:text-xs"
                          placeholder="Enter Account name"
                        />
                      </div>
                    </div>
                  </>
                ) : null}
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
            <SelectBank
              onAccountAndNameChange={handleAccountAndNameChange}
              onSelect={handleSelect}
            />
          ) : selectedItems === "itemid" ? (
            <BeneficaryDetails
              currency={beneficiaryDetails?.currency}
              onSelect={handleSelect}
            />
          ) : (
            <SelectBank
              onAccountAndNameChange={handleAccountAndNameChange}
              onSelect={handleSelect}
            />
          )}
        </TradeModal>
      ) : null}

      {/* {beneficiaryDetails?.beneficiary_name !== "" &&
        beneficiaryDetails?.beneficiary_account !== "" &&
        selectedItems !== "itemid" &&
        selectedItems !== "" && (
          <TradeSuccessModal>
            <TradeTransSuccesss />
          </TradeSuccessModal>
        )} */}

      {isTradeModalOpen && (
        <TradeSuccessModal>
          <AmountToTrade
            handleAmountChange={amountToBuyHandler}
            trade={selectedTrade}
          />
        </TradeSuccessModal>
      )}
    </div>
  );
};

export default BuyTrade;
