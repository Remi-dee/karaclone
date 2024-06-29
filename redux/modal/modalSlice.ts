import { createSlice } from "@reduxjs/toolkit";

interface modalState {
  isOpen: boolean;
  isTradeModalOpen: boolean;
}

const initialState: modalState = { isOpen: false, isTradeModalOpen: false };

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
  },
});

export const { openModal, closeModal, openTradeModal, closeTradeModal } =
  modalSlice.actions;
export default modalSlice.reducer;
