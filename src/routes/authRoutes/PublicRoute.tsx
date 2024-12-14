import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface PublicRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const PublicRoute: FC<PublicRouteProps> = ({
  children,
  redirectTo = "/dashboard",
}) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return <Navigate to={redirectTo} state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PublicRoute;
