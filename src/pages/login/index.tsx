import { STORAGE_KEYS } from "@/lib/constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    if (window) localStorage.setItem(STORAGE_KEYS.TOKEN, "token");
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold text-[#081421]">Log In</h1>
      <div className="text-sm self-end">Dont't have an account? <Link to="/onboarding/signup">Sign Up</Link></div>
    </div>
  )
}
