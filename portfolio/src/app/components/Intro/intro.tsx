'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export function Intro () {
    useEffect(() => {
      AOS.init({
        // Configuración opcional
        duration: 3500,
      });
    }, []);
    
    return(
        <div className='flex flex-col border-0 rounded-md' data-aos="zoom-out">
            <h1 className="flex justify-center md:justify-start lg:text-8xl md:text-8xl sm:text-6xl font-extrabold mb-1 text-slate-400"> DANIEL CHAVEZ </h1>
            <p className='flex justify-center'>Bilingual Engineer & Full Stack Developer based on JavaScript technologies.</p>
        </div>
    );
};