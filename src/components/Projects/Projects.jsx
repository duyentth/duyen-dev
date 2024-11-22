import React from "react";
import GithubImg from "../../assets/github.png";
import RefurbishedGoodImg from "../../assets/RefurbishedGood.png";
import PropertyPulseImg from "../../assets/property-pulse.png";
import ResponsiveWebsImg from "../../assets/web design.png";
import MicroservicesImg from "../../assets/microservices.png";
import ExpenseTrackerImg from "../../assets/ExpenseTracker.png";
import projects from "../../../projects.json";

const Projects = () => {
  const imageMap = {
    RefurbishedGoodImg: RefurbishedGoodImg,
    PropertyPulse: PropertyPulseImg,
    ResponsiveWebs: ResponsiveWebsImg,
    Microservices: MicroservicesImg,
    ExpenseTracker: ExpenseTrackerImg
  };
  return (
    <section id="projects" className="mt-20 scroll-mt-20">
      <div className="flex flex-col space-y-10 p-10">
        {/* Title */}
        <div className=" text-3xl md:text-4xl font-semibold underline">
          Projects
        </div>
        {/* Projects container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10">
          {projects &&
            projects.map((project) => {
              return (
                //Project Card container
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-y-10 p-6 md:gap-x-4 md:gap-y-0 bg-gray-100 dark:bg-darkBlue3 rounded-xl shadow-xl  justify-items-center md:justify-items-start hover:bg-violet-300 hover:dark:bg-violet-600  duration-300"
                  key={project.id}
                >
                  <div className="flex flex-col space-y-3 items-center justify-center text-center text-white font-semibold tracking-widest">
                    {/* Project Image */}
                    <img
                      src={imageMap[project.image]}
                      alt=""
                      className="w-64 h-full object-contain"
                    />
                    {/* Buttons */}
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      className="rounded-lg px-4 py-2 w-full shadow-xl ring-1 ring-accentCyan bg-accentCyan text-white hover:bg-gray-50 hover:text-darkViolet hover:scale-105"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      className="flex  px-4 py-2 justify-center items-center rounded-lg shadow-xl ring-1 ring-accentCyan bg-accentCyan text-white hover:bg-gray-50 hover:text-darkViolet hover:scale-105 w-full"
                    >
                      <img src={GithubImg} alt="" className="w-6 h-6 mr-2 " />
                      Code
                    </a>
                  </div>

                  {/* Project Description */}
                  <div className="md:col-span-2">
                    {/* <!--Accordion container--> */}
                    <div className="flex flex-col overflow-hidden">
                      {/* Project name */}
                      <div className="text-xl font-semibold mb-4">
                        {project.name}
                      </div>
                      {/* <!-- Tab 1 --> */}
                      <div
                        className="border-b pb-6 outline-none group"
                        tabIndex="1"
                      >
                        {/* <!-- Tab flex container --> */}
                        <div className="flex justify-between items-center space-x-6 group transition duration-500 cursor-pointer">
                          {/* <!-- Tab title --> */}
                          <div className="transition duration-500 group-hover:text-accentCyan">
                            What technologies can we find in project?
                          </div>
                          {/* <!-- Arrow --> */}

                          <div className="transition duration-500 group-focus:-rotate-180 group-focus:text-accentCyan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="12"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                d="M1 1l8 8 8-8"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* <!-- Tab content --> */}
                        <div className=" overflow-hidden group-focus:max-h-screen max-h-0 transition duration-500 ">
                          <ul className=" list-disc list-inside p-4">
                            {project.technologies.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* <!-- Tab 2 --> */}
                      <div
                        className="border-b pb-6 outline-none group"
                        tabIndex="1"
                      >
                        {/* <!-- Tab flex container --> */}
                        <div className="flex justify-between items-center group transition duration-500 cursor-pointer">
                          {/* <!-- Tab title --> */}
                          <div className="transition duration-500 group-hover:text-accentCyan">
                            What are features of project?
                          </div>
                          {/* <!-- Arrow --> */}

                          <div className="transition duration-500 group-focus:-rotate-180 group-focus:text-accentCyan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="12"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                d="M1 1l8 8 8-8"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* <!-- Tab content --> */}
                        <div className=" overflow-hidden group-focus:max-h-screen max-h-0 transition duration-500 ">
                          <ul className=" list-disc list-inside p-4">
                            {project.features.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
