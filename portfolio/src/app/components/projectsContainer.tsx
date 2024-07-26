import { ProjectsType, ProjectType } from "../assets/types";
import ProjectComponent from "./projectComponent";

export default function ProjectContainer ({projects}: any){
    // const { id, name, images, description } = project1; 
    return (
        <div>
            {projects.map((proj: ProjectType) => {
                <ProjectComponent
                id={proj.id} 
                name={proj.name} 
                images={proj.images} 
                description={proj.description}
                />
            })}
        </div>
    )
};