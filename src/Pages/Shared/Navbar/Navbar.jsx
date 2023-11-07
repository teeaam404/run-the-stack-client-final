import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaBookmark,
  FaChartArea,
  FaChartBar,
  FaHome,
  FaOpencart,
  FaPhone,
  FaQuestion,
  FaReadme,
  FaRegMinusSquare,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { BiMenu } from "react-icons/Bi";
import logo from "../../../../src/assets/logo.png";
import userImg from "../../../assets/user.png";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col   ">
          {/* Page content here */}
          <div className="flex justify-between text-white bg-[#0a48b3] ">
            <Link>
              <h2 className="lg:hidden font-bold  text-xl lg:text-3xl my-4 lg:ms-8 mx-4">
                Run The Stack
              </h2>
            </Link>
            <div className="flex justify-center items-center gap-4">
            {user ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <Link to="login">Login</Link>
              )}
              <Link to="/myProfile">
                <div className="avatar">
                  <div className="w-8  me-4 my-4 rounded-full  bg-white">
                    {user ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <img src={userImg} className="" alt="" />
                    )}
                  </div>
                </div>
              </Link>
              <label
                htmlFor="my-drawer-2"
                className=" my-auto drawer-button me-4 lg:hidden text-xl"
              >
                <BiMenu />
              </label>
            </div>
          </div>
          <hr className="opacity-10 " /> {/*  */}
          {/* Main content here */}
          <Outlet />
          <FaSearch className="sm:mt-2 lg:hidden text-3xl text-green-600" />
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4  w- min-h-full bg-[#172b4d]   text-white">
            <div className="">
              {" "}
              {/* Sidebar content here */}
              <Link>
                <h2 className="font-bold text-3xl mb-12 pt-20 px-10">
                  <img className="w-40" src={logo} alt="" />
                </h2>
              </Link>
              {/*  */}
              <hr className="opacity-10 mt-2 mb-1" />{" "}
              <Link to="/" className="my-1">
                <p className="flex gap-2 lg:text-lg ">
                  <FaHome className="my-auto text-green-500 " />{" "}
                  <span>Home</span>
                </p>
              </Link>
              <hr className="opacity-10 my-2" /> {/*  */}
              {/*  */}
              <Link to="/questions" className="my-1">
                <p className="flex gap-2 lg:text-lg">
                  <FaUser className="my-auto text-green-500" />{" "}
                  <span>Question</span>
                </p>
              </Link>
              <hr className="opacity-10 my-2" /> {/*  */}
              <Link to="/allUsers" className="my-1">
                <p className="flex gap-2 lg:text-lg">
                  <FaUser className="my-auto text-green-500" />{" "}
                  <span>Users</span>
                </p>
              </Link>
              {/*  */}
              <hr className="opacity-10 my-2" /> {/*  */}
              <Link to="/blog" className="my-1">
                <p className="flex gap-2 lg:text-lg">
                  <FaBookmark className="my-auto text-green-500" />{" "}
                  <span>Blog</span>
                </p>
              </Link>
              <hr className="opacity-10 my-2" /> {/*  */}
              {/*  */}
              <Link to="/courses" className="my-1">
                <p className="flex gap-2 lg:text-lg">
                  <FaReadme className="my-auto text-green-500" />{" "}
                  <span>Courses</span>
                </p>
              </Link>
              <hr className="opacity-10 my-2" /> {/*  */}
              {/*  */}
              <Link to="/contactUs" className="my-1">
                <p className="flex gap-2 lg:text-lg">
                  <FaPhone className="my-auto text-green-500" />{" "}
                  <span>Contact Us</span>
                </p>
              </Link>
              <hr className="opacity-10 my-2" /> {/*  */}
              {/*  */}
            </div>
            <Link
              to="askquestion"
              className="btn btn-sm btn-success lg:mt-16 mt-4"
            >
              Ask Question
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
