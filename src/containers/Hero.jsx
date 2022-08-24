import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { bubble, bubblepattern } from "../assets/images";
import { Link as LinkScrol } from "react-scroll";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font 2xl:h-full lg:h-screen min-h-full">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 h-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl md:mb-14 mb-4 font-medium text-gray-900">
            Hi, I’m{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Aminat Akinode
            </span>
          </h1>
          <div className="flex space-x-3">
            <div className="min-h-full md:block hidden">
              <div className="h-[60%] px-[1.5px] bg-[#D9D9D9]" />
              <div className="h-[40%] px-[1.5px] bg-gradient-to-b from-violet-500 to-fuchsia-500" />
            </div>
            <div className="flex flex-col md:items-start items-center">
              <p className="mb-8 leading-relaxed">
                I am a digital product designer and a design enthusiast based in
                Lagos, Nigeria. I love designing tasteful experiences for
                brands, products (Mobile Apps and Websites) & services. My work
                experience cuts across brand identity and communication design,
                product design and UI/UX. I am currently open to work.
              </p>
              <Link to="/about" className="flex space-x-3">
                <p>Meet me</p>
                <span className="bg-[#800080] rounded-full h-6 w-6 flex">
                  <Icon
                    icon="dashicons:arrow-right-alt2"
                    className="text-white h-4 w-4 m-auto animate-side"
                  />
                </span>
              </Link>
            </div>
          </div>

          <LinkScrol
            className="cursor-pointer"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}>
            <span className="border-2 border-neutral-800 translate-y-20 md:flex hidden rounded-full h-9 w-9">
              <Icon
                icon="dashicons:arrow-down-alt2"
                className="text-neutral-800 h-5 w-5 m-auto animate-ping"
              />
            </span>
          </LinkScrol>
        </div>
        <div className="relative lg:max-w-2xl lg:w-full h-full md:w-1/2 w-5/6 header-bubblepatterns">
          <div className="absolute inset-0 -translate-y-10 m-auto w-full rounded-lg h-full">
            <div className="relative pb-[80%] w-full h-full">
              <img
                src={bubblepattern}
                alt="hero"
                className="absolute inset-0 m-auto w-full rounded-lg h-full"
              />
            </div>
          </div>
          <div className="relative pb-[55%] w-full h-full">
            <img
              src={"https://aminatakinode.com/images/bubble.png"}
              alt="hero"
              className="absolute inset-0 m-auto w-full rounded-lg h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
