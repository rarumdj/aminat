import React from "react";
import {
  presentationFour,
  presentationOne,
  presentationThree,
  presentationTwo,
} from "../assets/images";
import ProjectList from "../components/ProjectList";
const project = [
  {
    img: presentationOne,
    subtitle: "Whatsapp",
    title: "New Features App",
    industry: "Social Media",
    type: "UI/UX Design",
    link: "https://www.figma.com/proto/mb7SLoVVU2JLuDXnW5uDcl/Jupita.co?node-id=165%3A1115&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=5%3A355&show-proto-sidebar=1",
    linkname: "Case Study",
  },
  {
    img: presentationTwo,
    subtitle: "TAXCA",
    title: "Tax Calculator App",
    industry: "Finance",
    type: "UI/UX Design",
    link: "https://www.figma.com/proto/mb7SLoVVU2JLuDXnW5uDcl/Jupita.co?node-id=356%3A6308&scaling=min-zoom&page-id=153%3A737&starting-point-node-id=319%3A7063",
    position: "left",
    linkname: "Case Study",
  },
  {
    img: presentationThree,
    subtitle: "BillRem",
    title: "Bill Reminder App",
    industry: "Consulting",
    type: "UI/UX Design",
    link: "https://www.figma.com/proto/mb7SLoVVU2JLuDXnW5uDcl/Jupita.co?node-id=526%3A8179&scaling=min-zoom&page-id=290%3A2462&starting-point-node-id=473%3A7549&show-proto-sidebar=1",
    linkname: "Case Study",
  },
  {
    img: presentationFour,
    subtitle: "Azapay",
    title: "Doingz Website",
    text: "Designed doingz website (Cash Voucher) that don’t just only talk about what they do but also nudge users to get started by sending money with ease in a unique way.",
    industry: "Finance",
    type: "UI/UX Design",
    link: "/",
    position: "left",
    linkname: "Website",
    csoon: true,
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="pb-24 px-6 lg:px-16 flex justify-center overflow-hidden">
      <div className="flex container mx-auto flex-col gap-8 w-screen max-w-[100rem] relative">
        <div className="p-72 absolute md:block  hidden right-0 top-0 translate-x-24 bg-project-line bg-no-repeat bg-contain" />
        <div className="md:mt-48 md:px-0 px-4 h-full">
          <div className="flex space-x-2 items-center">
            <div className="h-[2px] px-16 bg-neutral-500" />
            <h5 className="text-xl text-neutral-500 ">SELECTED PROJECTS</h5>
          </div>
          <h1 className="lg:text-9xl md:text-7xl text-5xl mt-6 project-font leading-relaxed tracking-widest text-neutral-100">
            PROJECTS
          </h1>
        </div>
        <div className="md:mt-16 w-full md:px-0 px-4">
          {project.map((item, i) => (
            <ProjectList
              img={item.img}
              industry={item.industry}
              link={item.link}
              subtitle={item.subtitle}
              title={item.title}
              type={item.type}
              text={item.text}
              position={item.position}
              cSoon={item.csoon}
              linkName={item.linkname}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
