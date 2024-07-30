import ContactForm from "./components/contactForm";
import ProjectComponent from "./components/projectComponent";
import { projects } from "./assets/seed";
import { ProjectType } from "./assets/types";
import ProjectsContainer from "./components/projectsContainer";
import { Stack } from "./components/stack";
import { Footer } from "./components/footer";
import { AboutMe } from "./components/aboutMe";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center md:p-10 sm:p-4">
        <h1 className="flex text-3xl font-extrabold mb-1"> DANIEL CHAVEZ </h1>
        <p>Bilingual Engineer & Full Stack Developer based on <code>JavaScript</code> technologies.</p>
        <Stack/>
        <ProjectsContainer projects={projects} />
        <AboutMe/>
        <ContactForm/>
        {/* <Footer/> */}
    </main>
  );
}
