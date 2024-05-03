import React, { useState } from "react";
import CustomDropdown from "@/Components/CustomDropdown/CustomDropdown";
import { currencyData } from "../Transactions/currencyData";

type tradeProp = {
  onSelectBuy: () => void;
  onSelectSell: () => void;
};
const TradeTab: React.FC<tradeProp> = ({ onSelectBuy, onSelectSell }) => {
  const [active, setActive] = useState<"Buy" | "Sell" | null>(null);
  const [currency, setCurrency] = useState<string>("");

  const handleCurrency = (value: string) => {
    setCurrency(value);
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
            type="text"
          />
        </div>
        <div className="w-[115px] flex justify-center items-center ml-[5px] bg-[#F7F7F7] rounded-[16px] ">
          <CustomDropdown
            onSelect={handleCurrency}
            options={currencyData}
            placeholder="Currency"
            className="w-full outline-none"
            displayImages
          />
        </div>
      </div>
      <div className="w-[360px] h-[48px] border flex  items-center rounded-[12px] p-[8px_16px_8px_16px]">
        <div>
          <input
            className="w-[215px] h-[16px] border-r  border-r-[#BDBDBD]  placeholder:text-sm placeholder:text-[#989898] outline-none"
            placeholder="Exchange Value"
            type="text"
          />
        </div>
        <div className="w-[115px] ml-[5px] bg-[#F7F7F7] rounded-[16px]">
          <CustomDropdown
            onSelect={handleCurrency}
            options={currencyData}
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
