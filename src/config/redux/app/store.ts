import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userInformation';
import generalReducer from '../features/general/general';
import loginReducer from '../features/login';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    general: generalReducer,
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
