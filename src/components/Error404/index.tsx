import Error404Svg from "@/assets/icons/error-404.svg";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Link to="/" className="container mx-auto max-h-screen max-w-full">
      <Error404Svg />
    </Link>
  );
};

export default Error404;
