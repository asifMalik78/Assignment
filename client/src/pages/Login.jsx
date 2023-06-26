import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { signinUser } from "../apiCalls";
import { useUserContext } from "../context/userContext";
import { toast } from "react-toastify";

const Login = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useUserContext();
  const toaster = (status, message) => {
    if (status === 200) {
      toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      return;
    }

    if (status === 404 || status === 401 || status === 500) {
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
  };

  const validEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    if (formdata.email === "" || formdata.password === "") {
      toaster(500, "all fields are required");
      return;
    }

    if (!validEmail(formdata.email)) {
      toaster(500, "wrong email type");
      return;
    }

    if (formdata.email === "" || formdata.password === "") {
      toast(500, "all fields are required");
      return;
    }
    const { status, message } = await signinUser(setUser, formdata);
    toaster(status, message);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
      <h1 className="text-3xl font-semibold text-gray-700">Login</h1>
      <form className="flex flex-col w-full max-w-md gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-medium text-gray-500">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formdata.email}
            required
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Enter Your Email"
            className="p-2 border border-gray-400 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-lg font-medium text-gray-500"
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
            className="p-2 border border-gray-400 rounded-md"
          />
        </div>

        <div className="mt-2">
          <button
            className="w-full p-2 mb-3 text-white bg-blue-800 rounded-md"
            onClick={loginHandler}
          >
            Login
          </button>
          <div className="text-gray-600">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="font-medium text-blue-900 cursor-pointer"
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
