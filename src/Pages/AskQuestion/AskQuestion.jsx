import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AskQuestion = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const onSubmit = (data) => {
    const question = {
      email: user.email,
      userImage: user.photoURL,
      userName: user.displayName,
      title: data.title,
      body: data.body,
      tags: data.tags,
      
    };
    fetch("https://run-the-stack-server-delta.vercel.app/question", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...question, date: new Date() }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Question Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  const predefinedTags = [
    "CSS",
    "JavaScript",
    "React",
    "HTML",
    "Bootstrap",
    "Tailwind",
    "Ethical Hacking",
    "C#",
    "C++",
    "DotNet",
    "Machine Learning",
  ];

  return (
    <div className="bg-base-200">
      <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Question Name:</span>
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Description:</span>
                </label>
                <textarea
                  id="body"
                  {...register("body")}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tags:</span>
                </label>
                <select
                  id="tags"
                  {...register("tags")}
                  className="input input-bordered"
                >
                  {predefinedTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AskQuestion;
