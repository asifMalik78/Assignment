import React, { useEffect } from "react";
import Portal from "../components/Portal";
import CreatePortalModal from "../modal/createModal";
import { useUserContext } from "../context/userContext";
import { getAllPortal } from "../apiCalls";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, allPortals, setAllPortals } = useUserContext();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.setItem("LoggedUser", null);
    window.location.reload();
    navigate("/login");
  };
  useEffect(() => {
    getAllPortal(setAllPortals);
  }, []);
  return (
    <div className="w-full max-w-6xl m-auto flex flex-col gap-12">
      <div className="flex justify-between">
        <h1 className="text-black text-2xl font-bold">
          Welcome <span className="text-blue-700">{user.name}</span>
        </h1>

        <button
          className="py-2 px-6 bg-blue-700 text-white rounded-md"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>

      <CreatePortalModal>
        <button className="py-2 px-6 bg-blue-700 text-white rounded-md">
          Create Portal
        </button>
      </CreatePortalModal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-0">
        {allPortals?.map((curr, idx) => {
          return <Portal key={idx} curr={curr} />;
        })}
      </div>
    </div>
  );
};

export default Home;
