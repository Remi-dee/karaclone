import { PayloadType } from "@/app/interfaces/general";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const initialState = {
  loadingState: false,
  token: "",
  user: "",
  registrationStage: 2,

  currentUser: {},
  logoutModalOpen: false,
  name: "",
  gender: "",
  account_type: "",
  role: "user",
  email: "",
  phone: "",
  business_name: "",
  business_address: "",
  business_email: "",
  business_line: "",
  password: "",
  confirmPassword: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increaseRegistrationStage: (state) => {
      state.registrationStage += 1;
      console.log(state.registrationStage);
    },
    addCurrentUser: (state, { payload }) => {
      console.log(payload);
      return (state.currentUser = payload);
    },
    setAccountType: (state, action) => {
      state.account_type = action.payload;

      // console.log(action.payload, state.account_type);
    },
    addBasicDetailsToObject: (state, { payload }) => {
      // console.log(payload);
      return { ...state, ...payload };
    },
    addBusinessDetailsToObject: (state, { payload }) => {
      return { ...state, ...payload };
    },
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
  setAccountType,
  addCurrentUser,
  addBusinessDetailsToObject,
  increaseRegistrationStage,
  userLoggedIn,
  userLoggedOut,
  toggleLogoutModal,
  addBasicDetailsToObject,
} = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
