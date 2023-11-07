import { BiSolidSortAlt } from "react-icons/Bi";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUsers from "../../../Hooks/useUsers";

const AllUsers = () => {
  const [users] = useUsers();
  return (
    <div className="bg-slate-200 pb-16">
      <div className="bg-blue-900 h-52 w-full">
        <div className="py-12 px-4 md:px-20">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            {" "}
            All Users
          </h1>
          <h2 className="text-white font-semibold text-xl pt-2">
            Our Family Member
          </h2>
          <hr className="mt-4 opacity-30" />
          <Link to="/">
            <FaHome className="text-white text-xl mt-2" />
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:flex gap-5 bg-white p-6 mb-16 mt-8 rounded">
          <div className="flex lg:w-3/5">
            <input
              type="text"
              className="block w-full px-4 py-2 text-blue-600 bg-white border  focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 rounded-s-lg"
              placeholder="Search..."
            />
            <button className="px-4 text-white bg-blue-600 rounded-e-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div className="lg:w-2/5 relative">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered focus:border-blue-400 w-full max-w-lg"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <BiSolidSortAlt />
            </div>
          </div>
        </div>
        <div className="">
          {users.map((user) => (
            <div className="bg-white border border-t-2 p-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                  <div>
                    <img
                      className="w-14 h-14 rounded-full"
                      src={user.userImage}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <Link to={`/userProfile/${user.email}`}>
                      {" "}
                      <h2 className="font-bold text-blue-900">
                        {user.userName}
                      </h2>
                    </Link>
                    <p>{user.userDate}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="border text-center">
                    <h4 className="py-2 p-5">4</h4>
                    <p className="border-t-2 text-sm text-gray-500">que</p>
                  </div>
                  <div className="border text-center">
                    <h4 className="py-2 p-5">2</h4>
                    <p className="border-t-2 text-sm text-gray-500">ans</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <hr />
    </div>
  );
};

export default AllUsers;
