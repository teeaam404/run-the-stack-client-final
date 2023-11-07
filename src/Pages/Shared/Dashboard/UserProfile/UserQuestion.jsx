import React from "react";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/Bi";
import { FaCalendar, FaEye, FaHome } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
const UserQuestion = ({ question }) => {
  return (
    <div>
      <div key={question._id} className=" border-2  bg-white">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-4 justify-between">
                  <div className="flex gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Link to={`/questionAnswer/${question._id}`}>
                          <img
                            src={question.userImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="">
                      <Link to={`/questionAnswer/${question._id}`}>
                        <Link to={`/userProfile/${question.email}`}>
                          <h2 className="font-bold text-blue-900">
                            {question.userName}
                          </h2>
                        </Link>
                        <div className="font-bold text-lg">
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
                              <Link to={`/addAnswer/${question._id}`}>
                                <TiMessages size={23} />
                              </Link>
                              <span>3</span>
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
                  <button className="btn btn-primary btn-sm">Vote</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    </div>
  );
};

export default UserQuestion;
