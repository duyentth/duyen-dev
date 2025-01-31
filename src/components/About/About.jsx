import React from "react";
import TypeWriter from "typewriter-effect";

const About = () => {
  const myself =
    "I am a passionate Full Stack Software Developer with a Master's degree in Software Development. I specialize in creating user-friendly, responsive interfaces using React, NextJS, JavaScript and TypeScript. My journey has equipped me with a deep understanding of building dynamic forms with real-time validation and effectively connecting frontend applications to backend services through RESTful APIs and GraphQL." +
    "<br/> <br/>" +
    "Beyond frontend technologies, I have expanded my expertise into backend development with Node.js, Express, and MongoDB. Throughout my academic journey, I successfully completed several full-stack projects, including e-commerce platforms and real estate systems, showcasing my ability to deliver end-to-end solutions.<br/> <br/> " +
    "Key expertise includes: <br/><br/>" +
    "<ul class='list-inside list-disc'>" +
    "<li><strong>System Architecture Enhancement:</strong> Utilized Webpack, Babel, and Module Federation to optimize application structure and performance.</li>" +
    "<li><strong>Microservices Architecture:</strong> Solid knowledge and practical experience with microservices, enabling scalable and maintainable solutions for complex systems.</li></ul>" +
    "<li><strong>Containerization and Orchestration:</strong> Applied Docker and Kubernetes to containerize applications and effectively manage deployments through orchestration tools.</li>" +
    " <li><strong>Testing and Quality Assurance:</strong> Ensured the reliability and robustness of applications using React Testing Library and Jest.</li>";

  return (
    <section id="about" className="mt-40 scroll-mt-36 ">
      {/* About container */}

      <div className="flex flex-col items-center md:flex-row md:items-start justify-center space-y-10 md:space-y-0 md:space-x-14 p-10">
        {/* Image
        <div className="md:w-1/3">
          <div className="flex flex-col items-center md:items-end">
            <img
              src={fbImg}
              alt=""
              className="w-10/12 h-full ring-1 ring-darkViolet dark:ring-gray-300 object-contain "
            />
          </div>
          <div></div>
        </div> */}
        {/* Content */}
        <div className="md:w-2/3 max-w-xl">
          <div className="flex flex-col space-y-6 justify-start items-center md:items-start  text-darkViolet dark:text-white ">
            {/* Introduction */}
            <div className="text-2xl font-semibold text-center md:text-start">
              Hello, I'm Duyen Tran.
            </div>
            <div className=" items-center md:text-start">
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter.typeString(myself).pauseFor().start();
                }}
                options={{
                  delay: 10,
                  // loop: true,
                }}
              />
            </div>
            {/* Buttons */}
            <div className="flex space-x-4 md:space-x-6 justify-center items-start">
              {/* <a
                href={CV}
                download="DuyenTran_CV"
                className="rounded-lg px-6 py-2 md:px-6 md:py-3 shadow-xl ring-1 ring-accentCyan bg-accentCyan text-white hover:bg-gray-50 hover:text-darkViolet hover:scale-105 font-semibold tracking-widest"
              >
                Resume
              </a> */}
              <a
                href="#contact"
                className="rounded-lg px-6 py-2 md:px-6 md:py-3 shadow-xl ring-1 ring-accentCyan bg-accentCyan text-white hover:bg-gray-50 hover:text-darkViolet hover:scale-105 font-semibold tracking-widest"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
