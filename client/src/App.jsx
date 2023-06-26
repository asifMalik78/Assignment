import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useUserContext } from "./context/userContext";
const App = () => {
  const { user } = useUserContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Home /> : <Login />,
    },
    {
      path: "/login",
      element: user ? <Home /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Home /> : <Register />,
    },
  ]);
  return (
    <div className="w-full h-auto max-w-[1440px] m-auto p-5">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
