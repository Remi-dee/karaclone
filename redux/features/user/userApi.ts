import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../auth/authSlice";
import getTokenFromLocalStorage from "@/utils/FetchUserToken";

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

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery, // Use the customized baseQuery
  endpoints: (builder) => ({
    // get user
    loadUser: builder.query({
      query: () => ({
        url: "user/me",
        method: "GET",
        // credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error: any) {
          // console.log(error);
        }
      },
    }),

    // activate 2FA
    enableTwofa: builder.query({
      query: () => ({
        url: "user/enable-2fa",
        method: "GET",
        // credentials: "include" as const,
      }),
    }),

    verifyTwofa: builder.mutation({
      query: ({ topt }) => ({
        url: "user/verify-2fa",
        method: "POST",
        body: { topt },
        // credentials: "include" as const,
      }),
    }),

    logOut: builder.query({
      query: () => ({
        url: "user/logout",
        method: "GET",

        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { dispatch }) {
        try {
          dispatch(userLoggedOut());
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    //tranasaction
    //get all transaction fees

    getTransactionFees: builder.query({
      query: () => ({
        url: "transaction-fee/get-all",
        method: "GET",
        // credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          console.log(result);
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    //get conversion rates

    getConversionFees: builder.query({
      query: () => ({
        url: "conversion-fee/get-all",
        method: "GET",
        // credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          console.log(result);
        } catch (error: any) {
          console.log(error);
        }
      },
    }),

    //next

    //get all currency pairs

    getAllCurrencyPairs: builder.query({
      query: () => ({
        url: "currencypair/get-all",
        method: "GET",
        // credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          console.log(result);
        } catch (error: any) {
          console.log(error);
        }
      },
    }),

    //get specific currency pair

    getSingleCurrencyPair: builder.query({
      query: (id) => ({
        url: `conversion-fee/get/${id}`,
        method: "GET",
        // credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          console.log(result);
        } catch (error: any) {
          console.log(error);
        }
      },
    }),

    //generate radom password

    getRandomPassword: builder.query({
      query: () => ({
        url: "user/generate-user-password",
        method: "GET",
        // credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          console.log(result);
        } catch (error: any) {
          console.log(error);
        }
      },
    }),

    //next

    getAllUsersWallet: builder.query({
      query: () => ({
        url: "wallet/get-all-user-wallets",
        method: "GET",
        // credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          console.log(result);
        } catch (error: any) {
          console.log(error);
        }
      },
    }),

    //create a trade

    createTrade: builder.mutation({
      query: (args) => ({
        url: "Trade/create-trade",
        method: "POST",
        body: args,
        // credentials: "include" as const,
      }),
    }),

    //get all trades including current user

    getAllTrade: builder.query({
      query: () => ({
        url: "Trade/get-all-trades",
        method: "GET",
        // credentials: "include" as const,
      }),
    }),
    //gett others trade

    getAllTradeExecptMine: builder.query({
      query: () => ({
        url: "Trade/get-all-except-mine",
        method: "GET",
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

    //next
  }),
});

export const {
  useEnableTwofaQuery,
  useVerifyTwofaMutation,
  useLoadUserQuery,
  useLogOutQuery,
  useGetTransactionFeesQuery,
  useGetConversionFeesQuery,
  useGetRandomPasswordQuery,
  useGetSingleCurrencyPairQuery,
  useGetAllCurrencyPairsQuery,
  useGetAllUsersWalletQuery,
  useCreateTradeMutation,
  useGetAllTradeQuery,
  useGetAllTradeExecptMineQuery,
  useGetSingleTradeQuery,
} = userApi;
