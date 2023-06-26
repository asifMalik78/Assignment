import React, { useState } from "react";
import { registerUser } from "../apiCalls";

const Register = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [wronginput, setWrongInput] = useState(false);

  const clickHandler = async (e) => {
    e.preventDefault();

    const { name, email, password, confirm_password } = formdata;
    if (password !== confirm_password) {
      setWrongInput(true);
      return;
    }

    await registerUser({ name, email, password });
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
      <h1 className="text-3xl font-semibold text-gray-700">Register</h1>
      <form className="flex flex-col w-full max-w-md gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg font-medium text-gray-500">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formdata.name}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Enter Your Name"
            className="p-2 border border-gray-400 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-medium text-gray-500">
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
          <div className="w-full">
            <input
              id="password"
              type="password"
              name="password"
              value={formdata.password}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
                setWrongInput(false);
              }}
              placeholder="Enter Your Password"
              className="w-full p-2 border border-gray-400 rounded-md"
            />
            {wronginput && (
              <p className="font-sans font-medium text-red-400">
                wrong password
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirm_password"
            className="text-lg font-medium text-gray-500"
          >
            Confirm Password
          </label>
          <div>
            <input
              id="confirm_password"
              type="password"
              name="confirm_password"
              value={formdata.confirm_password}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
                setWrongInput(false);
              }}
              placeholder="Enter Your Password"
              className="w-full p-2 border border-gray-400 rounded-md"
            />
            {wronginput && (
              <p className="font-sans font-medium text-red-400">
                wrong password
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            className="w-full p-2 mt-2 mb-3 text-white bg-blue-800 rounded-md"
            onClick={clickHandler}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
