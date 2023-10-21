import { createContext, useContext, useState } from "react";
import { Auth, User } from "@/lib/types";

const AuthContext = createContext({} as Auth);

interface Props {
  children: JSX.Element;
}

export function AuthProvider(props: Props) {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<User>({} as User);

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default function useAuthContext() {
  return useContext(AuthContext);
}
