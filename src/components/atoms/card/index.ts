import { TUser } from "@contexts/useUserContext";

export * from "./booked";
export * from "./waitting";

export type TCardBooking = {
  user: TUser;
  onPress?: () => void
};

export type TOnPressCardButton = Omit<TCardBooking, 'user'>
