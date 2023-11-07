import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { FaBook, FaHome, FaStopwatch, FaTimes } from "react-icons/fa";

const CourseDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);



  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        const course = data.find((course) => course._id == id);
        if (course) {
          setDetails(course);
        } else {
          console.error(`Course with id ${id} not found`);
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {details && (
        <div>
          <div className="bg-blue-900 h-52 w-full">
            <div className="py-12 px-4 md:px-20">
              <h1 className="text-white font-bold text-3xl md:text-5xl">
                {details.course_name}{" "}
              </h1>
              <h2 className="text-white font-semibold text-xl pt-2 flex gap-1">
                <FaStopwatch className="my-auto" /> {details.duration}
              </h2>
              <hr className="mt-4 opacity-30" />
              <Link to="/courses">
                <FaBook className="text-white text-3xl mt-2" />
              </Link>
            </div>
          </div>
          
          <div className="">
            <div className="hero min-h-screen bg-base-200 p-5">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={details.image}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-3xl font-bold">{details.course_name}</h1>
                  <p className="text-xl font-bold">
                    Instructor Name: {details.instructor_name}
                  </p>
                  <p>Duration: {details.duration}</p>
                  <div className="text-xl font-bold">
                    <p>
                      Price:{" "}
                      <span className="text-red-400 line-through">
                        ${details.price}
                      </span>{" "}
                      ${details.discount}
                    </p>
                  </div>
                  <div className="my-5">
                    <Rating
                      style={{ maxWidth: 110 }}
                      value={details.rating}
                      readOnly
                    ></Rating>
                  </div>
                  <p className="py-6">{details.description}</p>
                  <Link
                    to={`/payment/${details._id}`}
                    className="btn btn-outline btn-secondary"
                  >
                    Stripe Payment
                  </Link>
                  <Link
                    to={`/sslpayment/${details._id}`}
                    className="btn btn-outline btn-neutral md:ms-5"
                  >
                    SSL Payment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
