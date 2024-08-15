import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../auth/authSlice";
import getTokenFromLocalStorage from "@/hooks/FetchUserToken";

interface Wallet {
  _id: string;
  currency_code: string;
  balance: number;
}

interface WalletsResponse {
  wallets: Wallet[];
}
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
      }),
    }),

    verifyTwofa: builder.mutation({
      query: (body) => ({
        url: "/authentication/verify-2fa",
        method: "POST",
        body,
      }),
    }),

    // Enable Two-Factor Authentication
    enableTwoFA: builder.mutation({
      query: () => ({
        url: "user/enable-email-2fa",
        method: "POST",
      }),
    }),

    // Disable Two-Factor Authentication
    disableTwoFA: builder.mutation({
      query: () => ({
        url: "user/disable-2fa",
        method: "POST",
      }),
    }),

    fetchTwoFAStatus: builder.query({
      query: () => ({
        url: "user/two-factor-status",
        method: "GET",
      }),
    }),

    updateUserProfile: builder.mutation({
      query: (userData) => ({
        url: "user/update-profile",
        method: "POST",
        body: userData,
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
          // console.log(error);
        }
      },
    }),

    //tranasactions
    //get all transaction fees

    getTransactionFees: builder.query({
      query: () => ({
        url: "transaction-fee/get-all",
        method: "GET",
      }),
    }),
    //get conversion rates

    getConversionFees: builder.query({
      query: () => ({
        url: "conversion-fee/get-all",
        method: "GET",
      }),
    }),

    //get all currency pairs

    getAllCurrencyPairs: builder.query({
      query: () => ({
        url: "currencypair/get-all",
        method: "GET",
      }),
    }),

    //get specific currency pair

    getSingleCurrencyPair: builder.query({
      query: (id) => ({
        url: `conversion-fee/get/${id}`,
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          // console.log(result);
        } catch (error: any) {
          // console.log(error);
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
    }),

    //next

    getAllUserWallets: builder.query({
      query: () => ({
        url: "wallets",
        method: "GET",
      }),
      transformResponse: (response: { length: number; wallets: any }) =>
        response,
      providesTags: <any>["Wallets"],
    }),

    fundWallet: builder.mutation({
      query: ({ currency_code, amount }) => ({
        url: "wallets/fund",
        method: "POST",
        body: { currency_code, amount },
      }),
      invalidatesTags: <any>["Wallets"],
    }),

    // /Currency converstion

    CurrencyConverter: builder.query<
      any,
      { amount: string; sourceCurrency: string; targetCurrency: string }
    >({
      query: ({ amount, sourceCurrency, targetCurrency }) => ({
        url: "currency-conversion",
        method: "GET",
        params: {
          amount,
          sourceCurrency,
          targetCurrency,
        },
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
  }),
});

export const {
  useEnableTwofaQuery,
  useCurrentRateQuery,
  useVerifyTwofaMutation,
  useLoadUserQuery,
  useLogOutQuery,
  useGetTransactionFeesQuery,
  useGetConversionFeesQuery,
  useGetRandomPasswordQuery,
  useGetSingleCurrencyPairQuery,
  useGetAllCurrencyPairsQuery,
  useGetAllUserWalletsQuery,
  useFundWalletMutation,
  useUpdateUserProfileMutation,
  useEnableTwoFAMutation,
  useDisableTwoFAMutation,
  useFetchTwoFAStatusQuery,

  useCurrencyConverterQuery,
} = userApi;
