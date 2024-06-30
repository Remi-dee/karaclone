import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const initialState = {};

const tradeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increaseRegistrationStage: (state) => {
      //   state.registrationStage += 1;
      //   console.log(state.registrationStage);
    },
  },
});
export const { increaseRegistrationStage } = tradeSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default tradeSlice.reducer;
