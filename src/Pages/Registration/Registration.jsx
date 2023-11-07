import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { saveUser } from "../../Hooks/UserSave";

const Registration = () => {
  const {
    loading,
    setLoading,
    signInWithGoogle,
    updateUserProfile,
    createUser,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const gender = event.target.gender.value;
    const date = event.target.date.value;
    const number = event.target.number.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    // Image upload
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_KEY
      }`;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const imageData = await response.json();
      const imageUrl = imageData.data.display_url;

      const result = await createUser(email, password);
      const user = result.user;

      await updateUserProfile(name, imageUrl);

      toast.success("Sign Up Successful!!");
      saveUser(user, gender, date, number);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error.message);
      toast.error("Error during registration.");
      setLoading(false);
    }
  };

  // Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      saveUser(user);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error.message);
      toast.error("Error during Google sign-in.");
      setLoading(false);
    }
  };

  return (
    <div className="reg-bg">
      <div className="md:w-[50%] md:ml-5 mx-auto bg-slate-50 bg-opacity-10 glass">
        <div className="card-body my-5 mx-auto">
          <h1 className="text-4xl font-bold primary-text">Registration Form</h1>

          {/* Form Start */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
              <div className="form-control">
                <label className="label font-bold">
                  <span className="text-lg ">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Your Name"
                  className="input shadow-inner shadow-slate-300"
                />
              </div>
              <div className="form-control">
                <label className="label font-bold">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your Email"
                  required
                  className="input shadow-inner shadow-slate-300"
                />
              </div>
              <div className="form-control">
                <label className="label font-bold">
                  <span className="text-lg secondary-text">Date Of birth</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Type Your Name"
                  className="input shadow-inner shadow-slate-300"
                />
              </div>
              <div className="form-control">
                <label className="label font-bold">
                  <span className="text-lg">Gender</span>
                </label>
                <select className="select select-primary w-full" name="gender">
                  <option disabled selected>
                    Select your gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="">
                <label className="label font-bold">
                  <span className="text-lg secondary-text">Profile Image</span>
                </label>
                <input
                  className=""
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>
              <div className="form-control">
                <label className="label font-bold">
                  <span className="text-lg">Phone Number</span>
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="Type Your Name"
                  className="input shadow-inner shadow-slate-300"
                />
              </div>
              <div className="form-control">
                <label className="label font-bold">
                  <span className="text-lg">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type password"
                  required
                  className="input shadow-inner shadow-slate-300"
                />
              </div>
            </div>
            <div className="form-control pt-10">
              <input
                className="btn btn-primary"
                type="submit"
                value="Registration"
              />
            </div>
          </form>
          {/* End form */}
          <p className="text-center">
            Already have an Account{" "}
            <Link className="link primary-text font-bold" to="/login">
              {" "}
              Login
            </Link>
          </p>
          <div
            onClick={handleGoogleSignIn}
            className="flex mx-auto cursor-pointer justify-center text-center items-center gap-2"
          >
            <AiFillGoogleCircle className="w-8 h-12"></AiFillGoogleCircle>
            <p className="font-bold inline">Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
