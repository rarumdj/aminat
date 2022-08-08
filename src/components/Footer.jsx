import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-[#800080] pt-16 pb-8 px-8">
      <div className="container mx-auto md:px-5 md:py-16 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col border-y-2 border-white">
        <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="space-y-2 md:mt-0 mt-8">
            <h1 className="md:text-3xl text-xl text-white">
              Let’s develop something awesome together.
            </h1>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 pl-0 md:mt-0 mt-10 justify-center md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 px-4">
            <nav className="list-none mb-10 space-y-8">
              <li>
                <Link to={"/"} className="text-white hover:text-gray-200">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white hover:text-gray-200">
                  Instagram
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2  px-4">
            <nav className="list-none mb-10 space-y-8">
              <li>
                <Link to={"/"} className="text-white hover:text-gray-200">
                  Dribble
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white hover:text-gray-200">
                  Behance
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 px-4">
            <nav className="list-none space-y-8">
              <li>
                <Link to={"/"} className="text-white hover:text-gray-200">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-white hover:text-gray-200">
                  Send Email
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 px-8 text-center md:text-sm text-xs">
        <p className="text-white">
          Copyright ©2022 - Aminat Akinode | All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
