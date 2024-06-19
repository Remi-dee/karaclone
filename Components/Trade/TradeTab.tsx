"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import CustomDropdown from "@/Components/CustomDropdown/CustomDropdown";
import { currencyData } from "../Transactions/currencyData";
import {
  useCreateTradeMutation,
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
  const [shouldConvert, setshouldConvert] = useState(false);

  useEffect(() => {
    possibleConverstion?.data?.results?.currencyPairs?.map((e: any) => {
      setConverstionDataExit((prevItems) => [...prevItems, e?.base_currency]);

      setConverstionDataSource((prevItems) => [
        ...prevItems,
        e?.quote_currency,
      ]);
    });
  }, [possibleConverstion?.isSuccess]);

  // const [rateFetchStatus, setrateFetchStatus] = useState(false);
  // const [rateFetchData, setrateFetchData] = useState<number | null | any>(null);

  // const dataForCalc = useCurrencyConverterQuery({
  //   amount: amount,
  //   sourceCurrency: currency,
  //   targetCurrency: exit_currency,
  // });
  const { data, error, isLoading } = useCurrencyConverterQuery(
    {
      amount: amount,
      sourceCurrency: currency,
      targetCurrency: exit_currency,
    },
    { skip: amount?.length < 2 }
  );

  // console.log(dataForCalc);

  useEffect(() => {
    setrate(data);
  }, [isLoading]);

  const handleCurrency = (value: string) => {
    setCurrency(value);
  };
  const handleExitCurrency = (value: string) => {
    setexit_currency(value);
  };
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement | any>) => {
    const { name, value } = e.target;

    setamount(value);

    if (amount?.length > 1) {
      setshouldConvert(true);
    } else {
      setshouldConvert(false);
    }
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
    <div className="flex justify-between items-center w-full gap-2  my-4">
      <div className="  w-[156px] h-[46px] flex justify-between items-center p-[6px]  gap-2 border rounded-md">
        <button
          className={` px-[8px] w-[66px] h-[30px] font-bold text-sm rounded-md gap-[10px] text-[12px] leading-[14.4px] ${
            buttonIsActive("Buy")
              ? "bg-primaryBtn text-white-100 px-3 rounded-md"
              : ""
          }`}
          onClick={() => handleActive("Buy")}
        >
          Buy
        </button>

        <button
          className={`  px-[8px] w-[66px] h-[30px] font-bold text-sm rounded-md gap-[10px] text-[12px] leading-[14.4px] ${
            buttonIsActive("Sell")
              ? "bg-primaryBtn text-white-100 px-2 rounded-md"
              : ""
          }`}
          onClick={() => handleActive("Sell")}
        >
          Sell
        </button>
      </div>
      <div className="w-[360px] h-[48px] border flex  items-center rounded-[12px] p-[8px_16px_8px_16px]">
        <div>
          <input
            className="w-[215px] h-[16px] border-r  border-r-[#BDBDBD]  placeholder:text-sm placeholder:text-[#989898] outline-none"
            placeholder="Amount to Buy"
            onChange={handleAmountChange}
            type="text"
          />
        </div>
        <div className="w-[115px] flex justify-center items-center ml-[5px] bg-[#F7F7F7] rounded-[16px] ">
          <CreateTradeDropDown
            onSelect={handleCurrency}
            options={converstionDataExit}
            placeholder="Currency"
            className="w-full outline-none"
            displayImages
          />
        </div>
      </div>
      <div className="w-[360px] h-[48px] border flex  items-center rounded-[12px] p-[8px_16px_8px_16px]">
        <div className=" w-full h-full">
          <input
            className="w-[215px] pl-[0.5rem]  h-full border-r  border-r-[#BDBDBD]  placeholder:text-sm placeholder:text-[#989898] outline-none cursor-not-allowed"
            placeholder="Exchange Value"
            type="text"
            value={rate}
            disabled
          />
        </div>
        <div className="w-[115px] ml-[5px] bg-[#F7F7F7] rounded-[16px]">
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
  );
};

export default TradeTab;
