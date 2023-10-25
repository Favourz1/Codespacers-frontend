import useSWR from "swr";
import { SWR_CONFIG, api } from "../config";
import { useEffect, useState } from "react";
import { Pagination } from "@/lib/types";
import { message } from "antd";

export default function useGetExpenses(params?: Record<string, unknown>) {
  const [filter, setFilter] = useState<Record<string, unknown>>({});
  const [pagination, setPagination] = useState<Pagination>({
    length: 10,
    page: 1,
  });

  const fetcher = async ([url]: string[]) => {
    return await api.get(url, {
      ...pagination,
      ...filter,
      params,
    });
  };

  const deps = [
    ...Object.keys(filter).map((key) => key + filter[key]),
    ...Object.keys(pagination).map((key) => key + (pagination as any)[key]),
    ...Object.keys(params ?? {}).map((key) => (key + params?.[key]) as string),
  ];

  const {
    isLoading: loading,
    error,
    data,
    mutate: refetchExpenses,
  } = useSWR(["/expenses", ...deps], fetcher, SWR_CONFIG);

  useEffect(() => {
    if (error) message.error(error.response?.data?.message);
  }, [error]);

  return {
    loading,
    error,
    data,
    pagination,
    setPagination,
    filter,
    setFilter,
    refetchExpenses,
  };
}
