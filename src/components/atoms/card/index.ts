import { TUser } from "@contexts/users";

export * from "./booked";
export * from "./readonly";
export * from "./waitting";

export type TCardBooking = {
  user: TUser;
  onSignOut: (user: TUser) => void;
  isAdmin?: boolean;
};

export type TCardWaitting = {
  id: number;
  onSignIn: (id: number) => void;
};

export type TCardReadonly = Omit<TCardBooking, "onSignOut">;
