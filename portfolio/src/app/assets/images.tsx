import Image from "next/image";
import { ProjectImageProps } from "./types";

export function ProjectImage ({src, alt}: ProjectImageProps){
    return(
        <Image
        // className="p-6 rounded-3xl"
        src= {src}
        alt= {alt}
        width={850}
        height={300}
        style={{
            padding: '1.5rem',  // Padding migth not be necessary once I hide the border from the surrounding div.
            maxWidth: '850px',
            width: '100%',
            height: 'auto',
            borderRadius: '30px'
        }}
        />
    )
}