import Image from "next/image";
import { ProjectImageProps } from "./types";

export function ProjectImage ({src, alt, href}: ProjectImageProps){
    return(
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Image
                className="hover:cursor-pointer"
                src= {src}
                alt= {alt}
                width={850}
                height={300}
                style={{
                    // minWidth: '200px',
                    // maxWidth: '550px',
                    width: '100%',
                    maxHeight: "500px",
                    height: 'auto',
                    borderRadius: '8px'
                }}
            />
        </a>
    )
};