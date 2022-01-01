import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { genderType } from '../../types/gender';

interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  gender: genderType;
  dateOfBirth: string;
  weight: number;
  height: number;
  goal: string;
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  gender: 'male',
  dateOfBirth: '',
  weight: 0,
  height: 0,
  goal: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setGender(state, action: PayloadAction<genderType>) {
      state.gender = action.payload;
    },
    setDateOfBirth(state, action: PayloadAction<string>) {
      state.dateOfBirth = action.payload;
    },
    setWeight(state, action: PayloadAction<number>) {
      state.weight = action.payload;
    },
    setHeight(state, action: PayloadAction<number>) {
      state.height = action.payload;
    },
    setGoal(state, action: PayloadAction<string>) {
      state.goal = action.payload;
    },
  },
});

export const {
  setDateOfBirth,
  setFirstName,
  setLastName,
  setEmail,
  setGender,
  setWeight,
  setHeight,
  setGoal,
} = userSlice.actions;
export default userSlice.reducer;
