import React from "react";
import { colaborate, communication, learning, solving } from "../assets/images";

const AboutSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container md:px-0 px-2 md:py-24 py-8 mx-auto">
        <hr />
        <div className="flex flex-wrsap text-center py-2">
          <div className="md:p-4 sm:w-1/4 w-1/2">
            <p className="leading-relaxed md:text-base text-xs">Muslimah</p>
          </div>
          <div className="md:p-4 sm:w-1/4 w-1/2">
            <p className="leading-relaxed md:text-base text-xs">
              Product Designer
            </p>
          </div>
          <div className="md:p-4 sm:w-1/4 w-1/2">
            <p className="leading-relaxed md:text-base text-xs">
              IT Field Support Engineer
            </p>
          </div>
          <div className="md:p-4 sm:w-1/4 w-1/2">
            <p className="leading-relaxed md:text-base text-xs">
              Tech Enthusiastcts
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className="pb-16 md:px-16 px-6 space-y-4">
        <p className="leading-relaxed md:text-base text-sm">
          I am a creative Product Designer, dedicated and skilled in creating,
          maintaining user-centered designs with inviting and unintimidating
          interfaces for simplicity and top-notch user experience. I have good
          team spirit and strong desire to work in roles that are innovative and
          challenging.
        </p>
        <p className="leading-relaxed md:text-base text-sm">
          I am a self-driven and intuitive designer conceptualizing and crafting
          nice digital products with experience in delivery of end-to-end UI/UX
          design for software products. I trained myself to always think
          positive and base my designs on quality of the product to ensure that
          clients derive the best quality of the projects from my work.
        </p>
        <p className="leading-relaxed md:text-base text-sm">
          In my year of experience, persistent quest for knowledge as a
          designer, to secure a career opportunity that will expand my
          knowledge, creativity, speed, accuracy and responsiveness to
          milestone; utilize the skills, practice while ensuring result-oriented
          efforts in boosting the productivity of organizations.
        </p>
      </div>

      <div className="md:px-16 px-6 space-y-4 flex justify-center items-center pb-16">
        <button className="h-11 w-fit rounded-sm border-2 border-[#800080] text-[#800080] font-semibold px-6">
          Get In Touch
        </button>
      </div>
      <div className="md:px-16 px-6 space-y-4 flex justify-center items-center pb-16">
        <div className="space-x-4 flex">
          <div className="h-2 w-2 rounded-full bg-[#C85024]" />
          <div className="h-2 w-2 rounded-full bg-[#800080]" />
          <div className="h-2 w-2 rounded-full bg-[#DF00DF]" />
        </div>
      </div>

      <div className="md:px-16 px-6 space-y-4 pb-16">
        <div className="flex space-x-2 items-center">
          <div className="h-[2px] px-16 bg-neutral-500" />
          <h5 className="md:text-xl text-neutral-500">MY SOFT SKILLSETS</h5>
        </div>
      </div>

      <div className="md:px-16 px-6 space-y-4 pb-16">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2">
            <div className="flex rounded-lg h-full border-2 border-[#af1c8a]  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="mr-3 inline-flex items-center justify-center flex-shrink-0">
                  <img src={communication} alt="" className="" />
                </div>
              </div>
              <div className="flex-grow mb-4">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Communication
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  As a designer, I work togther with Project Manager, Content
                  Writer, Clients and Supervisors to get the products/projects
                  done. Strong verbal and written communication skills are
                  essential to keeping everyone on the same ideas and
                  implementation of the projects.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="flex rounded-lg h-full border-2 border-[#80005a] p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="mr-3 inline-flex items-center justify-center flex-shrink-0">
                  <img src={colaborate} alt="" className="" />
                </div>
              </div>
              <div className="flex-grow mb-4">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Collaboration and Stakeholder Management
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  I am imaginative and I am able to apply that imagination to
                  projects during collaboration at Grey Area which inspired me
                  with good team spirit to manage products and stakeholders. I
                  don’t just follow the crowd and latest trends, I find
                  inspiration from every ideas of team members, objects and even
                  in me to deliver quality products.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="flex rounded-lg h-full border-2 border-[#af1c8a]  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="mr-3 inline-flex items-center justify-center flex-shrink-0">
                  <img src={solving} alt="" className="" />
                </div>
              </div>
              <div className="flex-grow mb-4">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Problem Solving
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  To become good at what I do, it is important knowing how to
                  solve problem of a particular products/projects. I have to
                  craft something into useful experience for users, not only to
                  create something beautiful but also for me to know how it
                  works.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="flex rounded-lg h-full  border-2 border-[#800080]  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="mr-3 inline-flex items-center justify-center flex-shrink-0">
                  <img src={learning} alt="" className="" />
                </div>
              </div>
              <div className="flex-grow mb-4">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Learning
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Designing is a lifelong process; I keep learning everyday with
                  different ideas as technolog keeps advancing. I am often
                  described as a rare gem and always embracing new ideas from
                  others, I am open to critics. As the industry design world
                  evolves, I will be the one to keep up with all new development
                  to get ahead of latest trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16 md:px-16 px-6 space-y-4  flex justify-center items-center">
        <p className="leading-relaxed md:text-base text-sm md:w-8/12 text-center">
          ‘’I have rapidly developed myself by working in side and quick
          projects, collaborations with good aesthetic and strategic designs
          which has ranked up my{" "}
          <span className="text-[#800080]">
            Time and Team Management Skills’’.
          </span>
        </p>
      </div>
    </section>
    
  );
};

export default AboutSection;
