import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestionTable from "./QuestionTable";
import { FaCss3, FaHome, FaHtml5, FaJs } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import MyQuestion from "../MyQuestion/MyQuestion";
import Tags from "../Tags/Tags";
import PopularQuestion from "../PopularQuestion/PopularQuestion";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all"); // Track selected option

  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/question")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);
  // Function to handle option change
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="bg-base-200">
      <div className="bg-blue-900 h-52 w-full">
        <div className="py-12 px-4 md:px-20">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Questions
          </h1>
          <h2 className="text-white font-semibold text-xl pt-2">
            Don't hesitate to ask
          </h2>
          <hr className="mt-4 opacity-30" />
          <Link to="/">
            <FaHome className="text-white text-xl mt-2" />
          </Link>
        </div>
      </div>

      {/* Dropdown Menu and Search */}
      <div className="flex flex-col md:flex-row items-center bg-white max-w-screen-2xl mx-auto p-4 md:p-0 mb-16">
        <div className="w-full md:w-1/4 py-4 md:px-4">
          <select
            className="p-2 border-1 border-blue-950 bg-base-200 w-full"
            onChange={handleOptionChange} // Handle option change
            value={selectedOption} // Set value based on state
          >
            <option value="all">All Questions</option>
            <option value="my">My Questions</option>
            <option value="tags">Tags</option>
            <option value="popular">Popular Questions</option>
          </select>
        </div>
        <div className="lg:w-2/4 w-3/4 flex flex-col md:flex-row items-center justify-between py-4 md:px-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs md:max-w-full mb-2 md:mb-0 md:mr-2"
          />
          <button className="btn btn-primary">Search</button>
          {/* Ask Question */}
          <Link to="/askquestion" className="md:ml-2 ">
            <btn className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Ask Question</span>
            </btn>
          </Link>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto  ">
        <div className="lg:flex gap-2">
          {/* Conditional rendering based on selected option */}
          {selectedOption === "all" ? (
            <div className="lg:w-[70%]">
              {questions.map((question) => (
                <QuestionTable
                  key={question._id}
                  question={question}
                ></QuestionTable>
              ))}
            </div>
          ) : selectedOption === "my" ? (
            <div className="lg:w-[70%]">
              <MyQuestion questions={questions} />
            </div>
          ) : selectedOption === "tags" ? (
            <div className="lg:w-[70%]">
              <Tags />
            </div>
          ) : selectedOption === "popular" ? (
            <div className="lg:w-[70%]">
              <PopularQuestion />
            </div>
          ) : null}
          <div className="lg:w-[30%] ps-24">
            <h2 className="font-semibold text-2xl mt-4">-Categories </h2>
            <span className="divider pb-4" />

            <div className="">
              <div className="flex justify-between ">
                <div>
                  <Link>
                    <h2 className="font-semibold text-xl">HTML</h2>
                  </Link>
                  <p className="font-semibold opacity-90 pt-2 text-sm">
                    {" "}
                    7 Questions
                  </p>
                </div>
                <FaHtml5 className="text-4xl" />
              </div>
              <span className="divider pb-4" />
            </div>
            <div className="">
              <div className="flex justify-between ">
                <div>
                  <Link>
                    <h2 className="font-semibold text-xl">CSS</h2>
                  </Link>
                  <p className="font-semibold opacity-90 pt-2 text-sm">
                    {" "}
                    7 Questions
                  </p>
                </div>
                <FaCss3 className="text-4xl bg-blue-500 text-white px-1" />
              </div>
              <span className="divider pb-4" />
            </div>
            <div className="">
              <div className="flex justify-between ">
                <div>
                  <Link>
                    <h2 className="font-semibold text-xl">Javascript</h2>
                  </Link>
                  <p className="font-semibold opacity-90 pt-2 text-sm">
                    {" "}
                    7 Questions
                  </p>
                </div>
                <FaJs className="text-4xl bg-yellow-600" />
              </div>
              <span className="divider pb-4" />
            </div>

            <h2 className="font-semibold text-2xl mt-">-Pupular Questions </h2>
            <span className="divider pb-4" />

            <div className="">
              <div className="flex justify-between ">
                <div>
                  <Link>
                    <h2 className="font-semibold text-xl">
                      What is JavaScript??
                    </h2>
                  </Link>
                  <p className="font-semibold opacity-90 pt-2 text-sm ">
                    {" "}
                    <span className=" text-sm">3 answer</span>
                    <span className="ms-2 text-sm">-1 vote</span>
                  </p>
                </div>
                <Link className="text-blue-800 btn" to="">
                  <TiMessages size={23} />
                </Link>
              </div>
              <span className="divider pb-4" />
            </div>
            <div className="">
              <div className="flex justify-between ">
                <div>
                  <Link>
                    <h2 className="font-semibold text-lg">
                      What are the steps you can take if your WordPress file is
                      hacked?
                    </h2>
                  </Link>
                  <p className="font-semibold opacity-90 pt-2 text-sm ">
                    {" "}
                    <span className=" text-sm">3 answer</span>
                    <span className="ms-2 text-sm">-1 vote</span>
                  </p>
                </div>
                <Link className="text-blue-800 btn" to="">
                  <TiMessages size={23} />
                </Link>
              </div>
              <span className="divider pb-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Question;
