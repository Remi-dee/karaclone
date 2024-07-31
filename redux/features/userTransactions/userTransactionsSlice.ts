import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface UserTransactionState {
  transactions: any[];
  loading: boolean;
  error: string | null;
  selectedTransaction: null;
}

const initialState: UserTransactionState = {
  transactions: [],
  loading: false,
  error: null,
  selectedTransaction: null,
};

const userTransactionsSlice = createSlice({
  name: "userTransactions",
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<any[]>) => {
      state.transactions = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSelectedTransaction: (state, action) => {
      state.selectedTransaction = action.payload;
    },
    resetSelectedTransaction: (state) => {
      state.selectedTransaction = null;
    },
  },
});

export const { setTransactions, setLoading, setError, setSelectedTransaction } =
  userTransactionsSlice.actions;

export const selectUserTransactions = (state: RootState) =>
  state.userTransactions.transactions;
export const selectLoading = (state: RootState) =>
  state.userTransactions.loading;
export const selectError = (state: RootState) => state.userTransactions.error;
export const selectSelectedTransaction = (state: RootState) =>
  state.userTransactions.selectedTransaction;

export default userTransactionsSlice.reducer;
