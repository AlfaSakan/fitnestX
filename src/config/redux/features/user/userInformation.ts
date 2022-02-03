import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GenderType } from '../../../../utils/types/gender';
import { UserType } from '../../../../utils/types/userType';

const initialState: UserType = {
  firstName: '',
  lastName: '',
  email: '',
  gender: 'male',
  dateOfBirth: 0,
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
    setEmail(state, action: PayloadAction<string | null>) {
      state.email = action.payload;
    },
    setGender(state, action: PayloadAction<GenderType>) {
      state.gender = action.payload;
    },
    setDateOfBirth(state, action: PayloadAction<number>) {
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
    setUserData(state, action: PayloadAction<UserType>) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.goal = action.payload.goal;
      state.height = action.payload.height;
      state.weight = action.payload.weight;
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
  setUserData,
} = userSlice.actions;
export default userSlice.reducer;
