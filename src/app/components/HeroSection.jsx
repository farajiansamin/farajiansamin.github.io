"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSVGComponent from "./Animation";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
//import AnimatedSVGComponent from "./FramerMotion";

const HeroSection = () => {
  return (
    <section className=" flex flex-row h-screen lg:pt-10">
    
      <AnimatedSVGComponent />
      <div className="flex  py-72 flex-col">
        <p className=" text-center font-mono">
          {" "}
          I enjoy making things
        </p>
        <div className="socials py-4 flex flex-row gap-2">
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
