import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getTokenFromLocalStorage from "@/utils/FetchUserToken";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    const token = getTokenFromLocalStorage();
    if (token) {
      headers.set("Authorization", `bearer ${token}`);
    }
    return headers;
  },
});

export const userTransactionsApi = createApi({
  reducerPath: "userTransactionsApi",
  baseQuery,
  endpoints: (builder) => ({
    createUserTransaction: builder.mutation({
      query: (args) => ({
        url: "user-transactions",
        method: "POST",
        body: args,
      }),
    }),
    getAllUserTransactions: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `user-transactions?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
    getUserTransactionById: builder.query({
      query: (id) => ({
        url: `user-transactions/${id}`,
        method: "GET",
      }),
    }),
    updateUserTransaction: builder.mutation({
      query: ({ id, ...args }) => ({
        url: `user-transactions/${id}`,
        method: "PUT",
        body: args,
      }),
    }),
    deleteUserTransaction: builder.mutation({
      query: (id) => ({
        url: `user-transactions/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateUserTransactionMutation,
  useGetAllUserTransactionsQuery,
  useGetUserTransactionByIdQuery,
  useUpdateUserTransactionMutation,
  useDeleteUserTransactionMutation,
} = userTransactionsApi;
