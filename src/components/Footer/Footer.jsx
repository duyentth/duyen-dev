import React from "react";
import GithubIcon from "../../assets/github.png";
import LinkedinIcon from "../../assets/linkedin_icon.png";

const Footer = () => {
  return (
    <section id="footer" className="mt-20">
      <div className="flex flex-col item-center justify-center text-center p-10 space-y-8 md:flex-row md:space-y-0 md:justify-between bg-orange-50 dark:bg-darkBlue">
        {/* Logo */}
        <div className=" flex justify-center lg:text-2xl font-sixtyfour items-center text-start  font-bold tracking-widest hover:text-accentCyan">
          <a href="#about"> Duyen Tran </a>
        </div>
        {/* Menu */}
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 justify-center items-center text-center md:space-x-6 xl:space-x-12  lg:text-xl font-semibold text-xl">
          <a href="#about" className="hover:text-accentCyan">
            About
          </a>
          <a href="#skills" className="hover:text-accentCyan">
            Skills
          </a>
          <a href="#projects" className="hover:text-accentCyan">
            Projects
          </a>
          <a href="#education" className="hover:text-accentCyan">
            Education
          </a>
          <a href="#contact" className="hover:text-accentCyan">
            Contact
          </a>
        </div>
        {/* Social Links */}
        <div className="flex space-x-6 justify-center">
          <a
            href="https://github.com/duyentth"
            className="cursor-pointer hover:text-accentCyan"
            target="_blank"
          >
            <img
              src={GithubIcon}
              alt="email-icon"
              className="w-6 h-6 rounded-full inline"
            />{" "}
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/duyen-th-tran"
            className="cursor-pointer hover:text-accentCyan"
            target="_blank"
          >
            <img
              src={LinkedinIcon}
              alt="email-icon"
              className="w-6 h-6 rounded-full inline"
            />{" "}
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
