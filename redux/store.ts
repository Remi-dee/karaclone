"use client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authSlice from "./features/auth/authSlice";
import { apiSlice } from "./features/api/apiSlice";
import { authApi } from "./features/auth/authApi";
import { userApi } from "./features/user/userApi";
import modalSlice from "./modal/modalSlice";
import kycSlice from "./features/kyc/kycSlice";
import { kycApi } from "./features/kyc/kycApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [kycApi.reducerPath]: kycApi.reducer,
    auth: authSlice,
    modal: modalSlice,
    kyc: kycSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      kycApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
