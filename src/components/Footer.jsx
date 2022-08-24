import React from "react";

const Footer = () => {
  const date = new Date();
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
                <a
                  href="https://www.linkedin.com/in/aminat-akinode-070696186"
                  target="_blank"
                  className="text-white hover:text-gray-200"
                  rel="noreferrer">
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/just_hameenah"
                  target="_blank"
                  className="text-white hover:text-gray-200"
                  rel="noreferrer">
                  Instagram
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2  px-4">
            <nav className="list-none mb-10 space-y-8">
              <li>
                <a
                  href="https://dribbble.com/Hameenah"
                  target="_blank"
                  className="text-white hover:text-gray-200"
                  rel="noreferrer">
                  Dribble
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/aminatoluwati"
                  target="_blank"
                  className="text-white hover:text-gray-200"
                  rel="noreferrer">
                  Behance
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 px-4">
            <nav className="list-none space-y-8">
              <li>
                <a
                  href="https://twitter.com/_meenaah?t=NWiCNO47TWrhIhfuSKTNvw&s=09"
                  target="_blank"
                  className="text-white hover:text-gray-200"
                  rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="mailto://akinodeaminat1@gmail.com"
                  className="text-white hover:text-gray-200">
                  Send Email
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 px-8 text-center md:text-sm text-xs">
        <p className="text-white">
          Copyright ©{date.getFullYear()} - Aminat Akinode | All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
