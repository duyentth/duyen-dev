import React from "react";
import HTMLIcon from "../../assets/html.png";
import TailWindCSSIcon from "../../assets/tailwind.png";
import CSSIcon from "../../assets/css.png";
import AngularIcon from "../../assets/angular.png";
import AntDesignIcon from "../../assets/ant-design.png";
import AWSIcon from "../../assets/aws.png";
import JavaScriptIcon from "../../assets/javascript.png";
import MongoIcon from "../../assets/mongo.png";
import NodeIcon from "../../assets/nodejs.png";
import ReactIcon from "../../assets/react.png";
import RESTIcon from "../../assets/api.png";
import TypeScriptIcon from "../../assets/typescript.png";
import WebPackIcon from "../../assets/webpack.png";
import JQuery from "../../assets/myjQuery.png";
import Bootstrap from "../../assets/bootstrap.png";
import GitIcon from "../../assets/git-icon.png";
import ExpressIcon from "../../assets/icons8-express-js-64.png";
import NextjsIcon from "../../assets/nextjs.png";
import KubernetesIcon from "../../assets/kubernetes.png";
import DockerIcon from "../../assets/docker.png";
import GraphQLIcon from "../../assets/graphql.png";
import SQLiteIcon from "../../assets/sqlite.png";
import skills from "../../../skills.json";

const Skills = () => {
  const iconMap = {
    HTMLIcon,
    TailWindCSSIcon,
    CSSIcon,
    AngularIcon,
    AntDesignIcon,
    AWSIcon,
    JavaScriptIcon,
    MongoIcon,
    NodeIcon,
    ReactIcon,
    RESTIcon,
    TypeScriptIcon,
    WebPackIcon,
    JQuery,
    Bootstrap,
    GitIcon,
    ExpressIcon,
    NextjsIcon,
    KubernetesIcon,
    DockerIcon,
    GraphQLIcon,
    SQLiteIcon,
  };
  return (
    <section id="skills" className="mt-20 scroll-mt-20">
      {/* Skills container */}
      <div className="flex flex-col space-y-16 p-10">
        {/* Title */}
        <div className=" text-3xl md:text-4xl font-semibold underline ">
          Skills
        </div>
        <div className="grid grid-cols grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 ">
          {skills &&
            skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-center space-y-3 mx-auto hover:opacity-90 md:hover:opacity-80 hover:scale-125 hover:cursor-pointer shadow-xl hover:bg-orange-50 hover:dark:bg-violet-600"
              >
                <img src={iconMap[skill.obj]} alt="" className="w-28" />
                <div className="uppercase font-semibold">{skill.name}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
