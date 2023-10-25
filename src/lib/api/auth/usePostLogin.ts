import useSWRMutation from "swr/mutation";
import { api } from "../config";
import { useEffect } from "react";
import { message } from "antd";
import { LoginData } from "@/lib/types";

export default function usePostLogin() {
  const fetcher = async (
    url: string,
    { arg: data }: Readonly<{ arg: LoginData }>
  ) => {
    const res = await api.post(url, data);
    return await res.data;
  };

  const {
    trigger: login,
    isMutating: isLoggingin,
    error,
    data,
  } = useSWRMutation("/login", fetcher);

  useEffect(() => {
    if (error) message.error(error.response.data.message);
    else if (data) message.success(data.message);
  }, [error, data]);

  return { login, isLoggingin, error, data };
}
