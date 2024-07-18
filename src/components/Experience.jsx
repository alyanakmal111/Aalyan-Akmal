import React from "react";
import certificate1 from "../assets/internship.png";

const Experience = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:py-52" id="experience">
      <h2 className="text-3xl font-bold text-center mb-20 text-white bg-primary-color rounded-full py-2">
        Experience
      </h2>
      <div className="flex flex-col md:flex-row gap-8 place-items-center">
        <div className="flex-1 p-6 bg-[#202121] rounded-lg shadow-lg">
          <h2 className="text-gray-200 text-3xl font-bold mb-4">
            Web Developer Intern
          </h2>
          <p className="text-gray-400 -mt-3 mb-4">NGSS Technologies</p>
          <p className="text-gray-200">
            ➡️ Developed web applications using React.js, resulting in a 20%
            increase in user engagement. <br />
            ➡️ Optimized server-side logic with Node.js and Express.js,
            improving response times by 30%. <br />
            ➡️ Managed MongoDB databases, ensuring faster data retrieval and
            better performance.
          </p>
        </div>
        <div className="relative group flex-1">
          <div
            className="w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-100
             to-orange-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"
          ></div>
          <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
            <img
              src={certificate1}
              alt="project 1"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
