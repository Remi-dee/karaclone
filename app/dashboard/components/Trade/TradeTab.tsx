import React, { useState } from "react";
import CustomDropdown from "@/app/components/CustomDropdown/CustomDropdown";
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
    <div className="flex justify-between items-center gap-2 my-4">
      <div className="w-[150px] flex justify-between items-center px-3 py-1  gap-2 border rounded-md">
        <button
          className={` px-2 font-bold text-sm rounded-md ${
            buttonIsActive("Buy")
              ? "bg-primaryBtn text-white-100 px-3 rounded-md"
              : ""
          }`}
          onClick={() => handleActive("Buy")}
        >
          Buy
        </button>

        <button
          className={` px-2  font-bold text-sm rounded-md ${
            buttonIsActive("Sell")
              ? "bg-primaryBtn text-white-100 px-2 rounded-md"
              : ""
          }`}
          onClick={() => handleActive("Sell")}
        >
          Sell
        </button>
      </div>
      <div className="w-[250px] p-1 border flex justify-center items-center rounded-md">
        <div>
          <input
            className="w-[120px] border-r border-r-gray-300 px-1 placeholder:text-sm placeholder:text-gray-300 outline-none"
            placeholder="Amount to Buy"
            type="text"
          />
        </div>
        <div className="w-[120px] mx-2 bg-gray-900 rounded-lg">
          <CustomDropdown
            onSelect={handleCurrency}
            options={currencyData}
            placeholder="currency"
            className="w-full outline-none"
            displayImages
          />
        </div>
      </div>
      <div className="w-[250px] p-1 flex justify-center items-center border rounded-md">
        <div>
          <input
            className="w-[120px] border-r border-r-gray-300 px-1 placeholder:text-sm placeholder:text-gray-300 outline-none"
            placeholder="Exchange Value"
            type="text"
          />
        </div>
        <div className="w-[120px] mx-2 bg-gray-900 rounded-lg">
          <CustomDropdown
            onSelect={handleCurrency}
            options={currencyData}
            placeholder="currency"
            className="w-full outline-none"
            displayImages
          />
        </div>
      </div>
    </div>
  );
};

export default TradeTab;
