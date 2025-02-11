import ProjectsContainer from "./components/projectsContainer";
import ContactForm from "./components/contactForm";
import { projects } from "./assets/seed";
import { AboutMe } from "./components/aboutMe";
import Intro from "./components/Intro/Intro";
import InfiniteSlider from "./components/InfiniteSlider";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center lg:space-y-16 sm:space-y-10 md:p-10 sm:p-4 sm:pb-8 ">
        <Intro/>
        <InfiniteSlider/>
        <ProjectsContainer projects={projects} />
        <AboutMe/>
        <ContactForm/>
        {/* <Footer/> */}
    </main>
  );
};
