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
                            AI Engineer | Software Developer specialized in building AI-driven solutions on top of a strong full-stack foundation.
                        </p>
                        <p>
                            During this year, I’ve focused exclusively on LLMs, RAG systems, embeddings, vector databases, AI Agents, AI automations and evaluations — leveraging Python and TypeScript across both backend and AI environments, with SQL and NoSQL databases and React/Next.js for frontend. ⚡️
                        </p>
                        <p>
                            I’ve been a key developer for DroidForce, Mankind Technology's AI support platform, achieving for clients:
                        </p>
                        <ul className="list-disc list-inside pl-2">
                            <li>Increased response accuracy by 95% 📈</li>
                            <li>Reduced resolution time by 66%</li>
                            <li>Delivered always-on, scalable automation for enterprise environments</li>
                        </ul>
                        <p>
                            My role goes beyond code — I contribute to solution design, collaborate directly with client teams during planning and follow-ups, and participate in candidate conversations for internships. This mix of technical execution and project involvement has accelerated my professional growth and given me a voice within the organization and its future.
                        </p>
                        <p>
                            🌐 Bilingual (English & Spanish). Background in Full-Stack Development, Petroleum Engineering and additional formation -and experience- in Project Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};