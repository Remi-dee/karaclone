import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getTokenFromLocalStorage from "@/hooks/FetchUserToken";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    // Get the token from localStorage
    const token = getTokenFromLocalStorage();
    // If token exists, add it to the authorization header
    if (token) {
      headers.set("Authorization", `bearer ${token}`);
    }
    return headers;
  },
});

export const tradeApi = createApi({
  reducerPath: "tradeApi",
  baseQuery, // Use the customized baseQuery
  endpoints: (builder) => ({
    //create a trade

    createTrade: builder.mutation({
      query: (args) => ({
        url: "Trade/create-trade",
        method: "POST",
        body: args,
      }),
    }),

    buyTrade: builder.mutation({
      query: (args) => ({
        url: "Trade/buy-trade",
        method: "POST",
        body: args,
      }),
    }),

    //get all trades including current user

    getAllTrade: builder.query({
      query: () => ({
        url: "Trade/get-mine",
        method: "GET",
      }),
    }),
    //gett others trade

    getAllTradeExecptMine: builder.query({
      query: () => ({
        url: "Trade/get-all-except-mine",
        method: "GET",
      }),
    }),
    // /Currency converstion

    fetchCurrencyPairs: builder.query({
      query: ({ skip = 0, limit = 10 }) => ({
        url: "currencypair/get-all",
        method: "GET",
        params: { skip, limit },
      }),
    }),

    CurrencyConverter: builder.query<
      any,
      { amount: number; sourceCurrency: string; targetCurrency: string }
    >({
      query: ({ amount, sourceCurrency, targetCurrency }) => ({
        url: "currency-conversion",
        method: "GET",
        params: {
          amount,
          sourceCurrency,
          targetCurrency,
        },
        // credentials: "include" as const,
      }),
    }),
    CurrentRate: builder.query<
      any,
      { baseCurrency: string; quoteCurrency: string }
    >({
      query: ({ baseCurrency, quoteCurrency }) => ({
        url: "currency-conversion/exchange-rate",
        method: "GET",
        params: {
          baseCurrency,
          quoteCurrency,
        },
        // credentials: "include" as const,
      }),
    }),

    //next
    getSingleTrade: builder.query({
      query: (id) => ({
        url: `Trade/get-trade/${id}`,
        method: "GET",
        // credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          // console.log(result);
        } catch (error: any) {
          console.log(error);
        }
      },
    }),

    //Create Beneficiary

    createBeneficiary: builder.mutation({
      query: (args) => ({
        url: "Trade/create-beneficiary",
        method: "POST",
        body: args,
      }),
    }),

    //Get all beneficiaries

    getBeneficiaries: builder.query({
      query: () => ({
        url: "Trade/get-user-beneficiaries",
        method: "GET",
      }),
      keepUnusedDataFor: 60, // Keep the data for 60 seconds in the cache
    }),

    //next
  }),
});

export const {
  useCurrentRateQuery,
  useCreateTradeMutation,
  useGetAllTradeQuery,
  useGetAllTradeExecptMineQuery,
  useGetSingleTradeQuery,
  useCurrencyConverterQuery,
  useCreateBeneficiaryMutation,
  useGetBeneficiariesQuery,
  useBuyTradeMutation,
  useFetchCurrencyPairsQuery,
} = tradeApi;
