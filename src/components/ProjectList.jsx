import React from "react";

const ProjectList = ({
  img,
  subtitle,
  title,
  industry,
  type,
  link,
  position,
}) => {
  return (
    <>
      {position === "left" ? (
        <div class="flex pt-16 md:flex-row flex-col-reverse items-center md:gap-10 gap-0">
          <div class="lg:max-w-lg lg:w-full md:w-1/2  flex flex-col md:items-start md:text-left items-center">
            <p class="leading-relaxed mb-6">{subtitle}</p>
            <h1 class="title-font sm:text-6xl text-3xl mb-6 font-medium text-neutral-700">
              {title}
            </h1>
            <p class="mb-6 leading-relaxed text-gray-500">{type}</p>
            <a
              href={link}
              class="mb-8 leading-relaxed font-bold cursor-pointer text-[#800080]">
              Case Study
            </a>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <div className="flex md:flex-row flex-col-reverse mb-10 md:mb-0   md:flex-nowrap flex-wrap ">
              <img src={img} alt="" />
              <div className="md:rotate-90 whitespace-nowrap md:mb-0 mb-6">
                {industry}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="flex pt-16 md:flex-row flex-col items-center md:gap-10 gap-0">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center md:flex-nowrap flex-wrap ">
              <div className="md:rotate-90 whitespace-nowrap md:mb-0 mb-6">
                {industry}
              </div>
              <img src={img} alt="" />
            </div>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
            <p class="leading-relaxed mb-6">{subtitle}</p>
            <h1 class="title-font sm:text-6xl text-3xl mb-6 font-medium text-neutral-700">
              {title}
            </h1>
            <p class="mb-6 leading-relaxed text-gray-500">{type}</p>
            <a
              href={link}
              class="mb-8 leading-relaxed font-bold cursor-pointer text-[#800080]">
              Case Study
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectList;
