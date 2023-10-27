import Button from "@/components/Button";
import Input from "@/components/Input";
import BudgetifyBlueLogo from "@/assets/icons/budgetify-logo-blue.svg";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "@/lib/api/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
};
const schema = yup.object().shape({
  email: yup.string().email().trim().required("Email is required"),
});

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  async function handleForgotPasswordRequest(data: FormValues): Promise<void> {
    // console.log("data", data);
    try {
      setIsLoading(true);
      const response = await api.post("/auth/forgot-password", data);
      console.log(response.data);
      toast.success(response.data.message);
      navigate("/onboarding/login");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data.message);
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
            Forgot Password
          </h1>
          <form
            className="space-y-5"
            onSubmit={handleSubmit(handleForgotPasswordRequest)}
          >
            <div>
              <Input
                label="Enter Email Address *"
                type="email"
                placeholder="Input Email"
                name="email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <Button customClass="w-full" variant="filled">
              {isLoading && (
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                ></div>
              )}
              Enter
            </Button>
          </form>
        </div>
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
      </FormProvider>
    </>
  );
}
