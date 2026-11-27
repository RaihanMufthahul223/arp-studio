"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectImageBoxProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}

export default function ProjectImageBox({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "object-cover",
}: ProjectImageBoxProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 bg-[#1e2b34]">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
          <rect
            x="4"
            y="12"
            width="32"
            height="24"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4 18l9-6 9 6 9-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="14" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

