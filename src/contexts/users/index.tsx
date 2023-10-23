import { AppProviderProps  } from "@utils/common.type";
import React, { FC, useContext } from "react";
import { users } from "./data";

export * from "./data";

export type TUser = {
  firstname: string;
  lastname: string;
  phoneNo: string;
  signAt?: Date;
  isAdmin?: boolean;
};

export type TUserContext = {
  users: TUser[];
  // booking: (user: TUser) => void;
  // updateUser: (id: number, updatedUser: TUser) => void;
  // removeUser: (id: number) => void;
};

export const UserContext = React.createContext<TUserContext | undefined>(undefined);

export const UserProvider: FC<AppProviderProps > = ({ children }) => {
  const data = { users } as any;

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export const useUser = (): TUserContext => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};