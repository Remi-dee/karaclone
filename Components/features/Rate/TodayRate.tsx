"use client";

import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { closeCheckRateModal } from "@/redux/modal/modalSlice";
import CreateTradeDropDown from "../../CustomDropdown/CreateTradeDropDown";
import { useFetchCurrencyPairsQuery } from "@/redux/features/trade/tradeApi";
import NGN from "@/public/Images/NGN.png";
import GBP from "@/public/Images/GBP.png";
import USD from "@/public/Images/USD.png";
import RateSvg from "@/Components/svgIcon/RateSvg";

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
        (pair: any) =>
          pair.base_currency === selectedCurrency ||
          pair.quote_currency === selectedCurrency
      )
    : currencyPairs;

  return (
    <div className=" w-[95%] md:w-full h-[810px] py-[1em] flex flex-col rounded-[12px]">
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
          <div className="h-[46px] items-center flex w-full md:w-[438px] mt-[8px] p-[15px_16px_15px_16px] gap-[10px] rounded-[8px] bg-[#FBFBFB]">
            <CreateTradeDropDown
              onSelect={handleCurrency}
              className="w-full flex justify-between"
              placeholder="select currency"
              displayImages
              options={["USD", "GBP", "NGN"]}
            />
          </div>

          <div className="mt-[24px] w-full flex flex-col gap-[16px] justify-center">
            {filteredCurrencyPairs.map((pair: any, i: number) => (
              <div
                key={i}
                className="flex justify-between p-[16px_24px_16px_24px] border border-[#EFEFEF] rounded-[8px] w-full md:w-[438px] h-[87px]"
              >
                <div className="flex flex-col gap-[8px]">
                  <div className="text-[#656565] text-[14px] leading-[20px] flex gap-[8px] items-center content-center">
                    <span>{pair.base_currency}</span> <RateSvg />{" "}
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
