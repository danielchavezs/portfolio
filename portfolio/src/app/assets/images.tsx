import Image from "next/image";
import { ProjectImageProps } from "./types";
import { introBg } from "../components/Intro/logosSrc";

export function ProjectImage({ src, alt, href }: ProjectImageProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        className="hover:cursor-pointer"
        src={src}
        alt={alt}
        // layout="fill"
        width={850}
        height={300}
        style={{
          minWidth: "200px",
          // maxWidth: '550px',
          width: "100%",
          maxHeight: "500px",
          height: "auto",
          // minHeight: '270px',
          borderRadius: "8px",
        }}
      />
    </a>
  );
}

export function MiniLogos({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={22}
      height={22}
      style={{
        borderRadius: "4px",
      }}
    />
  );
}

export function StackLogos({
  src,
  alt,
}: //   title,
{
  src: string;
  alt: string;
  //   title: string;
}) {
  return (
    <img
      // className="max-wfull h-auto"
      //   title={title}
      src={src}
      alt={alt}
      width={120}
      height={120}
      style={{
        borderRadius: "10px",
        width: "100%",
        height: "auto",
      }}
    />
  );
}

export function IntroBackground() {
  return (
    <Image
      // className="max-wfull h-auto"
      src={introBg}
      alt="Deep space"
      width={673}
      height={373}
      style={{
        // borderRadius: '12px',
        width: "100%",
        height: "auto",
      }}
    />
  );
};


export function ProfilePicture () {

  // Needs to be wrapped in a container to define its final size. Thinked to be 1:1.
  return (
    <div className="flex items-center rounded-full overflow-hidden w-full h-full ">
      <Image
        src="/CV/LinkedIn_Profile.jpeg"
        alt="Daniel Chávez"
        width={300}
        height={300}
        // objectFit="cover" // Scale the image to cover the container
      />
    </div>
  );
};