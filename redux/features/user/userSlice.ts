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
  isTradeModal: false,
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
      state.createTradeState = payload;
      state.isBuyTrade = state.isBuyTrade === true ? false : true;
    },
    toggleWalletDispaly: (state, { payload }) => {
      state.walletDisplay = payload;
    },
    increaseFundWallet: (state, { payload }) => {
      state.fundStage = payload;
    },
  },
});
export const {
  addBusinessDetailsToObject,
  increaseRegistrationStage,
  toggleSettingsTab,
  toggleCreateTradeStage,
  toggleReversalState,
  toggleWalletDispaly,
  increaseFundWallet,
  toggleCreateTrade,
  toggleBuyTradeDisplay,
} = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
