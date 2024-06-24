import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface TrueLayerState {
  paymentId: string;
  resourceToken: string;
}

const initialState: TrueLayerState = {
  paymentId: "",
  resourceToken: "",
};

const trueLayerSlice = createSlice({
  name: "trueLayer",
  initialState,
  reducers: {
    setPaymentDetails: (
      state,
      action: PayloadAction<{ paymentId: string; resourceToken: string }>
    ) => {
      state.paymentId = action.payload.paymentId;
      state.resourceToken = action.payload.resourceToken;
    },
    clearPaymentDetails: (state) => {
      state.paymentId = "";
      state.resourceToken = "";
    },
  },
});

export const { setPaymentDetails, clearPaymentDetails } =
  trueLayerSlice.actions;
export const trueLayerSelector = (state: RootState) => state.trueLayer;
export default trueLayerSlice.reducer;
