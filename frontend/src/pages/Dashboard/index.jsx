import { BadgeCheck } from "lucide-react";
import CourseContainer from "./CourseContainer";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router";
import UserTable from "../AdminDashboard/UserTable";

const Dashboard = () => {
  const { user, isLoading } = useAuth();

  const profile = user
    ? {
        name: user.name,
        role: user.role,
        email: user.email,
        phone: user.phone,
        id: user.id,
      }
    : null;

  if (isLoading)
    return (
      <p className="h-screen w-full flex flex-col items-center justify-center">
        Loading...
      </p>
    );
  if (!user) return <Navigate to="/login" />;
  return (
    <>
      <div className="md:grid md:grid-cols-3">
        <div className="min-h-fit mx-6 bg-white shadow-xl rounded-lg px-2 pt-2 pb-4 shrink-0">
          {/*Cover Image*/}
          <section className="h-25 bg-linear-to-r from-green-300 to-yellow-200 rounded-lg"></section>
          {/*Prof Picture */}
          <section className="rounded-full bg-white h-24 w-24 p-2 -mt-8 mx-auto">
            <div className="rounded-full overflow-clip bg-gray-500 animate-pulse w-20 h-20"></div>
          </section>

          {/*Details*/}
          <section className="flex-col flex items-center gap-1 ">
            <p className="text-sm text-gray-400">{profile.email}</p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-2xl font-bold">{profile.name}</p>
              <BadgeCheck className="text-white" fill="#3b82f6" />
            </div>

            <p className="text-sm">
              {" "}
              {profile.role} |{" "}
              <span className="text-gray-400">{profile.phone}</span>{" "}
            </p>
          </section>
        </div>
        <div className="hidden md:flex bg-[#e0e0e0] col-span-2 mr-6 rounded-lg shadow-[inset_-7px_7px_14px_#bebebe,inset_7px_-7px_14px_#ffffff]  flex-col justify-center items-center">
          COMING SOON
        </div>
      </div>

      {profile.role === "instructor" ? (
        <div className="bg-white rounded-lg shadow-xl max-h-200 mx-6 my-4 p-4">
          <p className="text-xl font-bold">Course created</p>
          <CourseContainer courseName="Course 1" />
          <CourseContainer courseName="Course 2" />
        </div>
      ) : profile.role === "admin" ? (
        <UserTable />
      ) : (
        <></>
      )}
    </>
  );
};

export default Dashboard;
