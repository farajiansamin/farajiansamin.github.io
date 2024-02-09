"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: " AreaBazzar",
    description: "A community-focused online marketplace for buying and selling organic goods and handmade crafts locally.",
    image: "/images/projects/Ecommerce.jpeg",
    gitUrl: "https://github.com/farajiansamin/local-ecommerce",
    
  },
  {
    id: 2,
    title: "MadLibs Game",
    description: "Madlibs is a multiplayer game where players complete missing words in themed texts, like school or sports.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farajiansamin/SENG513_Final_Project",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "LifeMap ",
    description: "A personal planning app for setting and tracking daily, weekly, and monthly goals, boosting productivity.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farajiansamin/PersonalPlanner",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Sketched Reality",
    description: "This study introduces bi-directional AR sketching, where virtual and physical elements interact via actuated TUIs, enriching the user experience",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.youtube.com/watch?v=xy-IeVgoEpY",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Swarm Fabrication",
    description: "Leveraging swarm robots and 3D prints, Swarm Fabrication enables on-demand, adaptable machines for tasks like 3D printing, promising anywhere-deployable, flexible manufacturing",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.youtube.com/watch?v=R98vR3tukMY",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "NoteBox Music",
    description: "Notebox introduces children (3-6 years) to music through a interactive game where placing boxes near a Key box triggers musical notes.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/farajiansamin/SheetBoxMusic",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-mono font-bold text-black   mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
       
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 pb-20 gap-16 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
