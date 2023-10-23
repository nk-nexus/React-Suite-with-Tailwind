import { AppProviderProps } from "@utils/common.type";
import React, { FC, useContext, useState } from "react";
import { users as mockUsers } from "./data";

export * from "./data";

export type TUser = {
  id: number;
  firstname: string;
  lastname: string;
  phoneNo: string;
  signAt?: Date;
  isAdmin?: boolean;
};

export type TUserContext = {
  users: TUser[];
  currentActive: number;
  availableSlots: number;
  signIn: (user: TUser) => void;
  signOut: (user: TUser) => void;
  // updateUser: (id: number, updatedUser: TUser) => void;
  // removeUser: (id: number) => void;
};

export const UserContext = React.createContext<TUserContext | undefined>(
  undefined
);

export const UserProvider: FC<AppProviderProps> = ({ children }) => {
  const [users, setUsers] = useState(mockUsers);

  const data: TUserContext = {
    users,
    currentActive: 0,
    availableSlots: 0,
    signIn: () => {},
    signOut: () => {},
  };

  const count = (type: "Current" | "Slots") => {
    return data.users.filter((user) => {
      return type === "Current" ? !!user.signAt : !user.signAt;
    }).length;
  };

  const signIn = (user: TUser) => {
    const alreadyExist = users.find(item => {
      return item.phoneNo === user.phoneNo && !!item.signAt
    })
    if (alreadyExist) {
      return console.error(`User already signed in @ slot ${alreadyExist.id}`)
    }
    setUsers(() =>
      data.users.map((item) => {
        if (item.id === user.id) {
          return {
            ...user,
            isAdmin: true,
            signAt: new Date(),
          };
        }
        return item;
      })
    );
  };

  const signOut = (user: TUser) => {
    setUsers(() =>
      data.users.map((item) => {
        if (item.id === user.id) {
          return {
            firstname: user.firstname,
            lastname: user.lastname,
            phoneNo: user.phoneNo,
            signAt: undefined,
            id: user.id,
          };
        }
        return item;
      })
    );
  };

  data.currentActive = count("Current");
  data.availableSlots = count("Slots");
  data.signIn = signIn;
  data.signOut = signOut;

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export const useUser = (): TUserContext => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
