'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AboutMe (){
    useEffect(() => {
        AOS.init({
          // Configuración opcional
          duration: 1500,
        });
      }, [])
    
    return (
        <div className="border-2 my-24 w-full text-center h-20" data-aos="fade-up">
            <h2 className="my-6">ABOUT ME COMPONENT</h2>
        </div>
    )
};