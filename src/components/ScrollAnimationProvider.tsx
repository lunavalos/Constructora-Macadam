"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>(".reveal, [data-reveal]").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const rect = entry.boundingClientRect;
        const isScrollingDown = rect.top < 0;

        if (entry.isIntersecting) {
          target.classList.add("is-revealed");
          target.classList.remove("is-exited-top", "is-exited-bottom");
        } else {
          // Element has exited the viewport
          // Only apply exit animation if the element was previously revealed
          if (target.classList.contains("is-revealed")) {
            if (isScrollingDown) {
              target.classList.add("is-exited-top");
            } else {
              target.classList.add("is-exited-bottom");
            }
            target.classList.remove("is-revealed");
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    });

    // Helper to query and observe elements
    const observeElements = () => {
      const elements = document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right, [data-reveal]"
      );
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observe
    observeElements();

    // Re-observe if dynamic content renders or route changes
    const timer = setTimeout(observeElements, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
