import { ProfilePicture } from "@/app/assets/images";
import { Tittle } from "./Tittle";


export default function Intro () {
    return (
        <section className="intro">
            <div className="flex w-full sm:flex-col lg:flex-row items-center lg:px-14 sm:px-0 lg:gap-14 sm:gap-8 border-0">
                <div className="flex items-center sm:max-w-44 md:max-w-72 border-0 ">
                    <ProfilePicture/>
                </div>
                <div className="flex flex-col gap-6 lg:w-4/5 sm:w-full">
                    <Tittle/>
                    <div className="flex flex-col gap-4 md:text-base sm:text-sm">
                        <p>
                            Bilingual (ENG - SPA) Full Stack Developer with a background in Petroleum Engineering. Proficient in backend and frontend development, including responsive design and techniques such as SSR with CSR and streaming. Experienced in JavaScript, TypeScript, Node.js, HTML5, CSS, React, Next, Redux, PostgreSQL, and MongoDB, with strong agile fundamentals.
                        </p>
                        <p>
                            Strong abilities in problem-solving, adaptability, communication, proactivity, teamwork, and continuous learning. With 4 years in Oil & Gas, I have gained project management and quality process experience; currently pursuing a project management diploma at Politécnico de Colombia and an intensive JS course at EPAM Campus. <strong>English Level: C2.</strong> 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};