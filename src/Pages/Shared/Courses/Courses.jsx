import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  // https://run-the-stack-server-delta.vercel.app

  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="bg-blue-900 h-52 w-full">
        <div className="py-12 px-4 md:px-20">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Our Premium Courses
          </h1>
          <h2 className="text-white font-semibold text-xl pt-2">
            Join with us
          </h2>
          <hr className="mt-4 opacity-30" />
          <Link to="/">
            <FaHome className="text-white text-xl mt-2" />
          </Link>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 mx-5 gap-10">
        {courses.slice(0, showAll ? 18 : 9).map((course) => (
          <div key={course.id} className="card w-96 glass">
            <figure>
              <img className="w-full h-52" src={course.image} alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.course_name}</h2>
              <h3>Duration: {course.duration}</h3>
              <h1>Instructor Name: {course.instructor_name}</h1>
              <div>
                <Rating
                  style={{ maxWidth: 110 }}
                  className=""
                  value={course.rating}
                  readOnly
                ></Rating>{" "}
                */
              </div>
              <div className="card-actions justify-end">
                <Link
                  to={`/courseDetails/${course._id}`}
                  className="btn btn-primary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="items-center text-center my-10">
        {!showAll && (
          <span onClick={handleShowAll}>
            <Link className="btn btn-outline">See More</Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Courses;
