import Image from "next/image";
import { ProjectImageProps } from "./types";
import Link from "next/link";

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
                    maxWidth: '850px',
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px'
                }}
            />
        </a>
    )
}