import { useState } from "react";
import EyeClosed from "@/assets/icons/eye-closed.svg";
import EyeOpen from "@/assets/icons/eye-open.svg";
import { useFormContext } from "react-hook-form";

interface Props extends React.ComponentProps<"input"> {
  label: "" | string;
  placeholder?: string;
  id?: string;
  name: string;
  type: "text" | "number" | "email" | "password" | string;
  inputCustomClass?: string;
  containerCustomClass?: string;
}

const Input = (props: Props) => {
  const [seePassword, setSeePassword] = useState(false);
  const {
    label,
    placeholder,
    id,
    name,
    type,
    inputCustomClass,
    containerCustomClass,
  } = props;

  const { register } = useFormContext();

  if (type === "password") {
    return (
      <div className={`flex flex-col ${containerCustomClass}`}>
        <label className={`${label ? "mb-3" : ""} font-medium`} htmlFor={id}>
          {label}
        </label>
        <div
          className={`flex items-center bg-transparent rounded-lg border focus:border-black px-5 py-3 ${inputCustomClass}`}
        >
          <input
            className="bg-transparent border-none focus:outline-none focus-visible:border-transparent w-full"
            id={id}
            type={seePassword ? "text" : "password"}
            placeholder={placeholder}
            // name={name}
            {...register(name)}
          />
          <span
            className="w-[16px] bg-transparent"
            onClick={() => setSeePassword(!seePassword)}
          >
            {seePassword ? <EyeOpen /> : <EyeClosed />}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`flex flex-col ${containerCustomClass}`}>
        <label className={`${label ? "mb-3" : ""} font-medium`} htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={`bg-transparent rounded-lg border focus:border-black px-5 py-3 ${inputCustomClass}`}
          type={type}
          placeholder={placeholder}
          // name={name}
          {...register(name)}
        />
      </div>
    );
  }
};

export default Input;
