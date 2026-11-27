"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}

function BlueprintFallback() {
  return (
    <div
      className="w-full h-full bg-[#1e2b34] relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.06) 39px, rgba(255,255,255,0.06) 40px), repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.06) 39px, rgba(255,255,255,0.06) 40px)",
      }}
    >
      <svg
        viewBox="0 0 640 360"
        className="w-4/5 h-4/5 text-white/40"
        fill="none"
        aria-hidden
      >
        {/* Architectural wireframe elevation */}
        <line x1="60" y1="290" x2="580" y2="290" stroke="currentColor" strokeWidth="1.5" />
        <rect x="120" y="130" width="260" height="160" stroke="#e5a124" strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="380" y="170" width="140" height="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <polygon points="105,130 250,70 395,130" stroke="#e5a124" strokeWidth="1.5" />
        <rect x="160" y="170" width="60" height="55" stroke="currentColor" strokeWidth="1.2" />
        <rect x="260" y="170" width="80" height="120" stroke="currentColor" strokeWidth="1.2" />
        <rect x="415" y="200" width="70" height="50" stroke="currentColor" strokeWidth="1.2" />
        {/* Dimension lines */}
        <line x1="120" y1="315" x2="520" y2="315" stroke="#e5a124" strokeWidth="1" opacity="0.7" />
        <line x1="120" y1="308" x2="120" y2="322" stroke="#e5a124" strokeWidth="1" opacity="0.7" />
        <line x1="520" y1="308" x2="520" y2="322" stroke="#e5a124" strokeWidth="1" opacity="0.7" />
      </svg>
    </div>
  );
}

function RealisasiFallback() {
  return (
    <div className="w-full h-full bg-[#e8ecef] relative flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 640 360"
        className="w-4/5 h-4/5"
        fill="none"
        aria-hidden
      >
        <line x1="60" y1="290" x2="580" y2="290" stroke="#455662" strokeWidth="2" />
        <rect x="120" y="130" width="260" height="160" fill="#ffffff" stroke="#1e2b34" strokeWidth="2" />
        <rect x="380" y="170" width="140" height="120" fill="#f6f7f8" stroke="#1e2b34" strokeWidth="2" />
        <polygon points="105,130 250,70 395,130" fill="#455662" stroke="#1e2b34" strokeWidth="2" />
        <rect x="160" y="170" width="60" height="55" fill="#1e2b34" opacity="0.85" />
        <rect x="260" y="170" width="80" height="120" fill="#e5a124" opacity="0.9" />
        <rect x="415" y="200" width="70" height="50" fill="#1e2b34" opacity="0.85" />
      </svg>
    </div>
  );
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Desain 3D",
  afterLabel = "Hasil Realisasi",
  alt = "Perbandingan desain dan realisasi",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [beforeError, setBeforeError] = useState(false);
  const [afterError, setAfterError] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    updatePosition(e.clientX);
  };
  const onMouseUp = () => setDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging) updatePosition(e.clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  useEffect(() => {
    const up = () => setDragging(false);
    window.addEventListener("mouseup", up);
    return () => window.removeEventListener("mouseup", up);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded border border-[#dde3e8] select-none cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-[#e5a124]"
      style={{ aspectRatio: "16/9" }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseUp}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="slider"
      aria-label={alt}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      {/* After (base) */}
      <div className="absolute inset-0">
        {afterError ? (
          <RealisasiFallback />
        ) : (
          <Image
            src={afterSrc}
            alt={afterLabel}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
            draggable={false}
            onError={() => setAfterError(true)}
          />
        )}
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: dragging ? "none" : "clip-path 80ms ease",
        }}
      >
        {beforeError ? (
          <BlueprintFallback />
        ) : (
          <Image
            src={beforeSrc}
            alt={beforeLabel}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
            draggable={false}
            onError={() => setBeforeError(true)}
          />
        )}
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-[#e5a124] shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-[#dde3e8] shadow-lg flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M5 8L2 5M2 5L5 2M2 5h12M11 8l3 3m-3 3 3-3"
              stroke="#1e2b34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#1e2b34]/85 text-white text-xs font-medium backdrop-blur-sm">
        {beforeLabel}
      </div>
      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#1e2b34]/85 text-white text-xs font-medium backdrop-blur-sm">
        {afterLabel}
      </div>
    </div>
  );
}
