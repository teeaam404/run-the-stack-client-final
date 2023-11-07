import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;
const AddAnswer = () => {
  const { id } = useParams();
  const questionId = id;
  const { user } = useContext(AuthContext);
  console.log(user);
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { comment } = data;

          const commentBox = {
            questionId,
            userName: user.displayName,
            userImage: user.photoURL,
            userEmail: user.email,
            commentImage: imgUrl,
            comment: comment,
            date: new Date(),
          };

          fetch("https://run-the-stack-server-delta.vercel.app/answer", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(commentBox),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              // rcv from server
              if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "Comment Added Successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
            });
        }
      });
  };
  //   console.log(img_hosting_token);

  return (
    <div>
      {/* <h2>{user.displayName}</h2>
      <img src={user.photoURL} className="rounded-full h-40" alt="" />
      <h2>{user.email}</h2> */}

      {/*  */}

      {/* design there comment boc */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Add Your Comment</span>
          </label>
          <textarea
            {...register("comment", { required: true })}
            class="textarea textarea-bordered h-24"
            placeholder="Add Comment"
          ></textarea>
        </div>

        {/* image */}
        <div class="form-control w-full my-4">
          <label class="label">
            <span class="label-text">Item Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            class="file-input file-input-bordered w-full "
          />
        </div>
        {/* submit */}

        <input
          className="btn btn-accent btn-sm mt-4 "
          type="submit"
          value="Add Your Comment"
        ></input>
      </form>
    </div>
  );
};

export default AddAnswer;
