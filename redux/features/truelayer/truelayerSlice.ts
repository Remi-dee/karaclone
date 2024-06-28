import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface TrueLayerState {
  paymentId: string;
  resourceToken: string;
  isPaymentSuccess: boolean;
}

const initialState: TrueLayerState = {
  paymentId: "",
  resourceToken: "",
  isPaymentSuccess: false,
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
    setIsPaymentSuccess: (state, { payload }) => {
      state.isPaymentSuccess = payload;
    },
  },
});

export const { setPaymentDetails, clearPaymentDetails, setIsPaymentSuccess } =
  trueLayerSlice.actions;
export const trueLayerSelector = (state: RootState) => state.trueLayer;
export const isPaymentSuccessSelector = (state: RootState) =>
  state.trueLayer.isPaymentSuccess;

export default trueLayerSlice.reducer;
