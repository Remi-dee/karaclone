import { PayloadType } from "@/app/interfaces/general";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { TextDecoderStream } from "node:stream/web";

const initialState = {
  TextDecoderStream: false,
  conversionFees: "",
  options: "",
  settingsOption: "Basic Details",
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
    toggleSettingsTab: (state, { payload }) => {
      state.settingsOption = payload;
    },
  },
});
export const {
  addBusinessDetailsToObject,
  increaseRegistrationStage,
  toggleSettingsTab,
} = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
