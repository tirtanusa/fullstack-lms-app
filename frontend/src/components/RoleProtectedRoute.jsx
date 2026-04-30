import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

const RoleProtectedRoute = ({ children, allowedRoles }) => {
  const { user, token } = useAuth();

  if (!token) return <Navigate to="/login" />;

  if (!allowedRoles.includes(user?.role))
    return <Navigate to="/unauthorized" />;

  return children;
};

export default RoleProtectedRoute;
