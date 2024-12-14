import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  redirectTo = "/",
}) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={redirectTo} state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
