"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MiniLogos, StackLogos } from "../assets/images";
import ContactForm from "./contactForm";

export function AboutMe() {
  useEffect(() => {
    AOS.init({
      // Configuración opcional
      duration: 1500,
    });
  }, []);

  return (
    <div className="flex lg:flex-row sm:flex-col w-full justify-between gap-8">
      <div className="grid grid-flow-row" data-aos="fade-up">
        <div className="flex flex-col p-4 space-y-2">
          <span className="font-semibold text-lg mb-3">
            Tech & Tools
          </span>
          <ul>
            🖥️ <strong>Backend:</strong> Python, FastAPI, Node.js, Express.js, JavaScript, TypeScript.
          </ul>
          <ul>
            ⚛️ <strong>Frontend:</strong> React, Next.js, Vite, Redux, HTML5, CSS3, Tailwind CSS, Responsive Design.
          </ul>
          <ul>
            🗄️ <strong>Databases:</strong> PostgreSQL, MongoDB, Qdrant, Prisma, Sequelize, Mongoose.
          </ul>
          <ul>
            🤖 <strong>AI & ML:</strong> Agents, Automations Workflows,Embeddings, RAG, Generative AI integration, Fine-Tuning Validation.
          </ul>
          <ul>
            🛠️ <strong>Tools & Methodologies:</strong> Git, Vercel, Render, Jest, Notion, Trello, RESTful APIs, Agile (Scrum).
          </ul>
        </div>

          <div className="flex lg:flex-col md:flex-row sm:flex-col w-full">
            <div className="flex flex-col p-4 lg:space-y-3 sm:space-y-2">
              <p className="flex font-semibold lg:mb-2">
                Whant to get to know me better?
              </p>

              <a
                href="https://www.linkedin.com/in/daniel-chavez-engineer-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row space-x-2 max-w-fit hover:p-1 rounded-md transition-all transform hover:bg-slate-800 hover:shadow-slate-800 shadow-xl"
              >
                <MiniLogos
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn Logo"
                />
                <strong>LinkedIn</strong>
              </a>
              <a
                href="https://github.com/danielchavezs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row space-x-2 max-w-fit hover:p-1 rounded-md transition-all transform hover:bg-slate-800 hover:shadow-slate-800 shadow-xl"
              >
                <MiniLogos src="/github.svg" alt="GitHub Logo" />
                <strong>GitHub</strong>
              </a>
              <a
                href="https://wa.me/573168242457"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row space-x-2 max-w-fit hover:p-1 rounded-md transition-all transform hover:bg-slate-800 hover:shadow-slate-800 shadow-xl"
              >
                <MiniLogos src="/whatsapp.svg" alt="Whatsapp Logo" />
                <strong>WhatsApp</strong>
              </a>
              <a
                href="mailto:danielechs@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row space-x-2 max-w-fit hover:p-1 rounded-md transition-all transform hover:bg-slate-800 hover:shadow-slate-800 shadow-xl"
              >
                <MiniLogos src="/mail.png" alt="Mail Logo" />
                <strong>danielechs@hotmail.com</strong>
              </a>
            </div>

            <div className="flex flex-col w-max p-4 lg:mx-0 md:mx-auto sm:mx-0">
              <p className="flex font-semibold mb-6">My resume</p>

              <div className="flex flex-col space-y-6">
                <a
                  download="Daniel_Chavez_CV_ENG"
                  href="/CV/Daniel_Chavez_CV_ENG.pdf"
                  className="flex flex-row items-center rounded-md max-w-fit hover:p-1 hover:pl-0 transition-all transform hover:scale-110 hover:shadow-xl hover:shadow-slate-900 hover:bg-slate-800"
                >
                  <div className="flex max-w-10">
                    <StackLogos
                      src="/pdf_logo.png"
                      alt="PDF Logo"
                      // title="English Version CV"
                    />
                  </div>
                  <span className="ml-2 text-sm">English Version</span>
                </a>

                <a
                  download="Daniel_Chavez_CV_SPA"
                  href="/CV/Daniel_Chavez_CV_SPA.pdf"
                  className="flex flex-row items-center max-w-fit hover:p-1 hover:pl-0 rounded-md transition-all transform hover:scale-110 hover:shadow-xl hover:shadow-slate-900 hover:bg-slate-800"
                >
                  <div className="flex max-w-10">
                    <StackLogos
                      src="/pdf_logo.png"
                      alt="PDF Logo"
                      // title="Spanish Version CV"
                    />
                  </div>
                  <span className="ml-2 text-sm">Spanish Version</span>
                </a>
              </div>
            </div>
          </div>
      </div>

      <ContactForm/>
    </div>
  );
}
