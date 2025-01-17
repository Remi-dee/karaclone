"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
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
  useCurrencyConverterQuery,
  useCurrentRateQuery,
  useGetAllCurrencyPairsQuery,
  useGetAllUserWalletsQuery,
  useLoadUserQuery,
} from "@/redux/features/user/userApi";

import { toast } from "react-toastify";
import { useMonoWidget } from "@/app/mono/monoServices";
import { useCreatePaymentMutation } from "@/redux/features/truelayer/truelayerApi";
import { setPaymentDetails } from "@/redux/features/truelayer/truelayerSlice";
import { Modal } from "@/Components/modal/modal";

import { openModal } from "@/redux/modal/modalSlice";
import Image from "next/image";
import { useCreateTradeMutation } from "@/redux/features/trade/tradeApi";
import CreateTradeDropDown from "@/Components/CustomDropdown/CreateTradeDropDown";
import CreateTradeSuccess from "@/Components/UI/Trade/CreateTradeSuccess";
import SelectBank from "@/Components/UI/Trade/SelectBank";
import TradeModal from "@/Components/CustomModal/TradeModal";
import BeneficaryDetails from "@/Components/UI/Trade/BeneficaryDetails";
interface TradeDetails {
  currency: string;
  exit_currency: string;
  rate: number;
  amount: string;
  minimum_bid: string;
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
  const view = useSearchParams().get("view");

  const [createTradeDetails, setcreateTradeDetails] = useState({
    currency: "",
    exit_currency: "",
    rate: rate,
    amount: 0,
    minimum_bid: 0,
    bank_name: "",
    account_number: "",
    account_name: "",
    beneficiary_name: "",
    beneficiary_id: "",
    beneficiary_account: "",
    beneficiary_bank: "",
    vat_fee: "XX",
    sold: 0,
    payment_method: "",
    additional_information: "",
    transaction_fee: 2.45,
  });
  const { data } = useLoadUserQuery({});
  const [
    createTrade,
    {
      isLoading: isCreatingTrade,
      error: tradeError,
      data: tradeData,
      isSuccess: isTradeSuccess,
    },
  ] = useCreateTradeMutation();

