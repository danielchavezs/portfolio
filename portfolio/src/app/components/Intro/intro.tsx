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
        <div 
          className='flex flex-col lg:items-center sm:items-start border-0 rounded-md lg:space-y-0 sm:space-y-2' 
          data-aos="zoom-out"
        >
            <h1
              // className="flex justify-center tracking-[.045em] sm:justify-start lg:text-8xl md:text-7xl sm:text-6xl font-extrabold mb-0 hover:text-slate-300 transition-colors duration-300" 
              className="flex lg:text-8xl md:text-7xl sm:text-6xl font-extrabold"
                style={{ 
                color: 'transparent', 
                backgroundImage: 'linear-gradient(100deg, #fcfcfc, #7e92cf)',
                backgroundClip: 'text', 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                }}
            > 
              DANIEL CHAVEZ
            </h1>
            <p className='flex md:text-lg'
              style={{ 
                color: 'transparent', 
                backgroundImage: 'linear-gradient(50deg, #a86ce0, #f09e33)', 
                backgroundClip: 'text', 
                letterSpacing: '2px',
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.185)',
                }}  
              >Bilingual Engineer & Full Stack Developer based on JavaScript technologies.</p>
        </div>
    );
};