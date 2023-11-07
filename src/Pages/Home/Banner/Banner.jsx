import React from "react";
import svg from "../../../assets/undraw_questions_re_1fy7.svg";
import ofc from "../../../assets/ofc.jpg";

import { FaDivide, FaLine } from "react-icons/fa";
import FlipCard from "../FlipCard/FlipCard";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-base-200 ">
      <div className="bg-[#0a48b3] lg:rounded-b-[150px] h-80  lg:h-[600px] grid md:grid-cols-2 md:px-40 lg:grid-cols-2  justify-center items-center ">
        <div className=" lg:ms-24">
          <h2 className="text-white font-bold lg:text-5xl text-2xl ">
            Run The Stack <br className="pt-4" /> is an QNA Type Website
          </h2>

          <div className="mt-2 lg:mt-8 ">
            <Link to='/blog' className="btn  bg-white  text-sm lg:text-lg">
              Learn More
            </Link>
            <Link to='questions' className="btn-success btn text-sm lg:text-lg ms-4">
              Learn More
            </Link>{" "}
          </div>
        </div>
        <div>
          <img className="w-60 lg:w-3/4" src={svg} alt="" />
        </div>
      </div>

      {/* All route in Flip Card  */}
      <FlipCard></FlipCard>

      {/* Ask Question banner */}

      <div className="grid lg:grid-cols-2 lg:my-20 my-4">
        <div className="">
          <img src={ofc} alt="" />
        </div>
        <div className="bg-[#172b4d]  flex text-start">
          <div className="lg:my-auto my-8 mx-8">
            <h2 className=" text-green-400 font-bold uppercase text-lg ">
              Ask Question
            </h2>
            <h1 className="text-3xl my-2 text-white font-bold">
              Get Help From Professionals
            </h1>
            <p className="text-sm text-white opacity-60 mb-4">
              Sed commodo odio eu condimentum eleifend. Maecenas semper nisl a
              mattis semper. Quisque sodales laoreet interdum. Aliquam ut erat
              sit amet nisl lobortis maximus lorem ipsum Etiam congue, sem id
              vulputate condimentum, nibh arcu lobortis lorem ipsum...
            </p>
            <button className="btn btn-success">Ask a Question</button>
          </div>
        </div>
      </div>

      {/* Question */}
    </div>
  );
};

export default Banner;
