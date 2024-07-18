import React from "react";
import profilepic from "../assets/ppic1.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";

const About = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0 md:py-40"
      id="about"
    >
      <div className="grid grid-cols-2 md:col-span-5 glass p-8">
        <div className="my-auto">
          <img
            className="w-[800px] mx-auto h-auto "
            src={profilepic}
            alt="profile pic"
          />
        </div>

        <div className="my-auto ml-8  flex-col">
          <p className="text-2xl md:text-4xl font-bold text-gray-200">
            Hi! I am <br /> Aalyan Akmal <br />
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Backend Dev",
                1000,
                "Mern Stack Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className="text-xl md:text-3xl font-bold text-gray-500">
            BSCS Graduate
          </p>
          <a
            href="https://drive.google.com/file/d/1bsv7-dAwAS73nSkV3YcwRsVBaaWoXFwE/view?usp=sharing"
            target="_blank"
          >
            <button
              href="https://drive.google.com/file/d/1bsv7-dAwAS73nSkV3YcwRsVBaaWoXFwE/view?usp=sharing"
              title="Download CV"
              role="button"
              class="mt-4 px-4 py-2 text-lg font-bold text-white  bg-primary-color rounded-xl"
            >
              Download CV
            </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1  md:col-span-3 gap-6">
        <div className="text-5xl p-12 glass">
          <p className=" text-xl  mb-4 text-center font-bold text-white  bg-primary-color rounded-xl">
            About Me
          </p>
          <p className="text-justify leading-7 w-11/12 mx-auto text-white">
            Computer Science graduate proficient in React.js, Node.js,
            Express.js, MongoDB, and MySQL. Actively seeking an internship or
            entry-level position as a Web Developer or Software Engineer to
            acquire industry experience and collaborate on cutting-edge projects
            with a dynamic team.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col glass">
          <p className="font-bold px-2 mt-3 mb-3 rounded-xl bg-primary-color text-white">
            Contact
          </p>
          <div className="text-7xl flex justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/aalyan-akmal19/"
              target="_blank"
            >
              <AiFillLinkedin className="text-blue-500" />
            </a>
            <a href="https://github.com/alyanakmal111" target="_blank">
              <AiFillGithub className="text-black" />
            </a>
            <a href="https://wa.me/qr/DNF2DNUPI7KZD1" target="_blank">
              <IoLogoWhatsapp className="text-green-500" />
            </a>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden md:overflow-visible">
          <div className="hidden md:block">
            <ShinyEffect left={550} top={100} size={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
