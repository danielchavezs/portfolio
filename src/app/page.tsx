import ProjectsContainer from "@/app/components/Projects/projectsContainer";
import { projects } from "@/app/assets/seed";
import { AboutMe } from "@/app/components/aboutMe";
import Intro from "@/app/components/Intro/Intro";
import InfiniteSlider from "@/app/components/InfiniteSlider";


export default function Home() {

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center gap-16 px-4 pb-16 pt-10 md:px-10">
        <Intro/>
        <InfiniteSlider/>
        <ProjectsContainer projects={projects} />
        <AboutMe/>
    </main>
  );
};
