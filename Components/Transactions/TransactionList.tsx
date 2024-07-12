import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import {
  setTransactions,
  setLoading,
  setError,
} from "@/redux/features/userTransactions/userTransactionsSlice";
import TransactionTable from "./TransactionTable";
import Pagination from "../Pagination";
import { useGetAllUserTransactionsQuery } from "@/redux/features/userTransactions/userTransactionsApi";

const TransactionList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 7;
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllUserTransactionsQuery({
    page,
    limit: itemsPerPage,
  });

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }

    if (data) {
      console.log("here is data", data);
      dispatch(setTransactions(data.transactions));
    }

    if (error) {
      dispatch(setError(error.toString()));
    }
  }, [data, error, isLoading, dispatch]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <TransactionTable />
      <Pagination
        currentPage={page}
        onPageChange={handlePageChange}
        totalItems={data?.totalItems || 0}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default TransactionList;
