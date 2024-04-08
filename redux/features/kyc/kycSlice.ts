import { createSlice } from "@reduxjs/toolkit";

import { KYCState } from "@/app/interfaces/kyc";
import { PayloadType } from "@/app/interfaces/general";
import { RootState } from "@/redux/store";

const initialState: KYCState = {
  startKycModalOpen: false,
};

export const kycSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {
    toggleStartKycModalSuccess: (state: KYCState, { payload }: PayloadType) => {
      state.startKycModalOpen = payload.data as boolean;
    },
  },
});

export const { toggleStartKycModalSuccess } = kycSlice.actions;
export const kycSelector = (state: RootState) => state.kyc;
export default kycSlice.reducer;
