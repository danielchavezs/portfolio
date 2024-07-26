import { ProjectsType, ProjectType } from "../assets/types";
import ProjectComponent from "./projectComponent";

export default function ProjectsContainer ({projects}: {projects: ProjectsType}){
    // const { id, name, images, description } = project1; 
    return (
        <div className="flex flex-row gap-4 my-6">
            {projects.map((proj: ProjectType) => {
                return (
                    <ProjectComponent
                        key={proj.id}
                        id={proj.id}
                        name={proj.name}
                        images={proj.images}
                        description={proj.description}
                    />
                );
            })}
        </div>
    )
};