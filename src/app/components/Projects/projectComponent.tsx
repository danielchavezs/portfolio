"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "@/app/components/Projects/ProjectModal";
import { ProjectType } from "@/app/assets/types";
import Loader from "@/app/components/Loader";

export default function ProjectComponent(project: ProjectType) {
  const [isOpen, setIsOpen] = useState(false);
  const [coverLoaded, setCoverLoaded] = useState(false);
  const useLoader = true;
  const isFeatured = project.isFeatured;

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleCoverLoad = () => {
    setCoverLoaded(true);
  };


  return (
    <>
      <article
        className={`group relative flex flex-col gap-6 rounded-3xl glass-card p-6 transition hover:border-white/30 hover:shadow-[0_0_50px_rgba(80,140,255,0.16)] md:p-8 ${isFeatured ? "ring-1 ring-indigo-400/40 shadow-[0_0_60px_rgba(155,112,255,0.18)]" : ""}`}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 md:w-[45%]">
            {!coverLoaded && useLoader && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70">
                <Loader />
              </div>
            )}
            {!coverLoaded && !useLoader && (
              <div className="absolute inset-0 animate-pulse bg-slate-900/70" />
            )}
            <Image
              src={project.cover}
              alt={`${project.name} cover`}
              width={1200}
              height={800}
              className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] ${coverLoaded ? "opacity-100" : "opacity-0"}`}
              sizes="(max-width: 900px) 100vw, 45vw"
              onLoad={handleCoverLoad}
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="section-kicker">{project.date}</span>
              {isFeatured && (
                <span className="rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-100">
                  Featured
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl md:text-3xl">{project.name}</h3>
            <p className="text-sm text-slate-300 md:text-base">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleOpen}
                className="rounded-full bg-gradient-to-r from-blue-500/90 to-indigo-500/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02]"
              >
                View case study
              </button>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  Live URL
                </a>
              ) : (
                <span className="rounded-full border border-dashed border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  URL Not available
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
      <ProjectModal project={project} isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
