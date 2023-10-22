import { TFCProps } from '@utils/common.type';
import React, { FC } from 'react';

export const AuthContext = React.createContext<any>(null);

export const AuthProvider: FC<TFCProps> = ({ children }) => {
  const [user, setUser] = React.useState<any | null>(null);

  const login = async (firstname: string) => {
    // TODO: Implement actual login logic
    setUser({ firstname });
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};