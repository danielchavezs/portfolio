"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MiniLogos, StackLogos } from "@/app/assets/images";
import ContactForm from "@/app/components/contactForm";

export function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const techCards = [
    {
      title: "Backend",
      icon: "🖥️",
      items: ["Python", "FastAPI", "Node.js", "Express.js", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: "⚛️",
      items: ["React", "Next.js", "Vite", "Redux", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: "🗄️",
      items: ["PostgreSQL", "MongoDB", "Qdrant", "Prisma", "Sequelize", "Mongoose"],
    },
    {
      title: "AI & ML",
      icon: "🤖",
      items: [
        "Agents",
        "Automation Workflows",
        "Embeddings",
        "RAG",
        "Generative AI integration",
        "Fine-tuning validation",
      ],
    },
    {
      title: "Tools & Methods",
      icon: "🛠️",
      items: ["Git", "Vercel", "Render", "Jest", "Notion", "Trello", "REST APIs", "Agile (Scrum)"],
    },
  ];

  return (
    <section
      id="about"
      className="flex w-full max-w-6xl flex-col gap-8 lg:grid lg:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="flex flex-col gap-6" data-aos="fade-up">
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <span className="section-kicker">About</span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl">Tech & tools</h2>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            A snapshot of the stack and methodologies I use to ship AI-driven products.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {techCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-white/25"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{card.icon}</span>
                  <p className="text-sm font-semibold text-white">{card.title}</p>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  {card.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="section-kicker">Connect</span>
              <h3 className="font-display mt-3 text-2xl">Let's stay in touch</h3>
              <p className="mt-2 text-sm text-slate-300">
                Prefer LinkedIn, GitHub, or WhatsApp? Choose your channel.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <a
                href="https://www.linkedin.com/in/daniel-chavez-engineer-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30"
              >
                <MiniLogos
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn Logo"
                />
                LinkedIn
              </a>
              <a
                href="https://github.com/danielchavezs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30"
              >
                <MiniLogos src="/github.svg" alt="GitHub Logo" />
                GitHub
              </a>
              <a
                href="https://wa.me/573168242457"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30"
              >
                <MiniLogos src="/whatsapp.svg" alt="Whatsapp Logo" />
                WhatsApp
              </a>
              <a
                href="mailto:danielechs@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30"
              >
                <MiniLogos src="/mail.png" alt="Mail Logo" />
                Email me
              </a>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <p className="text-sm font-semibold text-white">My resume</p>
              <div className="flex flex-wrap gap-4">
                <a
                  download="Daniel_Chavez_CV_ENG"
                  href="/CV/Daniel_Chavez_CV_ENG.pdf"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30"
                >
                  <div className="flex h-8 w-8 items-center">
                    <StackLogos src="/pdf_logo.png" alt="PDF Logo" />
                  </div>
                  English Version
                </a>

                <a
                  download="Daniel_Chavez_CV_SPA"
                  href="/CV/Daniel_Chavez_CV_SPA.pdf"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30"
                >
                  <div className="flex h-8 w-8 items-center">
                    <StackLogos src="/pdf_logo.png" alt="PDF Logo" />
                  </div>
                  Spanish Version
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card glass-glow rounded-3xl p-6 md:p-8" data-aos="fade-up">
        <ContactForm />
      </div>
    </section>
  );
}
