'use client'
import { ProjectsType, ProjectType } from "../assets/types";
import { useEffect, useState } from "react";
import ProjectComponent from "./projectComponent";
import 'aos/dist/aos.css';
import AOS from 'aos';


export default function ProjectsContainer ({projects}: {projects: ProjectsType}){

    useEffect(() => {
        AOS.init({
          // Configuración opcional
          duration: 1500,
        });
      }, []);
    

    // if(!loading){
    //     console.log("validación de estado de carga")
        return (
            <section className="flex flex-col" data-aos="fade-up">
                <h2 className="mb-2 font-semibold text-xl">Projects:</h2>
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
            </section>
        )
    // }  
};