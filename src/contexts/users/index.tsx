import { AppProviderProps } from "@utils/common.type";
import React, { FC, useContext, useState } from "react";
import { adminNo, users as mockUsers, usersHistory } from "./data";
import { useAuth } from "@contexts/auth";

export * from "./data";

export type TUser = {
  id: number;
  firstname: string;
  lastname: string;
  phoneNo: string;
  signAt?: Date;
  isAdmin?: boolean;
  isOwner?: boolean;
  isActive?: boolean;
};

export type TUserContext = {
  users: TUser[];
  paginate: {
    data: TUser[];
    total: number;
    page: number;
    limit: number;
  };
  currentActive: number;
  availableSlots: number;
  signIn: (user: TUser) => void;
  signOut: (user: TUser) => void;
  setPagination: (page: number) => void;
};

export const UserContext = React.createContext<TUserContext | undefined>(
  undefined
);

export const UserProvider: FC<AppProviderProps> = ({ children }) => {
  const auth = useAuth();
  const [paginate] = useState({
    data: usersHistory,
    total: usersHistory.length,
    limit: 10,
    page: 1,
  });
  const [users, setUsers] = useState(
    adminNo.includes(auth.user?.["phoneNo"])
      ? mockUsers.map((i) => ({ ...i, isAdmin: true }))
      : mockUsers
  );

  const data: TUserContext = {
    users,
    paginate,
    currentActive: 0,
    availableSlots: 0,
    signIn: () => {},
    signOut: () => {},
    setPagination: () => {},
  };

  const count = (type: "Current" | "Slots") => {
    return data.users.filter((user) => {
      return type === "Current" ? !!user.signAt : !user.signAt;
    }).length;
  };

  const setCurrentData = (page: number, limit: number) => {
    const startNumber = (page - 1) * limit;
    const endPage = page * limit;
    const isAdmin = adminNo.includes(auth.user?.["phoneNo"]);
    return usersHistory
      .map((item) => (isAdmin ? { ...item, isAdmin } : item))
      .slice(startNumber, endPage);
  };

  const signIn = (user: TUser) => {
    const alreadyExist = users.find((item) => {
      return item.phoneNo === user.phoneNo && !!item.signAt;
    });
    if (alreadyExist) {
      return console.error(`User already signed in @ slot ${alreadyExist.id}`);
    }
    setUsers(() =>
      data.users.map((item) => {
        if (item.id === user.id) {
          return {
            ...user,
            isOwner: true,
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
            isAdmin: user.isAdmin,
            signAt: undefined,
            id: user.id,
          };
        }
        return item;
      })
    );
  };

  const setPagination = (page: number) => {
    data.paginate.data = setCurrentData(page, paginate.limit);
  };

  data.paginate.data = setCurrentData(paginate.page, paginate.limit);
  data.currentActive = count("Current");
  data.availableSlots = count("Slots");
  data.signIn = signIn;
  data.signOut = signOut;
  data.setPagination = setPagination;

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export const useUser = (): TUserContext => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
