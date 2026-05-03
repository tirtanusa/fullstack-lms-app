import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

const UserTable = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5; // ✅ jumlah data per halaman

  useEffect(() => {
    if (!token) return;

    fetch("http://127.0.0.1:8000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setUsers(json.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [token]);

  const totalPages = Math.ceil(users.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentData = users.slice(startIndex, startIndex + perPage);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 mx-6 my-4">
      <p className="text-xl font-bold mb-4">User Management</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 rounded-l-lg">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3 rounded-r-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-400">{user.id}</td>
                <td className="px-4 py-3 font-medium">{user.name}</td>
                <td className="px-4 py-3 text-gray-500">{user.email}</td>
                <td className="px-4 py-3 text-gray-500">{user.phone}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === "admin"
                        ? "bg-red-100 text-red-600"
                        : user.role === "instructor"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                    onClick={() => navigate(`/users-detail/${user.id}`)}
                    className="p-1.5 rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 cursor-pointer">
                      <Pencil size={14} />
                    </button>
                    <button className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 cursor-pointer">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="text-center text-gray-400 py-6">Tidak ada data user</p>
        )}
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-400">
          Showing {startIndex + 1}–
          {Math.min(startIndex + perPage, users.length)} of {users.length} users
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft size={16} className="text-bgbutton" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg text-sm cursor-pointer ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-bgbutton"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
          >
            <ChevronRight size={16} className="text-bgbutton" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
