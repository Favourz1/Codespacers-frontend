import Button from "@/components/Button";
import Input from "@/components/Input";
// import { STORAGE_KEYS } from "@/lib/constants";
// import { useEffect } from "react";
import BudgetifyBlueLogo from "@/assets/icons/budgetify-logo-blue.svg";

export default function ForgotPassword() {
  // useEffect(() => {
  //   if (window) localStorage.setItem(STORAGE_KEYS.TOKEN, "token");
  // }, []);

  return (
    <>
      <span className="block md:hidden mb-[100px]">
        <BudgetifyBlueLogo />
      </span>
      <div className="flex flex-col w-full max-w-full md:max-w-[80%]">
        <h1 className="text-xl font-semibold text-[#081421] mb-8">
          Forgot Password
        </h1>
        <form className="space-y-5">
          <div>
            <Input
              label="Enter Email Address *"
              type="text"
              placeholder="Input Email"
              name="email"
            />
            <p></p>
          </div>
          <Button customClass="w-full" variant="filled">
            Enter
          </Button>
        </form>
      </div>
    </>
  );
}
