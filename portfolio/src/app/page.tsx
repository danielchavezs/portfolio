import ContactForm from "./components/contactForm";
import ProjectComponent from "./components/projectComponent";
import { projects } from "./assets/seed";
import { ProjectType } from "./assets/types";
import ProjectsContainer from "./components/projectsContainer";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center md:p-10 sm:p-4">
        <h1 className="flex text-3xl font-extrabold mb-2"> DANIEL CHAVEZ </h1>
        <p>Bilingual Engineer & Full Stack Developer based on <code>JavaScript</code> technologies.</p>

        <div className= "flex flex-col justify-items-start w-full border-2 border-slate-500 mt-2 rounded-md">
          <h2 className="flex font-bold m-6 ml-0">My Stack:</h2>
            <div 
            // className="grid-cols-3 gap-4"
            >
              <ul> JavaScript </ul>
              <ul> TypeScript </ul>
              <ul> Express </ul>
              <ul> Jest </ul>
              <ul> PostgreSQL </ul>
              <ul> Sequelize </ul>
              <ul> HTML5 </ul>
              <ul> React </ul>
              <ul> Next.js </ul>
              <ul> Redux </ul>
              <ul> CSS </ul>
              <ul> Tailwind CSS </ul>               
            </div>
        </div>
        <ProjectsContainer projects={projects} />
        <ContactForm/>
    </main>
  );
}
