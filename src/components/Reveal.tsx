"use client";

import { useRef, useEffect, useState, useSyncExternalStore, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number; // ms
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const getTransform = () => {
    if (reduced || direction === "none") return "none";
    if (!visible) {
      if (direction === "up") return "translateY(28px)";
      if (direction === "left") return "translateX(-28px)";
      if (direction === "right") return "translateX(28px)";
    }
    return "none";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: reduced || visible ? 1 : 0,
        transform: getTransform(),
        transition: reduced
          ? "none"
          : `opacity 480ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 480ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
