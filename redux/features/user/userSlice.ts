import { PayloadType } from "@/app/interfaces/general";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { TextDecoderStream } from "node:stream/web";

interface UserWalletState {
  TextDecoderStream: boolean;
  conversionFees: string;
  options: string;
  settingsOption: string;
  walletDisplay: string;
  fundStage: number;
  reversalInitiated: boolean;
  createTradeState: number;
  isBuyTrade: boolean;
  isCreateTrade: boolean;
  isSuccesssTradeModal: boolean;
  recepient: string;
  createdTrade: object;
  selectedTrade: object;
  wallets: any[];
  loading: boolean;
  error: string;
  selectedCurrency: string;
}

const initialState: UserWalletState = {
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
  wallets: [],
  loading: false,
  error: "",
  selectedCurrency: "",
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
    setWallets: (state, action: PayloadAction<any>) => {
      state.wallets = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setSelectedCurrency: (state, action: PayloadAction<string>) => {
      state.selectedCurrency = action.payload;
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
  setWallets,
  setLoading,
  setError,
  setSelectedCurrency,
} = userSlice.actions;
export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;
