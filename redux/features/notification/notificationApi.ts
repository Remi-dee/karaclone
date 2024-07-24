import getTokenFromLocalStorage from "@/utils/FetchUserToken";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Notification = {
  id: string;
  userId: string;
  message: string;
  read: boolean;
  createdAt: string;
};

type CreateNotificationData = {
  message: string;
};

type MarkAsReadData = {};

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: fetchBaseQuery({
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
  }),
  endpoints: (builder) => ({
    createNotification: builder.mutation<
      { message: string; data: Notification },
      CreateNotificationData
    >({
      query: (data) => ({
        url: "notifications",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("Notification Created: ", result.data);
        } catch (error: any) {
          console.log("Error creating notification: ", error);
        }
      },
    }),
    getNotifications: builder.query<
      { message: string; data: Notification[] },
      void
    >({
      query: () => "notifications",
    }),
    markAllAsRead: builder.mutation<void, void>({
      query: () => ({
        url: "notifications/read",
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useCreateNotificationMutation,
  useGetNotificationsQuery,
  useMarkAllAsReadMutation,
} = notificationApi;
