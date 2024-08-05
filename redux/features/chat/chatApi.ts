import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../auth/authSlice";
import getTokenFromLocalStorage from "@/hooks/FetchUserToken";
import { BsPostageFill } from "react-icons/bs";

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

export const chatApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  endpoints: (builder) => ({
    post: builder.mutation({
      query: (args) => ({
        url: "",
        method: "POST",
        body: args,
      }),
    }),
    get: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),

    //next
  }),
});

export const { useGetQuery } = chatApi;
