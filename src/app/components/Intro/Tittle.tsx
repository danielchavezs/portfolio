'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export function Tittle () {
    useEffect(() => {
      AOS.init({
        // Configuración opcional
        duration: 3500,
      });
    }, []);
    
    return(
        <div 
          className='flex flex-col gap-3 text-center lg:items-start lg:text-left' 
          data-aos="fade-left"
        >
            <h1
              className="font-display text-4xl font-extrabold tracking-tight text-transparent md:text-6xl lg:text-7xl"
              style={{ 
                backgroundImage: 'linear-gradient(110deg, rgba(255,255,255,0.96), rgba(120,168,255,0.85), rgba(155,112,255,0.8))',
                backgroundClip: 'text',
              }}
            > 
              DANIEL CHAVEZ
            </h1>
            <h3
              className='text-sm font-semibold uppercase tracking-[0.2em] text-transparent md:text-base'
              style={{ 
                backgroundImage: 'linear-gradient(90deg, rgba(120,168,255,0.95), rgba(240,158,51,0.85))', 
                backgroundClip: 'text',
              }}  
              >AI Engineer | Software Developer</h3>
        </div>
    );
};
