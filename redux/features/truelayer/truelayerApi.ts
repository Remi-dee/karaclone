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

type WithdrawalRequest = {
  transaction_id: string;
  beneficiary_name: string;
  beneficiary_iban: string;
  beneficiary_reference: string;
  currency: string;
  amount_in_minor: number;
};

type DirectDepositRequest = {
  user_id: string;
  deposit: {
    deposit_id: string;
    provider_id: string;
    scheme_id: string;
    fee_option_id: string;
    amount_in_minor: number;
    currency: string;
  };
  remitter: {
    name: string;
    account: {
      type: string;
      sort_code: string;
      account_number: string;
    };
    remitter_reference?: string;
  };
  auth_flow: {
    type: string;
    return_uri: string;
    psu_ip_address?: string;
    data_access_token?: string;
    additional_inputs?: any;
  };
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
    initiateWithdrawal: builder.mutation<any, WithdrawalRequest>({
      query: (data) => ({
        url: "/truelayer/withdrawals/initiate",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("Withdrawal Initiated: ", result.data);
        } catch (error: any) {
          console.log("Error initiating withdrawal: ", error);
        }
      },
    }),
    initiateDirectDeposit: builder.mutation<any, DirectDepositRequest>({
      query: (data) => ({
        url: "/truelayer/deposits/initiate",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("Direct Deposit Initiated: ", result.data);
        } catch (error: any) {
          console.log("Error initiating direct deposit: ", error);
        }
      },
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useGetPaymentDetailsQuery,
  useInitiateWithdrawalMutation,
  useInitiateDirectDepositMutation,
} = trueLayerApi;
