import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type PaymentResponse = {
  payment_id: string;
  resource_token: string;
};

type Address = {
  address_line1: string;
  city: string;
  state: string;
  zip: string;
  country_code: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  address: Address;
};

type Beneficiary = {
  type: string;
  merchant_account_id: string | any;
};

type PaymentMethod = {
  provider_selection: {
    type: string;
  };
  type: string;
  beneficiary: Beneficiary;
};

type CreatePaymentData = {
  amount_in_minor: number;
  currency: string;
  payment_method: PaymentMethod;
  user: User;
};

export const trueLayerApi = createApi({
  reducerPath: "trueLayerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    createPayment: builder.mutation<PaymentResponse, CreatePaymentData>({
      query: (data) => ({
        url: "/truelayer/payments/initiate",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("Payment Created: ", result.data);
        } catch (error: any) {
          console.log("Error creating payment: ", error);
        }
      },
    }),
    getPaymentDetails: builder.query<PaymentResponse, string>({
      query: (paymentId) => `truelayer/payment-details/${paymentId}`,
    }),
  }),
});

export const { useCreatePaymentMutation, useGetPaymentDetailsQuery } =
  trueLayerApi;
