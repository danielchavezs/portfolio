'use client'
import { ProjectsType, ProjectType } from "../assets/types";
import { useEffect } from "react";
import ProjectComponent from "./projectComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProjectsContainer ({projects}: {projects: ProjectsType}){

    useEffect(() => {
        AOS.init({
          // Configuración opcional
          duration: 1500,
        });
      }, []);

    return (
        <div className="flex lg:flex-row md:flex-col sm:flex-col gap-4 my-6" data-aos="fade-up">
            {projects.map((proj: ProjectType) => {
                return (
                    <ProjectComponent
                        key={proj.id}
                        id={proj.id}
                        name={proj.name}
                        images={proj.images}
                        description={proj.description}
                        href={proj.href}
                    />
                );
            })}
        </div>
    )
};