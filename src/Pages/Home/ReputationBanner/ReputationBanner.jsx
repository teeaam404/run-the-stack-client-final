import React from "react";
import "./ReputationBanner.css";
import { BiLike } from "react-icons/Bi";
import { FaLightbulb, FaQuestion, FaTrophy } from "react-icons/fa";

const ReputationBanner = () => {
  return (
    <div>
      <div className="ReputationBanner mb-16 bg-blue-900 ">
        <div className="max-w-screen-xl mx-auto pt-16 lg:pt-52 ">
          <div className="lg:flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-green-400 font-bold uppercase text-lg">
                GET REPUTATION
              </h2>
              <h1 className="text-3xl my-2 text-white font-bold">
                How Do You Gain Reputation Points?
              </h1>
              <p className="text-sm text-white opacity-60 mb-4">
                Sed commodo odio eu condimentum eleifend. Maecenas semper nisl a
                mattis semper. Quisque sodales laoreet interdum. Aliquam ut erat
                sit amet nisl lobortis maximus lorem ipsum Etiam congue, sem id
                vulputate condimentum, nibh arcu lobortis lorem ipsum...
              </p>
              <button className="btn btn-success">Ask a Question</button>
            </div>
            <div className="pt-16 lg:w-1/2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex gap-4 bg-[#142f5f] text-white py-4 px-8">
                  <FaQuestion className="my-auto text-2xl" />
                  <div className="border opacity-40"></div>
                  <div>
                    <h2 className="font-semibold text-lg">Ask A Question</h2>
                    <p className="opacity-50 text-sm">
                      Cras dictum placerat varius.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 bg-[#142f5f] text-white py-4 px-8">
                  <FaLightbulb className="my-auto text-2xl" />
                  <div className="border opacity-40"></div>
                  <div>
                    <h2 className="font-semibold text-lg">Answer Questions</h2>
                    <p className="opacity-50 text-sm">
                      Cras dictum placerat varius.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#142f5f] text-white py-4 px-8">
                  <BiLike className="my-auto text-2xl" />
                  <div className="border opacity-40"></div>
                  <div>
                    <h2 className="font-semibold text-lg">Receive/Give Vote</h2>
                    <p className="opacity-50 text-sm">
                      Cras dictum placerat varius.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 bg-[#142f5f] text-white py-4 px-8">
                  <FaTrophy className="my-auto text-2xl" />
                  <div className="border opacity-40"></div>
                  <div>
                    <h2 className="font-semibold text-lg">
                      Give The Best Answer
                    </h2>
                    <p className="opacity-50 text-sm">
                      Cras dictum placerat varius.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReputationBanner;
