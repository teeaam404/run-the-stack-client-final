import {
  FaHome,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import girl from "../../../assets/girl.jpg";
import { BiSolidPhoneCall } from "react-icons/Bi";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uki2azi",
        "template_r94rfnx",
        form.current,
        "fvLnTtQCIYZak3eLw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-slate-200">
      <div className="bg-blue-900 h-52 w-full">
        <div className="py-12 px-4 md:px-20">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            {" "}
            Contact Us!
          </h1>
          <h2 className="text-white font-semibold text-xl pt-2">
            We offer you many ways to contact us!
          </h2>
          <hr className="mt-4 opacity-30" />
          <Link to="/">
            <FaHome className="text-white text-xl mt-2" />
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:flex gap-5 justify-center items-center py-24">
          <div className="relative lg:w-1/2">
            <img
              className="rounded-s-full rounded-t-full"
              src={girl}
              width="500"
              height="500"
              alt=""
            />
            <div className="absolute flex gap-3 items-center bottom-2/4 -left-8 bg-cyan-950 text-white p-5 rounded-s-full rounded-e-full">
              <div>
                <BiSolidPhoneCall />
              </div>
              <div className="font-bold">
                <span className="border-s-2 mr-3"></span> +1234 567 89
              </div>
            </div>
            <div className="flex gap-2 justify-center my-5">
              <FaFacebook className="bg-blue-950 text-white cursor-pointer p-3 rounded-full w-12 h-12" />
              <FaInstagram className="bg-pink-700 text-white cursor-pointer p-3 rounded-full w-12 h-12" />
              <FaTwitter className="bg-sky-500 text-white cursor-pointer p-3 rounded-full w-12 h-12" />
              <FaLinkedin className="bg-blue-600 text-white cursor-pointer p-3 rounded-full w-12 h-12" />
            </div>
          </div>
          <div className="bgw-1/2 p-10 border-t-8 border-blue-600 bg-white rounded-lg rounded-br-3xl">
            <h2 className="text-3xl font-bold py-8">Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail} action="">
              <div className="lg:flex gap-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text uppercase">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name..."
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text uppercase">Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email..."
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control my-4">
                <label className="label">
                  <span className="label-text uppercase">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject..."
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-4">
                <label className="label">
                  <span className="label-text uppercase">
                    Your Message (optional)
                  </span>
                </label>
                <textarea
                  name="msg"
                  placeholder=""
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
