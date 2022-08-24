import React from "react";
import { aminat } from "../assets/images";

const AboutHeader = () => {
  return (
    <section className="aboutheader-bg body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left md:mb-16 items-center text-center">
          <h4 className="my-8 font-bold text-2xl md:hidden block">About Me</h4>
          <h1 className="title-font md:text-8xl text-3xl mb-4 font-medium text-gray-900">
            Aminat
          </h1>
          <h1 className="title-font md:ml-10 md:text-8xl text-5xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Akinode
          </h1>
        </div>
        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded "
            alt="hero"
            src={"https://aminatakinode.com/images/aminat.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
