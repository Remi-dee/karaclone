import { createSlice } from "@reduxjs/toolkit";

interface modalState {
  isOpen: boolean;
  isTradeModalOpen: boolean;
  isChatModalOpen: boolean;
  isNotificationModalOpen: boolean;
  isCheckRateModalOpen: boolean;
  isProfileModalOpen: boolean;
}

const initialState: modalState = {
  isOpen: false,
  isTradeModalOpen: false,
  isChatModalOpen: false,
  isNotificationModalOpen: false,
  isCheckRateModalOpen: false,
  isProfileModalOpen: false,
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
    toggleProfileModal: (state) => {
      if (state.isProfileModalOpen === false) {
        state.isProfileModalOpen = true;
      } else {
        state.isProfileModalOpen = false;
      }
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
  toggleProfileModal,
} = modalSlice.actions;
export default modalSlice.reducer;
