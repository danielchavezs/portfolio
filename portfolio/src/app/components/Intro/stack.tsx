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
      duration: 1000,
    });
  }, []);

    return (
        <div className= "flex flex-col justify-items-start w-full mt-12 mb-28 rounded-md"  data-aos="fade">
        <h2 className="flex font-bold m-6 ml-0">My Stack:</h2>
        <div className='grid w-full lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 lg:gap-20 md:gap-12 sm:gap-10 lg:place-content-evenly sm:px-16 md:p-0'>
        {logosSrc.map((tech, index) => {
          return (
            <div key={index} className="flex justify-center items-center lg:max-w-32 md:max-w-32 sm:max-w-48">
              <StackLogos
                src={tech.src}
                alt={`${tech.tech} Logo.`}
              />
            </div>
          );
        })}
        </div>
          {/* <div>
            <StackLogos src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' alt='Javascript Logo'/>
          </div> */}
      </div>
    )
}