"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import NGN from "@/public/Images/NGN.png";
import GBP from "@/public/Images/GBP.png";
import USD from "@/public/Images/USD.png";
import {
  toggleCreateTrade,
  toggleCreateTradeStage,
  addCreatedTrade,
} from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import {
  useCreateTradeMutation,
  useCurrencyConverterQuery,
  useCurrentRateQuery,
  useGetAllCurrencyPairsQuery,
} from "@/redux/features/user/userApi";

import CreateTradeDropDown from "../CustomDropdown/CreateTradeDropDown";
import { toast } from "react-toastify";
import TradeModal from "../CustomModal/TradeModal";
import TradeSuccessModal from "../CustomModal/TradeSuccessModal";
import BeneficaryDetails from "./BeneficaryDetails";
import SelectBank from "./SelectBank";
import TradeTransSuccesss from "./TradeTransSuccess";
import { openModal } from "@/redux/modal/modalSlice";
import Image from "next/image";
interface TradeDetails {
  currency: string;
  exit_currency: string;
  rate: number;
  amount: string;
  minimumBid: string;
  bank_name: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_account: string;
}
const CreateTrade = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState<string>("");
  const [rate, setrate] = useState<number | null | any>(null);
  const [showTradeDetails, setShowTradeDetails] = useState(false);

  const [benefiaryCurrency, setbenefiaryCurrency] = useState("");

  const [createTradeDetails, setcreateTradeDetails] = useState({
    currency: "",
    exit_currency: "",
    rate: rate,
    amount: "",
    minimumBid: "",
    bank_name: "",
    account_number: "",
    beneficiary_name: "",
    beneficiary_account: "",
    beneficiary_bank: "",
    vat_fee: "XX",
    sold: 0,
    payment_method: "",
    additional_information: "",
    transaction_fee: "XX",
  });

  const handleAccountAndNameChange = (item: any) => {
    setcreateTradeDetails({
      ...createTradeDetails,
      beneficiary_name: item?.name,
    });
    setcreateTradeDetails((prevDetails) => ({
      ...prevDetails,
      beneficiary_account: item?.account,
    }));
    setcreateTradeDetails((prevDetails) => ({
      ...prevDetails,
      beneficiary_bank: item?.bank_name,
    }));
    return setbenefiaryCurrency(item?.currency);
  };

  //manange modal
  const [selectRecipient, setSelectRecipient] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string | number>("");
  const HandleRecepientModal = () => {
    setSelectRecipient(true); // Hide the recipient selection modal
  };

  const handleSelect = (item: string | number) => {
    // console.log(item);
    setSelectedItems(item);
  };

  const isFormValid = (): boolean => {
    for (const key in createTradeDetails) {
      if (createTradeDetails[key as keyof TradeDetails] === "") {
        return false;
      }
    }
    return true;
  };
  const [converstionDataSource, setConverstionDataSource] = useState<string[]>(
    []
  );
  const [converstionDataExit, setConverstionDataExit] = useState<string[]>([]);

  const [createTrade, { isLoading, error, data, isSuccess }] =
    useCreateTradeMutation();

  const HandleTradeDetails = (e: any) => {
    e.preventDefault();
    console.log(createTradeDetails);
    if (!isFormValid()) {
      toast.warn("Please fill in all the fields.");
      return;
    }
    // form submission handled here

    createTrade(createTradeDetails);
    // console.log(data);
    console.log(error);
    // setShowTradeDetails(true);
  };

  useEffect(() => {
    // dispatch(toggleCreateTradeStage(3));
    if (isSuccess) {
      toast.success("Trade created successfully");
      dispatch(toggleCreateTradeStage(3));
      dispatch(addCreatedTrade(data?.trade));
    }
    if (error) {
      toast.error("An error occurred!");
    }
  }, [isSuccess, error]);

  const handleCurrency = (value: string) => {
    // console.log(value);
    setcreateTradeDetails({ ...createTradeDetails, currency: value });
    setCurrency(value);
  };
  const handleExitCurrency = (value: string) => {
    setcreateTradeDetails({ ...createTradeDetails, exit_currency: value });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | any>): void => {
    const { name, value } = event.target;
    if (name === "amount") {
      const newValue = value.replace(/[^0-9]/g, "");

      return setcreateTradeDetails({ ...createTradeDetails, amount: newValue });
    }
    setcreateTradeDetails((prevState) => ({
      ...prevState,
      [name]: name === "rate" ? Number(value) : value,
    }));
  };
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;
    // console.log(value);
    setcreateTradeDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleBack = () => {
    dispatch(toggleCreateTradeStage(1));

    // router.push("/dashboard/P2P-trade");
  };

  //get all possible conversions

  const possibleConverstion = useGetAllCurrencyPairsQuery("");
  // console.log(possibleConverstion);
  //currency converter
  useEffect(() => {
    possibleConverstion?.data?.results?.currencyPairs?.map((e: any) => {
      setConverstionDataExit((prevItems) => [...prevItems, e?.base_currency]);

      setConverstionDataSource((prevItems) => [
        ...prevItems,
        e?.quote_currency,
      ]);
    });
  }, [possibleConverstion?.isSuccess]);
  const dataForCalc = useCurrentRateQuery(
    {
      baseCurrency: createTradeDetails?.currency,
      quoteCurrency: createTradeDetails?.exit_currency,
    },
    {
      skip:
        createTradeDetails?.currency?.length < 2 &&
        createTradeDetails?.exit_currency?.length < 2,
    }
  );

  console.log(dataForCalc);

  useEffect(() => {
    setrate(dataForCalc?.data?.exchangeRate);
    setcreateTradeDetails({
      ...createTradeDetails,
      rate: dataForCalc?.data?.exchangeRate,
    });
  }, [dataForCalc?.isSuccess, dataForCalc?.data]);

  const beneficicaryHandlder = (e: any) => {
    e.preventDefault();
    dispatch(openModal());
    return setSelectRecipient(true);
    selectRecipient === true
      ? setSelectRecipient(false)
      : setSelectRecipient(true); // Hide the recipient selection modal
  };

  return (
    <div className="m-0 p-0 box-border  h-[870px] invisible-scrollbar overflow-auto ">
      <div
        onClick={handleBack}
        className="my-4 mx-6 flex justify-start items-center  w-[513px] gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold">Go-Back</p>
      </div>
      <div className="flex flex-col justify-center  gap-[16px]  items-center">
        <div className="flex flex-col justify-center  gap-[16px] text-center">
          <h2 className=" text-[24px] leading-[28.8px] font-bold  tracking-[-2%]  text-[#1E1E1E] ">
            Create a Trade
          </h2>
          <p className="text-[16px] leading-[24px] text-[#7C7C7C] ">
            Fill in the details below to sell your currency
          </p>
        </div>
        <div className=" w-[513px] p-[32px_40px_32px_40px] bg-[white]  rounded-[8px]">
          <form className="w-[433px] mx-auto flex  flex-col gap-[24px]">
            <div className=" flex flex-col gap-[8px] ">
              <label
                htmlFor=""
                className="text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
              >
                Currency
              </label>
              <div className=" h-[46px]  items-center  flex   w-[433px] mt-[8px] p-[15px_16px_15px_16px] gap-[10px]  rounded-[8px]  bg-[#FBFBFB]">
                {/* <div>
                  <Image
                    src="/svg/nigeriaflag.svg"
                    alt=""
                    className=""
                    height={15}
                    width={16}
                  />
                </div>

                <div>
                  <h2 className=" leading-[14.4px] text-[12px]  tracking-[-2%]  font-bold ">
                    NGN
                  </h2>
                </div> */}

                <CreateTradeDropDown
                  onSelect={handleCurrency}
                  className=" w-full flex justify-between"
                  placeholder="select currency"
                  options={converstionDataExit}
                  displayImages
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor=""
                className="text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
              >
                Select Exit Currency
              </label>
              <div className=" h-[46px] w-full rounded-md mt-[8px] bg-gray-900">
                <CreateTradeDropDown
                  onSelect={handleExitCurrency}
                  className="w-full flex justify-between"
                  placeholder="select currency"
                  options={converstionDataSource}
                  displayImages
                />
              </div>
            </div>
            <hr className="mt-2 border-[#EFEFEF]" />
            <h3 className="text-[18px]  leading-[28px]  tracking-[-2%]  text-[#000000] font-semibold">
              Price
            </h3>
            <div>
              <label
                htmlFor=""
                className="text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
              >
                Rate
              </label>
              <div className=" h-[46px] cursor-not-allowed w-[433px] gap-[273px] items-center p-[15px_16px_15px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-gray-900">
                <input
                  type="text"
                  onChange={handleChange}
                  name="rate"
                  disabled
                  value={rate}
                  className="w-[80%]  outline-none bg-transparent placeholder:text-gray-300"
                />
                <div className="w-[20%] tracking-[-2%] text-left bg-transparent text-sm">
                  {currency}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
              >
                Amount
              </label>
              <div className="h-[46px] w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white] ">
                <input
                  type="text"
                  onChange={handleChange}
                  name="amount"
                  value={createTradeDetails?.amount}
                  className="w-[80%] outline-none bg-transparent placeholder:text-gray-300"
                />
                <div className="w-[20%] text-right bg-transparent text-gray-300 text-sm">
                  {currency}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
              >
                Minimum Bid
              </label>
              <div className="h-[46px] w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                <input
                  type="text"
                  name="minimumBid"
                  onChange={handleChange}
                  className="w-[80%] outline-none bg-transparent placeholder:text-gray-300"
                />
                <div className="w-[20%] text-right bg-transparent text-gray-300 text-sm">
                  {currency}
                </div>
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
                  value={createTradeDetails?.payment_method}
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
            </div>
            <div>
              <label
                htmlFor=""
                className=" text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
              >
                Select Beneficiary
              </label>

              <div className="h-[46px] w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px] border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                {createTradeDetails?.beneficiary_name === "" &&
                createTradeDetails?.beneficiary_bank === "" ? (
                  <div
                    onClick={beneficicaryHandlder}
                    className="w-full text-gray-300 text-xs p-1 flex justify-between items-center"
                  >
                    <span className="text-[400] text-[16px] leading-[24px]">
                      Select Beneficiary
                    </span>
                    <span className="dropdown-arrow"></span>
                  </div>
                ) : (
                  <div
                    onClick={beneficicaryHandlder}
                    className="w-full text-gray-300 text-xs p-1 flex justify-between items-center"
                  >
                    <div>
                      <div className="text-[400] text-[16px] leading-[24px]">
                        {createTradeDetails?.beneficiary_name}
                      </div>
                      <div className="text-[400] text-[12px] leading-[24px]">
                        {createTradeDetails?.beneficiary_account}
                      </div>
                    </div>
                    <Image
                      src={
                        benefiaryCurrency === "NGN"
                          ? NGN
                          : benefiaryCurrency === "USD"
                          ? USD
                          : GBP
                      }
                      alt="flag"
                      className="h-6 w-6"
                    />
                  </div>
                )}
              </div>
            </div>

            <hr className="mt-2 border-gray-900 border" />
            {createTradeDetails?.payment_method === "Direct Deposit" ? (
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

                      <option value=" Zenith Bank" className="text-300 w-full">
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
                      onChange={handleChange}
                      type="text"
                      className="outline-none placeholder:gray-200 placeholder:text-xs"
                      placeholder="Enter Account Number"
                    />
                  </div>
                </div>{" "}
              </>
            ) : null}
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
                  onChange={handleChange}
                  name="beneficiary_name"
                  className="outline-none placeholder:gray-200 placeholder:text-xs"
                  placeholder="Enter Account name"
                />
              </div>
            </div>
            <hr className="mt-2 border-gray-900" />
            <h3 className="text-[18px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-bold">
              Additional Information
            </h3>
            <div className="flex flex-col mb-6">
              <label
                htmlFor=""
                className="text-[16px]  font-semibold text-[#1E1E1E] tracking-[-2%]  leading-[24%"
              >
                Terms of Trade
              </label>
              <textarea
                name="additional_information"
                onChange={handleChange}
                id=""
                cols={10}
                placeholder="You wish to tell us about why you create this trade..."
                rows={5}
                className="border placeholder:text-[#989898] text-[16px] mt-[8px] border-[#DCDCDC] rounded-md resize-none w-[433px] p-[8px_16px_8px_16px] outline-none"
              ></textarea>
            </div>
            <button
              onClick={HandleTradeDetails}
              disabled={isLoading}
              className="p-[12px]  rounded-[8px] text-white-100 bg-[#7F56D9]  w-[433px] h-[44px]["
            >
              Create Ad
            </button>
          </form>
        </div>
      </div>

      {selectRecipient ? (
        <TradeModal>
          {
            selectedItems === "" ? (
              <SelectBank
                onAccountAndNameChange={handleAccountAndNameChange}
                onSelect={handleSelect}
              />
            ) : selectedItems === "itemid" ? (
              <BeneficaryDetails
                currency={createTradeDetails?.currency}
                onSelect={handleSelect}
              />
            ) : (
              <SelectBank
                onAccountAndNameChange={handleAccountAndNameChange}
                onSelect={handleSelect}
              />
            )
            // <TradeSuccessModal>
            //   <TradeTransSuccesss />
            // </TradeSuccessModal>
          }
        </TradeModal>
      ) : null}
      {/* {selectedComponent} */}
    </div>
  );
};

export default CreateTrade;
