'use client'
import { ProjectsType, ProjectType } from "../assets/types";
import { useEffect, useState } from "react";
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
    

    // if(!loading){
    //     console.log("validación de estado de carga")
        return (
            <div className="grid lg:grid-cols-2 sm:grid-cols-1" data-aos="fade-up">
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
    // }  
};