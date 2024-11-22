import React from "react";
import MaharishiLogo from "../../assets/maharishi-logo.jpg";
import KHTNLogo from "../../assets/khtn-logo.jpeg";

const degrees = [
  {
    id: 1,
    uniName: "Maharishi International University",
    logo: MaharishiLogo,
    degree: "Master of Software Development",
    description:
      "Received in-depth hands-on training in the latest technologies" +
      " taught by industry-experienced professors," +
      " helping to be a proficient Full Stack Developer.",
  },
  {
    id: 2,
    uniName: "Ho Chi Minh city University of Natural Sciences",
    logo: KHTNLogo,
    degree: "Bachelor of Mathematics and Computer Science",
    description:
      "Received a strong foundation in mathematical principles," +
      " computational problem-solving, and computer programming skills.",
  },
];
const Education = () => {
  return (
    <section id="education" className="mt-32  scroll-mt-32">
      <div className="flex flex-col space-y-10 justify-start items-start p-10">
        {/* Title */}
        <div className=" text-3xl md:text-4xl font-semibold underline ">
          Education
        </div>
        {/* Education Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {degrees &&
            degrees.map((degree) => (
              // {/* Education Card */}
              <div
                className="flex space-x-4 shadow-2xl bg-gray-100 dark:bg-darkBlue3 rounded-xl p-6 hover:bg-violet-300 hover:dark:bg-violet-600 duration-200"
                key={degree.id}
              >
                {/* University logo */}

                <img
                  src={degree.logo}
                  alt=""
                  className="w-24 h-24 rounded-full object-contain items-start "
                />

                {/* Content */}
                <div className="flex flex-col space-y-4 items-start justify-start text-start">
                  <div className="font-semibold text-xl">{degree.uniName}</div>
                  <p className="italic">{degree.degree}</p>
                  <p>{degree.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
