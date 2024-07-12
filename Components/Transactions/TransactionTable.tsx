import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/redux/modal/modalSlice";
import CustomModal from "@/Components/CustomModal/CustomModal";
import DepositDetails from "./DepositDetails";
import EmptyTransaction from "./EmptyTransaction";
import {
  selectUserTransactions,
  setSelectedTransaction,
} from "@/redux/features/userTransactions/userTransactionsSlice";

const TransactionTable = () => {
  const transactions = useSelector(selectUserTransactions);
  const dispatch = useDispatch();
  const handleTransactionDetails = (item: any) => {
    dispatch(openModal());
    dispatch(setSelectedTransaction(item));
  };

  return (
    <section className="mt-4 box-border">
      {transactions && transactions.length > 0 ? (
        <div className="h-full relative w-full">
          <table className="w-[100%] border-collapse">
            <thead>
              <tr className="bg-gray-900 text-sm">
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Beneficiary</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, i) => (
                <tr
                  key={item.id}
                  className="text-gray-800 border-b text-xs border-b-gray-500"
                >
                  <td className="p-4">{item.transaction_type}</td>
                  <td className="p-4">{item.beneficiary_name}</td>
                  {item.transaction_type == "Trade" ? (
                    <>
                      <td className="p-4">
                        {" "}
                        {item.amount_exchanged
                          ? item.amount_exchanged
                          : item.amount_sold}
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-4">
                        {item.amount_reversed
                          ? item.amount_reversed
                          : item.amount_deposited}
                      </td>
                    </>
                  )}

                  <td className="p-4">{item.date}</td>
                  <td
                    className={`${
                      item.status === "Pending"
                        ? "text-[#FDB022] bg-[#FCF5E6]"
                        : item.status === "Successful"
                        ? "text-[#00A600] bg-[#EFFFEF]"
                        : "text-[#FF104B] bg-[#FCF5E6]"
                    } flex justify-center items-center w-4/6 gap-2 rounded-lg  mt-2 px-1 py-1`}
                  >
                    <span
                      className={` ${
                        item.status === "Pending"
                          ? "bg-[#FDB022]"
                          : item.status === "Successful"
                          ? "bg-[#00A600]"
                          : "bg-[#FF104B]"
                      } w-[10px] h-[10px] rounded-full `}
                    ></span>
                    <span
                      className={`  text-[#00A600]  ${
                        item.status === "Pending"
                          ? "text-[#FDB022]"
                          : item.status === "Successful"
                          ? "text-[#00A600]"
                          : "text-[#FF104B]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <BiSolidRightArrow
                      className="cursor-pointer"
                      onClick={() => handleTransactionDetails(item)}
                    />
                  </td>

                  <CustomModal>
                    <DepositDetails />
                  </CustomModal>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyTransaction />
      )}
    </section>
  );
};

export default TransactionTable;
