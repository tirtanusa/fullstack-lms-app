import { SquareArrowRightEnter } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ cegah reload halaman

    try {
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await res.json();

      if (json.success) {
        login(null, json.data.token); // ✅ simpan ke context
        navigate("/"); // ✅ redirect setelah login
      } else {
        setError(json.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="min-h-[80vh] flex justify-center items-center md:w-1/2 md:mx-auto">
        <div className="w-full h-150  bg-white rounded-lg shadow-xl border border-colborder flex  justify-between">
          <div className="flex flex-col w-full justify-center px-8 gap-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-1">
              {error && <p className="text-red-500">{error}</p>}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Masukkan Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit cursor-pointer"
                className="w-full mx-auto my-3"
              >
                Log In
              </button>
            </form>
          </div>
          <div className="hidden lg:flex w-full  p-7">
            <div className="w-full bg-linear-to-tr from-yellow-200 via-teal-400  to-yellow-200  rounded-lg flex flex-col justify-center">
              <div className="font-bold text-xl flex flex-col  mb-2 items-center">
                <div className="drop-shadow-xl bg-white w-fit p-2 rounded-lg">
                  {" "}
                  <SquareArrowRightEnter />
                </div>
                <h2 className="text-white">Welcome back</h2>
                <p className="text-sm font-light text-white">
                  Please Log in to your account and start learning with us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
