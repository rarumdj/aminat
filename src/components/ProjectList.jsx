import React from "react";

const ProjectList = ({
  img,
  subtitle,
  title,
  industry,
  type,
  link,
  position,
  text,
  linkName,
  cSoon,
}) => {
  return (
    <>
      {position === "left" ? (
        <div className="flex pt-16 md:flex-row-reverse flex-col items-center md:gap-10 gap-0">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
            <div className="flex md:flex-row-reverse items-center md:flex-nowrap flex-wrap ">
              <div className="md:rotate-90 w-full text-center whitespace-nowrap md:mb-0 mb-6">
                {industry}
              </div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 md:px-16 w-full flex flex-col md:items-start md:text-left">
            <p className="leading-relaxed mb-6">{subtitle}</p>
            <h1 className="title-font sm:text-6xl text-3xl mb-6 font-medium text-neutral-700">
              {title}
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500">{type}</p>
            {text && (
              <p className="mb-6 leading-relaxed text-gray-500">{text}</p>
            )}
            <div className="flex flex-wrap gap-10">
              <a
                href={link}
                className="mb-8 leading-relaxed font-bold cursor-pointer text-[#800080]">
                {linkName}
              </a>
              {cSoon && (
                <p className="mb-8 leading-relaxed font-bold text-[#CE79CE]">
                  *Coming Soon*
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex pt-16 md:flex-row flex-col items-center md:gap-10 gap-0">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center md:flex-nowrap flex-wrap">
              <div className="md:rotate-90 w-full text-center whitespace-nowrap md:mb-0 mb-6">
                {industry}
              </div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:px-24 md:px-16 w-full flex flex-col md:items-start md:text-left">
            <p className="leading-relaxed mb-6">{subtitle}</p>
            <h1 className="title-font sm:text-6xl text-3xl mb-6 font-medium text-neutral-700">
              {title}
            </h1>
            <p className="mb-6 leading-relaxed text-gray-500">{type}</p>
            {text && (
              <p className="mb-6 leading-relaxed text-gray-500">{text}</p>
            )}
            <div className="flex flex-wrap gap-10">
              <a
                href={link}
                className="mb-8 leading-relaxed font-bold cursor-pointer text-[#800080]">
                {linkName}
              </a>
              {cSoon && (
                <p className="mb-8 leading-relaxed font-bold text-[#CE79CE]">
                  *Coming Soon*
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectList;
