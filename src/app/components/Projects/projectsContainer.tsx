'use client'
import { ProjectsType, ProjectType } from "@/app/assets/types";
import { useEffect } from "react";
import ProjectComponent from "@/app/components/Projects/projectComponent";
import "aos/dist/aos.css";
import AOS from "aos";


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
            <section id="projects" className="flex w-full max-w-6xl flex-col gap-8" data-aos="fade-up">
                <div className="flex flex-col gap-3">
                    <span className="section-kicker">Selected Work</span>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-display text-3xl md:text-4xl">Projects and case studies</h2>
                        <p className="text-sm text-slate-300 md:text-base">
                            A curated set of recent projects with full context, screenshots, and outcomes.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {projects.map((proj: ProjectType) => {
                        return (
                            <ProjectComponent
                                key={proj.id}
                                {...proj}
                            />
                        );
                    })}
                </div>
            </section>
        )
    // }  
};
