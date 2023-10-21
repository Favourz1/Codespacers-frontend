import { STORAGE_KEYS } from "@/lib/constants";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    if (window) localStorage.setItem(STORAGE_KEYS.TOKEN, "token");
  }, []);

  return <h1>Login</h1>;
}
