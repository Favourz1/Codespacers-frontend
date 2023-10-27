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
  fullname: string;
  username: string;
  email: string;
  password: string;
  remember_password: boolean;
};

const schema = yup.object().shape({
  username: yup.string().trim().required("Username is required"),
  fullname: yup.string().trim().required("Full Name is required"),
  email: yup.string().email().trim().required("Email is required"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export default function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  async function handleRegisterUser(data: FormValues): Promise<void> {
    // console.log("data", data)
    try {
      setIsLoading(true);
      const response = await api.post("/auth/register", data);
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
          <form
            className="space-y-5"
            onSubmit={handleSubmit(handleRegisterUser)}
          >
            <div>
              <Input
                label="Full Name *"
                type="text"
                placeholder="Enter Full Name"
                name="fullname"
              />
              {errors.fullname && (
                <span className="text-red-500 text-sm">
                  {errors?.fullname?.message}
                </span>
              )}
            </div>
            <div>
              <Input
                label="Username "
                type="text"
                placeholder="Enter Full Name"
                name="username"
              />
              {errors.username ? (
                <span className="text-red-500 text-sm">
                  {errors?.username?.message}
                </span>
              ) : (
                <span className="text-sm">Username is case sensitve</span>
              )}
            </div>
            <div>
              <Input
                label="Email Address *"
                type="email"
                placeholder="Enter Email Address"
                name="email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors?.email?.message}
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
            {/* <div>
              <Input
                label="Re-type Password"
                type="password"
                placeholder="*********"
                name="password"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors?.password?.message}
                </span>
              )}
            </div> */}
            <div className="text-sm flex items-center !mb-8">
              <div className="flex items-center space-x-3">
                <Input type="checkbox" name="remember_password" label="" />
                <span>
                  I agree to Budgetify Terms of Service and Privacy Policy.
                </span>
              </div>
            </div>
            <Button customClass="w-full" variant="filled">
              {isLoading && (
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                ></div>
              )}
              Sign Up
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
