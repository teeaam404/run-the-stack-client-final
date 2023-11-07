import React, { useEffect, useState } from "react";
import {
  FaCalendarDay,
  FaEye,
  FaQuestion,
  FaSearch,
  FaStopwatch,
  FaTimesCircle,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";

import { TiMessages } from "react-icons/ti";
import { CgSmileMouthOpen } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import useAnswer from "../../../Hooks/useAnswer";
import Answer from "./Answer";

const QuestionAnswer = () => {
  const { id } = useParams();
  const [answers] = useAnswer();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/question")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  // Find the matching answer based on id
  const matchingAnswer = questions.find((answer) => answer._id === id);

  return (
    <div className="bg-base-200">
      {matchingAnswer ? (
        <div>
          {" "}
          <div className="bg-blue-900 h-56 w-full">
            <div className="py-12 px-4 md:px-20">
              <h1 className="text-white font-bold text-3xl md:text-5xl">
                {matchingAnswer.title}
              </h1>

              <hr className="mt-4 opacity-30" />
              <Link to="/questions">
                <FaQuestion className="text-white text-xl mt-2" />
              </Link>
            </div>
          </div>
          <div className="max-w-screen-2xl mx-auto my-4">
            <div className="lg:flex gap-3 ">
              <div className="bg-white border-1 border-l-4 border-blue-800 border-b-2 w-[65%]  ps-8">
                <div className="lg:flex gap-12 my-4">
                  <div className="flex gap-2 my-2">
                    <span className="  text-lg rounded-2xl opacity-70">
                      <FaEye />
                    </span>
                    <span className=" opacity-80 font-semibold ">600views</span>
                  </div>

                  <div className="flex gap-2 my-2">
                    <span className="  text-lg rounded-2xl opacity-70">
                      <FaCalendarDay />
                    </span>
                    <span className=" opacity-60 font-semibold ">
                      {matchingAnswer.date}
                    </span>
                  </div>
                  <div className="flex gap-2 my-2">
                    <span className="  text-lg rounded-2xl opacity-70">
                      <FaCalendarDay />
                    </span>
                    <Link>
                      <span className=" opacity-60 font-semibold ">
                        {matchingAnswer.tags}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" w-[35%]">
                {" "}
                <div className="lg:flex">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-info w-full max-w-xs md:max-w-full mb-2 md:mb-0 md:mr-2"
                  />
                  <button className="btn btn-sm btn-primary my-auto">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 max-w-screen-2xl mx-auto ">
            <div className="bg-slate-50 rounded px-5 py-6 lg:w-full border-2 border-s-2 border-s-red-600 h-full">
              <div className=" "></div>
              <div className="flex gap-3 mb-3">
                <div>
                  <img
                    className="rounded-full"
                    src={matchingAnswer.userImage}
                    alt="man"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <a
                    className="text-blue-800 font-bold hover:text-slate-600"
                    href=""
                  >
                    {matchingAnswer.userName}
                  </a>
                </div>
                <div>
                  <p className="bg-blue-600 px-2 text-white rounded">
                    Enlightened
                  </p>
                </div>
                <div>
                  <p>
                    Asked:{" "}
                    <a className="text-slate-600 hover:text-slate-900" href="">
                      January 4, 2022
                    </a>
                  </p>
                </div>
                <div>
                  <a
                    className="bg-slate-200 hover:border-black hover:border-2 px-2 rounded"
                    href=""
                  >
                    {matchingAnswer.tags}
                  </a>
                </div>
              </div>
              <a className="text-2xl font-bold hover:text-pink-500" href="">
                {matchingAnswer.title}
              </a>
              <p className="mt-1">{matchingAnswer.body}</p>
              <div className="flex gap-3 "></div>
              <hr className="my-3" />
              <div className="lg:flex justify-between items-center gap-3 ">
                <div className="flex gap-3">
                  <div className="border-2 p-2 rounded-full h-full">
                    <AiTwotoneLike
                      className="text-slate-900 bg-white "
                      size={20}
                    />
                  </div>
                  <div className="border-s-2 "></div>
                  <div className="ms-2 flex items-center">
                    <p className="ms-2">130 Like</p>
                    <div className="ms-2 flex">
                      <div className="flex gap-2 border-2 py-2 px-3 h-full text-blue-500">
                        <Link to={`/addAnswer/${matchingAnswer._id}`}>
                          <TiMessages size={20} />
                        </Link>
                        <span>{answers.length}</span>
                      </div>
                      <div className="flex gap-2 items-center ms-3 border-2 py-2 px-3 h-full">
                        <FaEye />
                        <p>6K Views</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button className="bg-black text-white font-bold hover:bg-blue-900 px-5 py-1 rounded">
                    Vote
                  </button>
                </div>
              </div>
              <h2></h2>
            </div>
            {/* answer/comment */}

            <div className="">
              {answers
                .filter((answer) => answer.questionId === matchingAnswer._id)
                .map((answer) => (
                  <Answer key={answer._id} answer={answer}></Answer>
                ))}
            </div>
          </div>{" "}
        </div>
      ) : (
        <p>No matching answer found.</p>
      )}
    </div>
  );
};

export default QuestionAnswer;
