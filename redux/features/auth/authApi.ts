import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userRegistration } from "./authSlice";

type RegistrationResponse = {
  message: string;
  activation_token: string;
};

type RegistrationData = {};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
  }),
  endpoints: (builder) => ({
    // Register user endpoint
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: (data) => ({
        url: "authentication/register",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            userRegistration({
              token: result.data.activation_token,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),

    // activate user
    activation: builder.mutation({
      query: ({ activation_code, activation_token }) => ({
        url: "authentication/activate-user",
        method: "POST",
        body: {
          activation_token,
          activation_code,
        },
      }),
    }),

    // login user
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "authentication/login",
        method: "POST",
        body: { email, password },
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
  }),
});

export const { useRegisterMutation, useLoginMutation, useActivationMutation } =
  authApi;
