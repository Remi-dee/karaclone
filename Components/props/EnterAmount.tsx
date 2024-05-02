import React from "react";
import BalanceDropdown from "../BalanceDropdown";
import WithdrawalForm from "../props/withdrawForm";
import { useState } from "react";

function EnterAmount({ changeStep }: { changeStep: () => void }) {
  const [amount, setAmount] = useState<number>(0);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
    setIsValid(newAmount > 0); // Update validity based on entered amount
  };

  const handleWithdrawalSubmit = () => {
    // Handle form submission, for example, send amount to the server
    //increment step if everything is valid
    changeStep();
    console.log("Submitted amount:", amount);
  };

  return (
    <div>
      <div className="bg-[white] border border-slate-100 mt-5  px-8 rounded-lg py-4 text-[dark] w-full  mx-auto">
        <div className="bg-[#F9F5FF] py-3 px-4 border border-purple-200 rounded">
          <div className="flex items-center justify-between">
            <p className="text-gray-100 text-sm">Wallet Balance</p>
            <BalanceDropdown currency="usd" />
          </div>
          <div>
            <h4 className="font-bold text-lg">$2000</h4>
          </div>
        </div>

        <WithdrawalForm
          amountToRecieveId="amountToWithdraw"
          headerText="Amount to Withdraw "
          currency="usd"
          placeholder="Amount"
          onAmountChange={handleAmountChange}
        />

        <div className="border-t  border-slate-200 mt-3 text-sm font-medium">
          <div className="flex items-center justify-between py-2 mt-2 text-gray-300">
            <p>Conversion Fee</p>
            <p className="ml-auto text-black-200">$0.00</p>
          </div>

          <div className="flex items-center justify-between py-2  text-gray-300">
            <p>Transaction Fee</p>
            <p className="ml-auto text-black-200">$0.00</p>
          </div>

          <div className="flex items-center justify-between py-2  text-gray-300">
            <p>&apos; Today's Rate</p>
            <p className="ml-auto text-black-200">$0.00</p>
          </div>
        </div>
        <WithdrawalForm
          amountToRecieveId="amountToRecieve"
          headerText="Amount to Recieve"
          currency="naira"
          placeholder="Amount"
          onAmountChange={handleAmountChange}
        />

        {/* submit button */}
        <div className="mt-5">
          <button
            className={`${
              isValid
                ? "bg-purple-600 text-white-100"
                : "bg-purple-200 text-slate-700"
            }
                        text-sm w-full py-3 rounded-lg`}
            disabled={!isValid}
            onClick={handleWithdrawalSubmit}
          >
            {"Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterAmount;
