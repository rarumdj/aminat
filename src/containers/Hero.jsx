import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { carhero, heroimg } from "../assets/images";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I’m Aminat Akinode
          </h1>
          <div className="flex space-x-3">
            <div className="min-h-full md:block hidden">
              <div className="h-[60%] px-[2px] bg-[#D9D9D9]" />
              <div className="h-[40%] px-[2px] bg-gradient-to-b from-violet-500 to-fuchsia-500" />
            </div>
            <div className="flex flex-col md:items-start items-center">
              <p className="mb-8 leading-relaxed">
                I am a digital product designer and a design enthusiast based in
                Lagos, Nigeria. I love designing tasteful experiences for
                brands, products (Mobile Apps and Websites) & services. My work
                experience cuts across brand identity and communication design,
                product design and UI/UX. I am currently open to work.
              </p>
              <a href="/" className="flex space-x-3">
                <p>Meet me</p>{" "}
                <span className="bg-[#800080] rounded-full h-6 w-6 flex">
                  <Icon
                    icon="dashicons:arrow-right-alt2"
                    className="text-white h-4 w-4  m-auto"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={heroimg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
