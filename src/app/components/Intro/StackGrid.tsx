"use client";
import { useEffect } from "react";
import { StackLogos } from "@/app/assets/images";
import { logosSrc } from "./logosSrc";
import AOS from "aos";
import "aos/dist/aos.css";

export function StackGrid() {
  useEffect(() => {
    AOS.init({
      // Configuración opcional
      duration: 1000,
    });
  }, []);

  return (
    <div className="flex flex-col w-full" data-aos="fade">
      <h2 className="flex font-bold text-xl mb-6">My Stack:</h2>
      <div className="grid w-full lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 lg:gap-20 md:gap-12 sm:gap-10 sm:gap-x-20 lg:place-content-evenly sm:px-8 md:p-0">
        {logosSrc.map((tech, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center lg:max-w-32 md:max-w-32 sm:max-w-48"
            >
              <StackLogos
                src={tech.src}
                alt={`${tech.tech} Logo.`}
                // title={tech.tech}
              />
              <span className="hidden text-sm text-slate-400 hover:block">
                {tech.tech}
              </span>
            </div>
          );
        })}
      </div>
      {/* <div>
            <StackLogos src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' alt='Javascript Logo'/>
          </div> */}
    </div>
  );
}
