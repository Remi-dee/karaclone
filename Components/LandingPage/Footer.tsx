"use client";

import {
  useGetTransactionFeesQuery,
  useGetConversionFeesQuery,
  useGetRandomPasswordQuery,
  useGetSingleCurrencyPairQuery,
  useGetAllCurrencyPairsQuery,
  useGetAllUsersWalletQuery,
} from "@/redux/features/user/userApi";
import React from "react";
import { useSelector } from "react-redux";

function Footer() {
  const globalState = useSelector((state: any) => state.auth);

  // const data = useGetTransactionFeesQuery();
  // const data = useGetConversionFeesQuery();
  // const data = useGetRandomPasswordQuery();
  // const data = useGetAllCurrencyPairsQuery();
  // const data = useGetSingleCurrencyPairQuery("29293839");
  // const data = useGetAllUsersWalletQuery();
  // console.log(data);

  return <div>Footer</div>;
}

export default Footer;
