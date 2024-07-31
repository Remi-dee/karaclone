"use client";

import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { closeCheckRateModal } from "@/redux/modal/modalSlice";
import CreateTradeDropDown from "../CustomDropdown/CreateTradeDropDown";
import { useFetchCurrencyPairsQuery } from "@/redux/features/trade/tradeApi";
import NGN from "@/public/Images/NGN.png";
import GBP from "@/public/Images/GBP.png";
import USD from "@/public/Images/USD.png";

function TodayRate() {
  const [value, setValue] = useState("");
  const [activeButton, setActiveButton] = useState("Processing");
  const {
    data: currencyPairsData,
    isLoading,
    isError,
  } = useFetchCurrencyPairsQuery({ skip: 0, limit: 10 });
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const dispatch = useDispatch();

  const dropdownOptions = [
    { value: "USD", label: "USD", imageUrl: USD },
    { value: "GBP", label: "GBP", imageUrl: GBP },
    { value: "NGN", label: "NGN", imageUrl: NGN },
  ];
  const handleCurrency = (option: any) => {
    console.log("selected currency is", option);
    setSelectedCurrency(option);
  };

  const handleButtonClick = (status: string) => {
    setActiveButton(status);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading currency pairs</div>;
  }

  const currencyPairs = currencyPairsData?.results?.currencyPairs || [];

  const filteredCurrencyPairs = selectedCurrency
    ? currencyPairs.filter(
        (pair) =>
          pair.base_currency === selectedCurrency ||
          pair.quote_currency === selectedCurrency
      )
    : currencyPairs;

  return (
    <div className="w-full h-[810px] py-[1em] flex flex-col rounded-[12px]">
      <section className="flex py-[1rem] h-full flex-col w-full relative">
        <section className="border-b border-[#DCDCDC] px-[24px] flex h-[72px] justify-between w-full">
          <div>
            <h1 className="font-bold text-[20px] leading-[24px] tracking-[-2%]">
              {"  Today’s Rates"}
            </h1>
          </div>
          <div>
            <MdCancel
              onClick={() => dispatch(closeCheckRateModal())}
              className="text-gray-200 text-lg cursor-pointer"
            />
          </div>
        </section>

        <section className="p-[1rem]">
          <div className="h-[46px] items-center flex w-[438px] mt-[8px] p-[15px_16px_15px_16px] gap-[10px] rounded-[8px] bg-[#FBFBFB]">
            <CreateTradeDropDown
              onSelect={handleCurrency}
              className="w-full flex justify-between"
              placeholder="select currency"
              displayImages
              options={["USD", "GBP", "NGN"]}
            />
          </div>

          <div className="mt-[24px] w-full flex flex-col gap-[16px] justify-center">
            {filteredCurrencyPairs.map((pair, i) => (
              <div
                key={i}
                className="flex justify-between p-[16px_24px_16px_24px] border border-[#EFEFEF] rounded-[8px] w-[438px] h-[87px]"
              >
                <div className="flex flex-col gap-[8px]">
                  <div className="text-[#656565] text-[14px] leading-[20px] flex gap-[8px] items-center content-center">
                    <span>{pair.base_currency}</span> <SVG />{" "}
                    <span>{pair.quote_currency}</span>
                  </div>
                  <div>
                    <p className="font-bold leading-[19px] tracking-[-2%] text-[#464646] text-[14px]">
                      {pair.exchange_rate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default TodayRate;

function SVG() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.491 1.66602H6.50768C3.47435 1.66602 1.66602 3.47435 1.66602 6.50768V13.4827C1.66602 16.5244 3.47435 18.3327 6.50768 18.3327H13.4827C16.516 18.3327 18.3243 16.5244 18.3243 13.491V6.50768C18.3327 3.47435 16.5243 1.66602 13.491 1.66602ZM15.441 10.441L11.866 14.016C11.741 14.141 11.5827 14.1994 11.4243 14.1994C11.266 14.1994 11.1077 14.141 10.9827 14.016C10.741 13.7743 10.741 13.3743 10.9827 13.1327L13.491 10.6243H4.99935C4.65768 10.6243 4.37435 10.341 4.37435 9.99935C4.37435 9.65768 4.65768 9.37435 4.99935 9.37435H13.491L10.9827 6.86602C10.741 6.62435 10.741 6.22435 10.9827 5.98268C11.2243 5.74102 11.6243 5.74102 11.866 5.98268L15.441 9.55768C15.5577 9.67435 15.6243 9.83268 15.6243 9.99935C15.6243 10.166 15.5577 10.3243 15.441 10.441Z"
        fill="#989898"
      />
    </svg>
  );
}
