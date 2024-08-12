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
  boughtTrade: object;
  selectedTrade: object;
  wallets: any[];
  loading: boolean;
  error: string;
  selectedCurrency: string;
  amountToBuy: number;
  amountToFund: number;
  isWalletFund: boolean;
  isWalletTrade: boolean;
  isWalletBuyTrade: boolean;
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
  boughtTrade: {},
  selectedTrade: {},
  wallets: [],
  loading: false,
  error: "",
  selectedCurrency: "",
  amountToBuy: 0,
  amountToFund: 0,
  isWalletFund: false,
  isWalletTrade: false,
  isWalletBuyTrade: false,
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
    addBoughtTrade: (state, { payload }) => {
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
    setAmountToBuy: (state, action: PayloadAction<number>) => {
      state.amountToBuy = action.payload;
    },
    setAmountToFund: (state, action: PayloadAction<number>) => {
      state.amountToFund = action.payload;
    },
    setIsWalletFund: (state, action: PayloadAction<boolean>) => {
      state.isWalletFund = action.payload;
    },
    setIsWalletTrade: (state, action: PayloadAction<boolean>) => {
      state.isWalletTrade = action.payload;
    },
    setIsWalletBuyTrade: (state, action: PayloadAction<boolean>) => {
      state.isWalletBuyTrade = action.payload;
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
  addBoughtTrade,
  setAmountToBuy,
  setAmountToFund,
  setIsWalletFund,
  setIsWalletTrade,
  setIsWalletBuyTrade,
} = userSlice.actions;
export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;