  const {
    data: walletData,
    error,
    isLoading,
  } = useGetAllUserWalletsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
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
    setcreateTradeDetails((prevDetails) => ({
      ...prevDetails,
      beneficiary_id: item?.beneficiary_id,
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
    const keysToExclude = ["account_name", "account_number", "bank_name"];

    const shouldExcludeKeys =
      createTradeDetails.payment_method !== "Direct deposit";

    for (const key in createTradeDetails) {
      if (shouldExcludeKeys && keysToExclude.includes(key)) {
        continue;
      }

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

  const openMonoWidget = useMonoWidget();

  const HandleTradeDetails = async (e: any) => {
    e.preventDefault();
    console.log(createTradeDetails);
    if (!isFormValid()) {
      toast.warn("Please fill in all the fields.");
      return;
    }
    if (createTradeDetails.payment_method == "Wallet") {
      console.log(walletData);
      const selectedWallet = walletData?.find(
        (wallet) => wallet.currency_code === createTradeDetails.currency
      );
      if (
        selectedWallet &&
        createTradeDetails.amount > selectedWallet.escrow_balance
      ) {
        toast("Insufficient balance in wallet.");
        return;
      }
    }

    // form submission handled here
    dispatch(addCreatedTrade(createTradeDetails));

    dispatch(toggleCreateTradeStage(3));
    // createTrade(createTradeDetails);
    // console.log(createTradeDetails);
    console.log(tradeError);
  };

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
      const newValue = Number(value.replace(/[^0-9]/g, ""));

      return setcreateTradeDetails({ ...createTradeDetails, amount: newValue });
    }
    setcreateTradeDetails((prevState) => ({
      ...prevState,
      [name]: name === "rate" ? Number(value) : value,
      [name]: name === "minimum_bid" ? Number(value) : value,
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
        className=" flex  items-center text-[16px] leading-[24px] tracking-[-2%] mt-[1rem] md:mt-[2rem] w-full gap-1 cursor-pointer"
      >
        <IoIosArrowRoundBack className="bg-primaryBtn text-white-100 rounded-sm" />
        <p className="text-primaryBtn font-semibold ml-[4px] mt-[3px] md:mt-0  ">
          Go-Back
        </p>
      </div>

      <div className="flex flex-col justify-center  gap-[16px]  items-center">
        <div className="flex flex-col justify-center  gap-[16px] my-[1.2em] text-center">
          <h2 className=" text-[24px] leading-[28.8px] font-bold  tracking-[-2%]  text-[#1E1E1E] ">
            Create a Trade
          </h2>
          <p className="text-[16px] leading-[24px] text-[#7C7C7C] ">
            Fill in the details below to sell your currency
          </p>
        </div>
        <div className=" w-full md:w-[513px] py-[1rem] px-[0.8rem] pb-[2rem] mb-[2.5rem] md:p-[32px_40px_32px_40px] bg-[white]  rounded-[8px]">
          <form className=" w-full  md:w-[433px] mx-auto flex  flex-col gap-[24px]">
            <div className=" flex flex-col gap-[8px] ">
              <label
                htmlFor=""
                className="text-[16px]  leading-[24px]  tracking-[-2%]  text-[#000000] font-semibold"
              >
                Currency
              </label>
              <div className=" h-[46px]  items-center  flex  w-full  md:w-[433px] mt-[8px] p-[15px_16px_15px_16px] gap-[10px]  rounded-[8px]  bg-[#FBFBFB]">
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
              <div className=" h-[46px] w-full md:w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                <input
                  type="text"
                  onChange={handleChange}
                  name="rate"
                  disabled
                  value={rate}
                  className="w-[80%] outline-none bg-transparent placeholder:text-gray-300"
                />
                <div className="w-[20%] text-right bg-transparent text-gray-300 text-sm">
                  {createTradeDetails?.exit_currency}
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
              <div className="h-[46px] w-full md:w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white] ">
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
              <div className="h-[46px] w-full md:w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                <input
                  type="text"
                  name="minimum_bid"
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
              <div className="h-[46px] w-full md:w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px] border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
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

              <div className="h-[46px] w-full md:w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px] border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
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
                  <div className="h-[46px] w-full md:w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
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
                  <div className="h-[46px] w-full md:w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                    <input
                      name="account_number"
                      onChange={handleChange}
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
                  <div className="h-[46px] w-full md:w-[433px] gap-[10px] items-center p-[8px_16px_8px_16px]  border border-[#EFEFEF] rounded-[8px] mt-[8px] flex bg-[white]">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="account_name"
                      className="outline-none placeholder:gray-200 placeholder:text-xs"
                      placeholder="Enter Account name"
                    />
                  </div>
                </div>
              </>
            ) : null}

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
                className="border placeholder:text-[#989898] text-[16px] mt-[8px] border-[#DCDCDC] rounded-md resize-none w-full md:w-[433px] p-[8px_16px_8px_16px] outline-none"
              ></textarea>
            </div>
            <button
              onClick={HandleTradeDetails}
              disabled={isCreatingTrade}
              className="p-[12px]  rounded-[8px] text-white-100 bg-[#7F56D9]  w-full md:w-[433px] h-[44px]"
            >
              Create Ad
            </button>
          </form>
        </div>
      </div>
      <div>
        {view == "createtradesuccess" ? (
          <Modal
          // onClose={() => {
          //   return router.push("/");
          // }}
          >
            <CreateTradeSuccess />
          </Modal>
        ) : (
          <div></div>
        )}
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
              currency={createTradeDetails?.currency}
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
    </div>
  );
};

export default CreateTrade;
