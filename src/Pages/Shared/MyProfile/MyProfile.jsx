import { AiTwotoneLike } from "react-icons/ai";
import {
  FaCalendar,
  FaCamera,
  FaChartLine,
  FaDotCircle,
  FaEdit,
  FaEye,
  FaFacebook,
  FaFile,
  FaFileAlt,
  FaFootballBall,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMap,
  FaPersonBooth,
  FaPhone,
  FaQuestionCircle,
  FaSign,
  FaTwitter,
  FaUser,
  FaUserEdit,
  FaUsers,
} from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiLike } from "react-icons/Bi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import img from "../../../assets/user.png";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyQuestion from "../MyQuestion/MyQuestion";
import useQuestion from "../../../Hooks/useQuestion";
import UseAdmin from "../../../Hooks/UseAdmin";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  // const [isAdmin] = UseAdmin();
  const isAdmin = true
  const [userData, setUserData] = useState(null);
  const { email } = useParams();
  const [questions] = useQuestion();
  const userQuestions = questions.filter(
    (question) => user.email === question.email
  );

  const updateProfile = async (e) => {
    // Image upload
    e.preventDefault();
    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY
        }`;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const imageData = await response.json();
      const userImage = imageData.data.display_url;
      console.log(userImage);

      fetch(
        `https://run-the-stack-server-delta.vercel.app/users/${user.email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ userImage: userImage }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // rcv from server
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Updated Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    } catch { }
  };

  // Display Image when user select a image
  const [imageSrc, setImageSrc] = useState("");
  const displayImage = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImageSrc(e.target.result); // Update the state with the image data URL
      };

      reader.readAsDataURL(input.files[0]);
    } else {
      setImageSrc("");
    }
  };

  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const matchedUser = data.find(
          (userData) => userData.email === user.email
        );
        setUserData(matchedUser);
      });
  }, [email]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div key={user._id}>
        <div className="mb-8">
          <div className="bg-blue-900 h-52 w-full">
            <div className="py-12 px-4 md:px-20">
              <h1 className="text-white font-bold text-3xl md:text-5xl flex gap-4">
                <FaUser className="" /> {userData.userName}
              </h1>

              <hr className="mt-4 opacity-30" />
              <Link to="/">
                <FaHome className="text-white text-xl mt-2" />
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
                    <img src={userData.userImage} alt="Avatar" />
                    {/* edit profile picture */}
                    <div
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      className="absolute right-2 bottom-4 m w-6 h-6 flex items-center justify-center bg-cyan-200 rounded-full cursor-pointer"
                    >
                      <FaCamera className="absolute w-4 h-4"></FaCamera>
                      {/* Modal form */}
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box items-center justify-center">
                          <form onSubmit={updateProfile} action="">
                            <div className="">
                              <label className="label font-bold">
                                <span className="text-lg secondary-text">
                                  Profile Image
                                </span>
                              </label>
                              <input
                                className="bg-yellow-900"
                                required
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={(e) => displayImage(e.target)}
                              />
                            </div>
                            <div className="mt-3 flex items-center justify-center w-56">
                              <img
                                id="imagePreview"
                                src={imageSrc ? imageSrc : img}
                                alt="Selected Image"
                                className="max-w-[100px] max-h-[100px] rounded-full"
                              />
                            </div>
                            <button
                              type="submit"
                              className="bg-blue-400 py-1 px-2 mt-3 rounded-lg"
                            >
                              Update Picture
                            </button>
                          </form>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn">X</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-semibold">{userData.userName}</h2>
                <p className="text-sm">Doctor</p>
                <p className="text-sm lg:px-4">
                  A passionate specialist at couples therapy with over 10 years
                  of experience
                </p>

                <div className="my-4">
                  <Link to="/editProfile" className="md:ml-2 btn-sm">
                    <btn
                      href="#_"
                      className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                      <span className="relative">Edit Profile</span>
                    </btn>
                  </Link>
                  {isAdmin && (
                    <Link to="/dashboard">
                      <button className="btn btn-primary btn-sm">
                        DashBoard
                      </button>
                    </Link>
                  )}
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
                        class="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                      >
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                          <svg
                            class="w-40 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
                          <FaEye />{" "}
                          <span className="ms-2">
                            Visits <span className="ms-60">5</span>{" "}
                          </span>
                        </span>
                        <span class="relative invisible">Button Text</span>
                      </a>
                    </div>
                    {/*  */}
                    <div className="my-4">
                      {/* question */}
                      <a
                        href="#_"
                        class="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                      >
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-400 group-hover:translate-x-0 ease">
                          <svg
                            class="w-40 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          <FaQuestionCircle />{" "}
                          <span className="ms-2">
                            Question <span className="ms-60">5</span>{" "}
                          </span>
                        </span>
                        <span class="relative invisible">Button Text</span>
                      </a>
                    </div>
                    {/* Answer */}

                    <div className="my-4">
                      {/* Answer */}
                      <a
                        href="#_"
                        class="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                      >
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-600 group-hover:translate-x-0 ease">
                          <svg
                            class="w-40 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-green-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                          <FaSign />{" "}
                          <span className="ms-2">
                            Answer <span className="ms-60">5</span>{" "}
                          </span>
                        </span>
                        <span class="relative invisible">Button Text</span>
                      </a>
                    </div>
                    {/* Follower */}

                    <div className="my-4">
                      {/* Follower */}
                      <a
                        href="#_"
                        class="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                      >
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-600 group-hover:translate-x-0 ease">
                          <svg
                            class="w-40 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-orange-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                          <FaUsers />{" "}
                          <span className="ms-2">
                            Follower <span className="ms-60">5</span>{" "}
                          </span>
                        </span>
                        <span class="relative invisible">Button Text</span>
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
                      <FaPhone /> {userData.userNumber}
                    </p>
                    <p className="text-start text-sm my-2 ms-4 flex gap-2 font-semibold opacity-60">
                      {" "}
                      <FaUsers /> {userData.userGender}
                    </p>
                    <p className="text-start text-sm my-2 ms-4 flex gap-2 font-semibold opacity-60">
                      {" "}
                      <FaCalendar /> {userData.userDate}
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
                        <FaLinkedin /> LinkdIn
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="divider lg:divider-horizontal"></div>

              <div className="w-[93%] mx-auto lg:w-[70%] border-black">
                {/* my question */}
                <div className="">
                  {userQuestions.length === 0 ? (
                    <p className="text-3xl text-center ">
                      You have no questions.
                      <br />
                      for add Question <span>go </span>
                      <Link
                        to="/askquestion"
                        className="text-blue-800 font-bold"
                      >
                        Ask Qna
                      </Link>
                    </p>
                  ) : (
                    userQuestions.map((question) => (
                      <div key={question._id} className=" border-2  bg-white">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <div className="flex items-center gap-4 justify-between">
                                  <div className="flex gap-4">
                                    <div className="avatar">
                                      <div className="mask mask-squircle w-12 h-12">
                                        <Link
                                          to={`/questionAnswer/${question._id}`}
                                        >
                                          <img
                                            className=""
                                            src={question.userImage}
                                            alt="Avatar Tailwind CSS Component"
                                          />
                                        </Link>
                                      </div>
                                    </div>

                                    <div className="">
                                      <Link
                                        to={`/questionAnswer/${question._id}`}
                                      >
                                        <Link
                                          to={`/userProfile/${question.email}`}
                                        >
                                          <h2 className="font-bold text-blue-900">
                                            {question.userName}
                                          </h2>
                                        </Link>
                                        <div className="font-bold text-lg py-1">
                                          {question.title}
                                        </div>
                                      </Link>

                                      <div className="lg:flex justify-between gap-3 mt-1 ">
                                        <div className="">
                                          <div className="flex gap-4 ">
                                            <div>
                                              <span className="btn btn-outline text-lg btn-sm rounded-2xl">
                                                <BiLike />
                                              </span>
                                              <span className=" opacity-80 font-semibold ms-2">
                                                100Like
                                              </span>
                                            </div>
                                            <div className="btn btn-sm bg-white text-blue-800">
                                              <Link
                                                to={`/addAnswer/${question._id}`}
                                              >
                                                <TiMessages size={23} />
                                              </Link>
                                              <span>2</span>
                                            </div>
                                            <div className="flex gap-2 my-2">
                                              <span className="  text-lg rounded-2xl opacity-70">
                                                <FaEye />
                                              </span>
                                              <span className=" opacity-80 font-semibold ">
                                                600views
                                              </span>
                                            </div>

                                            <div className="flex gap-2 my-2">
                                              <span className="  text-lg rounded-2xl opacity-70">
                                                <FaCalendar />
                                              </span>
                                              {/* <span className=" opacity-60 font-semibold ">
                                    {formatDistanceToNow(
                                      parseISO(question.date)
                                    )}{" "}
                                    ago
                                  </span> */}
                                            </div>
                                            <span>{question.tags}</span>
                                          </div>
                                          <span></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="btn btn-primary btn-sm">
                                    Vote
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <hr />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
