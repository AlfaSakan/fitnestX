import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginType } from '../../../../utils/types/loginType';

const initialState: LoginType = {
  uid: '',
  emailVerified: false,
  refreshToken: '',
  email: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginDispatch(state, action: PayloadAction<LoginType>) {
      state.uid = action.payload.uid;
      state.emailVerified = action.payload.emailVerified;
      state.refreshToken = action.payload.refreshToken;
      state.email = action.payload.email;
    },
    setUid(state, action: PayloadAction<string>) {
      state.uid = action.payload;
    },
    setEmailVerified(state, action: PayloadAction<boolean>) {
      state.emailVerified = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
  },
});

export const { setUid, setEmailVerified, setLoginDispatch, setRefreshToken } = loginSlice.actions;
export default loginSlice.reducer;
