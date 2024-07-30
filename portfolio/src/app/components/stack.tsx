'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Stack () {

  useEffect(() => {
    AOS.init({
      // Configuración opcional
      duration: 1500,
    });
  }, []);

    return (
        <div className= "flex flex-col justify-items-start w-full border-2 border-slate-500 mt-12 mb-10 rounded-md"  data-aos="fade">
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
    )
}