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
                            🌐 Bilingual (ENG - SPA) Full-Stack Developer with a Petroleum Engineering degree, four years of hands-on Oil & Gas experience, and a Project Management Diploma. I pick the right stack for each challenge—whether it’s Python & FastAPI powering APIs or JavaScript/TypeScript frameworks crafting front-end experiences—so every solution stays flexible, maintainable, and fit-for-purpose.
                        </p>
                        <p>
                            I’ve implemented server-side rendering (SSR), client-side rendering (CSR), and streaming data flows across the entire stack. Lately, I’ve been immersed in AI workflows: designing API endpoints for embedding-based search and RAG pipelines with vector databases, weaving generative AI features into apps, and running fine-tuning experiments on language models to tackle domain-specific needs. I love turning prototypes into polished, user-friendly tools that actually solve problems. 
                        </p>
                        <p>
                            🚀 My engineering roots and project-management background keep me grounded: I adapt quickly, communicate clearly with stakeholders, and continuously refine solutions to align technical designs with business objectives. <strong>English Level: C2.</strong> 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};