import { GenderType } from './gender';

export interface UserType {
  firstName: string;
  lastName: string;
  email: string | null;
  gender: GenderType;
  dateOfBirth: number;
  weight: number;
  height: number;
  goal: string;
}

export interface UserFirebaseType {
  [key: string]: UserType;
}
