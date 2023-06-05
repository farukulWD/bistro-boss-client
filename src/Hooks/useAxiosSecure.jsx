import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-farukulwd.vercel.app",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log(error.response.status);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login", { replace: true });
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export { useAxiosSecure };
