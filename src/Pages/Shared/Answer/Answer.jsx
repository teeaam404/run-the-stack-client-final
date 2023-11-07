import React from "react";
import { Link, useParams } from "react-router-dom";
import { BiLike } from "react-icons/Bi";
import { FaCalendar, FaEye, FaHome } from "react-icons/fa";
const Answer = ({ answer }) => {
  const { _id, comment, commentImage, questionId, userImage, userName } =
    answer;

  return (
    <div>
      <div className="">
        <div className="   bg-white">
          <table className="bg-white h-40">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Link to={`/questionAnswer/${_id}`}>
                  <img src={userImage} alt="Avatar Tailwind CSS Component" />
                </Link>
              </div>
            </div>

            <div className="">
              <Link to={`/questionAnswer/${_id}`}>
                <Link>
                  <h2 className="font-bold text-blue-900">{userName}</h2>
                </Link>
                <div className="font-bold text-lg">{comment}</div>
              </Link>
            </div>
          </table>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Answer;
