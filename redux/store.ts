"use client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authSlice from "./features/auth/authSlice";

import { authApi } from "./features/auth/authApi";
import { userApi } from "./features/user/userApi";
import modalSlice from "./modal/modalSlice";
import kycSlice from "./features/kyc/kycSlice";
import { kycApi } from "./features/kyc/kycApi";
import userSlice from "./features/user/userSlice";
import { tradeApi } from "./features/trade/tradeApi";
import tradeSlice from "./features/trade/tradeSlice";
import { trueLayerApi } from "./features/truelayer/truelayerApi";
import truelayerSlice from "./features/truelayer/truelayerSlice";
import { userTransactionsApi } from "./features/userTransactions/userTransactionsApi";
import userTransactionsSlice from "./features/userTransactions/userTransactionsSlice";
import { notificationApi } from "./features/notification/notificationApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,

    [userApi.reducerPath]: userApi.reducer,
    [tradeApi.reducerPath]: tradeApi.reducer,
    [kycApi.reducerPath]: kycApi.reducer,
    [trueLayerApi.reducerPath]: trueLayerApi.reducer,
    [userTransactionsApi.reducerPath]: userTransactionsApi.reducer,
    [notificationApi.reducerPath]: notificationApi.reducer,

    userTransactions: userTransactionsSlice,
    trueLayer: truelayerSlice,
    auth: authSlice,
    modal: modalSlice,
    kyc: kycSlice,
    user: userSlice,
    trade: tradeSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      kycApi.middleware,
      tradeApi.middleware,
      trueLayerApi.middleware,
      userTransactionsApi.middleware,
      notificationApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
