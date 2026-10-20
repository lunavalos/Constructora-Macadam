"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "complete" | "exiting" | "hidden">("loading");
  const [statusText, setStatusText] = useState("Diseño arquitectónico...");

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setPhase("hidden");
      return;
    }

    // Lock body scroll while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 1100; // 1.1s smooth duration

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      // Easing out cubic for realistic deceleration at the end
      const easedProgress = Math.round(
        (1 - Math.pow(1 - rawProgress, 3)) * 100
      );

      setProgress(easedProgress);

      if (easedProgress < 40) {
        setStatusText("Diseño & Arquitectura...");
      } else if (easedProgress < 80) {
        setStatusText("Construcción e Inmobiliaria...");
      } else {
        setStatusText("Espacios con Estilo");
      }

      if (rawProgress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        // Complete state reached
        setPhase("complete");
        setTimeout(() => {
          setPhase("exiting");
          window.dispatchEvent(new CustomEvent("macadam:preloader-done"));
          setTimeout(() => {
            setPhase("hidden");
            document.body.style.overflow = originalOverflow;
          }, 650);
        }, 120);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (phase === "hidden") return null;

  const isExiting = phase === "exiting";
  const isComplete = phase === "complete" || isExiting;

  return (
    <aside
      aria-label="Cargando Constructora Macadam"
      aria-live="polite"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-950 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Background architectural glow & subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(18,72,255,0.25)_0%,transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="grain pointer-events-none absolute inset-0 opacity-25"
      />

      {/* Decorative architectural grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-12 bottom-12 border border-white/5 sm:inset-x-16 sm:top-16 sm:bottom-16"
      >
        <span className="absolute -top-1 -left-1 h-2 w-2 border-t-2 border-l-2 border-brand-400" />
        <span className="absolute -top-1 -right-1 h-2 w-2 border-t-2 border-r-2 border-brand-400" />
        <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-brand-400" />
        <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-brand-400" />
      </div>

      {/* Centered Brand Content */}
      <div
        className={`relative z-10 flex flex-col items-center px-6 text-center transition-all duration-500 ease-out ${
          isComplete ? "scale-95 opacity-0 -translate-y-4" : "scale-100 opacity-100 translate-y-0"
        }`}
      >
        {/* Brand Year Tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-brand-200 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
          Desde 1992 · Saltillo, Coahuila
        </div>

        {/* Official White Logo */}
        <div className="relative mb-8 h-12 w-64 sm:h-14 sm:w-80">
          <Image
            src="/img/logo-b.png"
            alt="Constructora Macadam"
            fill
            priority
            sizes="320px"
            className="object-contain"
          />
        </div>

        {/* Progress Bar Container */}
        <div className="relative h-1 w-56 overflow-hidden rounded-full bg-white/10 sm:w-72">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-white shadow-[0_0_12px_rgba(41,90,255,0.7)] transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter and Status Text */}
        <div className="mt-4 flex w-56 items-center justify-between text-xs text-ink-300 sm:w-72">
          <span className="font-mono font-medium tracking-wider text-brand-300">
            {progress.toString().padStart(3, "0")}%
          </span>
          <span className="text-[0.6875rem] uppercase tracking-widest text-ink-400">
            {statusText}
          </span>
        </div>
      </div>
    </aside>
  );
}
