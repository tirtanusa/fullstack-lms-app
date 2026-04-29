import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotifRegisPage from "./pages/Register/NotifRegisPage";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route element={<ProtectedRoute isAuthenticated={isLoggedIn} />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Route>
      <Route path="/success" element={<NotifRegisPage />}></Route>
    </Routes>
  );
}

export default App;
