import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const themeToggle = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => {
    const menuBtn = document.getElementById("hamburgerBtn");
    const menuToggle = document.getElementById("menu-toggle");
    menuBtn.classList.toggle("open");
    menuToggle.classList.toggle("hidden");
  };

  return (
    <section id="navbar">
      {/* Navbar container */}
      <div className=" fixed w-full px-10 py-6 z-9999 top-0 bg-orange-100 dark:bg-darkBlue">
        <div className="flex justify-between text-center">
          {/* Logo*/}
          <div className=" flex justify-center lg:text-2xl font-sixtyfour items-center text-center  font-bold tracking-widest hover:text-accentCyan">
            <a href="#about">Duyen Tran </a>
          </div>

          {/* Menu Items and dark/light theme icon */}
          <div className="hidden md:flex justify-center items-center text-center md:space-x-6 xl:space-x-12  lg:text-xl font-semibold text-xl">
            <a href="#about" className="hover:text-accentCyan ">
              About
            </a>
            <a href="#skills" className="hover:text-accentCyan">
              Skills
            </a>
            <a href="#projects" className="hover:text-accentCyan ">
              Projects
            </a>
            <a href="#experience" className="hover:text-accentCyan ">
              Experiences
            </a>
            <a href="#education" className="hover:text-accentCyan ">
              Education
            </a>
            <a href="#contact" className="hover:text-accentCyan">
              Contact
            </a>

            {isDarkMode ? (
              <button
                type="button"
                id="theme-toggle"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 p-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-4 dark:focus:ring-gray-700"
                onClick={themeToggle}
              >
                {/* Light SVG Icon */}
                <svg
                  id="theme-toggle-light-icon"
                  className="w-5 h-5  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                type="button"
                id="theme-toggle"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 p-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-4 dark:focus:ring-gray-700"
                onClick={themeToggle}
              >
                {/* Dark SVG Icon */}
                <svg
                  id="theme-toggle-dark-icon"
                  className="w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            )}
          </div>

          {/* Hamburger button */}
          <button id="hamburgerBtn" type="button" onClick={toggleMenu}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu Items */}
        <div
          id="menu-toggle"
          className=" hidden md:hidden flex flex-col space-y-5 absolute  top-32 right-10 left-10 font-bold bg-darkViolet text-white dark:bg-darkBlue3  divide-y divide-gray-500 items-center justify-center"
        >
          <div className="w-full  pt-5 text-center items-center hover:text-accentCyan">
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </div>
          <div className="w-full pt-5 text-center hover:text-accentCyan">
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </div>
          <div className="w-full pt-5 text-center hover:text-accentCyan">
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </div>
          <div className="w-full pt-5 text-center hover:text-accentCyan">
            <a href="#experience" onClick={toggleMenu}>
              Experiences
            </a>
          </div>
          <div className="w-full pt-5 text-center hover:text-accentCyan">
            <a href="#education" onClick={toggleMenu}>
              Education
            </a>
          </div>
          <div className="w-full py-5 text-center hover:text-accentCyan">
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </div>
          <div className="w-full py-5 text-center hover:text-accentCyan">
            {isDarkMode ? (
              <button
                type="button"
                id="theme-toggle"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 p-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-4 dark:focus:ring-gray-700"
                onClick={themeToggle}
              >
                {/* Light SVG Icon */}
                <svg
                  id="theme-toggle-light-icon"
                  className="w-5 h-5  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                type="button"
                id="theme-toggle"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 p-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-4 dark:focus:ring-gray-700"
                onClick={themeToggle}
              >
                {/* Dark SVG Icon */}
                <svg
                  id="theme-toggle-dark-icon"
                  className="w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
