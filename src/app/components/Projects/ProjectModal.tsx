"use client";

import { useEffect, useRef } from "react";
import ProjectGallery from "@/app/components/Projects/ProjectGallery";
import { ProjectType } from "@/app/assets/types";

interface ProjectModalProps {
  project: ProjectType;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);
    modalRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 py-10 md:py-16">
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="scrollbar-glass relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl glass-card glass-glow p-6 md:p-8"
      >
        <header className="flex flex-col gap-4 border-b border-white/10 pb-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <span className="section-kicker">{project.date}</span>
            <h3 className="font-display text-2xl md:text-3xl">{project.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/40"
          >
            Close
          </button>
        </header>

        <div className="mt-6 flex flex-col gap-6">
          <ProjectGallery
            images={project.gallery}
            mobileImages={project.mobileGallery}
            title={project.name}
          />

          <div className="space-y-4 text-sm leading-relaxed text-slate-200 md:text-base">
            <p className="whitespace-pre-line">{project.fullDescription}</p>
            <div className="flex flex-wrap items-center gap-3">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-500/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-blue-400"
                >
                  Visit project
                </a>
              ) : (
                <span className="rounded-full border border-dashed border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
                  URL Not available
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
