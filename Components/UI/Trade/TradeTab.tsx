"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import {
  useCurrencyConverterQuery,
  useGetAllCurrencyPairsQuery,
} from "@/redux/features/user/userApi";
import CreateTradeDropDown from "../../CustomDropdown/CreateTradeDropDown";

type TradeProp = {
  onSelectBuy: () => void;
  onSelectSell: () => void;
};

const TradeTab: React.FC<TradeProp> = ({ onSelectBuy, onSelectSell }) => {
  const [active, setActive] = useState<"Buy" | "Sell" | null>("Buy");
  const [currency, setCurrency] = useState<string>("");
  const [exitCurrency, setExitCurrency] = useState<string>("");
  const [rate, setRate] = useState<number | null>(null);
  const [conversionDataSource, setConversionDataSource] = useState<string[]>(
    []
  );
  const [amount, setAmount] = useState<string>("");
  const [conversionDataExit, setConversionDataExit] = useState<string[]>([]);
  const possibleConversion = useGetAllCurrencyPairsQuery("");

  useEffect(() => {
    if (possibleConversion?.isSuccess) {
      possibleConversion.data.results.currencyPairs.forEach((pair: any) => {
        setConversionDataExit((prevItems) => [
          ...prevItems,
          pair.base_currency,
        ]);
        setConversionDataSource((prevItems) => [
          ...prevItems,
          pair.quote_currency,
        ]);
      });
    }
  }, [possibleConversion?.isSuccess]);

  const { data, isLoading } = useCurrencyConverterQuery(
    {
      amount: amount,
      sourceCurrency: currency,
      targetCurrency: exitCurrency,
    },
    { skip: amount.length < 2 }
  );

  useEffect(() => {
    if (!isLoading) {
      setRate(data);
    }
  }, [isLoading, data]);

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
  };

  const handleExitCurrencyChange = (value: string) => {
    setExitCurrency(value);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "");
    setAmount(newValue);
  };

  const handleActiveChange = (text: "Buy" | "Sell") => {
    setActive((prevActive) => (prevActive === text ? null : text));
    if (text === "Buy") {
      onSelectBuy();
    } else if (text === "Sell") {
      onSelectSell();
    }
  };

  const isButtonActive = (text: string) => active === text;

  return (
    <div className="lg:flex lg:flex-row flex-col space-y-4 lg:space-y-0 justify-between items-center w-full gap-2 my-4">
      <div className="lg:w-[156px] lg:h-[46px] h-[36px] flex justify-between items-center p-[6px] gap-2 border rounded-md">
        <button
          className={`lg:py-3 py-[0.5rem] px-[8px] w-[50%] lg:w-[66px] font-bold text-sm rounded-md gap-[10px] text-[12px] leading-[14.4px] ${
            isButtonActive("Buy")
              ? "bg-primaryBtn text-white-100 px-3 rounded-md"
              : ""
          }`}
          onClick={() => handleActiveChange("Buy")}
        >
          Buy
        </button>

        <button
          className={`lg:py-3 py-[0.5rem] px-[8px] w-[50%] lg:w-[66px] font-bold text-sm rounded-md gap-[10px] text-[12px] leading-[14.4px] ${
            isButtonActive("Sell")
              ? "bg-primaryBtn text-white-100 px-2 rounded-md"
              : ""
          }`}
          onClick={() => handleActiveChange("Sell")}
        >
          Sell
        </button>
      </div>

      <div className="lg:flex lg:flex-row flex-col lg:space-x-2 space-y-4 lg:space-y-0">
        <div className="md:w-[100%] lg:w-[15rem] xl:w-full  w-auto h-[48px] border flex items-center rounded-[12px] p-[8px_16px]">
          <div className="w-full h-full">
            <input
              className="xl:w-[215px] w-[110px] sm:w-[143px] lg:w-[100%] h-[30px] border-r border-r-[#BDBDBD] placeholder:text-sm lg:placeholder:text-[11px] xl:placeholder:text-sm placeholder:text-[#989898] outline-none"
              placeholder="Amount to Buy"
              onChange={handleAmountChange}
              type="text"
              value={amount}
            />
          </div>
          <div className="md:w-[115px] w-[99px] flex justify-center items-center ml-[5px] bg-[#F7F7F7] rounded-[16px]">
            <CreateTradeDropDown
              onSelect={handleCurrencyChange}
              options={conversionDataExit}
              placeholder="Currency"
              className="w-full outline-none"
              displayImages
            />
          </div>
        </div>

        <div className="md:w-[100%] lg:w-[15rem] xl:w-full  w-auto h-[48px] border flex items-center rounded-[12px] p-[8px_16px]">
          <div className="w-full h-full">
            <input
              className="xl:w-[215px] w-[110px] sm:w-[143px] lg:w-[100%] h-[30px] border-r border-r-[#BDBDBD] placeholder:text-sm lg:placeholder:text-[11px] xl:placeholder:text-sm placeholder:text-[#989898] outline-none"
              placeholder="Exchange Value"
              type="text"
              value={rate ?? ""}
              disabled
            />
          </div>
          <div className="md:w-[115px] w-[99px] flex justify-center items-center ml-[5px] bg-[#F7F7F7] rounded-[16px]">
            <CreateTradeDropDown
              onSelect={handleExitCurrencyChange}
              options={conversionDataSource}
              placeholder="Currency"
              className="w-full outline-none"
              displayImages
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeTab;
