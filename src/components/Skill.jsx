import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiMongodb,
  DiMysql,
} from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { SiExpress } from "react-icons/si";
const Skill = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-1 gap-6 p-10 md:p-0 md:py-40"
      id="skill"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-white bg-primary-color rounded-full py-2">
        Skills
      </h2>
      <div className="text-5xl p-12 glass">
        <p className="text-gray-200 text-xl font-bold mb-4 text-center">
          My Tech Stack
        </p>
        <div className="grid grid-cols-4 gap-4">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <BiLogoTailwindCss className="text-blue-500" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
          <SiExpress className="text-white" />
          <DiMongodb className="text-green-500" />
          <DiMysql className="text-blue-500" />
          <FaGitAlt className="text-red-600" />
          <IoLogoGithub className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
