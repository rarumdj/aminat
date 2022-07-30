import React from "react";
import { presentationOne } from "../assets/images";
import ProjectList from "../components/ProjectList";
const project = [
  {
    img: presentationOne,
    subtitle: "Whatsapp",
    title: "New Features App",
    industry: "Social Media",
    type: "UI/UX Design",
    link: "/",
  },
  {
    img: presentationOne,
    subtitle: "Whatsapp",
    title: "New Features App",
    industry: "Social Media",
    type: "UI/UX Design",
    link: "/",
    position: "left",
  },
  {
    img: presentationOne,
    subtitle: "Whatsapp",
    title: "New Features App",
    industry: "Social Media",
    type: "UI/UX Design",
    link: "/",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="pb-24 px-6 lg:px-16 flex justify-center overflow-hidden">
      <div className="flex container mx-auto flex-col gap-8 w-screen max-w-[100rem] relative">
        <div className="p-72 absolute right-0 top-0 translate-x-24 bg-project-line bg-no-repeat" />
        <div className="mt-24 md:px-0 px-4 ">
          <div className="flex space-x-2 items-center">
            <div className="h-[2px] px-16 bg-neutral-500" />
            <h5 className="text-xl text-neutral-500">SELECTED PROJECTS</h5>
          </div>
          <h1 className="text-9xl">PROJECTS</h1>
        </div>
        <div className="mt-40 w-full md:px-0 px-4">
          {project.map((item, i) => (
            <ProjectList
              img={item.img}
              industry={item.industry}
              link={item.link}
              subtitle={item.subtitle}
              title={item.title}
              type={item.type}
              position={item.position}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
