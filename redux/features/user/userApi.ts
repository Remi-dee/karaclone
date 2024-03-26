import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
  prepareHeaders: (headers, { getState }) => {
    // Get the token from localStorage
    const token = localStorage.getItem("auth");
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
  }),
});

export const { useEnableTwofaQuery, useVerifyTwofaMutation } = userApi;
