"use client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authSlice from "./features/auth/authSlice";
import { apiSlice } from "./features/api/apiSlice";
import { authApi } from "./features/auth/authApi";
import { userApi } from "./features/user/userApi";
import modalSlice from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice,
    [userApi.reducerPath]: userApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
