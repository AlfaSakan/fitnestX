export interface LoginType {
  uid: string;
  emailVerified: boolean;
  refreshToken: string;
  email: string | null;
}
