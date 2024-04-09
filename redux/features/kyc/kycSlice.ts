import { createSlice } from "@reduxjs/toolkit";

import { KYCState } from "@/app/interfaces/kyc";
import { PayloadType } from "@/app/interfaces/general";
import { RootState } from "@/redux/store";

const initialState: KYCState = {
  startKycModalOpen: false,
  startKybModalOpen: false,
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
  },
});

export const { toggleStartKycModalSuccess, toggleStartKybModalSuccess } =
  kycSlice.actions;
export const kycSelector = (state: RootState) => state.kyc;
export default kycSlice.reducer;
