import Button from "@/components/Button";
import Input from "@/components/Input";
import { Link, useNavigate } from "react-router-dom";
import BudgetifyBlueLogo from "@/assets/icons/budgetify-logo-blue.svg";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "@/lib/api/config";
import { useState } from "react";

type FormValues = {
  username: string;
  password: string;
  remember_password: boolean;
};
const schema = yup.object().shape({
  username: yup.string().trim().required("Username is required"),
  password: yup.string().trim().required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  async function handleLoginRequest(data: FormValues): Promise<void> {
    // console.log("data", data);
    try {
      setIsLoading(true);
      const response = await api.post("/auth/login", data);
      console.log(response.data);
      toast.success("Logged In Successfully.");
      navigate("/u/dashboard");
    } catch (err) {
      console.log(err);
      toast.error(err?.response.data.message);
    }
    setIsLoading(false);
  }
  return (
    <>
      <FormProvider {...methods}>
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
          <form
            className="space-y-5"
            onSubmit={handleSubmit(handleLoginRequest)}
          >
            <div>
              <Input
                label="Username *"
                type="text"
                placeholder="Enter Your User Name"
                name="username"
              />
              {errors.username && (
                <span className="text-red-500 text-sm">
                  {errors?.username?.message}
                </span>
              )}
            </div>
            <div>
              <Input
                label="Password"
                type="password"
                placeholder="*********"
                name="password"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors?.password?.message}
                </span>
              )}
            </div>
            <div className="text-sm flex justify-between items-center !mb-8">
              <div className="flex items-center space-x-3">
                <Input type="checkbox" name="remember_password" label="" />
                <span>Remember Password</span>
              </div>
              <Link
                to="/onboarding/forgot-password"
                className="text-red-400 hover:underline"
              >
                Forgot Password
              </Link>
            </div>
            <Button customClass="w-full" variant="filled">
              {isLoading && (
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                ></div>
              )}
              Log In
            </Button>
          </form>
        </div>
      </FormProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
