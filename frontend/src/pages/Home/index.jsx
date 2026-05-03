import { Earth, FileText, ShieldCheck } from "lucide-react";
import CoursesCard from "../../components/CoursesCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [courses, setCourse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/courses/top-rated")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCourse(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.log("Error:", err); // cek error lengkap
        setError(err.message);
      });
  }, []);

  return (
    <>
      <div className="md:w-1/2 md:mx-auto">
        {/* hero */}
        <div className="hero mb-3">
          <h1>Unlock Your Potential with EduLearn</h1>
          <p className="text-center my-2 text-sm">
            Embark on a journey of knowledge and skill development with our
            comprehensive online courses. Learn at your own pace, anytime,
            anywhere
          </p>
          <button>Start Learning</button>
        </div>

        <div className="my-3">
          <h2>Why Choose Edulearn?</h2>
          <h3>
            Our platform is designed to provide a seamless and effective
            learning experience ensuring you gain the skills you need to
            succeed.
          </h3>
        </div>

        <section className="flex gap-3 overflow-x-auto my-3">
          <div className="feature-card">
            <Earth />
            <h3 className="font-bold">Online Material</h3>
            <p className="text-sm text-details">
              Access a vast library of high-quality learningmaterials, including
              videos, articles, and interactive content.
            </p>
          </div>
          <div className="feature-card">
            <FileText />
            <h3 className="font-bold">Quizzes & Assignments</h3>
            <p className="text-sm text-details">
              Test your knowledge and reinforce your learning with engaging
              quizzes and practical assignments.
            </p>
          </div>
          <div className="feature-card">
            <ShieldCheck />
            <h3 className="font-bold">Certificates</h3>
            <p className="text-sm text-details">
              Earn certificates upon completion of courses, showcasing your
              achievements and enhancing your credentials.
            </p>
          </div>
        </section>
        <h3 className="font-bold">Featured Course</h3>
        <section className="flex gap-3 overflow-x-auto my-3">
          {error ? (
            <div className="flex justify-center items-center w-full">
              <p className="text-red-500">Error: {error}</p>
            </div>
          ) : (
            courses.map((course) => (
              <CoursesCard
                key={course.id}
                title={course.title}
                description={course.description}
              />
            ))
          )}
        </section>

        <div className="bg-[#e8ebf2] w-fit px-4 py-2 rounded-lg mx-auto items-center my-3">
          {" "}
          View All Courses
        </div>
      </div>
    </>
  );
};

export default Home;
