import { createSlice } from "@reduxjs/toolkit";

import { KYCState } from "@/app/interfaces/kyc";
import { PayloadType } from "@/app/interfaces/general";
import { RootState } from "@/redux/store";

const initialState: KYCState = {
  startKycModalOpen: false,
  startKybModalOpen: false,
  kycBegin: false,
  kycLevel: 1,
};

export const kycSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {
    toggleStartKycModalSuccess: (state: KYCState, { payload }: PayloadType) => {
      state.startKycModalOpen = payload.data as boolean;
    },
    toggleStartKybModalSuccess: (state: KYCState, { payload }: PayloadType) => {
      state.startKybModalOpen = payload.data as boolean;
    },
    toggleKycBegin: (state: KYCState, { payload }: PayloadType) => {
      state.kycBegin = true;
    },
    toggleKycOff: (state: KYCState) => {
      state.kycBegin = false;
      state.startKycModalOpen = false;
      state.startKybModalOpen = false;
    },
    increaseKycLevel: (state: KYCState) => {
      state.kycLevel = 2;
    },
    decreaseKycLevel: (state: KYCState) => {
      state.kycLevel = 1;
    },
  },
});

export const {
  toggleStartKycModalSuccess,
  toggleStartKybModalSuccess,
  toggleKycBegin,
  increaseKycLevel,
  decreaseKycLevel,
  toggleKycOff,
} = kycSlice.actions;
export const kycSelector = (state: RootState) => state.kyc;
export default kycSlice.reducer;
