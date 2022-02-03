import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeneralType {
  isLoading: boolean;
}

const initialState: GeneralType = {
  isLoading: false,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = generalSlice.actions;
export default generalSlice.reducer;
