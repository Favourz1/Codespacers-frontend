import Button from "@/components/Button";
import Input from "@/components/Input";
import { STORAGE_KEYS } from "@/lib/constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BudgetifyBlueLogo from "@/assets/icons/budgetify-logo-blue.svg";

export default function Login() {
  useEffect(() => {
    if (window) localStorage.setItem(STORAGE_KEYS.TOKEN, "token");
  }, []);

  return (
    <>
      <span className="block md:hidden mb-[100px]">
        <BudgetifyBlueLogo />
      </span>
      <div className="flex flex-col w-full max-w-full md:max-w-[80%]">
        <h1 className="text-xl font-semibold text-[#081421] mb-8">Log In</h1>
        <div className="text-sm self-end font-medium">
          Don't have an account?{" "}
          <Link
            to="/onboarding/signup"
            className="text-primaryColor hover:underline"
          >
            Sign Up
          </Link>
        </div>
        <form className="space-y-5">
          <div>
            <Input
              label="Full Name *"
              type="text"
              placeholder="Enter Full Name"
              name="full_name"
            />
            <p></p>
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              placeholder="*********"
              name="password"
            />
            <p></p>
          </div>
          <div className="text-sm flex justify-between items-center !mb-8">
            <div className="flex items-center space-x-3">
              <Input type="checkbox" name="remember_password" label="" />
              <span>Remember Password</span>
            </div>
            <Link to="" className="text-red-400">
              Forgot Password
            </Link>
          </div>
          <Button customClass="w-full" variant="filled">
            Log In
          </Button>
        </form>
      </div>
    </>
  );
}
