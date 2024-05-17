import { PayloadType } from "@/app/interfaces/general";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { TextDecoderStream } from "node:stream/web";

const initialState = {
  TextDecoderStream: false,
  conversionFees: "",
  options: "",
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
  },
});

export const { addBusinessDetailsToObject, increaseRegistrationStage } =
  userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
