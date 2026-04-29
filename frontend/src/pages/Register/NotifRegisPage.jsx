import { Link } from "react-router";

const NotifRegisPage = () => {
  return (
    <>
      <div
        className="h-screen flex items-center justify-center
      "
      >
        <div className="mx-6 flex flex-col items-center gap-4 text-[#090909] px-[1.7em] py-[0.7em] text-[18px] rounded-[0.5em] bg-[#e8e8e8] cursor-pointer border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]">
          <div className="flex flex-col items-center">
            <h2 className="text-center">Registrasi Berhasil !</h2>
            <p className="text-sm font-light">Silahkan Login</p>
          </div>
          <Link to="/login">
            <button className="w-75">Log In</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotifRegisPage;
