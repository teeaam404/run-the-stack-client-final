import {
  FaBook,
  FaHome,
  FaMoneyBill,
  FaOpencart,
  FaPersonBooth,
  FaSave,
  FaSchool,
  FaUniversity,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseInstructor from "../Hooks/UseInstuctor";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const DashBoard = () => {
  const [isAdmin] = UseAdmin();
  const [isInstructor] = UseInstructor();
  const { user } = useContext(AuthContext);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-outline drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-indigo-300 font-bold">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <Link to="/myProfile">
          <div className="avatar mt-8 ms-24 ">
            <div className=" rounded-full   bg-white">
              {user ? (
                <img src={user?.photoURL} />
              ) : (
                <img src={userImg} className="" alt="" />
              )}
            </div>
          </div>
          <div className=" text-center">
            <h2 className="text-lg font-bold ">{user.displayName}</h2>
            <h2 className="text-lg font-bold ">{user.email}</h2>
          </div>
        </Link>

        <ul className="menu p-4 mt-4 w-80 h-full">
          {/* Admin */}
          <>
            <li>
              <NavLink to="adminDashBoard">
                <FaSave /> Admin DashBoard
              </NavLink>
            </li>
            <li>
              <NavLink to="manageClasses">
                <FaUniversity /> Manage Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="manageUsers">
                <FaUser /> Manage Users
              </NavLink>
            </li>
            <li></li>
          </>
          {/* Instructor */}
          <>
            {/* <li>
              <NavLink to="instructorDashBoard">
                <FaSave /> Instructor DashBoard
              </NavLink>
            </li> */}
            <li>
              <NavLink to="addClass">
                <FaBook /> Add Courses
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="myclasses">
                <FaBook /> My Courses
              </NavLink>
            </li> */}
          </>
          {/* Student */}
          <>
            {/* <li>
              <NavLink to="studentDashBoard">
                <FaSave /> Student DashBoard
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="MySelectedClass">
                <FaSave /> My Selected Classes
                <span className="badge badge-outline bg-indigo-500 text-white p-4">
                  +{cart?.length || 0}
                </span>
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="MyEnrolledClass">
                <FaBook /> My Enrolled Classes
              </NavLink>
            </li> */}
            <li>
              <NavLink to="PaymentHistory">
                <FaMoneyBill /> Payment History
              </NavLink>
            </li>
          </>
          <div className="divider"></div>
          <div className="divider"></div>
          <li>
            <NavLink to="/" className="">
              <p className="flex gap-2 lg:text-lg">
                <FaHome className="my-auto " /> <span>Home</span>
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/questions" className="">
              <p className="flex gap-2 lg:text-lg">
                <FaUser className="my-auto " /> <span>Question</span>
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
