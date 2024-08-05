"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import {
  useCurrencyConverterQuery,
  useGetAllCurrencyPairsQuery,
} from "@/redux/features/user/userApi";
import CreateTradeDropDown from "../CustomDropdown/CreateTradeDropDown";

type tradeProp = {
  onSelectBuy: () => void;
  onSelectSell: () => void;
};
const TradeTab: React.FC<tradeProp> = ({ onSelectBuy, onSelectSell }) => {
  const [active, setActive] = useState<"Buy" | "Sell" | null>("Buy");
  const [currency, setCurrency] = useState<string>("");
  const [exit_currency, setexit_currency] = useState<string>("");
  const [rate, setrate] = useState<number | null | any>(null);
  const [converstionDataSource, setConverstionDataSource] = useState<string[]>(
    []
  );
  const [amount, setamount] = useState("");
  const [converstionDataExit, setConverstionDataExit] = useState<string[]>([]);
  const possibleConverstion = useGetAllCurrencyPairsQuery("");

  useEffect(() => {
    possibleConverstion?.data?.results?.currencyPairs?.map((e: any) => {
      setConverstionDataExit((prevItems) => [...prevItems, e?.base_currency]);

      setConverstionDataSource((prevItems) => [
        ...prevItems,
        e?.quote_currency,
      ]);
    });
  }, [possibleConverstion?.isSuccess]);

  const { data, error, isLoading } = useCurrencyConverterQuery(
    {
      amount: amount,
      sourceCurrency: currency,
      targetCurrency: exit_currency,
    },
    { skip: amount?.length < 2 }
  );

  useEffect(() => {
    setrate(data);
  }, [isLoading, data]);

  const handleCurrency = (value: string) => {
    setCurrency(value);
  };
  const handleExitCurrency = (value: string) => {
    setexit_currency(value);
  };
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement | any>) => {
    const { name, value } = e.target;
    const newValue = value.replace(/[^0-9]/g, "");
    setamount(newValue);

    // if (amount?.length > 1) {
    //   setshouldConvert(true);
    // } else {
    //   setshouldConvert(false);
    // }
  };
  const handleActive = (text: "Buy" | "Sell") => {
    if (text === active) {
      setActive(null);
    } else {
      setActive(text);
      if (text === "Buy") {
        onSelectBuy();
      } else if (text === "Sell") {
        onSelectSell();
      }
    }
  };

  const buttonIsActive = (text: string) => {
    return active === text;
  };
  return (
    <div className="lg:flex lg:flex-row flex-col space-y-4 lg:space-y-0 justify-between items-center w-full gap-2  my-4">
      <div className="  lg:w-[156px] lg:h-[46px] h-[36px] flex justify-between items-center p-[6px]  gap-2 border rounded-md">
        <button
          className={`lg:py-3 py-[0.5rem] px-[8px] w-[50%] lg:w-[66px]  font-bold text-sm rounded-md gap-[10px] text-[12px] leading-[14.4px] ${
            buttonIsActive("Buy")
              ? "bg-primaryBtn text-white-100 px-3 rounded-md"
              : ""
          }`}
          onClick={() => handleActive("Buy")}
        >
          Buy
        </button>

        <button
          className={`lg:py-3 py-[0.5rem] px-[8px] w-[50%] lg:w-[66px]  font-bold text-sm rounded-md gap-[10px] text-[12px] leading-[14.4px] ${
            buttonIsActive("Sell")
              ? "bg-primaryBtn text-white-100 px-2 rounded-md"
              : ""
          }`}
          onClick={() => handleActive("Sell")}
        >
          Sell
        </button>
      </div>
      <div className=" lg:flex lg:flex-row flex-col lg:space-x-2 space-y-4 lg:space-y-0">
        <div className="md:w-[60%] lg:w-[15rem] xl:w-full w-[287px] h-[48px] border flex  items-center rounded-[12px] p-[8px_16px_8px_16px]">
          <div className=" w-full h-full">
            <input
              className="xl:w-[215px] w-[143px] lg:w-[100%] h-[30px] border-r   border-r-[#BDBDBD] placeholder:text-sm  lg:placeholder:text-[11px] xl:placeholder:text-sm placeholder:text-[#989898] outline-none"
              placeholder="Amount to Buy"
              onChange={handleAmountChange}
              type="text"
              value={amount}
            />
          </div>
          <div className=" md:w-[115px]  w-[99px] flex justify-center items-center ml-[5px] bg-[#F7F7F7] rounded-[16px] ">
            <CreateTradeDropDown
              onSelect={handleCurrency}
              options={converstionDataExit}
              placeholder="Currency"
              className="w-full outline-none"
              displayImages
            />
          </div>
        </div>
        <div className="md:w-[60%] lg:w-[15rem] xl:w-full w-[287px] h-[48px] border flex  items-center rounded-[12px] p-[8px_16px_8px_16px]">
          <div className=" w-full h-full">
            <input
              className="xl:w-[215px] w-[143px] lg:w-[100%] h-[30px] border-r   border-r-[#BDBDBD] placeholder:text-sm  lg:placeholder:text-[11px] xl:placeholder:text-sm placeholder:text-[#989898] outline-none"
              placeholder="Exchange Value"
              type="text"
              value={rate}
              disabled
            />
          </div>
          <div className="md:w-[115px]  w-[99px] flex justify-center items-center ml-[5px] bg-[#F7F7F7] rounded-[16px]">
            <CreateTradeDropDown
              onSelect={handleExitCurrency}
              options={converstionDataSource}
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
