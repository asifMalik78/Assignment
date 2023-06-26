import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { signinUser } from "../apiCalls";
import { useUserContext } from "../context/userContext";

const Login = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const {setUser} = useUserContext();

  const loginHandler = async (e) => {
    e.preventDefault();
    await signinUser(setUser , formdata);
  }
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-10">
      <h1 className="text-gray-700 text-3xl font-semibold">Login</h1>
      <form className="flex flex-col w-full max-w-md gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-500 font-medium text-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formdata.email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Enter Your Email"
            className="border border-gray-400 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-gray-500 font-medium text-lg"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formdata.password}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Enter Your Email"
            className="border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="mt-2">
          <button className="p-2 mb-3 bg-blue-800 text-white rounded-md w-full" onClick={loginHandler}>
            Login
          </button>
          <div className="text-gray-600">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="text-blue-900 font-medium cursor-pointer"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
