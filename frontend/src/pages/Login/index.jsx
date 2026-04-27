const Login = () => {
  return (
    <>
      <div className="min-h-[80vh] flex justify-center items-center md:w-1/2 md:mx-auto">
        <div className="w-full h-75 bg-white rounded-lg shadow-xl border border-colborder flex  justify-between">
          <div className="flex flex-col px-12 w-full">
            <form action="/login" method="POST" className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan Email"
                className=""
              />
              <label htmlFor="current-password">Password</label>
              <input
                type="current-password"
                id="current-password"
                placeholder="Masukkan Password"
              />
            </form>
            <button className="w-20 mx-auto my-3">Log In</button>
          </div>
          <div className="w-full bg-red-500">a</div>
        </div>
      </div>
    </>
  );
};

export default Login;
