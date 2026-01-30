"use client";

interface LoaderProps {
  label?: string;
  size?: number;
}

export default function Loader({ label = "", size = 28 }: LoaderProps) {
  return (
    <div className="flex items-center justify-center gap-3 text-sm font-semibold text-slate-200">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="hsl(266, 85%, 72%)"
        aria-hidden="true"
        className="animate-spin"
      >
        <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z" />
      </svg>
      {label ? <span>{label}</span> : null}
    </div>
  );
}
