import { TUser } from "@contexts/users";

export * from "./booked";
export * from "./readonly";
export * from "./waitting";

export type TCardBooking = {
  user: TUser;
  onPress: (user: TUser) => void;
  isAdmin?: boolean;
};

export type TCardWaitting = {
  onPress: () => void
}

export type TCardReadonly = Omit<TCardBooking, "onPress">;
