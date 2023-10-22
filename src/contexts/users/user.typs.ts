export type User = {
  firstname: string;
  lastname: string;
  phoneNo: string;
};

export type UserContextProps = {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
};
