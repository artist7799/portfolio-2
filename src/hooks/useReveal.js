import { useEffect, useRef } from "react";

/**
 * Attach scroll-reveal behaviour to elements inside a container ref.
 * Pass a CSS selector (default ".reveal, .reveal-left, .reveal-right")
 * to control which children get observed.
 */
export function useReveal(selector = ".reveal, .reveal-left, .reveal-right", threshold = 0.12) {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current
      ? containerRef.current.querySelectorAll(selector)
      : document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold]);

  return containerRef;
}
