import { ProjectsType, ProjectType } from "../assets/types";
import ProjectComponent from "./projectComponent";

export default function ProjectsContainer ({projects}: {projects: ProjectsType}){
    return (
        <div className="flex lg:flex-row md:flex-col sm:flex-col gap-4 my-6">
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