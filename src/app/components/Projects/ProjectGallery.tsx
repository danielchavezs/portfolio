"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Loader from "@/app/components/Loader";

interface ProjectGalleryProps {
  images: string[];
  mobileImages?: string[];
  title: string;
}

type GalleryFilter = "all" | "desktop" | "mobile";

export default function ProjectGallery({ images, mobileImages, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const useLoader = true;
  const [filter, setFilter] = useState<GalleryFilter>("all");

  const desktopItems = images.map((src) => ({ src, type: "desktop" as const }));
  const mobileItems = (mobileImages ?? []).map((src) => ({ src, type: "mobile" as const }));
  const allItems = [...desktopItems, ...mobileItems];

  const activeItems =
    filter === "desktop"
      ? desktopItems
      : filter === "mobile"
        ? mobileItems
        : allItems;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 649px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const goTo = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(activeItems.length - 1, index));
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

  useEffect(() => {
    if (activeIndex >= activeItems.length) {
      setActiveIndex(0);
    }
  }, [activeItems.length, activeIndex]);

  useEffect(() => {
    if (filter === "mobile" && mobileItems.length === 0) {
      setFilter("all");
    }
  }, [filter, mobileItems.length]);

  if (!activeItems.length) {
    return <Loader label="Loading gallery..." />;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between text-xs text-slate-300 md:gap-4">
          <span>Gallery</span>
          <span>
            {activeIndex + 1} / {activeItems.length}
          </span>
        </div>
        {mobileItems.length > 0 && (
          <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-300">
            {(["all", "desktop", "mobile"] as GalleryFilter[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setFilter(option);
                  setActiveIndex(0);
                }}
                className={`rounded-full border px-3 py-2 transition ${
                  filter === option
                    ? "border-white/40 bg-white/10 text-white"
                    : "border-white/10 bg-slate-950/40 hover:border-white/30"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
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
          {activeItems.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className={[
                "relative w-full shrink-0 snap-start",
                isMobile ? "h-[320px]" : "h-full",
              ].join(" ")}
            >
              {!loadedImages[item.src] && useLoader && (
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-slate-900/70">
                  <Loader />
                </div>
              )}
              {!loadedImages[item.src] && !useLoader && (
                <div className="absolute inset-0 animate-pulse rounded-2xl bg-slate-900/70" />
              )}
              <span className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                {item.type}
              </span>
              <Image
                src={item.src}
                alt={`${title} screenshot ${index + 1}`}
                fill
                className={`object-contain transition duration-500 ${loadedImages[item.src] ? "opacity-100" : "opacity-0"}`}
                sizes="(max-width: 649px) 100vw, 900px"
                onLoad={() =>
                  setLoadedImages((prev) => ({ ...prev, [item.src]: true }))
                }
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
              disabled={activeIndex === activeItems.length - 1}
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
          disabled={activeIndex === activeItems.length - 1}
          className="flex-1 rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-white transition hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
