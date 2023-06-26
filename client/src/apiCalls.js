import axios from "axios";

const API_URL = "https://admin-portal-87lp.onrender.com/api";

//login  user
export const signinUser = async (setUser, data) => {
  try {
    const res = await axios.post(API_URL + "/login", data);
    const { user, accessToken } = res.data;
    localStorage.setItem(
      "LoggedUser",
      JSON.stringify({ ...user, accessToken })
    );
    setUser({ ...user, accessToken });
    return {
      status: res.status,
      message: res.data.message,
    };
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};

//register user
export const registerUser = async (data) => {
  try {
    const res = await axios.post(API_URL + "/users", data);
    return {
      status: res.status,
      message: res.data.message,
    };
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};

//get all portals
export const getAllPortal = async (setAllPortals) => {
  const { accessToken } = JSON.parse(localStorage.getItem("LoggedUser"));
  const res = await axios.get(API_URL + "/portal", {
    headers: {
      token: `Bearer ${accessToken}`,
    },
  });

  const { allPortal } = res.data;
  setAllPortals(allPortal);
};

//create portal
export const createPortal = async (setAllPortals, data) => {
  const { accessToken } = JSON.parse(localStorage.getItem("LoggedUser"));
  const res = await axios.post(API_URL + "/portal/create", data, {
    headers: {
      token: `Bearer ${accessToken}`,
    },
  });
  const { portal } = res.data;
  setAllPortals((prev) => [portal, ...prev]);
};

//delete portal
export const deletePortal = async (portalId, setAllPortals) => {
  const { accessToken } = JSON.parse(localStorage.getItem("LoggedUser"));
  const res = await axios.delete(API_URL + `/portal/${portalId}`, {
    headers: {
      token: `Bearer ${accessToken}`,
    },
  });

  setAllPortals((prev) => {
    const filteredPortal = prev.filter((curr) => {
      return curr._id !== portalId;
    });

    return filteredPortal;
  });
};

//update portal
export const updatePortal = async (portalId, data, setAllPortals) => {
  const { accessToken } = JSON.parse(localStorage.getItem("LoggedUser"));
  const res = await axios.put(API_URL + `/portal/${portalId}`, data, {
    headers: {
      token: `Bearer ${accessToken}`,
    },
  });

  const updatedPortal = res.data.portal;

  setAllPortals((prev) => {
    const mappedPortal = prev.map((curr) => {
      if (curr._id === updatedPortal._id) {
        return {
          ...updatedPortal,
        };
      } else {
        return curr;
      }
    });

    return mappedPortal;
  });
};
