import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const EditProfile = () => {
  const {user} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    userName: "",
    userDate: "",
    userGender: "",
    userNumber: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
   try{
   await fetch(`https://run-the-stack-server-delta.vercel.app/users/${user.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
           
            if (data.modifiedCount || data.matchedCount > 0) {
             resetForm()
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
          
        })

    } catch {}
    console.log("Form Data:", formData);
  };
  
  const resetForm = () => {
    const newFormData = {
      userName: "",
      userDate: "",
      userGender: "",
      userNumber: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      twitter: ""
    };
  
    setFormData(newFormData);
  };
  

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <div>
      <div className="bg-blue-900 h-52 w-full">
        <div className="py-12 px-4 md:px-20">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Edit Profile
          </h1>

          <hr className="mt-4 opacity-30" />
          <Link to="/">
            <FaUser className="text-white text-xl mt-2" />
          </Link>
        </div>
      </div>{" "}
      <form
        className="lg:px-40 px-8 border-blue-800 border-2 py-8 "
        onSubmit={handleSubmit}
      >
        <div className="form-control ">
          <label className="label font-bold">
            <span className="text-lg">Full Name</span>
          </label>
          <input
            type="text"
            name="userName"
            placeholder="Full Name"
            className="input shadow-inner shadow-slate-300"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg secondary-text">Date Of Birth</span>
          </label>
          <input
            type="date"
            name="userDate"
            className="input shadow-inner shadow-slate-300"
            value={formData.userDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg">Gender</span>
          </label>
          <select
            className="select select-primary w-full"
            name="userGender"
            value={formData.userGender}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
       
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg">Phone Number</span>
          </label>
          <input
            type="number"
            name="userNumber"
            placeholder="Phone Number"
            className="input shadow-inner shadow-slate-300"
            value={formData.userNumber}
            onChange={handleChange}
          />
        </div>
        {/* Social Media link */}
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg">Facebook</span>
          </label>
          <input
            type="text"
            name="facebook"
            placeholder="Facebook Link"
            className="input shadow-inner shadow-slate-300"
            value={formData.facebook}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg">Instagram</span>
          </label>
          <input
            type="text"
            name="instagram"
            placeholder="Instagram Link"
            className="input shadow-inner shadow-slate-300"
            value={formData.instagram}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg">Twitter</span>
          </label>
          <input
            type="text"
            name="twitter"
            placeholder="Twitter Link"
            className="input shadow-inner shadow-slate-300"
            value={formData.twitter}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg">Linkedin</span>
          </label>
          <input
            type="text"
            name="linkedin"
            placeholder="Linkedin Link"
            className="input shadow-inner shadow-slate-300"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Update Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;