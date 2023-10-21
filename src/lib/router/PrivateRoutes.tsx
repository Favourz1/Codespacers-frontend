import { ROUTE_KEYS, STORAGE_KEYS } from "@/lib/constants";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export default function PrivateRoutes(props: Props) {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
  return token ? props.children : <Navigate to={ROUTE_KEYS.LOGIN} />;
}
