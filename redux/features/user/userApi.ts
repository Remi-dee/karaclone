import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
  prepareHeaders: (headers, { getState }) => {
    // Get the token from localStorage
    const token = localStorage.getItem("auth_token");
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
      query: (data) => ({
        url: "user/me",
        method: "GET",
        credentials: "include" as const,
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
          console.log(error);
        }
      },
    }),

    // activate 2FA
    enableTwofa: builder.query({
      query: (data) => ({
        url: "user/enable-2fa",
        method: "GET",
        credentials: "include" as const,
      }),
    }),

    verifyTwofa: builder.mutation({
      query: ({ topt }) => ({
        url: "user/verify-2fa",
        method: "POST",
        body: { topt },
        credentials: "include" as const,
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
  }),
});

export const {
  useEnableTwofaQuery,
  useVerifyTwofaMutation,
  useLoadUserQuery,
  useLogOutQuery,
} = userApi;
