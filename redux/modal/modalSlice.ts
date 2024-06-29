import { createSlice } from "@reduxjs/toolkit";

interface modalState {
  isOpen: boolean;
  isTradeModalOpen: boolean;
  isChatModalOpen: boolean;
  isNotificationModalOpen: boolean;
  isCheckRateModalOpen: boolean;
}

const initialState: modalState = {
  isOpen: false,
  isTradeModalOpen: false,
  isChatModalOpen: false,
  isNotificationModalOpen: false,
  isCheckRateModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },

    closeModal: (state) => {
      state.isOpen = false;
    },
    openTradeModal: (state) => {
      state.isTradeModalOpen = true;
    },

    closeTradeModal: (state) => {
      state.isTradeModalOpen = false;
    },
    openChatModal: (state) => {
      state.isChatModalOpen = true;
    },

    closeChatModal: (state) => {
      state.isChatModalOpen = false;
    },
    openNotificationModal: (state) => {
      state.isNotificationModalOpen = true;
    },

    closeNotificationModal: (state) => {
      state.isNotificationModalOpen = false;
    },
    openCheckRateModal: (state) => {
      state.isCheckRateModalOpen = true;
    },

    closeCheckRateModal: (state) => {
      state.isCheckRateModalOpen = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  openTradeModal,
  closeTradeModal,
  openChatModal,
  closeChatModal,
  closeNotificationModal,
  openNotificationModal,
  closeCheckRateModal,
  openCheckRateModal,
} = modalSlice.actions;
export default modalSlice.reducer;
