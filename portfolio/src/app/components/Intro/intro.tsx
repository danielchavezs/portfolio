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
        <div className='flex flex-col border-0 rounded-md lg:space-y-0 sm:space-y-2' data-aos="zoom-out">
            <h1 className="flex justify-center sm:justify-start lg:text-8xl md:text-7xl sm:text-6xl font-extrabold mb-0 text-slate-400"> DANIEL CHAVEZ </h1>
            <p className='flex justify-center lg:justify-center sm:justify-start'>Bilingual Engineer & Full Stack Developer based on JavaScript technologies.</p>
        </div>
    );
};