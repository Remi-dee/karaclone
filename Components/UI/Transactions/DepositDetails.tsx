import { selectSelectedTransaction } from "@/redux/features/userTransactions/userTransactionsSlice";
import Link from "next/link";
import React from "react";
import { BiSolidCopy } from "react-icons/bi";
import { useSelector } from "react-redux";

interface Transaction {
  user_transactionId: string;
  date: string;
  transaction_type: string;
  currency_pair?: string;
  rate?: number;
  amount_exchanged?: number;
  amount_sold?: number;
  payment_method: string;
  account_name: string;
  beneficiary_name?: string;
  beneficiary_account?: string;
  beneficiary_bank?: string;
  amount_received?: number;
  transaction_fee?: number;
  amount_reversed?: number;
  amount_deposited?: number;
  status: "Processing" | "Successful" | "Failed";
}

const DepositDetails = () => {
  const item = useSelector(selectSelectedTransaction) as Transaction | null;

  if (!item) return null;

  return (
    <div className=" gap-[24px] min-w-full h-[842px] mt-[32px] px-[0.8rem] py-[1.4rem]  md:p-[32px_40px_32px_40px] flex-col flex w-full md:w-[512px] text-xs font-semibold">
      <div>
        <h2 className="py-2 font-bold leading-[28px] text-[#1E1E1E] text-center text-[18px]  ">
          Transaction Details
        </h2>
      </div>
      <div className="  text-[14px]  leading-[20px]  w-full  gap-[32px] flex flex-col">
        <div className="flex justify-between items-center ">
          <span>Transaction ID</span>
          <div className="flex justify-center items-center gap-1">
            <span className="text-[#000000]">{item.user_transactionId}</span>
            <BiSolidCopy className="text-primaryBtn" />
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <span>Date & Time</span>
          <p className="text-[#000]">{item.date}</p>
        </div>
        <div className="flex justify-between items-center ">
          <span>Transaction Type</span>
          <p className="text-[#000]">{item?.transaction_type}</p>
        </div>

        {item?.transaction_type == "Trade" ? (
          <>
            <div className="flex justify-between items-center ">
              <span>Currency Pair</span>
              <p className="text-[#000]">{item.currency_pair || "N/A"} </p>
            </div>
            <div className="flex justify-between items-center ">
              <span>Exchange Rate</span>
              <p className="text-[#000]">{item.rate || "N/A"}</p>
            </div>
            {item.amount_exchanged ? (
              <div className="flex justify-between items-center ">
                <span>Amount Exchanged</span>
                <p className="text-[#000]">{item.amount_exchanged || "N/A"}</p>
              </div>
            ) : (
              <div className="flex justify-between items-center ">
                <span>Amount Sold</span>
                <p className="text-[#000]">{item.amount_sold || "N/A"}</p>
              </div>
            )}
          </>
        ) : (
          <></>
        )}

        <div className="flex justify-between items-center ">
          <span>Payment Method</span>
          <p className="text-[#000]">{item.payment_method || "N/A"}</p>
        </div>
        <div className="flex justify-between items-center  ">
          <span>Account Name</span>
          <p className="text-[#000]">{item.account_name || "N/A"}</p>
        </div>
        <hr className=" border-gray-200 h-[1.5px]" />

        {item.transaction_type == "Trade" ? (
          <>
            <div className="flex justify-between items-center ">
              <span>Beneficiary</span>
              <p className="text-[#000]">{item.beneficiary_name || "N/A"}</p>
            </div>
            <div className="flex justify-between w-full items-center ">
              <span> Account Number</span>
              {/* <span>Beneficiary Account Number</span> */}
              <p className="text-[#000]">{item.beneficiary_account || "N/A"}</p>
            </div>

            <div className="flex justify-between items-center ">
              <span>Beneficiary Bank Name</span>
              <p className="text-[#000]">{item.beneficiary_bank || "N/A"}</p>
            </div>

            <div className="flex justify-between items-center ">
              <span>Amount Received</span>
              <p className="text-[#000]">{item.amount_received || "N/A"}</p>
            </div>

            <div className="flex justify-between items-center ">
              <span>Transaction Fee</span>
              <p className="text-[#000]">{item.transaction_fee || "N/A"}</p>
            </div>
          </>
        ) : (
          <>
            <td className="p-4">
              {item.amount_reversed ? (
                <div className="flex justify-between items-center ">
                  <span>Amount Reversed</span>
                  <p className="text-[#000]">{item.amount_reversed || "N/A"}</p>
                </div>
              ) : (
                <div className="flex justify-between items-center ">
                  <span>Amount Deposited</span>
                  <p className="text-[#000]">
                    {item.amount_deposited || "N/A"}
                  </p>
                </div>
              )}
            </td>
          </>
        )}

        <div className="flex justify-between items-center mb-2 ">
          <span>Status</span>
          <div
            className={`${
              item.status === "Processing"
                ? "text-[#FDB022] bg-[#FCF5E6]"
                : item.status === "Successful"
                ? "text-[#00A600] bg-[#EFFFEF]"
                : "text-[#FF104B] bg-[#FCF5E6]"
            } flex justify-center items-center  gap-2 px-1.5 py-1 rounded-lg text-[#00A600]`}
          >
            <span
              className={`${
                item.status === "Processing"
                  ? "bg-[#FDB022]"
                  : item.status === "Successful"
                  ? "bg-[#00A600]"
                  : "bg-[#FF104B]"
              } w-[10px] h-[10px] rounded-full `}
            ></span>
            <span>{item.status}</span>
          </div>
        </div>

        <button className="p-[10px_16px] h-[44px] w-full my-2 text-white-100 bg-primaryBtn  rounded-lg">
          Download Receipt
        </button>

        <hr className="border border-gray-500" />
        <p className="py-2 text-[#000] text-center">
          Need Help?{" "}
          <Link href="" className="font-semibold  text-primaryBtn">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DepositDetails;
