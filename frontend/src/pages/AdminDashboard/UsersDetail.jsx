import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { ArrowLeft, Save, User, Mail, Phone, ShieldCheck } from "lucide-react";

const UserDetail = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  useEffect(() => {
    if (!token) return;

    fetch(`http://127.0.0.1:8000/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setForm({
            name: json.data.name,
            email: json.data.email,
            phone: json.data.phone,
            role: json.data.role,
          });
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id, token]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const json = await res.json();

      if (json.success) {
        setSuccess("User updated successfully!");
      } else {
        setError(json.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <p className="p-6 text-gray-400">Loading...</p>;

  return (
    <div className="mx-6 my-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          <ArrowLeft size={16} />
        </button>
        <p className="text-xl font-bold">User Detail</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center gap-3 h-fit">
          <div className="rounded-full bg-gray-100 h-20 w-20 flex items-center justify-center">
            <User size={36} className="text-gray-400" />
          </div>
          <p className="text-lg font-bold">{form.name}</p>
          <p className="text-sm text-gray-400">{form.email}</p>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            form.role === "admin"
              ? "bg-red-100 text-red-600"
              : form.role === "instructor"
              ? "bg-blue-100 text-blue-600"
              : "bg-green-100 text-green-600"
          }`}>
            {form.role}
          </span>
        </div>

        {/* Form */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-xl p-6">
          <p className="font-bold text-lg mb-4">Edit User</p>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                <User size={14} /> Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                <Mail size={14} /> Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                <Phone size={14} /> Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Role */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 flex items-center gap-1">
                <ShieldCheck size={14} /> Role
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              >
                <option value="user">User</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-600 cursor-pointer disabled:opacity-50 mt-2"
            >
              <Save size={14} />
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;