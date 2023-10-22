import { TFCProps, TRecordState } from "@utils/common.type";
import React, { FC } from "react";

export type TAuthContext = {
  user: TRecordState | null;
  isAuth: boolean;
  login: (value: TRecordState) => void;
  logout: () => void;
};

export const AuthContext = React.createContext<TAuthContext | null>(null);

export const AuthProvider: FC<TFCProps> = ({ children }) => {
  
  const loadUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  };

  let user = loadUser()

  const isAuth = !!user?.phoneNo

  const login = (value: TRecordState) => {
    localStorage.setItem("user", JSON.stringify(value));
    user = loadUser()
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const data = { user, isAuth, login, logout };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
