'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MiniLogos, StackLogos } from "../assets/images";

export function AboutMe (){
    useEffect(() => {
        AOS.init({
          // Configuración opcional
          duration: 1500,
        });
      }, [])
    
    return (
        <div className="grid grid-flow-row w-full" data-aos="fade-up">
            <div className="flex flex-col p-4 space-y-2">
              <span className="font-semibold text-lg mb-3">A few things about me:</span>
              <ul> 📍 Colombia, South America</ul>
              <ul> 👨🏼‍🎓 Full Stack Developer & Petroleum Engineer</ul>
              <ul> 💻 Database, Backend and Frontend</ul>
              <ul className="max-w-fit">  4 years of experience in Oil & Gas Industry:</ul>
              <ul> Personel qualification, processes quality and project management experience.</ul>
            </div>

            <div className="grid mt-4 lg:grid-flow-col sm:grid-flow-row">
              <div className="flex flex-col p-4 lg:space-y-3 sm:space-y-2">
                <p className="flex font-semibold lg:mb-2">Whant to get to know me better?</p>
              
                  <a href="https://www.linkedin.com/in/daniel-chavez-engineer-developer/" target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-2 max-w-fit hover:p-1 rounded-md transition-all transform hover:bg-slate-800 hover:shadow-slate-800 shadow-xl">
                      <MiniLogos src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg' alt='LinkedIn Logo'/>
                      <strong>LinkedIn</strong>
                  </a>
                  <a href="https://github.com/danielchavezs" target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-2 max-w-fit hover:p-1 rounded-md transition-all transform hover:bg-slate-800 hover:shadow-slate-800 shadow-xl">
                      <MiniLogos src='/github.svg' alt='GitHub Logo'/>
                      <strong>GitHub</strong>
                  </a>
                  <a href="https://wa.me/573168242457" target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-2 max-w-fit hover:p-1 rounded-md transition-all transform hover:bg-slate-800 hover:shadow-slate-800 shadow-xl">
                      <MiniLogos src='/whatsapp.svg' alt='Whatsapp Logo'/>
                      <strong>WhatsApp</strong>
                  </a>
                  <a href="mailto:danielechs@hotmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-2 max-w-fit hover:p-1 rounded-md transition-all transform hover:bg-slate-800 hover:shadow-slate-800 shadow-xl">
                      <MiniLogos src='/mail.png' alt='Mail Logo'/>
                      <strong>danielechs@hotmail.com</strong>  
                  </a>
              </div>

              <div className="flex flex-col w-max p-4">
                <p className="flex font-semibold mb-6">My resume</p>

                <div className="flex flex-col space-y-6">
                    <a download="Daniel_Chavez_CV_ENG" href="/CV/Daniel_Chavez_CV_ENG.pdf" className="flex flex-row items-center rounded-md max-w-fit hover:p-1 hover:pl-0 transition-all transform hover:bg-slate-800">
                      <div className="flex max-w-10">
                        <StackLogos src="/pdf_logo.png" alt="PDF Logo"/>
                      </div>
                      <span className="ml-2 text-sm">English Version</span>
                    </a>

                    <a download="Daniel_Chavez_CV_SPA" href="/CV/Daniel_Chavez_CV_SPA.pdf" className="flex flex-row items-center max-w-fit hover:p-1 hover:pl-0 rounded-md transition-all transform hover:bg-slate-800">
                      <div className="flex max-w-10">
                        <StackLogos src="/pdf_logo.png" alt="PDF Logo"/>
                      </div>
                      <span className="ml-2 text-sm">Spanish Version</span>
                    </a>
                </div>
              </div>

            </div>
        </div>
    )
};