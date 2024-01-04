import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthorizeProps {
  children: ReactNode;
}

const Authorize = ({ children }: AuthorizeProps) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to={"/login"} replace />;

  return <>{children}</>;
};

export default Authorize;
