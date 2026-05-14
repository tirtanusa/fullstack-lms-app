import { SlidersHorizontal, Search } from "lucide-react";
import { NavLink, useParams } from "react-router";
import { useState, useEffect } from "react";
import CoursesCardSearch from "./CoursesCardSearch";
const Courses = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  const fetchCourse = async () => {
    try {
      const url = category
        ? `http://38.47.180.195/student01/api/courses?category_id=${category}`
        : `http://38.47.180.195/student01/api/courses`;

      const response = await fetch(url);
      const courseData = await response.json();
      console.log(courseData.data);
      setCourses(courseData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          "http://38.47.180.195/student01/api/categories",
        );
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
    fetchCourse();
  }, [category]);
  return (
    <>
      {/* Searchbar */}
      <section className="relative">
        <div className="flex">
          <Search className="absolute left-2 w-6 h-6 cursor-pointer text-gray-500 bottom-2" />
          <input
            type="text"
            placeholder="Search courses"
            className="w-full bg-gray-200 placeholder-gray-500 border-0 pl-10"
          />
          <SlidersHorizontal className="absolute right-2 w-6 h-6 cursor-pointer text-gray-500 bottom-2" />
        </div>
      </section>
      {/* Searchbar */}

      {/* Categories */}
      <section className="flex items-center gap-4 my-4 overflow-x-scroll">
        {categories.map((category) => (
          <NavLink to={`/courses/${category.id}`} key={category.id}>
            {({ isActive }) => (
              <div
                className={
                  isActive
                    ? "overflow-hidden whitespace-nowrap text-ellipsis bg-bgbutton text-white w-32 py-1.5 rounded-lg text-center px-1"
                    : "px-1 bg-white text-gray-500 border-2 border-gray-300 w-32 py-1.5 rounded-lg text-center overflow-hidden whitespace-nowrap text-ellipsis"
                }
              >
                {category.name}
              </div>
            )}
          </NavLink>
        ))}
      </section>
      {/* Categories */}

      {/* Courses */}
      <div className="grid grid-cols-3 gap-2 ">
        {courses.map((course) => (
          <CoursesCardSearch key={course.id} course={course} />
        ))}
      </div>
      {/* Courses */}
    </>
  );
};

export default Courses;
