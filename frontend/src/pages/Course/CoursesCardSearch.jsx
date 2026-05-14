const CoursesCardSearch = ({ course }) => {
  return (
    <>
      <div className="bg-white shadow-lg w-65  rounded-lg overflow-hidden flex flex-col">
        {/* picture */}
        <section>
          <img src={course.course_image} className="w-full h-30 bg-gray-500" />
        </section>
        {/* picture */}

        <section className="flex flex-col px-3 py-2 flex-1">
          <div className="flex flex-col gap-2 flex-1">
            {course.title ? (
              <p className="font-bold">{course.title}</p>
            ) : (
              <p className="font-bold">No Title</p>
            )}

            {course.description ? (
              <p className="text-base text-gray-500 truncate">
                {course.description}
              </p>
            ) : (
              <p className="text-gray-500 text-base truncate">No Description</p>
            )}

            {course.instructor.name ? (
              <p className="text-[13px] text-gray-500">
                {course.instructor.name}
              </p>
            ) : (
              <p className="text-gray-500 text-sm">Anonymous</p>
            )}

            {course.level === "beginner" ? (
              <p className="w-fit bg-green-700 text-green-300 rounded-full px-2 py-1 text-sm">
                Beginner
              </p>
            ) : course.level === "intermediate" ? (
              <p className="w-fit bg-yellow-700 text-yellow-300 rounded-full px-2 py-1 text-sm">
                Intermediate
              </p>
            ) : (
              <p className="w-fit bg-red-700 text-red-300 rounded-full px-2 py-1 text-sm">
                Advanced
              </p>
            )}
          </div>
          <div className="mt-auto pt-2">
            {course.formatted_price ? (
              <p className="font-semibold">{course.formatted_price}</p>
            ) : (
              <p className="font-semibold">Free</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CoursesCardSearch;
