import { TFCProps } from '@utils/common.type';
import React, { createContext, useContext, FC } from 'react';
import { User, UserContextProps } from './user.typs';

export * from "./user.typs"

const UserContext = createContext<UserContextProps | null>(null);

export const useUserContext = (): UserContextProps | null => {
  const context = useContext(UserContext);
  console.log('Use Context', context)
  if (!context) {
    console.log('useUserContext must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: FC<TFCProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);

  const login = (userData: User): void => {
    setUser(userData);
  };

  const logout = (): void => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};