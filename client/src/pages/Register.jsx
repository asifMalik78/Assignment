import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-10">
      <h1 className="text-gray-700 text-3xl font-semibold">Register</h1>
      <form className="flex flex-col w-full max-w-md gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-500 font-medium text-lg">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            className="border border-gray-400 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-500 font-medium text-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            className="border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-gray-500 font-medium text-lg">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Your Email"
            className="border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="confirm_password" className="text-gray-500 font-medium text-lg">
            Confirm Password
          </label>
          <input
            id="confirm_password"
            type="password"
            placeholder="Enter Your Email"
            className="border border-gray-400 p-2 rounded-md"
          />
        </div>

        <div>
          <button className="p-2 mt-2 mb-3 bg-blue-800 text-white rounded-md w-full">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
