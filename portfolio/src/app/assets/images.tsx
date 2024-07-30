import Image from "next/image";
import { ProjectImageProps } from "./types";

export function ProjectImage ({src, alt, href}: ProjectImageProps){
    return(
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Image
                className="hover:cursor-pointer"
                src= {src}
                alt= {alt}
                // layout="fill"
                width={850}
                height={300}
                style={{
                    minWidth: '200px',
                    // maxWidth: '550px',
                    width: '100%',
                    maxHeight: "500px",
                    height: 'auto',
                    // minHeight: '270px',
                    borderRadius: '8px'
                }}
            />
        </a>
    )
};

export function MiniLogos ({src, alt}: {src: string, alt: string}){
    return(
        <Image
            src={src}
            alt={alt}
            width={20}
            height={20}
            style={{
                borderRadius: '4px'
            }}
        />
    )
};