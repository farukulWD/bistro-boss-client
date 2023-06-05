import { Link, useNavigate } from "react-router-dom";
import imgbg from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useAuth } from "../../Hooks/useAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();
  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;

    createUser(email, password)
      .then((result) => {
        const saveUser = { name: name, email: email };
        const createdUser = result.user;
        console.log(createdUser);
        updateUserProfile(name, photoURL)
          .then(() => {
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
                if (data.insertedId) {
                  Swal.fire({
                    icon: "success",
                    title: "Sign UP Success",
                  });
                  reset();
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro boss | Sign UP</title>
      </Helmet>
      <div className="bg-base-200">
        <h1 className="text-5xl font-bold text-center my-4">Sign Up now!</h1>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col  md:flex-row">
            <div className="text-center md:w-1/2">
              <img className="rounded-lg" src={imgbg} alt="" />
            </div>
            <div className="card md:w-1/2   shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-500">Photo url is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-500">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500">
                      Password must be 6 character
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-500">
                      Password must One uppercase , one special character,one
                      number,one lowercase
                    </span>
                  )}
                </div>

                <div className="form-control  mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign UP"
                  />
                </div>
                <div>
                  <p>
                    Already Have You an Account? <Link to="/login">login</Link>
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

export default SignUp;
