import { LibraryBig } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="border-b h-16.25 border-colborder flex items-center justify-between px-4 mx-2">
        {/* logo */}
        <section className="flex items-center">
          <LibraryBig />
          <div className="text-[18px] font-bold">DibiEdu</div>
        </section>
        {/* logo */}

        {/* nav */}
        <section className="flex">
          {/* nav and signup */}
          {/* nav */}
          <div className="hidden md:flex items-center gap-12 mr-12">
            <Link to="/">Home</Link>
            <div>Courses</div>
            <div>About</div>
            <div>Contact</div>
          </div>
          {token ? (
            <>
              {" "}
              {/* ✅ wrap dengan fragment */}
              <div className="flex items-center gap-6">
                <Link to="/dashboard" className="hidden md:flex">
                  Dashboard
                </Link>
                <button className="bg-red-400" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-4">
                <Link to="/register">
                  <button>Sign Up</button>
                </Link>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </div>
            </>
          )}
          {/* signup */}

          {/* signup */}
        </section>
        {/* nav and signup*/}
      </div>
    </>
  );
};

export default Navbar;
