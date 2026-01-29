// 'use client'
import { MiniLogos } from "@/app/assets/images";

export function Footer () {
    return (
        <div className="flex flex-col mt-10 w-[100%] h-36 justify-center space-y-10 items-center text-white bg-slate-700">
            <span>F O O T E R</span>
            <div className="">
                <a href="https://www.linkedin.com/in/daniel-chavez-engineer-developer/" target="_blank" rel="noopener noreferrer" className="flex flex-row space-x-2">
                    <MiniLogos src='/linkedin.svg' alt='LinkedIn Logo'/>
                    <strong>Daniel Chávez</strong>
                </a>
            </div>
        </div>
    )
};
