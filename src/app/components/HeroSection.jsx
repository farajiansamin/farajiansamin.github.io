"use client";
import React from "react";
import Image from "next/image";

import AnimatedSVGComponent from "./Animation";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
//import AnimatedSVGComponent from "./FramerMotion";

const HeroSection = () => {
  return (
    <section className=" w-full lg:pt-20  flex flex-col pl-6 sm:flex-row h-screen font-mono  ">
    
      <AnimatedSVGComponent />
      <div className="flex pb-20 lg:pt-80 flex-col   ">
        <p className=" text-center font-mono">
          {" "}
          I find joy tackling challenges, discovering new solutions, and learning new things.<br></br>
          
        </p>
        
        <div className=" flex socials py-4  flex-row gap-2 justify-center">
      <a href="https://github.com/farajiansamin" target="_blank" rel="noopener noreferrer">
        <Image src={GithubIcon} alt="Github Icon"  />
      </a>
      <a href="https://www.linkedin.com/in/samin-farajian/" target="_blank" rel="noopener noreferrer">
        <Image src={LinkedinIcon} alt="Linkedin Icon" w />
      </a>
    </div>
      </div>
    </section>
  );
};

export default HeroSection;
