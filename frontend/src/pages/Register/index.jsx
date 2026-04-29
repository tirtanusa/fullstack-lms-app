import { SquareArrowRightEnter } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: confirmationPassword,
          phone,
        }),
      });

      const json = await res.json();

      if (json.success) {
        navigate("/login"); // ✅ redirect setelah login
      } else {
        setError(json.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center md:w-1/2 md:mx-auto">
      <div className="w-full h-150  bg-white rounded-lg shadow-xl border border-colborder flex  justify-between">
        <div className="flex flex-col w-full justify-center px-8 gap-6">
          <div className="font-bold text-xl flex flex-col  mb-2 items-center">
            <div className="drop-shadow-xl bg-white w-fit p-2 rounded-lg">
              {" "}
              <SquareArrowRightEnter />
            </div>
            <h2>Create an Account</h2>
            <p className="text-sm font-light text-gray-500">
              Join now to access{" "}
              <span className="text-black font-bold">+1.000 </span>
              online course!
            </p>
          </div>
          <form onSubmit={handleRegister} className="flex flex-col gap-1">
            {error && <p className="text-red-500">{error}</p>}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Masukkan Nama anda"
              onChange={(e) => setName(e.target.value)}
            />
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
            <label htmlFor="confirmation-password">Password</label>
            <input
              type="password"
              id="confirmation-password"
              placeholder="Masukkan Konfirmasi Password"
              onChange={(e) => setConfirmationPassword(e.target.value)}
            />
            <label htmlFor="phone">No. Telepon</label>
            <input
              type="tel"
              id="phone"
              placeholder="Masukkan No. Telepon"
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              type="submit"
              className="cursor-pointer w-full mx-auto my-3"
            >
              Register
            </button>
          </form>
        </div>
        <div className="hidden lg:flex w-full  p-7">
          <div className="w-full bg-linear-to-r from-teal-400 to-yellow-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
