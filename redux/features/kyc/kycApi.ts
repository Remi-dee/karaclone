import getTokenFromLocalStorage from "@/utils/FetchUserToken";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    // Get the token from localStorage
    const token = getTokenFromLocalStorage();
    // If token exists, add it to the authorization header
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const kycApi = createApi({
  reducerPath: "kycApi",
  baseQuery,
  endpoints: (builder) => ({
    // process KYC
    processKyc: builder.mutation({
      query: (data) => ({
        url: "kyc",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useProcessKycMutation } = kycApi;
