import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description:
      "Developed the HireSync user interface with React for a seamless and responsive front-end experience.",
    links: {
      site: "#",
      github: "https://github.com/alyanakmal111/HireSync_Frontentd",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description:
      "Built the fullstack application, HireSync, using Node.js for server-side development and MongoDB for database management.",
    links: {
      site: "#",
      github: "https://github.com/alyanakmal111/HireSync_Backend",
    },
  },
  {
    img: project3,
    title: "Project #3",
    description:
      "Developed the PropertyPulse website using the MERN stack, ensuring a seamless and responsive user interface with React.",
    links: {
      site: "#",
      github: "https://github.com/alyanakmal111/PropertyPulse",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description:
      "Crafted an immersive Virtual Reality landing page using React.js, delivering a captivating and seamless user experience.",
    links: {
      site: "#",
      github: "https://github.com/alyanakmal111/Virtual_R",
    },
  },
  {
    img: project5,
    title: "Project #5",
    description:
      "Developed the Book Store application using the MERN stack, implementing full CRUD operations for a seamless and responsive user experience.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project6,
    title: "Project #6",
    description:
      "Created a dynamic Todo List application using the MERN stack, featuring robust CRUD operations for efficient task management.",
    links: {
      site: "#",
      github: "https://github.com/alyanakmal111/Todo-list",
    },
  },
];

const Project = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className="my-6 max-w-[1200px] mx-auto p-6 md:py-40" id="project">
      <h2 className="text-3xl font-bold text-center mb-10 text-white bg-primary-color rounded-full py-2">
        Projects
      </h2>
      <div className="grid grid-cols-8 gap-6">
        <div className="z-10 col-span-3 grid place-items-center relative">
          <p className="text-gray-200 font-bold text-4xl -skew-y-6 ">
            Select Project
          </p>
          <img src={arrow} className="absolute w-[50px] top-10 right-12" />
          <ul className="ml-6 flex flex-col gap-6 text-2xl">
            {projects.map((project, index) => (
              <li
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`cursor-pointer text-gray-300 rounded-lg px-2 hover:bg-slate-600 transition duration-300 ${
                  currentProject === index ? "active-project bg-slate-600" : ""
                }`}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="z-10 col-span-5 glass w-full border-2 p-6 rounded-lg">
          <div className="w-full h-80">
            <img
              src={projects[currentProject].img}
              alt={projects[currentProject].title}
              className="w-full h-full object-cover rounded-lg mb-4"
            />
          </div>
          <div>
            <p className="text-gray-200 my-4">
              {projects[currentProject].description}
            </p>
            <div className="flex space-x-4">
              {/* <a
                href={projects[currentProject].links.site}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
              >
                View Site
              </a> */}
              <a
                href={projects[currentProject].links.github}
                target="_blank"
                className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
