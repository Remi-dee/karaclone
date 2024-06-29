import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const initialState = {};

const chatSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increaseRegistrationStage: (state) => {
      //   state.registrationStage += 1;
      //   console.log(state.registrationStage);
    },
  },
});
export const { increaseRegistrationStage } = chatSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default chatSlice.reducer;
