export interface IUser {
  _id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneE164?: string;
  role: "customer" | "provider" | "admin";
  avatarUrl?: string;
  isVerified: boolean;
}
