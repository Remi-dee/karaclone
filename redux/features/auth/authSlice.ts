import { PayloadType } from "@/app/interfaces/general";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const initialState = {
  token: "",
  user: "",
  logoutModalOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    userLoggedIn: (
      state,
      action: PayloadAction<{ accessToken: string; user: string }>
    ) => {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.token = "";
      state.user = "";
    },
    toggleLogoutModal: (state, { payload }: PayloadType) => {
      state.logoutModalOpen = payload.data;
    },
  },
});

export const {
  userRegistration,
  userLoggedIn,
  userLoggedOut,
  toggleLogoutModal,
} = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
