import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    axios
      .get(`${baseURL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default UserProtectWrapper;