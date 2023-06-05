import { FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const loggedUser = res.user;
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("https://bistro-boss-server-farukulwd.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="text-center mb-4">
      <div className="divider"></div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
