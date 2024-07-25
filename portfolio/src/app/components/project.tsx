import { ProjectImage } from "../assets/images";
import { ProjectType } from "../assets/types";


export default function ProjectComponent({ id, name, images, description }: ProjectType) {
  const img = images[0];

    return (
        <div className="m-6 border-2">
            <h3 className="font-semibold text-xl text-center">{name}</h3>
            <div>
                <ProjectImage alt={name} src={img}/>
            </div>
            <p><strong>Description: </strong>{description}</p>
            
        </div>
    )
};