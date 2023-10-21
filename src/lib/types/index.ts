export interface User {
  id: string;
  email: string;
}

export interface Auth {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}
