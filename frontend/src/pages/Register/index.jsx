import { UserRoundPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
        navigate("/succeed"); // ✅ redirect setelah login
      } else {
        setError(json.message);
        setErrors(json.errors || {});
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center md:w-1/2 md:mx-auto">
      <div className="w-full h-150  bg-white rounded-lg shadow-xl border border-colborder flex  justify-between">
        <div className="flex flex-col w-full justify-center px-8 gap-6">
          <form onSubmit={handleRegister} className="flex flex-col gap-1">
            {/*Tulisan error disini*/}
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Masukkan Nama anda"
              required
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? "border-red-500" : ""}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "border-red-500" : ""}
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email[0]}</p>
            )}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Masukkan Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "border-red-500" : ""}
            />
            <label htmlFor="confirmation-password">Konfirmasi Password</label>
            <input
              type="password"
              id="confirmation-password"
              placeholder="Masukkan Konfirmasi Password"
              required
              className={errors.password ? "border-red-500" : ""}
              onChange={(e) => setConfirmationPassword(e.target.value)}
            />
            <label htmlFor="phone">No. Telepon</label>
            <input
              type="tel"
              id="phone"
              placeholder="Masukkan No. Telepon"
              required
              className={errors.phone ? "border-red-500" : ""}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              type="submit"
              className="cursor-pointer w-full mx-auto my-3"
            >
              Create an Account
            </button>
          </form>
        </div>
        <div className="hidden lg:flex w-full  p-7">
          <div className="w-full bg-linear-to-tr from-yellow-200 via-teal-400  to-yellow-200 rounded-lg flex flex-col justify-center">
            <div className="font-bold text-xl flex flex-col  mb-2 items-center">
              <div className="drop-shadow-xl bg-white w-fit p-2 rounded-lg">
                {" "}
                <UserRoundPlus />
              </div>
              <h2 className="text-white">Create an Account</h2>
              <p className="text-sm font-light text-white">
                Join now to access{" "}
                <span className="text-white font-bold">+1.000 </span>
                online course!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
