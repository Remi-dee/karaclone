import { RootState } from "@/redux/store";
import getTokenFromLocalStorage from "@/utils/FetchUserToken";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  reducerPath: "chatApi",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getTokenFromLocalStorage();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getChatMessages: builder.query({
      query: () => "chat",
    }),
    getAllConversations: builder.query({
      query: () => "chat/conversations",
    }),
    getMessagesByConversationId: builder.query({
      query: (conversationId) => `chat/conversation/${conversationId}`,
    }),
    createChatMessage: builder.mutation({
      query: (messageData) => ({
        url: "chat",
        method: "POST",
        body: messageData,
      }),
    }),
  }),
});

export const {
  useGetChatMessagesQuery,
  useGetAllConversationsQuery,
  useGetMessagesByConversationIdQuery,
  useCreateChatMessageMutation,
} = chatApi;
