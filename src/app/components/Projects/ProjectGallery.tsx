"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 649px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const goTo = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(images.length - 1, index));
    setActiveIndex(clampedIndex);

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const offset = isMobile
      ? container.clientHeight * clampedIndex
      : container.clientWidth * clampedIndex;

    container.scrollTo({
      top: isMobile ? offset : 0,
      left: isMobile ? 0 : offset,
      behavior: "smooth",
    });
  };

  const handlePrevious = () => goTo(activeIndex - 1);
  const handleNext = () => goTo(activeIndex + 1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const offset = isMobile
      ? container.clientHeight * activeIndex
      : container.clientWidth * activeIndex;

    container.scrollTo({
      top: isMobile ? offset : 0,
      left: isMobile ? 0 : offset,
    });
  }, [isMobile, activeIndex]);

  if (!images.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span>Gallery</span>
        <span>
          {activeIndex + 1} / {images.length}
        </span>
      </div>
      <div className="relative">
        <div
          ref={containerRef}
          className={[
            "scrollbar-none flex w-full snap-mandatory rounded-2xl border border-white/10 bg-slate-950/40",
            isMobile
              ? "h-[320px] flex-col overflow-y-auto overflow-x-hidden snap-y"
              : "h-[420px] flex-row overflow-x-auto overflow-y-hidden snap-x",
          ].join(" ")}
        >
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={[
                "relative w-full shrink-0 snap-start",
                isMobile ? "h-[320px]" : "h-full",
              ].join(" ")}
            >
              <Image
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 649px) 100vw, 900px"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="pointer-events-auto absolute left-3 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-sm text-white transition hover:border-white/30 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous image"
            >
              &lt;
            </button>
          </div>
          <div className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === images.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-sm text-white transition hover:border-white/30 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next image"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={activeIndex === 0}
          className="flex-1 rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-white transition hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={activeIndex === images.length - 1}
          className="flex-1 rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-white transition hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
