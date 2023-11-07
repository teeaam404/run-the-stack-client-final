import React from "react";
import rcnt from "../../../assets/recent-posts (1).svg";
import web from "../../../assets/web developement.jpg";
import code from "../../../assets/code.jpg";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const Blog = () => {
  return (
    <div>
      <div className="bg-blue-900 h-52 w-full">
        <div className="py-12 px-4 md:px-20">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Blog Section
          </h1>
          <h2 className="text-white font-semibold text-xl pt-2">
            Blog Section{" "}
          </h2>
          <hr className="mt-4 opacity-30" />
          <Link to="/">
            <FaHome className="text-white text-xl mt-2" />
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto lg:flex mb-16 gap-12">
        <div className="w-[40%] mt-16">
          <h2 className="text-green-500 font-bold uppercase text-lg">
            RECENT NEWS
          </h2>
          <h1 className="text-3xl mb-3 text-black font-bold">
            Stay Up To Date With Our Latest Blog
          </h1>

          <img className="my-8 ps-4 w-80" src={rcnt} alt="" />
        </div>

        <div className="grid grid-cols-2 w-[100%] h-40 gap-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={web} alt="Web Development" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                What is Web Bug in Coding ?
              </h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                voluptate id ut cupiditate soluta fugit. Quaerat, consequatur
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={code} alt="Web Development" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                What is Web Developement?
              </h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                voluptate id ut cupiditate soluta fugit. Quaerat, consequatur
              </p>
            </div>
          </div>

          {/* Add more carousel slides here */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
