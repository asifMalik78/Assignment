import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("LoggedUser")) || null
  );

  const [allPortals, setAllPortals] = useState([]);
  const [currentPortal , setCurrentPortal] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser , currentPortal , setCurrentPortal , allPortals , setAllPortals }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
