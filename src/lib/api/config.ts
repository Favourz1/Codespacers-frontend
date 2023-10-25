import axios from "axios";
import { SWRConfiguration } from "swr";
import { API_URL, STORAGE_KEYS } from "../constants";

export const SWR_CONFIG: SWRConfiguration = {
  shouldRetryOnError: false,
};

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem(STORAGE_KEYS.TOKEN),
  },
});
