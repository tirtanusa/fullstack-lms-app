import { PenLine, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const CourseContainer = ({ courses = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const totalPages = Math.ceil(courses.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentData = courses.slice(startIndex, startIndex + perPage);

  return (
    <div>
      {/* Course List */}
      {currentData.map((course) => (
        <div
          key={course.id}
          className="flex items-center justify-between border-b border-gray-100 py-3 hover:bg-gray-50 px-2 rounded-lg"
        >
          <p className="text-sm font-medium">{course.title}</p>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg bg-blue-50 text-blue-500 hover:bg-blue-100 cursor-pointer flex items-center gap-1">
              <PenLine size={14} />
              <span className="hidden md:flex text-xs">Edit</span>
            </button>
            <button className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 cursor-pointer flex items-center gap-1">
              <Trash2 size={14} />
              <span className="hidden md:flex text-xs">Delete</span>
            </button>
          </div>
        </div>
      ))}

      {courses.length === 0 && (
        <p className="text-center text-gray-400 py-6 text-sm">Tidak ada kursus</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-gray-400">
            Showing {startIndex + 1}–{Math.min(startIndex + perPage, courses.length)} of {courses.length} courses
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
            >
              <ChevronLeft size={14} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-lg text-xs cursor-pointer ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseContainer;