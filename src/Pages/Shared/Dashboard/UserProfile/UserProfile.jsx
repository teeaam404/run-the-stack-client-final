import { useEffect, useState } from "react";
import { BiLike } from "react-icons/Bi";
import { AiTwotoneLike } from "react-icons/ai";
import { CgSmileMouthOpen } from "react-icons/cg";
import {
  FaCalendar,
  FaChartLine,
  FaDotCircle,
  FaEye,
  FaFacebook,
  FaFile,
  FaFileAlt,
  FaFootballBall,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMap,
  FaPersonBooth,
  FaPhone,
  FaQuestion,
  FaQuestionCircle,
  FaSign,
  FaTwitter,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { TiMessages } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import useQuestion from "../../../../Hooks/useQuestion";
import UserQuestion from "./UserQuestion";

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const { email } = useParams();
  const [questions] = useQuestion([]);
  const filteredQuestions = questions.filter(
    (question) => question.email === email
  );

  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  const filteredUsers = users.filter((user) => user.email === email);

  return (
    <div>
      {filteredUsers.map((user) => (
        <div key={user._id}>
          <div className="mb-8">
            <div className="bg-blue-900 h-52 w-full">
              <div className="py-12 px-4 md:px-20">
                <h1 className="text-white font-bold text-3xl md:text-5xl flex gap-4">
                  <FaUser className="" /> {user.userName}
                </h1>

                <hr className="mt-4 opacity-30" />
                <Link to="/questions">
                  <FaQuestion className="text-white text-xl mt-2" />
                </Link>
              </div>
            </div>
            {/* users */}
            <div className="max-w-screen-2xl mx-auto">
              <div className="lg:flex">
                {/* users about section */}
                <div className="border-2 lg:w-[30%] mx-auto text-center">
                  <div className="avatar mt-4">
                    <div className="w-24 rounded-full">
                      <img src={user.userImage} alt="Avatar" />
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold">{user.userName}</h2>
                  <p className="text-sm">Doctor</p>
                  <p className="text-sm lg:px-4">
                    A passionate specialist at couples therapy with over 10
                    years of experience
                  </p>

                  <div className="flex justify-center gap-4">
                    <div className="my-4">
                      <a
                        href="#_"
                        className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                      >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative">Ask</span>
                      </a>
                    </div>
                    <button className="btn btn-primary my-auto">Follow</button>
                  </div>
                  <div className="divider mx-4"></div>

                  <div className="grid lg:grid-cols-1 sm:grid-cols-2 gap-12">
                    {/* user statistic */}
                    <div>
                      <h2 className="text-start ms-4 flex gap-2 font-semibold">
                        {" "}
                        <FaChartLine /> User Statistics
                      </h2>

                      <div className="my-4">
                        {/* visit */}
                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                            <svg
                              className="w-40 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaEye />{" "}
                            <span className="ms-2">
                              Visits <span className="ms-60">5</span>{" "}
                            </span>
                          </span>
                          <span className="relative invisible">
                            Button Text
                          </span>
                        </a>
                      </div>
                      {/*  */}
                      <div className="my-4">
                        {/* question */}
                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-400 group-hover:translate-x-0 ease">
                            <svg
                              className="w-40 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaQuestionCircle />{" "}
                            <span className="ms-2">
                              Question <span className="ms-60">5</span>{" "}
                            </span>
                          </span>
                          <span className="relative invisible">
                            Button Text
                          </span>
                        </a>
                      </div>
                      {/* Answer */}

                      <div className="my-4">
                        {/* Answer */}
                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-600 group-hover:translate-x-0 ease">
                            <svg
                              className="w-40 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-green-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaSign />{" "}
                            <span className="ms-2">
                              Answer <span className="ms-60">5</span>{" "}
                            </span>
                          </span>
                          <span className="relative invisible">
                            Button Text
                          </span>
                        </a>
                      </div>
                      {/* Follower */}

                      <div className="my-4">
                        {/* Follower */}
                        <a
                          href="#_"
                          className="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-600 group-hover:translate-x-0 ease">
                            <svg
                              className="w-40 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-orange-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaUsers />{" "}
                            <span className="ms-2">
                              Follower <span className="ms-60">5</span>{" "}
                            </span>
                          </span>
                          <span className="relative invisible">
                            Button Text
                          </span>
                        </a>
                      </div>

                      {/* social */}
                    </div>

                    {/* user info
                     */}
                    <div className="sm:my-auto">
                      <h2 className="text-start ms-4 flex gap-2 font-semibold">
                        {" "}
                        <FaUser /> User Info
                      </h2>
                      <p className="text-start text-sm my-2 ms-4 flex gap-2 font-semibold opacity-60">
                        {" "}
                        <FaDotCircle /> Psychiatrist
                      </p>
                      <p className="text-start text-sm my-2 ms-4 flex gap-2 font-semibold opacity-60">
                        {" "}
                        <FaPhone /> {user.userNumber}
                      </p>
                      <p className="text-start text-sm my-2 ms-4 flex gap-2 font-semibold opacity-60">
                        {" "}
                        <FaUsers /> {user.userGender}
                      </p>
                      <p className="text-start text-sm my-2 ms-4 flex gap-2 font-semibold opacity-60">
                        {" "}
                        <FaCalendar /> {user.userDate}
                      </p>
                    </div>
                    {/* social */}
                    <div>
                      <h2 className="text-start ms-4 flex gap-2 font-semibold">
                        {" "}
                        <FaFootballBall /> Social
                      </h2>

                      <div className="grid grid-cols-3 gap-2 mx-4 pb-8 mt-2">
                        <button className="btn btn-sm  bg-blue-600 text-white ">
                          <FaFacebook /> Facebook
                        </button>

                        <button className="btn btn-sm btn-secondary ">
                          <FaInstagram className="" /> Instragam
                        </button>
                        <button className="btn btn-sm  bg-blue-500 text-white">
                          <FaTwitter /> Twitter
                        </button>
                        <button className="btn btn-sm bg-blue-700 text-white">
                          <FaLinkedin /> Linkedin
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="w-[93%] mx-auto lg:w-[70%] border-black">
                  {/* user question */}
                  {/* Display user's questions */}
                  {filteredQuestions.map((question) => (
                    <UserQuestion key={question._id} question={question} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
