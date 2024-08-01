import ContactForm from "./components/contactForm";
import { projects } from "./assets/seed";
import ProjectsContainer from "./components/projectsContainer";
import { Stack } from "./components/Intro/stack";
import { AboutMe } from "./components/aboutMe";
import { Intro } from "./components/Intro/intro";
import { IntroBackground } from "./assets/images";
// import { url } from "inspector";
import { introBg } from "./components/Intro/logosSrc";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center lg:space-y-16 sm:space-y-10 md:p-10 sm:p-4 sm:pb-8 ">
      {/* <div 
      className="flex flex-col w-full items-center" 
      // bg-custom-background bg-cover bg-center bg-opacity-70
      > */}
        <Intro/>
        <Stack/>
      {/* </div> */}
        <ProjectsContainer projects={projects} />
        <AboutMe/>
        <ContactForm/>
        {/* <Footer/> */}
    </main>
  );
};
