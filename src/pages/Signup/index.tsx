import Button from "@/components/Button";
import Input from "@/components/Input";
import { STORAGE_KEYS } from "@/lib/constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BudgetifyBlueLogo from "@/assets/icons/budgetify-logo-blue.svg";

export default function Signup() {
  useEffect(() => {
    if (window) localStorage.setItem(STORAGE_KEYS.TOKEN, "token");
  }, []);

  return (
    <>
      <span className="block md:hidden mb-[100px]">
        <BudgetifyBlueLogo />
      </span>
      <div className="flex flex-col w-full max-w-full md:max-w-[80%]">
        <h1 className="text-xl font-semibold text-[#081421] mb-8">
          Create Account
        </h1>
        <div className="text-sm self-end font-medium">
          Already have an account?{" "}
          <Link
            to="/onboarding/login"
            className="text-primaryColor hover:underline"
          >
            Sign In
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
              label="Email Address *"
              type="text"
              placeholder="Enter Email Address"
              name="email"
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
          <div>
            <Input
              label="Re-type Password"
              type="password"
              placeholder="*********"
              name="password"
            />
            <p></p>
          </div>
          <div className="text-sm flex items-center !mb-8">
            <div className="flex items-center space-x-3">
              <Input type="checkbox" name="remember_password" label="" />
              <span>
                I agree to Budgetify Terms of Service and Privacy Policy.
              </span>
            </div>
          </div>
          <Button customClass="w-full" variant="filled">
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
}
