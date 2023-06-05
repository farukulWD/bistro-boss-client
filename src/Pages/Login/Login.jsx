import { useEffect, useState } from "react";
import imgbg from "../../assets/others/authentication1.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useAuth } from "../../Hooks/useAuth";

const Login = () => {
  const { loginIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [disable, setDisable] = useState(true);
  const handleValidate = (e) => {
    setDisable(true);
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    }
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginIn(email, password)
      .then(() => {
        // const loggedUser = result.user;

        Swal.fire({
          icon: "success",
          title: "Login Success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);
  return (
    <>
      <Helmet>
        <title>Bistro boss | Login</title>
      </Helmet>
      <div className="bg-base-200">
        <h1 className="text-5xl font-bold text-center my-4">Login now!</h1>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col  md:flex-row">
            <div className="text-center md:w-1/2">
              <img className="rounded-lg" src={imgbg} alt="" />
            </div>
            <div className="card md:w-1/2   shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    onBlur={handleValidate}
                    name="captcha"
                    placeholder="type the text on above"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control  mt-6">
                  <input
                    disabled={disable}
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
                <div>
                  <p>
                    New here? <Link to="/signUp">Create a New Account</Link>
                  </p>
                </div>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
