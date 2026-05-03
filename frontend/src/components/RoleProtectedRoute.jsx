import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router";

const RoleProtectedRoute = ({ allowedRoles }) => {
  const { user, token } = useAuth();

  if (!token) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user?.role)) return <Navigate to="/unauthorized" />;

  return <Outlet />; // ✅ pakai Outlet bukan children
};

export default RoleProtectedRoute;