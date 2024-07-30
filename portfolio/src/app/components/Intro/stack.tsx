'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { StackLogos } from '@/app/assets/images';
import { logosSrc } from './logosSrc';

export function Stack () {

  useEffect(() => {
    AOS.init({
      // Configuración opcional
      duration: 1500,
    });
  }, []);

    return (
        <div className= "flex flex-col justify-items-start w-full mt-12 mb-28 rounded-md"  data-aos="fade">
        <h2 className="flex font-bold m-6 ml-0">My Stack:</h2>
          <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-20 justify-items-center'>

          {logosSrc.map((tech) => {
            return (
                <StackLogos
                  src={tech.src}
                  alt={`${tech.tech} Logo.`}
                />
            );
          })}

          </div>
          {/* <div>
            <StackLogos src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' alt='Javascript Logo'/>
          </div> */}
      </div>
    )
}