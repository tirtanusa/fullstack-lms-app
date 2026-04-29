import { PenLine, Trash2 } from "lucide-react";

const CourseContainer = (props) => {
  return (
    <>
      <div className="flex items-center justify-between border-b border-colborder py-2">
        <p className="text-base ">{props.courseName}</p>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2">
            {" "}
            <PenLine /> <span className="hidden md:flex">Edit</span>
          </button>
          <button className="bg-red-500 flex items-center gap-2">
            <Trash2 />
            <span className="hidden md:flex">Delete</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseContainer;
