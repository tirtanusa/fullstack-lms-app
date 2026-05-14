import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotifRegisPage from "./pages/Register/NotifRegisPage.jsx";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleProtectedRoute from "./components/RoleProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard/index.jsx";
import Unauthorized from "./components/Unauthorized.jsx";
import UsersDetail from "./pages/AdminDashboard/UsersDetail.jsx";
import Course from "./pages/Course/index.jsx";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/courses" element={<Course />}></Route>
        <Route path="/courses/:category" element={<Course />}></Route>
        <Route element={<ProtectedRoute isAuthenticated={isLoggedIn} />}>
          
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route element={<RoleProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
          <Route path="/users-detail/:id" element={<UsersDetail />}></Route>
        </Route>
      </Route>
      <Route path="/success" element={<NotifRegisPage />}></Route>
      <Route path="/unauthorized" element={<Unauthorized />}></Route>
    </Routes>
  );
}

export default App;
