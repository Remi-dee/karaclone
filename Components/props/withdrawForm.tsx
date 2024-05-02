import React from "react";
import BalanceDropdown from "../../../../app/dashboard/components/BalanceDropdown";
import { useState } from "react";

interface WithdrawalFormProps {
  currency: "usd" | "naira"; // Define the type of currency prop
  placeholder: string;
  headerText: string;
  amountToRecieveId: string;
  onAmountChange: (newAmount: number) => void;
}

const WithdrawalForm: React.FC<WithdrawalFormProps> = ({
  currency,
  placeholder,
  headerText,
  amountToRecieveId,
  onAmountChange,
}) => {
  const [amount, setAmount] = useState<number>(0); // State to track the entered amount
  const [isValid, setIsValid] = useState<boolean>(false); // State to track input validity

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value);
    setAmount(newAmount);
    onAmountChange(newAmount); // Notify parent component of amount change
    setIsValid(newAmount > 0); // Update validity based on entered amount
  };

  return (
    <div className="mt-5">
      <h4 className="font-bold">{headerText}</h4>
      <div className="border border-slate-200 rounded-lg flex items-center gap-4 p-2 px-4 mt-2">
        <BalanceDropdown currency={currency} />
        <input
          type="number"
          name={amountToRecieveId}
          id={amountToRecieveId}
          value={amount}
          onChange={handleAmountChange}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-0 placeholder:text-gray-400 focus:ring-0 focus:outline-0 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default WithdrawalForm;
