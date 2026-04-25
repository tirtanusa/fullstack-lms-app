import { LibraryBig } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="border-b h-16.25 border-colborder flex items-center justify-between px-4 mx-2">
        {/* logo */}
        <section className="flex items-center">
          <LibraryBig />
          <div className="text-[18px] font-bold">DibiEdu</div>
        </section>
        {/* logo */}

        {/* nav */}
        <section className="flex">
          {/* nav and signup */}
          {/* nav */}
          <div className="hidden md:flex items-center gap-12 mr-12">
            <div>Home</div>
            <div>Courses</div>
            <div>About</div>
            <div>Contact</div>
          </div>
          {/* signup */}
          <button>Sign Up</button>
          {/* signup */}
        </section>
        {/* nav and signup*/}
      </div>
    </>
  );
};

export default Navbar;
