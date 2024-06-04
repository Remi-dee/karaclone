import { PayloadType } from "@/app/interfaces/general";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { TextDecoderStream } from "node:stream/web";

const initialState = {
  TextDecoderStream: false,
  conversionFees: "",
  options: "",
  settingsOption: "Basic Details",
  walletDisplay: "",
  fundStage: 1,
  reversalInitiated: false,
  createTradeState: 1,
  isBuyTrade: false,
  isCreateTrade: false,
  isSuccesssTradeModal: false,
  recepient: "",
  createdTrade: {},
  selectedTrade: {},
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increaseRegistrationStage: (state) => {
      //   state.registrationStage += 1;
      //   console.log(state.registrationStage);
    },

    addBusinessDetailsToObject: (state, { payload }) => {
      return { ...state, ...payload };
    },
    addCreatedTrade: (state, { payload }) => {
      state.createdTrade = payload;
    },
    toggleSettingsTab: (state, { payload }) => {
      state.settingsOption = payload;
    },
    toggleReversalState: (state, { payload }) => {
      state.reversalInitiated = payload;
    },
    toggleCreateTrade: (state, { payload }) => {
      state.isCreateTrade = payload;
    },
    toggleCreateTradeStage: (state, { payload }) => {
      state.createTradeState = payload;
    },
    toggleBuyTradeDisplay: (state, { payload }) => {
      state.isBuyTrade = payload;
    },
    toggleBuyTradeState: (state, { payload }) => {
      state.createTradeState = payload;
    },
    toggleWalletDispaly: (state, { payload }) => {
      state.walletDisplay = payload;
    },
    increaseFundWallet: (state, { payload }) => {
      state.fundStage = payload;
    },
    toggleBuyTradeSuccessModal: (state, { payload }) => {
      state.isSuccesssTradeModal = payload;
    },
    addDataForSelectedTrade: (state, { payload }) => {
      state.selectedTrade = payload;
    },
  },
});
export const {
  addBusinessDetailsToObject,
  addCreatedTrade,
  increaseRegistrationStage,
  toggleSettingsTab,
  toggleCreateTradeStage,
  toggleReversalState,
  toggleWalletDispaly,
  toggleBuyTradeState,
  increaseFundWallet,
  toggleCreateTrade,
  toggleBuyTradeDisplay,
  addDataForSelectedTrade,
  toggleBuyTradeSuccessModal,
} = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
