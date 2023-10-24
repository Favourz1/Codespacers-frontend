import { ROUTE_KEYS, STORAGE_KEYS } from "@/lib/constants";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export default function PublicRoutes(props: Props) {
  // const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
  return props.children;
  // return token ? <Navigate to={ROUTE_KEYS.DASHBOARD} /> : props.children;
}
