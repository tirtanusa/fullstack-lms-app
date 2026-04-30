import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <div className="grid grid-cols-2 items-center gap-5">
          <h2 className="text-end  border-r border-gray-500 px-5">401</h2>
          <p className="text-xl text-start">Unauthorized Request</p>
        </div>
        <div className="col-span-2 mx-auto my-6">
          <Link to="/">
            <button>Kembali ke Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Unauthorized;
