import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const result = await axios.post(
  //       "http://localhost:8080/register/",
  //       values
  //     );
  //     navigate("/login");
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/register/", values);
      navigate("/login");
    } catch (error) {
      console.log("Axios Error:", error);
      if (error.response) {
        console.log("Response Data:", error.response.data);
        console.log("Status Code:", error.response.status);
      }
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-200">
      <div className="flex justify-center items-center flex-col h-[400px] w-[400px] md:bg-slate-400 rounded-md gap-6">
        <h1 className="font-bold text-center text-white tracking-widest font-sans">
          REGISTER
        </h1>
        <input
          className="p-2 px-4 rounded-md"
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          className="p-2 px-4 rounded-md"
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          className="p-2 px-4 rounded-md"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="p-2 px-4 rounded-md bg-blue-300 text-white cursor-pointer tracking-widest border-1"
        >
          Register
        </button>

        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <button>
            Already have an account?
            <Link className="text-blue-700" to="/login">
              Login
            </Link>
            here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
