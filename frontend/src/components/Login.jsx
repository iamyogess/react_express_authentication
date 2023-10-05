import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-200">
      <div className="flex justify-center items-center flex-col h-[400px] w-[400px] md:bg-slate-400 rounded-md gap-6">
        <h1 className="font-bold text-center text-white tracking-widest font-sans">
          LOGIN
        </h1>
        <input
          className="p-2 px-4 rounded-md"
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          className="p-2 px-4 rounded-md"
          type="email"
          placeholder="email"
          name="email"
        />
        <input
          className="p-2 px-4 rounded-md"
          type="password"
          placeholder="password"
          name="password"
        />
        <button type="submit" className="p-2 px-4 rounded-md bg-blue-300 text-white cursor-pointer tracking-widest border-1">Login</button>
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <span>Forgot Password?</span>
          <button>
            Don't have an account? <Link className="text-blue-700" to="/register">Register</Link> here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
