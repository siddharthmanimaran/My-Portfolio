import { useEffect, useRef } from "react";

export default function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip on touch/stylus devices — no cursor needed
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId: number;

    // Reveal once first mousemove fires
    const revealOnFirstMove = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      window.removeEventListener("mousemove", revealOnFirstMove);
    };
    window.addEventListener("mousemove", revealOnFirstMove);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const INTERACTIVE = "a, button, [role=button], input, textarea, select, label, [tabindex]";

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) {
        dot.classList.add("cursor-hover");
        ring.classList.add("cursor-hover");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) {
        dot.classList.remove("cursor-hover");
        ring.classList.remove("cursor-hover");
      }
    };

    const onMouseDown = () => ring.classList.add("cursor-click");
    const onMouseUp = () => ring.classList.remove("cursor-click");

    const tick = () => {
      // Dot snaps exactly to cursor
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      // Ring lerps — creates the trailing lag
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousemove", revealOnFirstMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
